import { ITEMS, iconSVG } from './items.js'
import { clamp, damp, lerp } from './utils.js'

const $ = (id) => document.getElementById(id)

const WEATHER = {
  clear: { label: 'CLEAR SKIES', icon: '☀' },
  haze: { label: 'LIGHT HAZE', icon: '◌' },
  overcast: { label: 'OVERCAST', icon: '☁' },
  rain: { label: 'RAIN', icon: '☂' },
  storm: { label: 'STORM', icon: '⚡' }
}

const PANEL_TITLES = {
  inventory: { kicker: 'CARRY', title: 'Field Pack' },
  loot: { kicker: 'SEARCHED', title: 'Supplies' },
  pause: { kicker: 'STANDBY', title: 'Paused' },
  howto: { kicker: 'BRIEFING', title: 'How To Play' },
  settings: { kicker: 'CONFIGURATION', title: 'Settings' }
}

export class UI {
  constructor(game) {
    this.game = game
    this.screen = 'menu'
    this.panel = null
    this.panelContext = null
    this.selected = null
    this.loot = null
    this.eHeld = false
    this.searchTarget = null
    this.searchProgress = 0
    this.subtitleTimer = 0
    this.hintTimer = 0
    this.toastCount = 0
    this.clockAccum = 0
    this.lastHud = 0
    this.barState = {}
    this.questDisplay = null
    this.deathEl = null
    this.lastWeapon = null

    this.el = {
      menu: $('menu'), hud: $('hud'), panel: $('panel'), frame: $('panel-frame'),
      play: $('play-btn'), howto: $('howto-btn'), settings: $('settings-btn'), status: $('menu-status'),
      health: $('health-fill'), healthNum: $('health-num'), stamina: $('stamina-fill'),
      hunger: $('hunger-fill'), hungerNum: $('hunger-num'),
      thirst: $('thirst-fill'), thirstNum: $('thirst-num'),
      infection: $('infection-fill'), infectionNum: $('infection-num'),
      quickbar: $('quickbar'), weaponName: $('weapon-name'), weaponType: $('weapon-type'),
      weaponCond: $('weapon-cond'), condFill: $('cond-fill'), ammo: $('ammo'), ammoReserve: $('ammo-reserve'),
      ammoWrap: $('ammo-wrap'), weaponIcon: $('weapon-icon'),
      interact: $('interact'), interactAction: $('interact-action'), interactTarget: $('interact-target'),
      ring: $('ring-progress'), clock: $('clock'), day: $('day'), weatherLabel: $('weather-label'),
      weatherIcon: $('weather-icon'), temp: $('temp'), dialFill: $('dial-fill'), dialHand: $('dial-hand'),
      questTitle: $('quest-title'), questSub: $('quest-sub'), quest: $('quest'),
      compassStrip: $('compass-strip'), compassHead: $('compass-head'), compassDegree: $('compass-degree'),
      compassMarker: $('compass-marker'), noise: $('noise-meter'), noiseBars: $('noise-meter')?.querySelectorAll('.noise-bars i'),
      notifications: $('notifications'), toastLayer: $('toast-layer'),
      crosshair: $('crosshair'), hitmarker: $('hitmarker'), damage: $('damage-vignette'),
      lowHealth: $('low-health'), subtitle: $('subtitle'), stance: $('stance'), hint: $('hint-bar'),
      stanceText: $('stance'), marker: $('compass-marker')
    }
    this.bind()
    this.refreshQuickbar()
    this.applySettings()
    $('menu-status')?.classList.add('ready')
    if (this.el.status) this.el.status.innerHTML = '<i class="status-dot"></i> CITY READY · CLICK PLAY'
  }

  // ------------------------------------------------------------- events
  bind() {
    this.el.play?.addEventListener('click', () => {
      this.game.audio?.play('click')
      this.game.start()
    })
    this.el.howto?.addEventListener('click', () => this.openHowTo())
    this.el.settings?.addEventListener('click', () => this.openSettings())
    this.el.panel?.addEventListener('click', (e) => {
      if (e.target === this.el.panel || e.target.classList.contains('panel-bg')) {
        if (this.panel !== 'loot' || true) this.closePanel()
      }
    })
    this._onKeyDown = (e) => {
      if (e.code === 'KeyE') {
        this.eHeld = true
        const rec = this.game.player.focus
        if (rec && rec.type === 'door' && this.screen === 'game' && !this.game.paused) {
          this.activate(rec)
        }
      }
      if (e.code === 'Tab') {
        e.preventDefault()
        if (this.screen === 'game' && !this.game.player.alive) return
        if (this.panel === 'inventory') this.closePanel()
        else if (!this.panel) this.openInventory()
      }
      if (e.code === 'Escape') {
        e.preventDefault()
        if (this.panel && this.panel !== 'death') this.closePanel()
        else if (this.screen === 'game' && this.game.playing && !this.panel) this.openPause()
      }
      if (this.screen === 'game' && !this.panel) {
        const n = ['Digit5', 'Digit6', 'Digit7', 'Digit8'].indexOf(e.code)
        if (n >= 0) this.useQuickSlot(n)
      }
    }
    this._onKeyUp = (e) => { if (e.code === 'KeyE') this.eHeld = false }
    window.addEventListener('keydown', this._onKeyDown)
    window.addEventListener('keyup', this._onKeyUp)
    this.game.canvas?.addEventListener('click', () => {
      if (this.screen === 'game' && this.game.playing && !this.game.paused && !this.game.player.locked) {
        this.game.player.lock()
      }
    })
    document.addEventListener('pointerlockchange', () => {
      // handled by the game, this is only a safety net for UI state
    })
  }

  showGame() {
    this.screen = 'game'
    this.el.menu?.classList.add('out')
    setTimeout(() => this.el.menu?.classList.add('hidden'), 750)
    this.el.hud?.classList.remove('hidden')
    this.hintTimer = 14
  }

  showMenu() {
    this.screen = 'menu'
    this.el.menu?.classList.remove('hidden')
    requestAnimationFrame(() => this.el.menu?.classList.remove('out'))
    this.el.hud?.classList.add('hidden')
    this.closeDeath()
  }

  // ------------------------------------------------------------- panels
  openPanel(type, body, opts = {}) {
    this.panel = type
    this.panelContext = opts
    const head = PANEL_TITLES[type] || { kicker: '', title: '' }
    const close = type === 'loot' ? 'LEAVE' : (type === 'pause' ? 'RESUME' : 'CLOSE')
    this.el.frame.innerHTML = `
      <div class="panel-head">
        <div>
          <div class="panel-kicker">${head.kicker}</div>
          <div class="panel-title">${head.title}</div>
        </div>
        <button class="panel-close" data-close="1">${close} · ESC</button>
      </div>
      <div id="panel-body">${body}</div>
    `
    this.el.panel.classList.remove('hidden')
    this.el.frame.querySelector('[data-close]')?.addEventListener('click', () => this.closePanel())
    this.game.setPaused(true)
    this.game.player.unlock()
    this.game.audio?.play('click')
  }

  closePanel() {
    if (!this.panel) return
    const was = this.panel
    this.panel = null
    this.panelContext = null
    this.el.panel.classList.add('hidden')
    this.el.frame.innerHTML = ''
    this.game.setPaused(false)
    if (this.screen === 'game' && this.game.playing && !this.game.player.alive) return
    if (was !== 'death') this.game.player.lock()
  }

  openInventory() {
    this.selected = this.selected && this.game.inventory.find(this.selected) ? this.selected : this.game.inventory.slots[0]?.id || null
    this.renderInventory()
  }

  renderInventory() {
    const inv = this.game.inventory
    const body = `
      <div class="inventory-body">
        <div class="inv-left">
          <div>
            <div class="inv-section-label"><span>CARRIED ITEMS</span><span>${inv.weight.toFixed(1)} / ${inv.maxWeight.toFixed(0)} KG</span></div>
            <div class="inv-grid">${this.slotHtml(inv)}</div>
          </div>
          <div>
            <div class="inv-section-label"><span>EQUIPPED</span><span>${inv.equipped ? ITEMS[inv.equipped]?.name : 'UNARMED'}</span></div>
            <div class="equip-row">${this.equipHtml(inv)}</div>
          </div>
        </div>
        <div class="inv-right">${this.detailHtml(inv)}</div>
      </div>`
    this.openPanel('inventory', body)
    this.wireInventory()
  }

  slotHtml(inv) {
    const slots = inv.slots.slice(0, 32)
    let out = ''
    for (let i = 0; i < 32; i++) {
      const s = slots[i]
      if (!s) { out += '<div class="inv-slot empty"></div>'; continue }
      const def = ITEMS[s.id] || {}
      const selected = this.selected === s.id ? ' selected' : ''
      const eq = inv.equipped === s.id ? '<span class="eq"></span>' : ''
      out += `<div class="inv-slot${selected}" data-item="${s.id}" title="${def.name}">
        ${eq}<div class="ico">${iconSVG(s.id)}</div>${s.qty > 1 ? `<span class="qty">${s.qty}</span>` : ''}
      </div>`
    }
    return out
  }

  equipHtml(inv) {
    const order = ['melee', 'firearm']
    let out = ''
    for (const kind of order) {
      const items = inv.slots.filter(s => ITEMS[s.id]?.kind === kind)
      if (!items.length) {
        out += `<div class="equip-slot"><div class="ico" style="opacity:.18">${iconSVG('default')}</div><small>${kind === 'melee' ? 'Melee' : 'Firearm'}</small></div>`
      } else {
        for (const s of items.slice(0, 4)) {
          const active = inv.equipped === s.id ? ' style="border-color:var(--amber)"' : ''
          out += `<div class="equip-slot" data-equip="${s.id}"${active}><div class="ico">${iconSVG(s.id)}</div><small>${ITEMS[s.id].name}</small></div>`
        }
      }
    }
    return out
  }

  detailHtml(inv) {
    const id = this.selected
    const def = ITEMS[id]
    if (!def) {
      return `<div class="loot-empty">SELECT AN ITEM</div>`
    }
    const cond = inv.condition[id]
    const kindLabel = (def.kind || 'misc').toUpperCase()
    const stats = []
    if (def.weapon) {
      stats.push(`<div class="stat-line"><b>DAMAGE</b><div class="stat-track"><i style="width:${clamp(def.weapon.damage / 70 * 100, 4, 100)}%"></i></div><span>${def.weapon.damage}</span></div>`)
      stats.push(`<div class="stat-line"><b>RANGE</b><div class="stat-track"><i style="width:${clamp(def.weapon.range / 140 * 100, 4, 100)}%"></i></div><span>${def.weapon.range}m</span></div>`)
      if (cond != null) stats.push(`<div class="stat-line"><b>CONDITION</b><div class="stat-track"><i style="width:${cond}%;background:var(--sage)"></i></div><span>${Math.round(cond)}%</span></div>`)
    }
    const isWeapon = def.kind === 'melee' || def.kind === 'firearm'
    const canUse = !!def.use || def.kind === 'food' || def.kind === 'drink' || def.kind === 'medical' || def.kind === 'throwable'
    let actions = ''
    if (isWeapon) actions += `<button class="btn-act primary" data-act="equip">EQUIP</button>`
    if (canUse) actions += `<button class="btn-act primary" data-act="use">USE</button>`
    if (isWeapon && cond != null && cond < 100) actions += `<button class="btn-act" data-act="repair" ${inv.count('repair_kit') ? '' : 'disabled'}>REPAIR</button>`
    actions += `<button class="btn-act" data-act="drop">DROP</button>`
    return `
      <div class="item-hero">
        <div class="item-ico-lg"><div class="ico">${iconSVG(id)}</div></div>
        <div>
          <div class="item-name">${def.name}</div>
          <div class="item-kind">${kindLabel}${def.quest ? ' · QUEST ITEM' : ''}</div>
        </div>
      </div>
      <div class="item-desc">${def.desc || ''}</div>
      <div class="item-stats">${stats.join('')}
        <div class="stat-line"><b>WEIGHT</b><span style="color:var(--bone-dim)">${def.weight.toFixed(1)} kg</span></div>
      </div>
      <div class="item-actions">${actions}</div>`
  }

  wireInventory() {
    this.el.frame.querySelectorAll('[data-item]').forEach(el => {
      el.addEventListener('click', () => {
        this.selected = el.dataset.item
        this.game.audio?.play('click')
        this.refreshInventoryBody()
      })
    })
    this.el.frame.querySelectorAll('[data-equip]').forEach(el => {
      el.addEventListener('click', () => {
        const id = el.dataset.equip
        if (this.game.inventory.equip(id)) {
          this.game.combat?.setWeapon(id)
          this.toast(ITEMS[id].name, 'Equipped', 'good')
          this.refreshInventoryBody()
        }
      })
    })
    this.el.frame.querySelectorAll('[data-act]').forEach(el => {
      el.addEventListener('click', () => {
        const act = el.dataset.act
        const id = this.selected
        if (!id) return
        if (act === 'equip') {
          if (this.game.inventory.equip(id)) { this.game.combat?.setWeapon(id); this.toast(ITEMS[id].name, 'Equipped', 'good') }
        } else if (act === 'use') {
          this.useItem(id)
        } else if (act === 'drop') {
          this.game.inventory.drop(id, 1)
          this.game.audio?.play('pickup')
        } else if (act === 'repair') {
          if (this.game.inventory.repair(id)) { this.toast(ITEMS[id].name, 'Repaired', 'good'); this.game.audio?.play('pickupGun') }
          else this.toast('No repair kit', 'Search toolboxes and lockers', 'danger')
        }
        this.refreshInventoryBody()
      })
    })
  }

  refreshInventoryBody() {
    if (this.panel !== 'inventory') return
    const body = `
      <div class="inventory-body">
        <div class="inv-left">
          <div>
            <div class="inv-section-label"><span>CARRIED ITEMS</span><span>${this.game.inventory.weight.toFixed(1)} / ${this.game.inventory.maxWeight.toFixed(0)} KG</span></div>
            <div class="inv-grid">${this.slotHtml(this.game.inventory)}</div>
          </div>
          <div>
            <div class="inv-section-label"><span>EQUIPPED</span><span>${this.game.inventory.equipped ? ITEMS[this.game.inventory.equipped]?.name : 'UNARMED'}</span></div>
            <div class="equip-row">${this.equipHtml(this.game.inventory)}</div>
          </div>
        </div>
        <div class="inv-right">${this.detailHtml(this.game.inventory)}</div>
      </div>`
    this.el.frame.querySelector('#panel-body').innerHTML = body
    this.wireInventory()
  }

  useItem(id) {
    const def = ITEMS[id]
    if (!def || !def.use) {
      if (def?.kind === 'throwable') {
        this.toast(def.name, 'Hold a flare and throw with G', 'danger')
        return
      }
      return
    }
    const inv = this.game.inventory
    if (!inv.find(id)) return
    const p = this.game.player
    if (def.use.health) p.heal(def.use.health)
    if (def.use.stamina) p.addStamina(def.use.stamina)
    if (def.use.hunger) p.hunger = Math.min(100, p.hunger + def.use.hunger)
    if (def.use.thirst) p.thirst = Math.min(100, p.thirst + def.use.thirst)
    if (def.use.repair) {
      if (inv.equipped) {
        if (inv.repair(inv.equipped)) { this.toast('Weapon repaired', ITEMS[inv.equipped].name, 'good'); inv.remove(id, 1) }
        else this.toast('Repair failed', 'You need a weapon', 'danger')
      }
      return
    }
    inv.remove(id, 1)
    this.game.audio?.play('pickup')
    this.toast(def.name, 'Used', 'good')
  }

  // ------------------------------------------------------------- loot
  openLoot(result) {
    const items = result.loot || []
    this.loot = { label: result.label, items }
    this.game.audio?.play('pickupGun')
    this.game.player.noise = Math.max(this.game.player.noise, 0.45)
    this.renderLoot()
  }

  renderLoot() {
    const items = this.loot?.items || []
    let cards = ''
    if (!items.length) {
      cards = `<div class="loot-empty">NOTHING LEFT</div>`
    } else {
      items.forEach((s, i) => {
        const def = ITEMS[s.id] || {}
        cards += `<div class="loot-card" data-loot="${i}">
          <div class="item-ico-lg"><div class="ico">${iconSVG(s.id)}</div></div>
          <div class="loot-info"><div class="loot-name">${def.name}</div><div class="loot-kind">${(def.kind || 'misc').toUpperCase()}${def.quest ? ' · QUEST' : ''}</div></div>
          <div class="loot-qty">×${s.qty}</div>
        </div>`
      })
    }
    const body = `
      <div class="loot-body">${cards}</div>
      <div class="loot-footer">
        <div class="loot-note">Searching <b>${this.loot?.label || 'container'}</b> · weight <b>${this.game.inventory.weight.toFixed(1)} kg</b></div>
        <div style="display:flex;gap:8px">
          <button class="btn-act" data-loot-leave="1">LEAVE</button>
          <button class="btn-act primary" data-loot-all="1" ${items.length ? '' : 'disabled'}>TAKE ALL</button>
        </div>
      </div>`
    this.openPanel('loot', body)
    this.el.frame.querySelectorAll('[data-loot]').forEach(el => {
      el.addEventListener('click', () => this.takeLoot(Number(el.dataset.loot)))
    })
    this.el.frame.querySelector('[data-loot-all]')?.addEventListener('click', () => this.takeAllLoot())
    this.el.frame.querySelector('[data-loot-leave]')?.addEventListener('click', () => this.closePanel())
  }

  takeLoot(index) {
    if (!this.loot) return
    const s = this.loot.items[index]
    if (!s) return
    const inv = this.game.inventory
    if (!inv.add(s.id, s.qty)) {
      this.toast('Pack too heavy', `${ITEMS[s.id]?.name || 'Item'} cannot fit`, 'danger')
      return
    }
    this.loot.items.splice(index, 1)
    this.game.audio?.play('pickup')
    this.toast(ITEMS[s.id]?.name || 'Item', `+${s.qty}`, 'good')
    this.game.onLoot?.(s.id, s.qty)
    this.refreshQuickbar()
    this.renderLoot()
  }

  takeAllLoot() {
    if (!this.loot) return
    const items = [...this.loot.items]
    let taken = 0
    for (const s of items) {
      const inv = this.game.inventory
      let qty = s.qty
      // take as much as fits, one unit at a time if needed
      if (!inv.add(s.id, qty)) {
        qty = 0
        for (let i = 1; i <= s.qty; i++) if (inv.add(s.id, 1)) qty = i
        if (qty > 0) inv.remove(s.id, 0)
      }
      if (qty > 0) {
        taken += qty
        const idx = this.loot.items.findIndex(x => x === s)
        if (idx >= 0) this.loot.items.splice(idx, 1)
        this.game.onLoot?.(s.id, qty)
        this.toast(ITEMS[s.id]?.name || 'Item', `+${qty}`, 'good')
      }
    }
    if (!taken) this.toast('Pack too heavy', 'Drop something first', 'danger')
    else this.game.audio?.play('pickup')
    this.refreshQuickbar()
    this.renderLoot()
  }

  // ------------------------------------------------------------- menus
  openHowTo(fromPause = false) {
    const body = `
      <div class="big-copy">Harbor City fell in a single night. You are alive because you were lucky. Stay that way by searching carefully, moving quietly, and never fighting more than you can handle.</div>
      <div class="controls-sheet">
        <div class="ctrl-line"><span>Move</span><kbd>W A S D</kbd></div>
        <div class="ctrl-line"><span>Look</span><kbd>MOUSE</kbd></div>
        <div class="ctrl-line"><span>Sprint</span><kbd>SHIFT</kbd></div>
        <div class="ctrl-line"><span>Crouch</span><kbd>CTRL</kbd></div>
        <div class="ctrl-line"><span>Jump</span><kbd>SPACE</kbd></div>
        <div class="ctrl-line"><span>Search / open</span><kbd>E</kbd></div>
        <div class="ctrl-line"><span>Attack / fire</span><kbd>LMB</kbd></div>
        <div class="ctrl-line"><span>Aim</span><kbd>RMB</kbd></div>
        <div class="ctrl-line"><span>Reload</span><kbd>R</kbd></div>
        <div class="ctrl-line"><span>Switch weapon</span><kbd>1-4 / Q</kbd></div>
        <div class="ctrl-line"><span>Inventory</span><kbd>TAB</kbd></div>
        <div class="ctrl-line"><span>Quick items</span><kbd>5-8</kbd></div>
      </div>
      <div class="big-copy"><b>Survive:</b> hold <b>E</b> on cupboards, shelves, bodies and lockers. Food, water and medicine keep you moving. Zombies hear sprinting and gunfire. Search the pharmacy for antibiotics, then bring them to the Old Laundry safe house. Safe houses stop infection and slowly heal you.</div>
      <div class="panel-actions"><button class="btn-act" data-howto-back="1">${fromPause ? 'BACK TO PAUSE' : 'BACK'}</button></div>`
    this.openPanel('howto', body)
    this.el.frame.querySelector('[data-howto-back]')?.addEventListener('click', () => {
      if (fromPause) this.openPause()
      else this.closePanel()
    })
  }

  openSettings(fromPause = false) {
    const s = this.game.settings
    const q = s.quality
    const body = `
      <div class="settings-grid">
        <div class="setting">
          <div><div class="setting-label">Graphics quality</div><div class="setting-sub">Lower settings help on integrated or software renderers.</div></div>
          <div class="setting-opts" data-setting="quality">
            <button data-val="low" class="${q === 'low' ? 'on' : ''}">LOW</button>
            <button data-val="balanced" class="${q === 'balanced' ? 'on' : ''}">BALANCED</button>
            <button data-val="high" class="${q === 'high' ? 'on' : ''}">HIGH</button>
          </div>
        </div>
        <div class="setting">
          <div><div class="setting-label">Render scale</div><div class="setting-sub">Reduce internal resolution to improve frame rate.</div></div>
          <div class="setting-opts" data-setting="scale">
            <button data-val="0.7" class="${s.scale === 0.7 ? 'on' : ''}">70%</button>
            <button data-val="0.85" class="${s.scale === 0.85 ? 'on' : ''}">85%</button>
            <button data-val="1" class="${s.scale === 1 ? 'on' : ''}">100%</button>
          </div>
        </div>
        <div class="setting">
          <div><div class="setting-label">Bloom &amp; grading</div><div class="setting-sub">Cinematic light bloom and colour grade.</div></div>
          <div class="setting-opts" data-setting="bloom">
            <button data-val="1" class="${s.bloom ? 'on' : ''}">ON</button>
            <button data-val="0" class="${!s.bloom ? 'on' : ''}">OFF</button>
          </div>
        </div>
        <div class="setting">
          <div><div class="setting-label">Subtitles</div><div class="setting-sub">Show dialogue and ambient captioning.</div></div>
          <div class="setting-opts" data-setting="subtitles">
            <button data-val="1" class="${s.subtitles ? 'on' : ''}">ON</button>
            <button data-val="0" class="${!s.subtitles ? 'on' : ''}">OFF</button>
          </div>
        </div>
        <div class="setting">
          <div><div class="setting-label">Mouse sensitivity</div><div class="setting-sub">Look speed.</div></div>
          <div class="setting-opts" data-setting="sens">
            <button data-val="0.5" class="${s.sens === 0.5 ? 'on' : ''}">LOW</button>
            <button data-val="1" class="${s.sens === 1 ? 'on' : ''}">NORMAL</button>
            <button data-val="1.6" class="${s.sens === 1.6 ? 'on' : ''}">HIGH</button>
          </div>
        </div>
      </div>
      <div class="panel-actions"><button class="btn-act" data-settings-back="1">${fromPause ? 'BACK TO PAUSE' : 'BACK'}</button></div>`
    this.openPanel('settings', body)
    this.el.frame.querySelectorAll('[data-setting]').forEach(group => {
      group.querySelectorAll('button').forEach(btn => {
        btn.addEventListener('click', () => {
          const key = group.dataset.setting
          let val = btn.dataset.val
          if (key === 'bloom' || key === 'subtitles') val = val === '1'
          if (key === 'scale' || key === 'sens') val = Number(val)
          this.game.setSetting(key, val)
          this.openSettings(fromPause)
        })
      })
    })
    this.el.frame.querySelector('[data-settings-back]')?.addEventListener('click', () => {
      if (fromPause) this.openPause()
      else this.closePanel()
    })
  }

  openPause() {
    if (this.panel === 'pause') return
    const stats = this.game.stats()
    const body = `
      <div class="pause-body">
        <button class="pause-btn" data-pause="resume">RESUME <span>ESC</span></button>
        <button class="pause-btn" data-pause="inventory">FIELD PACK <span>TAB</span></button>
        <button class="pause-btn" data-pause="howto">HOW TO PLAY <span>CONTROLS</span></button>
        <button class="pause-btn" data-pause="settings">SETTINGS <span>GRAPHICS / AUDIO</span></button>
        <button class="pause-btn" data-pause="menu">QUIT TO MAIN MENU <span>PROGRESS IS NOT SAVED</span></button>
      </div>
      <div class="loot-footer">
        <div class="loot-note">SURVIVED <b>${formatTime(stats.time)}</b> · KILLS <b>${stats.kills}</b> · LOOT <b>${stats.loot}</b></div>
        <div class="loot-note">HARBOR CITY · DAY ${this.game.sky?.day || 1}</div>
      </div>`
    this.openPanel('pause', body)
    this.el.frame.querySelectorAll('[data-pause]').forEach(btn => {
      btn.addEventListener('click', () => {
        const a = btn.dataset.pause
        if (a === 'resume') this.closePanel()
        else if (a === 'inventory') this.openInventory()
        else if (a === 'howto') this.openHowTo(true)
        else if (a === 'settings') this.openSettings(true)
        else if (a === 'menu') { this.closePanel(); this.game.quitToMenu() }
      })
    })
  }

  showDeath(info) {
    this.closePanel()
    this.closeDeath()
    const stats = this.game.stats()
    const el = document.createElement('div')
    el.className = 'death-screen'
    el.innerHTML = `
      <div class="death-inner">
        <div class="death-kicker">SIGNAL LOST</div>
        <div class="death-title">You Died</div>
        <div class="death-sub">${info?.cause || 'The city took another one.'}</div>
        <div class="death-stats">
          <div class="death-stat"><b>${formatTime(stats.time)}</b><span>SURVIVED</span></div>
          <div class="death-stat"><b>${stats.kills}</b><span>INFECTED KILLED</span></div>
          <div class="death-stat"><b>${stats.loot}</b><span>ITEMS LOOTED</span></div>
        </div>
        <div class="death-actions">
          <button data-death="retry">TRY AGAIN</button>
          <button data-death="menu">MAIN MENU</button>
        </div>
      </div>`
    document.getElementById('app').appendChild(el)
    this.deathEl = el
    el.querySelector('[data-death="retry"]')?.addEventListener('click', () => {
      this.closeDeath()
      this.game.restart()
    })
    el.querySelector('[data-death="menu"]')?.addEventListener('click', () => {
      this.closeDeath()
      this.game.quitToMenu()
    })
    this.game.player.unlock()
  }

  closeDeath() {
    this.deathEl?.remove()
    this.deathEl = null
  }

  // ------------------------------------------------------------- notifications
  toast(title, sub = '', kind = '') {
    const box = this.el.notifications
    if (!box) return
    const el = document.createElement('div')
    el.className = 'toast ' + kind
    el.innerHTML = `<div class="t-ico">${iconSVG(this.guessIcon(title))}</div><div><div class="t-main">${title}</div>${sub ? `<div class="t-sub">${sub}</div>` : ''}</div>`
    box.prepend(el)
    while (box.children.length > 4) box.lastChild.remove()
    setTimeout(() => { el.classList.add('out'); setTimeout(() => el.remove(), 420) }, 3800)
  }

  guessIcon(title) {
    const t = String(title).toLowerCase()
    if (t.includes('water')) return 'water'
    if (t.includes('food') || t.includes('bean') || t.includes('bar')) return 'can'
    if (t.includes('bandage') || t.includes('med')) return 'bandage'
    if (t.includes('ammo') || t.includes('round')) return 'ammo'
    if (t.includes('antibiotic')) return 'antibiotics'
    if (t.includes('weapon') || t.includes('machete') || t.includes('pipe')) return 'machete'
    return 'paper'
  }

  mini(text) {
    const layer = this.el.toastLayer
    if (!layer) return
    const el = document.createElement('div')
    el.className = 'mini'
    el.textContent = text
    layer.appendChild(el)
    setTimeout(() => { el.style.opacity = '0'; el.style.transition = 'opacity .4s'; setTimeout(() => el.remove(), 420) }, 2200)
  }

  subtitle(text, duration = 4) {
    if (!this.game.settings.subtitles) return
    const el = this.el.subtitle
    if (!el) return
    el.textContent = text
    el.classList.add('on')
    this.subtitleTimer = duration
  }

  setQuest(title, sub) {
    this.el.questTitle.textContent = title
    this.el.questSub.textContent = sub
    this.el.quest?.classList.remove('done')
  }

  // ------------------------------------------------------------- interaction
  activate(rec) {
    if (!rec) return
    const world = this.game.world
    if (rec.type === 'door') {
      const res = world.interact(rec)
      if (res?.type === 'door') {
        this.game.audio?.play('door')
        this.toast(res.label, res.open ? 'Opened' : 'Closed', '')
      } else if (res?.type === 'locked') {
        this.toast('Locked', res.label, 'danger')
      }
      return
    }
    if (rec.type === 'container') {
      this.searchProgress = 0
      this.searchTarget = rec
    }
  }

  completeSearch(rec) {
    const res = this.game.world.interact(rec)
    if (!res) return
    if (res.type === 'loot') {
      this.searchTarget = null
      this.searchProgress = 0
      this.openLoot(res)
    } else if (res.type === 'empty') {
      this.searchTarget = null
      this.searchProgress = 0
      this.toast(res.label, 'Already searched', '')
    }
  }

  // ------------------------------------------------------------- frame
  update(dt, elapsed) {
    if (this.screen !== 'game') return
    const p = this.game.player
    const inv = this.game.inventory
    const now = performance.now()

    // search hold
    const rec = p.focus
    let searchElapsed = 0
    if (rec && rec.type === 'container' && !rec.container?.searched && this.eHeld && !this.game.paused && p.locked) {
      if (this.searchTarget !== rec) {
        this.searchProgress = 0
        this.searchTarget = rec
      }
      const dur = rec.container?.type === 'corpse' ? 1.25 : 0.85
      this.searchProgress = Math.min(1, this.searchProgress + dt / dur)
      this.game.player.noise = Math.max(this.game.player.noise, 0.25)
      if (this.searchProgress >= 1) this.completeSearch(rec)
    } else {
      this.searchProgress = Math.max(0, this.searchProgress - dt * 2.6)
      if (!this.eHeld) this.searchTarget = null
    }

    // interaction prompt
    const show = rec && !this.game.paused && p.alive
    this.el.interact?.classList.toggle('on', !!show)
    if (show) {
      const searched = rec.type === 'container' && rec.container?.searched
      this.el.interactAction.textContent = searched ? 'EMPTY' : (rec.action || 'SEARCH')
      this.el.interactTarget.textContent = rec.label || 'Object'
      const prog = this.searchProgress
      this.el.ring.style.strokeDashoffset = String(119 * (1 - prog))
    } else {
      this.el.ring.style.strokeDashoffset = '119'
    }

    // vitals
    this.setBar(this.el.health, p.health)
    this.el.healthNum.textContent = String(Math.round(p.health))
    this.setBar(this.el.stamina, p.stamina)
    this.setBar(this.el.hunger, p.hunger)
    this.el.hungerNum.textContent = String(Math.round(p.hunger))
    this.setBar(this.el.thirst, p.thirst)
    this.el.thirstNum.textContent = String(Math.round(p.thirst))
    this.setBar(this.el.infection, p.infection)
    this.el.infectionNum.textContent = String(Math.round(p.infection))
    this.el.lowHealth?.classList.toggle('on', p.health < 34 && p.alive)
    this.el.damage?.classList.toggle('hit', p.healthFlash > 0.82)
    this.el.stanceText.textContent = p.crouching ? 'CROUCHED' : p.sprinting ? 'SPRINTING' : 'STANDING'

    // noise
    const noise = Math.round(clamp(p.noise, 0, 1) * 8)
    if (this.el.noiseBars) {
      this.el.noiseBars.forEach((bar, i) => bar.classList.toggle('on', i < noise))
      this.el.noise?.classList.toggle('hot', noise > 6)
    }

    // clock / weather / compass (throttled)
    this.clockAccum += dt
    if (this.clockAccum > 0.12) {
      this.clockAccum = 0
      this.updateWorldInfo()
      this.updateCompass()
      this.updateQuestDistance()
      this.refreshWeapon()
    }

    // weapon view / crosshair
    const isMelee = ITEMS[inv.equipped]?.kind === 'melee'
    this.el.crosshair?.classList.toggle('melee', !!isMelee)
    this.el.crosshair?.classList.toggle('ads', !!this.game.combat?.aimingForUi)
    this.el.crosshair?.classList.toggle('hidden', !p.alive)

    // quickbar weights/uses
    if (now - this.lastHud > 260) {
      this.lastHud = now
      this.refreshQuickbar()
    }

    // subtitle fade
    if (this.subtitleTimer > 0) {
      this.subtitleTimer -= dt
      if (this.subtitleTimer <= 0) this.el.subtitle?.classList.remove('on')
    }
    // hint fade
    if (this.hintTimer > 0) {
      this.hintTimer -= dt
      if (this.hintTimer <= 0) this.el.hint?.classList.add('fade')
    }
    // stealth eye? no
  }

  setBar(el, value) {
    if (!el) return
    const v = clamp(value, 0, 100)
    el.style.width = v + '%'
  }

  updateWorldInfo() {
    const sky = this.game.sky
    if (!sky) return
    const clock = sky.clockString()
    this.el.clock.textContent = clock
    this.el.day.textContent = 'DAY ' + sky.day
    const w = WEATHER[sky.weather] || WEATHER.haze
    this.el.weatherLabel.textContent = w.label
    this.el.weatherIcon.textContent = w.icon
    const t = sky.time
    const temp = Math.round(19 + Math.sin((t - 6) / 24 * Math.PI * 2) * 6)
    this.el.temp.textContent = temp + '°C'
    this.el.dialFill.style.width = (t / 24 * 100).toFixed(1) + '%'
    this.el.dialHand.style.left = (t / 24 * 100).toFixed(1) + '%'
  }

  updateCompass() {
    const yaw = this.game.player.yaw
    let heading = ((-yaw * 180 / Math.PI) % 360 + 360) % 360
    const dirs = ['N', 'NE', 'E', 'SE', 'S', 'SW', 'W', 'NW']
    const idx = Math.round(heading / 45) % 8
    this.el.compassHead.textContent = dirs[idx]
    this.el.compassDegree.textContent = String(Math.round(heading)).padStart(3, '0') + '°'
    const strip = this.el.compassStrip
    if (strip) strip.style.transform = `translateX(${-((heading / 360) * 440 + 55)}px)`
    // quest bearing marker
    const q = this.game.quest
    const marker = this.el.compassMarker
    if (marker && q?.target) {
      const dx = q.target.x - this.game.player.pos.x
      const dz = q.target.z - this.game.player.pos.z
      let bear = (Math.atan2(dx, dz) * 180 / Math.PI + 360) % 360
      // convert world bearing to camera-relative screen position
      let diff = ((bear - heading + 540) % 360) - 180
      const left = clamp(50 + diff * 0.62, 4, 96)
      marker.style.left = left + '%'
      marker.classList.toggle('off', Math.abs(diff) > 80)
      marker.style.opacity = Math.abs(diff) > 110 ? '0.25' : '1'
    } else if (marker) {
      marker.style.left = '50%'
    }
  }

  updateQuestDistance() {
    const q = this.game.quest
    if (!q) return
    if (q.target) {
      const d = Math.hypot(q.target.x - this.game.player.pos.x, q.target.z - this.game.player.pos.z)
      const suffix = d < 4 ? 'HERE' : Math.round(d) + ' m'
      this.el.questSub.textContent = `${q.sub || ''}${q.sub ? ' · ' : ''}${suffix}`
    } else {
      this.el.questSub.textContent = q.sub || ''
    }
  }

  refreshWeapon() {
    const inv = this.game.inventory
    const id = inv.equipped
    const def = ITEMS[id]
    this.el.weaponName.textContent = def ? def.name.toUpperCase() : 'UNARMED'
    this.el.weaponType.textContent = def ? (def.weapon?.mag ? 'FIREARM' : 'MELEE') : '—'
    const cond = id ? inv.condition[id] : null
    if (cond != null) {
      this.el.weaponCond.textContent = Math.round(cond) + '%'
      this.el.condFill.style.width = cond + '%'
      this.el.weaponCond.style.color = cond < 22 ? 'var(--danger)' : 'var(--sage)'
    } else {
      this.el.weaponCond.textContent = '—'
      this.el.condFill.style.width = '0%'
    }
    const w = def?.weapon
    if (w?.mag) {
      const clip = this.game.combat?.mags[id] ?? w.mag
      const reserve = inv.count(w.ammo)
      this.el.ammo.textContent = String(clip)
      this.el.ammoReserve.textContent = '/ ' + reserve
      this.el.ammoWrap.style.opacity = '1'
    } else {
      this.el.ammo.textContent = '—'
      this.el.ammoReserve.textContent = ''
    }
    const icon = this.el.weaponIcon
    if (icon && this.lastWeapon !== id) {
      this.lastWeapon = id
      icon.innerHTML = iconSVG(id || 'default')
    }
  }

  refreshQuickbar() {
    const inv = this.game.inventory
    if (!this.el.quickbar) return
    const weapons = inv.slots.filter(s => ITEMS[s.id]?.kind === 'melee' || ITEMS[s.id]?.kind === 'firearm').slice(0, 4)
    const consumables = ['bandage', 'water', 'canned_food', 'flare']
    let html = ''
    for (let i = 0; i < 4; i++) {
      const s = weapons[i]
      if (s) {
        html += `<button class="quick ${inv.equipped === s.id ? 'active' : ''}" data-quick="weapon" data-id="${s.id}"><span class="q-key">${i + 1}</span><span class="q-ico">${iconSVG(s.id)}</span></button>`
      } else {
        html += `<button class="quick" disabled><span class="q-key">${i + 1}</span></button>`
      }
    }
    for (let i = 0; i < 4; i++) {
      const id = consumables[i]
      const qty = inv.count(id)
      html += `<button class="quick ${qty ? '' : 'empty'}" data-quick="use" data-id="${id}" ${qty ? '' : 'disabled'}><span class="q-key">${i + 5}</span><span class="q-ico">${iconSVG(id)}</span>${qty ? `<span class="q-count">${qty}</span>` : ''}</button>`
    }
    if (this.el.quickbar.dataset.sig !== html) {
      this.el.quickbar.dataset.sig = html
      this.el.quickbar.innerHTML = html
      this.el.quickbar.querySelectorAll('[data-quick]').forEach(btn => {
        btn.addEventListener('click', () => {
          const id = btn.dataset.id
          if (btn.dataset.quick === 'weapon') {
            if (inv.equip(id)) { this.game.combat?.setWeapon(id); this.game.audio?.play('click') }
          } else {
            this.useItem(id)
          }
          this.refreshQuickbar()
        })
      })
    }
    this.refreshWeapon()
  }

  useQuickSlot(n) {
    const id = ['bandage', 'water', 'canned_food', 'flare'][n]
    if (!id) return
    if (id === 'flare') { this.toast('Road Flare', 'Not yet implemented', ''); return }
    if (this.game.inventory.count(id) <= 0) { this.mini('No ' + ITEMS[id].name); return }
    this.useItem(id)
    this.refreshQuickbar()
  }

  hitmarker(kill = false) {
    const el = this.el.hitmarker
    if (!el) return
    el.classList.remove('show', 'kill')
    void el.offsetWidth
    el.classList.add('show')
    el.classList.toggle('kill', kill)
  }

  damageFlash() {
    this.el.damage?.classList.remove('hit')
    void this.el.damage?.offsetWidth
    this.el.damage?.classList.add('hit')
  }

  applySettings() {
    const s = this.game.settings
    if (this.game.player) this.game.player.sensitivity = 0.0022 * s.sens
  }
}

function formatTime(sec) {
  const m = Math.floor(sec / 60)
  const ss = Math.floor(sec % 60)
  return `${String(m).padStart(2, '0')}:${String(ss).padStart(2, '0')}`
}
