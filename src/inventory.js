import { ITEMS, itemWeight } from './items.js'

export class Inventory {
  constructor(game, opts = {}) {
    this.game = game
    this.slots = []
    this.maxWeight = opts.maxWeight ?? 34
    this.equipped = null
    this.condition = {}
    this.onChange = null
  }

  get weight() {
    return this.slots.reduce((w, s) => w + itemWeight(s.id) * s.qty, 0)
  }

  get weapons() {
    return this.slots.filter(s => ITEMS[s.id]?.kind === 'melee' || ITEMS[s.id]?.kind === 'firearm')
  }

  count(id) {
    return this.slots.filter(s => s.id === id).reduce((n, s) => n + s.qty, 0)
  }

  find(id) {
    return this.slots.find(s => s.id === id) || null
  }

  canAdd(id, qty = 1) {
    const def = ITEMS[id]
    if (!def) return false
    const added = itemWeight(id) * qty
    return this.weight + added <= this.maxWeight + 0.001
  }

  add(id, qty = 1) {
    const def = ITEMS[id]
    if (!def) return false
    if (!this.canAdd(id, qty)) return false
    const max = def.stack || 1
    let left = qty
    // fill existing stacks first
    for (const s of this.slots) {
      if (s.id !== id || s.qty >= max) continue
      const take = Math.min(max - s.qty, left)
      s.qty += take
      left -= take
      if (left <= 0) break
    }
    while (left > 0) {
      const take = Math.min(max, left)
      this.slots.push({ id, qty: take })
      left -= take
    }
    if (!this.equipped && (def.kind === 'melee' || def.kind === 'firearm')) this.equipped = id
    if (def.kind === 'melee' || def.kind === 'firearm') {
      if (this.condition[id] == null) this.condition[id] = 100
    }
    this.onChange?.()
    return true
  }

  remove(id, qty = 1) {
    let left = qty
    for (let i = this.slots.length - 1; i >= 0 && left > 0; i--) {
      const s = this.slots[i]
      if (s.id !== id) continue
      const take = Math.min(s.qty, left)
      s.qty -= take
      left -= take
      if (s.qty <= 0) this.slots.splice(i, 1)
    }
    if (this.count(id) === 0 && this.equipped === id) {
      const next = this.weapons[0]
      this.equipped = next ? next.id : null
    }
    this.onChange?.()
    return left === 0
  }

  equip(id) {
    const def = ITEMS[id]
    if (!def || (def.kind !== 'melee' && def.kind !== 'firearm')) return false
    if (!this.find(id)) return false
    this.equipped = id
    if (this.condition[id] == null) this.condition[id] = 100
    this.onChange?.()
    return true
  }

  damageCondition(id, amount) {
    if (this.condition[id] == null) this.condition[id] = 100
    this.condition[id] = Math.max(0, this.condition[id] - amount)
    this.onChange?.()
  }

  repair(id, amount = 45) {
    if (this.condition[id] == null) return false
    if (this.count('repair_kit') <= 0) return false
    this.remove('repair_kit', 1)
    this.condition[id] = Math.min(100, this.condition[id] + amount)
    this.onChange?.()
    return true
  }

  drop(id, qty = 1) {
    return this.remove(id, qty)
  }

  clear() {
    this.slots.length = 0
    this.equipped = null
    this.condition = {}
    this.onChange?.()
  }

  serialize() {
    return { slots: this.slots.map(s => ({ ...s })), equipped: this.equipped, condition: { ...this.condition } }
  }
}
