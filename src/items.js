import { choose, rand, randInt } from './utils.js'

const ICONS = {
  machete: '<svg viewBox="0 0 64 64"><path d="M10 50l7-3 25-27c2-2 6-5 9-6l4 4c-2 4-5 7-7 9L22 52l-4-2 26-28-25 26-2-1z" fill="currentColor"/><path d="M13 45l8 8-6 5-7-7z" fill="currentColor" opacity=".55"/></svg>',
  axe: '<svg viewBox="0 0 64 64"><path d="M29 8l4 3-20 45-5-2z" fill="currentColor" opacity=".75"/><path d="M32 9c8-5 19-2 24 5-7 5-15 10-24 12l-4-8z" fill="currentColor"/><path d="M30 21c9-2 17-6 25-11l3 4c-7 7-16 12-26 15z" fill="currentColor" opacity=".4"/></svg>',
  pipe: '<svg viewBox="0 0 64 64"><path d="M10 48l6-6 27-30 6 6-28 29 3 3-8 8z" fill="currentColor"/><path d="M12 46l7 7-5 5-7-7z" fill="currentColor" opacity=".6"/></svg>',
  knife: '<svg viewBox="0 0 64 64"><path d="M10 52l8-3 26-31c3-3 8-4 10-4l1 3c-3 4-9 8-13 13L18 56l-8-1z" fill="currentColor"/><path d="M13 46l9 9-6 4-7-7z" fill="currentColor" opacity=".6"/></svg>',
  pistol: '<svg viewBox="0 0 64 64"><path d="M8 20h37l8 8v8H37l-3 6 4 4-3 6-13-1-4-11-10-2z" fill="currentColor"/><path d="M37 25h9v7h-9z" fill="currentColor" opacity=".4"/></svg>',
  shotgun: '<svg viewBox="0 0 64 64"><path d="M4 25h41l4 2v4H33l-2 7h-8l-3-5-16-1z" fill="currentColor"/><path d="M45 24l12 2 3 4-2 5-13-2z" fill="currentColor" opacity=".8"/><path d="M31 38l8 1-2 15-6 1z" fill="currentColor" opacity=".6"/></svg>',
  rifle: '<svg viewBox="0 0 64 64"><path d="M3 26h48l5 3v5H54l-2 7h-8l-3-6H20l-6 8H8l2-10-7-1z" fill="currentColor"/><path d="M24 38h12l-2 17h-7z" fill="currentColor" opacity=".6"/><path d="M45 30h10v4H45z" fill="currentColor" opacity=".4"/></svg>',
  ammo: '<svg viewBox="0 0 64 64"><path d="M15 12h8l3 8-2 34h-10l-2-34z" fill="currentColor"/><path d="M30 12h8l3 8-2 34H29l-2-34z" fill="currentColor" opacity=".7"/><path d="M45 12h8l3 8-2 34H44l-2-34z" fill="currentColor" opacity=".45"/></svg>',
  shells: '<svg viewBox="0 0 64 64"><path d="M10 10h12v42H10zM28 10h12v42H28zM46 10h12v42H46z" fill="currentColor"/><path d="M10 14h12v10H10zM28 14h12v10H28zM46 14h12v10H46z" fill="currentColor" opacity=".4"/></svg>',
  bandage: '<svg viewBox="0 0 64 64"><g transform="rotate(-38 32 32)"><rect x="6" y="22" width="52" height="21" rx="9" fill="currentColor"/><rect x="22" y="24" width="20" height="17" rx="2" fill="#111" opacity=".35"/><path d="M28 27h8v3h-8zm0 6h8v3h-8z" fill="currentColor" opacity=".5"/></g></svg>',
  medkit: '<svg viewBox="0 0 64 64"><rect x="8" y="19" width="48" height="33" rx="3" fill="currentColor"/><path d="M24 19v-6h16v6h-5v-3h-6v3z" fill="currentColor" opacity=".55"/><path d="M28 28h8v5h5v8h-5v5h-8v-5h-5v-8h5z" fill="#10110f"/></svg>',
  pills: '<svg viewBox="0 0 64 64"><rect x="12" y="18" width="40" height="34" rx="3" fill="currentColor"/><path d="M12 18h40v9H12z" fill="#10110f" opacity=".4"/><path d="M26 33h12v4H26zM30 29h4v12h-4z" fill="#10110f"/></svg>',
  water: '<svg viewBox="0 0 64 64"><path d="M25 7h14v5l4 6v36a4 4 0 0 1-4 4H25a4 4 0 0 1-4-4V18l4-6z" fill="currentColor"/><path d="M23 26h18v22H23z" fill="#10110f" opacity=".35"/><path d="M24 30c3-3 5 3 8 0s5 3 8 0v18H24z" fill="currentColor" opacity=".55"/></svg>',
  can: '<svg viewBox="0 0 64 64"><rect x="18" y="14" width="28" height="38" rx="4" fill="currentColor"/><ellipse cx="32" cy="15" rx="14" ry="4" fill="currentColor" opacity=".6"/><rect x="18" y="24" width="28" height="17" fill="#10110f" opacity=".3"/></svg>',
  bar: '<svg viewBox="0 0 64 64"><rect x="14" y="24" width="36" height="22" rx="3" transform="rotate(-8 32 32)" fill="currentColor"/><path d="M20 30l24-3v5L20 35z" fill="#10110f" opacity=".3"/></svg>',
  antibiotics: '<svg viewBox="0 0 64 64"><rect x="12" y="16" width="40" height="36" rx="3" fill="currentColor"/><path d="M12 16h40v8H12z" fill="#10110f" opacity=".45"/><path d="M26 30h12v4H26zM30 26h4v12h-4z" fill="#10110f"/><circle cx="46" cy="46" r="3" fill="#10110f" opacity=".4"/></svg>',
  scrap: '<svg viewBox="0 0 64 64"><path d="M10 38l10-16 10 6 6-12 16 14-6 18-14 6-12-6z" fill="currentColor"/><path d="M28 28l8 6-4 14-8-4z" fill="#10110f" opacity=".25"/><circle cx="20" cy="36" r="3" fill="#10110f" opacity=".4"/></svg>',
  lockpick: '<svg viewBox="0 0 64 64"><path d="M12 50l6 6 8-8-6-6z" fill="currentColor"/><path d="M24 42l22-26 6 5-22 26z" fill="currentColor" opacity=".7"/><path d="M46 12l8-3 2 8-6 3z" fill="currentColor"/></svg>',
  flare: '<svg viewBox="0 0 64 64"><path d="M27 17h10l3 39H24z" fill="currentColor"/><path d="M27 17c0-7 10-7 10 0z" fill="currentColor" opacity=".6"/><path d="M31 10l2-7 3 8 5-5-1 9 7-2-7 6 8 2-8 2 4 6-7-4-1 8-3-7-4 7 1-8-9 3 7-6-8-4 9-1z" fill="currentColor" opacity=".35"/></svg>',
  molotov: '<svg viewBox="0 0 64 64"><path d="M27 6h10v13l8 15v21a4 4 0 0 1-4 4H23a4 4 0 0 1-4-4V34l8-15z" fill="currentColor"/><path d="M21 39h22v17H21z" fill="#10110f" opacity=".3"/><path d="M27 6h10v6H27z" fill="#10110f" opacity=".4"/><path d="M34 4l8 5-6 6z" fill="currentColor" opacity=".7"/></svg>',
  repair: '<svg viewBox="0 0 64 64"><path d="M40 8a14 14 0 0 0-13 19L8 46l10 10 19-19A14 14 0 1 0 40 8zm4 17a5 5 0 1 1 0-10 5 5 0 0 1 0 10z" fill="currentColor"/></svg>',
  money: '<svg viewBox="0 0 64 64"><rect x="6" y="20" width="52" height="26" rx="2" transform="rotate(-5 32 33)" fill="currentColor"/><circle cx="32" cy="33" r="8" fill="#10110f" opacity=".3"/><path d="M12 26h8M44 38h8" stroke="#10110f" stroke-width="2" opacity=".3"/></svg>',
  walkie: '<svg viewBox="0 0 64 64"><rect x="18" y="18" width="28" height="40" rx="3" fill="currentColor"/><path d="M34 18V5l6-2v15z" fill="currentColor" opacity=".7"/><rect x="23" y="25" width="18" height="11" fill="#10110f" opacity=".35"/><circle cx="26" cy="48" r="3" fill="#10110f" opacity=".4"/></svg>',
  battery: '<svg viewBox="0 0 64 64"><rect x="10" y="21" width="44" height="26" rx="2" fill="currentColor"/><path d="M54 28h5v12h-5z" fill="currentColor" opacity=".6"/><path d="M30 25l-7 12h6l-3 10 10-14h-6z" fill="#10110f"/></svg>',
  clothing: '<svg viewBox="0 0 64 64"><path d="M24 8l8 5 8-5 14 10-7 12-6-4v26H23V26l-6 4-7-12z" fill="currentColor"/></svg>',
  backpack: '<svg viewBox="0 0 64 64"><rect x="15" y="18" width="34" height="38" rx="8" fill="currentColor"/><path d="M24 14h16v8H24z" fill="currentColor" opacity=".6"/><rect x="22" y="31" width="20" height="14" rx="2" fill="#10110f" opacity=".3"/></svg>',
  note: '<svg viewBox="0 0 64 64"><path d="M14 6h26l10 10v42H14z" fill="currentColor"/><path d="M40 6v10h10" fill="#10110f" opacity=".35"/><path d="M21 26h22M21 33h22M21 40h14" stroke="#10110f" stroke-width="2.5" opacity=".45"/></svg>',
  default: '<svg viewBox="0 0 64 64"><path d="M16 24l16-12 16 12v26H16z" fill="currentColor"/></svg>'
}

export const ITEMS = {
  machete: { name: 'Worn Machete', kind: 'melee', desc: 'A dull steel machete. The handle is wrapped in dried tape. It has opened more than just crates.', weight: 1.2, stack: 1, icon: 'machete', color: '#b9b4a6', weapon: { damage: 38, range: 2.35, rate: 0.58, stamina: 11, durability: 120, durabilityLoss: 0.9, type: 'blade', sound: 'blade' } },
  pipe: { name: 'Steel Pipe', kind: 'melee', desc: 'A length of scaffolding pipe. Heavy, loud, and reliable in a pinch.', weight: 1.6, stack: 1, icon: 'pipe', color: '#9a9488', weapon: { damage: 27, range: 2.2, rate: 0.52, stamina: 9, durability: 160, durabilityLoss: 0.6, type: 'blunt', sound: 'blunt' } },
  axe: { name: 'Fire Axe', kind: 'melee', desc: 'Harbor City Fire Department. The blade still has red paint in the stamp.', weight: 2.4, stack: 1, icon: 'axe', color: '#c2b9a5', weapon: { damage: 62, range: 2.25, rate: 0.9, stamina: 19, durability: 90, durabilityLoss: 1.4, type: 'blade', sound: 'axe' } },
  knife: { name: 'Kitchen Knife', kind: 'melee', desc: 'Quiet, fast, and far too close for comfort.', weight: 0.4, stack: 1, icon: 'knife', color: '#b9b9b0', weapon: { damage: 19, range: 1.8, rate: 0.34, stamina: 5, durability: 70, durabilityLoss: 1.1, type: 'blade', sound: 'blade' } },
  pistol: { name: 'Harbor M9', kind: 'firearm', desc: 'Standard issue sidearm. Reliable, but every shot carries.', weight: 1.0, stack: 1, icon: 'pistol', color: '#a7a8a4', weapon: { damage: 44, headshot: 2.4, rate: 0.28, mag: 8, reload: 1.4, spread: 0.012, range: 80, stamina: 1, ammo: 'pistol_ammo', sound: 'pistol', recoil: 0.028 } },
  shotgun: { name: 'Pump Shotgun', kind: 'firearm', desc: 'Eight pellets of close-range persuasion. The stock is cracked and taped.', weight: 3.4, stack: 1, icon: 'shotgun', color: '#a58d6e', weapon: { damage: 15, pellets: 8, headshot: 1.8, rate: 0.85, mag: 6, reload: 2.1, spread: 0.075, range: 32, stamina: 5, ammo: 'shotgun_shells', sound: 'shotgun', recoil: 0.065 } },
  rifle: { name: 'Patrol Rifle', kind: 'firearm', desc: 'An old service rifle. Scoped, heavy, and very loud.', weight: 3.8, stack: 1, icon: 'rifle', color: '#8b857a', weapon: { damage: 68, headshot: 3.0, rate: 0.16, mag: 30, reload: 2.0, spread: 0.009, range: 140, stamina: 2, ammo: 'rifle_ammo', sound: 'rifle', recoil: 0.02 } },
  pistol_ammo: { name: '9mm Rounds', kind: 'ammo', desc: 'Eight rounds of tarnished 9mm. Fits the Harbor M9.', weight: 0.02, stack: 64, icon: 'ammo', color: '#c3a96b', ammo: 'pistol_ammo' },
  shotgun_shells: { name: '12ga Shells', kind: 'ammo', desc: 'Buck shot. Brass is green with age but the powder still smells dry.', weight: 0.05, stack: 32, icon: 'shells', color: '#b3674a', ammo: 'shotgun_shells' },
  rifle_ammo: { name: '5.56 Rounds', kind: 'ammo', desc: 'Military surplus rifle ammunition.', weight: 0.03, stack: 90, icon: 'ammo', color: '#c3a96b', ammo: 'rifle_ammo' },
  bandage: { name: 'Bandage', kind: 'medical', desc: 'Clean gauze and a strip of tape. Stops the bleeding, not the fear.', weight: 0.1, stack: 8, icon: 'bandage', color: '#ded5c2', use: { health: 22, time: 1.2 } },
  medkit: { name: 'Field Medkit', kind: 'medical', desc: 'Sealed trauma kit. Everything you need to stitch yourself back together.', weight: 0.7, stack: 3, icon: 'medkit', color: '#ded5c2', use: { health: 65, time: 2.4 } },
  painkillers: { name: 'Painkillers', kind: 'medical', desc: 'Expired painkillers. Takes the edge off, briefly.', weight: 0.05, stack: 6, icon: 'pills', color: '#d9c9a2', use: { health: 8, stamina: 30, time: 0.8 } },
  antibiotics: { name: 'Antibiotics', kind: 'quest', desc: 'A full course of broad-spectrum antibiotics. This is what the safe house needs.', weight: 0.2, stack: 1, icon: 'antibiotics', color: '#d3c99d', quest: 'antibiotics' },
  water: { name: 'Bottled Water', kind: 'drink', desc: 'Half a litre of water. The plastic tastes faintly of chlorine.', weight: 0.5, stack: 4, icon: 'water', color: '#9fb7c0', use: { thirst: 34, health: 2, time: 1.0 } },
  canned_food: { name: 'Canned Beans', kind: 'food', desc: 'Six years past the best-before date. Still sealed.', weight: 0.4, stack: 4, icon: 'can', color: '#b99a6b', use: { hunger: 30, time: 1.6 } },
  energy_bar: { name: 'Protein Bar', kind: 'food', desc: 'Chalky, sweet, and weirdly comforting.', weight: 0.1, stack: 6, icon: 'bar', color: '#b08a58', use: { hunger: 14, stamina: 22, time: 0.8 } },
  vitamins: { name: 'Vitamins', kind: 'food', desc: 'A dusty bottle of multivitamins. Better than nothing.', weight: 0.1, stack: 4, icon: 'pills', color: '#c7b472', use: { hunger: 5, health: 5, time: 0.5 } },
  scrap: { name: 'Scrap Metal', kind: 'material', desc: 'Bent brackets, screws, and wire. Good for repairing weapons.', weight: 0.3, stack: 20, icon: 'scrap', color: '#9b9184' },
  repair_kit: { name: 'Weapon Repair Kit', kind: 'material', desc: 'A roll of wire, oil, and abrasive tape. Restores a weapon’s edge.', weight: 0.6, stack: 4, icon: 'repair', color: '#b7a47f', use: { repair: true, time: 1.4 } },
  lockpick: { name: 'Lockpick Set', kind: 'material', desc: 'Two tension bars and a bent pick. Opens the things people wanted kept shut.', weight: 0.1, stack: 5, icon: 'lockpick', color: '#bdb6a3' },
  flare: { name: 'Road Flare', kind: 'throwable', desc: 'Burns hot and red for minutes. The infected hate the light. So does everything else.', weight: 0.2, stack: 5, icon: 'flare', color: '#d25732' },
  molotov: { name: 'Molotov', kind: 'throwable', desc: 'Fuel, rag, bottle. A bright, stupid answer to a dark problem.', weight: 0.7, stack: 3, icon: 'molotov', color: '#c9763f' },
  money: { name: 'Old Banknotes', kind: 'misc', desc: 'Harbor City dinars. Worth less than toilet paper now, but old habits die hard.', weight: 0.01, stack: 99, icon: 'money', color: '#b2a274' },
  clothing: { name: 'Clothes', kind: 'misc', desc: 'A clean shirt and socks. A small mercy.', weight: 0.4, stack: 3, icon: 'clothing', color: '#8d8e78' },
  walkie: { name: 'Broken Walkie', kind: 'misc', desc: 'The battery is dead, but the speaker still clicks sometimes.', weight: 0.3, stack: 1, icon: 'walkie', color: '#8f9b92' },
  battery: { name: 'Battery', kind: 'material', desc: 'A heavy 6V battery. Could power a light, a radio, or a trap.', weight: 0.3, stack: 4, icon: 'battery', color: '#a89b6d' },
  note: { name: 'Torn Note', kind: 'misc', desc: 'A page torn from someone’s diary. The last line reads: “Do not open the door after dark.”', weight: 0.01, stack: 1, icon: 'note', color: '#c3bba7' }
}

export function item(id) { return ITEMS[id] }
export function iconSVG(id) { return ICONS[ITEMS[id]?.icon] || ICONS.default }
export function stack(id, qty = 1) { return { id, qty } }

const TABLES = {
  med_cabinet: [['bandage', 2, 0.55], ['painkillers', 1, 0.35], ['medkit', 1, 0.18], ['antibiotics', 1, 0.05]],
  pharmacy_shelf: [['bandage', 2, 0.5], ['painkillers', 2, 0.4], ['vitamins', 1, 0.25], ['medkit', 1, 0.08]],
  hospital_cabinet: [['bandage', 2, 0.5], ['medkit', 1, 0.3], ['painkillers', 2, 0.3], ['antibiotics', 1, 0.12]],
  kitchen: [['canned_food', 1, 0.5], ['water', 1, 0.4], ['energy_bar', 1, 0.25], ['scrap', 2, 0.2]],
  fridge: [['water', 1, 0.55], ['canned_food', 1, 0.3], ['energy_bar', 1, 0.2]],
  nightstand: [['bandage', 1, 0.3], ['painkillers', 1, 0.25], ['battery', 1, 0.3], ['note', 1, 0.18]],
  wardrobe: [['clothing', 1, 0.55], ['scrap', 1, 0.15], ['pistol_ammo', 4, 0.06]],
  toolbox: [['scrap', 3, 0.7], ['repair_kit', 1, 0.35], ['lockpick', 1, 0.3], ['flare', 1, 0.15]],
  market_shelf: [['canned_food', 2, 0.55], ['water', 2, 0.5], ['energy_bar', 2, 0.35], ['vitamins', 1, 0.15]],
  register: [['money', 15, 0.7], ['lockpick', 1, 0.2], ['pistol_ammo', 4, 0.1]],
  storage: [['water', 2, 0.35], ['canned_food', 2, 0.35], ['medkit', 1, 0.12], ['bandage', 2, 0.3], ['shotgun_shells', 4, 0.15]],
  locker: [['bandage', 2, 0.4], ['pistol_ammo', 8, 0.12], ['money', 10, 0.25], ['note', 1, 0.2]],
  corpse: [['bandage', 1, 0.25], ['painkillers', 1, 0.2], ['money', 8, 0.4], ['pistol_ammo', 3, 0.15], ['note', 1, 0.2]],
  safehouse: [['water', 2, 0.8], ['canned_food', 1, 0.6], ['bandage', 2, 0.6], ['repair_kit', 1, 0.25]],
  ammo_cache: [['pistol_ammo', 12, 0.7], ['shotgun_shells', 6, 0.5], ['rifle_ammo', 20, 0.3]]
}

export function rollLoot(type, rng, { min = 1, max = 3 } = {}) {
  const table = TABLES[type] || TABLES.kitchen
  const rolls = randInt(rng, min, max)
  const out = []
  for (let i = 0; i < rolls; i++) {
    for (const [id, qty, chance] of table) {
      if (rng() < chance) {
        const q = Math.max(1, Math.round(rand(rng, qty * 0.6, qty * 1.4)))
        out.push(stack(id, q))
        break
      }
    }
  }
  if (!out.length) out.push(stack('scrap', 1))
  // merge duplicate stacks
  const merged = []
  for (const s of out) {
    const ex = merged.find(m => m.id === s.id)
    if (ex) ex.qty += s.qty
    else merged.push({ ...s })
  }
  return merged
}

export function weaponStats(id) { return ITEMS[id]?.weapon }
export function itemWeight(id) { return ITEMS[id]?.weight || 0.1 }
