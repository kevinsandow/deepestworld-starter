import z, { ZodError } from 'zod'

const slotSchema = z.enum([
  "mainHand",
  "shield",
  "chest",
  "helmet",
  "gloves",
  "boots",
  "belt",
  "amulet",
  "ring1",
  "ring2",
])

const classSchema = z.enum([
  "GENERAL",
  "WEAPON",
  "ARMOR",
  "ACCESSORY",
  "STATION",
  "SPRITE",
  "DECO",
  "PLAYER",
  "MONSTER",
])

const dmgTypeSchema = z.enum([
  "PHYS",
  "FIRE",
  "COLD",
  "ELEC",
  "ACID",
])

const enchantTypeSchema = z.enum([
  "REROLL_MOD",
  "ADD_MOD",
  "REMOVE_MOD",
  "REROLL_QUALITY",
])

const matTypeSchema = z.enum([
  "WOOD",
  "ROCK",
  "METAL",
  "LEATHER",
  "CLOTH",
  "UNARMED",
])

const modTypeSchema = z.enum([
  "PHYS",
  "FIRE",
  "COLD",
  "ELEC",
  "ACID",
  "HP",
  "MP",
  "CRIT",
  "DEF",
])

const professionSchema = z.enum([
  "PLANT_FARMING",
  "WOODCUTTING",
  "QUARRYING",
  "MINING",
  "HUNTING",
  "HERBALISM",
  "WOODWORKING",
  "STONEWORKING",
  "METALWORKING",
  "LEATHERWORKING",
  "TAILORING",
  "ALCHEMY",
])

const raritySchema = z.enum([
  "WHITE",
  "GREEN",
  "BLUE",
  "PURPLE",
  "ORANGE",
])

const stageSchema = z.enum([
  "STAGE0",
  "STAGE1",
  "STAGE2",
  "STAGE3",
  "STAGE4",
  "SEED",
  "SEEDLING",
  "YOUNG",
  "ADULT",
  "ELDER",
])

const terrainSchema = z.enum([
  "WATER",
  "EMPTY",
  "GRASS",
  "DIRT",
  "DESERT",
  "UNDERWATER",
  "UNDERGROUND",
  "WINTER",
  "COAL",
  "WOODWALL1",
  "STONEROOF1",
  "UGFOREST",
  "CLOUD",
  "TREE",
  "WINTER_CAVE",
  "DESERT_CAVE",
  "STONE",
  "VOID",
])

const tierSchema = z.enum([
  "T0",
  "T1",
  "T2",
  "T3",
  "T4",
])

const typeSchema = z.enum([
  "GENERAL",
  "SWORD",
  "AXE",
  "DAGGER",
  "CROSSBOW",
  "BOW",
  "SCEPTER",
  "WAND",
  "SPEAR",
  "BOOMERANG",
  "STAFF",
  "MACE",
  "CHEST",
  "HELMET",
  "GLOVES",
  "BOOTS",
  "SHIELD",
  "BELT",
  "ANVIL",
  "FURNACE",
  "WORKBENCH",
  "TORCH",
  "LOADOUT",
  "MAGIC_FENCE_X",
  "MAGIC_FENCE_Y",
  "FENCE_X",
  "FENCE_Y",
  "BANK",
  "RECYCLER",
  "ENCHANTER",
  "LOOM",
  "SEWING_TABLE",
  "TANNING_RACK",
  "ELEVATOR",
  "GC_TABLE",
  "MAILBOX",
  "MISSION_TABLE",
  "MAGIC_SHRUB",
  "XMOG",
  "MARKET",
  "PORTAL",
  "ESSENCE",
  "MYSTIC_ESSENCE",
  "RING",
  "AMULET",
  "PORTAL_SCROLL",
  "HUMAN",
  "BIRD",
  "CAT",
  "LIZARD",
  "WOLF",
  "CHARCOAL",
  "SOURCE",
  "RESOURCE",
  "MATERIAL",
  "SKILLBOOK",
  "VIAL",
  "HP_POTION",
  "MP_POTION",
  "UNARMED",
  "PACKAGE",
  "HAMMER",
  "WRENCH",
  "SHOVEL",
  "SLEDGEHAMMER",
  "CLAW",
  "ELE_ESSENCE",
  "BED",
  "BLOCK",
  "TIME_TOKEN",
  "HEART",
  "RARE",
  "GLITCHED",
  "BLINK",
  "SHIELDING",
  "TRAMPLE",
  "BOUNCY",
  "KITE",
  "CHARGE",
  "AI_POWER",
  "AI_SPEED",
  "AI_REACH",
  "AI_STR_DEF",
  "AI_DEX_DEF",
  "AI_INT_DEF",
  "AI_DEF",
  "AI_CRIT",
  "AI_BLOCK",
  "AI_REGEN",
  "PROJ_NOVA",
  "PAPER",
  "PICKAXE",
  "DEFAULT1",
  "WATER_DEFAULT1",
  "FOREST_DEFAULT1",
  "DEFAULT2",
  "BOSS_DEFAULT1",
  "DEFAULT3",
  "DEFAULT4",
  "DEFAULT5",
  "GOO1",
  "GOO2",
  "BOSS_GOO1",
  "GOO3",
  "GOO4",
  "BOSS_GOO2",
  "MYCONID1",
  "MYCONID2",
  "ELEMENTAL1",
])

const oldConditionsSchema = z.strictObject({
  od: z.number().optional(),
  d: z.number().optional(),
  s: z.union([z.number(), z.null()]).optional(),
  v: z.union([z.number(), z.null()]).optional(),
  timerElements: z.array(z.unknown()).optional(),
  conditionElements: z.array(z.unknown()).optional(),
})

const conditionsSchema = z.strictObject({
  duration: z.number(),
  expireAt: z.number(),
  numStacks: z.union([z.number(), z.null()]),
  value: z.union([z.number(), z.null()]),
})

const itemSchema = z.strictObject({
  class: z.number().optional(),
  classMd: z.string().optional(),
  crafted: z.literal(1).optional(),
  craftingRes: z.number().optional(),
  dmgType: z.number().optional(),
  dmgTypeMd: z.string().optional(),
  ele: z.number().optional(),
  from: z.string().optional(),
  h: z.number().optional(),
  items: z.array(z.unknown()).optional(),
  lvl: z.number(),
  matTier: z.number().optional(),
  matType: z.number().optional(),
  matTypeMd: z.string().optional(),
  md: z.string(),
  mods: z.record(z.string(), z.unknown()).optional(),
  n: z.number().optional(),
  name: z.string().optional(),
  qual: z.number(),
  r: z.number().optional(),
  rarityMd: z.string().optional(),
  s: z.number().optional(),
  skin: z.number().optional(),
  stage: z.number().optional(),
  stageMd: z.string().optional(),
  terrain: z.number().optional(),
  tier: z.number().optional(),
  tierMd: z.string().optional(),
  type: z.number(),
  typeMd: z.string().optional(),
  w: z.number().optional(),
})

const oldMetadataEntitiesSchema = z.strictObject({
  slots: z.array(slotSchema),
  // type: z.unknown(),
  // isMonster: z.boolean().optional(),
  // canHunt: z.boolean().optional(),
  // name: z.string().optional(),
  // isStation: z.boolean().optional(),
  // s: z.number().optional(),
  // recipe: z.unknown().optional(),
  // canCollide: z.boolean().optional(),
  // canChop: z.boolean().optional(),
  // isResource: z.boolean().optional(),
  // isPortal: z.boolean().optional(),
  // isVessel: z.boolean().optional(),
  // tags: z.unknown().optional(),
  // isBox: z.boolean().optional(),
  // isPlant: z.boolean().optional(),
  // canHarvest: z.boolean().optional(),
  // canMine: z.boolean().optional(),
  // isNpc: z.boolean().optional(),
  // isPlayer: z.boolean().optional(),
})

const oldMetadataItemsSchema = z.strictObject({
  slots: z.array(slotSchema),
  // tags: z.unknown().optional(),
  // isSkill: z.boolean().optional(),
  // name: z.string().optional(),
  // isMat: z.boolean().optional(),
  // s: z.number().optional(),
  // isStation: z.boolean().optional(),
  // recipe: z.unknown().optional(),
  // type: z.unknown().optional(),
  // isWeapon: z.boolean().optional(),
  // dmgTypes: z.array(z.string()).optional(),
  // slots: z.array(z.string()).optional(),
  // isArmor: z.boolean().optional(),
  // isEssence: z.boolean().optional(),
  // isVessel: z.boolean().optional(),
  // isBox: z.boolean().optional(),
  // isTool: z.boolean().optional(),
  // canOpen: z.boolean().optional(),
  // isAccessory: z.boolean().optional(),
})

const skillSchema = z.strictObject({
  acid: z.number().optional(),
  aoe: z.number().optional(),
  // // lvl: z.number(),
  // // baseValue: z.number(),
  castTime: z.number().optional(),
  cd: z.number().optional(),
  // tags: z.object({}).optional(), // z.instanceof(Set),
  cold: z.number().optional(),
  cost: z.number(),
  crit: z.number().optional(),
  critMult: z.number().optional(),
  dmgs: z.record(z.string(), z.number()).optional(),
  duration: z.number().optional(),
  eleChance: z.record(z.string(), z.number()).optional(),
  eleEffect: z.strictObject({
    phys: z.number().optional(),
    fire: z.number().optional(),
    cold: z.number().optional(),
    elec: z.number().optional(),
    acid: z.number().optional(),
  }).optional(),
  eleEffectMult: z.strictObject({
    phys: z.number().optional(),
    fire: z.number().optional(),
    cold: z.number().optional(),
    elec: z.number().optional(),
    acid: z.number().optional(),
  }).optional(),
  elec: z.number().optional(),
  fire: z.number().optional(),
  gcd: z.number().optional(),
  hasResolved: z.boolean().optional(),
  hpLeech: z.number().optional(),
  md: z.string(),
  mods: z.record(z.string(), z.number()),
  moveSpeed: z.number().optional(),
  mpLeech: z.number().optional(),
  passives: z.array(z.union([z.null(), z.strictObject({ md: z.string() })])).optional(),
  phys: z.number().optional(),
  power: z.record(z.string(), z.number()).optional(),
  range: z.number(),
  useType: z.number(),
  value: z.number(),
  // runeMd: z.string(),
  // i: z.number(),
})

const entitySchema = z.strictObject({
  ai: z.number().optional(),
  aid: z.number().optional(),
  bad: z.number().optional(),
  badCd: z.number().optional(),
  bag: z.array(z.union([itemSchema, z.null()])).optional(),
  bankTabs: z.array(z.strictObject({
    name: z.string(),
    items: z.array(z.union([itemSchema, z.null()])),
  })).optional(),
  c: z.record(z.string(), conditionsSchema).optional(),
  carId: z.number().optional(),
  casting: z.number().optional(),
  cds: z.record(z.string(), z.number()).optional(),
  cid: z.number().optional(),
  class: z.number(),
  classMd: z.string(),
  combat: z.number().optional(),
  conditions: z.record(z.string(), conditionsSchema).optional(),
  crafting: z.number().optional(),
  dx: z.number().optional(),
  dy: z.number().optional(),
  effects: z.record(z.string(), oldConditionsSchema).optional(),
  elvl: z.number().optional(),
  favor: z.number().optional(),
  fx: z.record(z.string(), oldConditionsSchema).optional(),
  gcd: z.number().optional(),
  gcdValue: z.number().optional(),
  gear: z.record(slotSchema, z.union([itemSchema, z.null()])).optional(),
  gold: z.number().optional(),
  h: z.number(),
  hp: z.number().optional(),
  hps: z.number().optional(),
  i: z.array(z.union([itemSchema, z.null()])).optional(), // TODO: fix z.record(z.string(), itemSchema).optional(),
  id: z.number(),
  inventory: z.array(z.union([itemSchema, z.null()])).optional(),
  isCollidable: z.literal(true).optional(),
  isOpaque: z.literal(true).optional(),
  isSafe: z.number().optional(),
  // missionLvls: z.record(z.string(), z.strictObject({
  //   lvl: z.number(),
  //   reward: itemSchema,
  // })).optional(),
  learnedPassives: z.record(z.string(), z.strictObject({
    lvl: z.number(),
    tier: z.number(),
  })).optional(),
  learnedSkills: z.record(z.string(), z.strictObject({
    lvl: z.number(),
    pts: z.number().optional(),
    tier: z.number(),
  })).optional(),
  learnedStats: z.record(z.string(), z.strictObject({
    lvl: z.number(),
    pts: z.number(),
    tier: z.number(),
  })).optional(),
  level: z.number().optional(),
  loadout: z.array(z.strictObject({
    name: z.string(),
    gear: z.record(slotSchema, z.union([itemSchema, z.null()])),
    skills: z.array(z.union([z.null(), skillSchema])),
  })).optional(),
  lvl: z.number().optional(),
  mailbox: z.array(z.union([itemSchema.extend({ mailId: z.number() }), z.null()])).optional(),
  matType: z.number().optional(),
  matTypeMd: z.string().optional(),
  maxGold: z.number().optional(),
  maxHp: z.number().optional(),
  maxMp: z.number().optional(),
  maxShopGold: z.number().optional(),
  md: z.string(),
  mission: z.strictObject({}).optional(),
  mods: z.record(z.string(), z.number()).optional(),
  mogs: z.record(z.string(), z.string()).optional(),
  moveSpeed: z.number().optional(),
  mp: z.number().optional(),
  mtx: z.strictObject({
    face: z.number(),
    skin: z.number(),
    showHelmet: z.number(),
    helmet: z.unknown(), // don't care for now
    chest: z.unknown(), // don't care for now
  }).optional(),
  name: z.string().optional(),
  output: z.array(z.union([itemSchema, z.null()])).optional(),
  owner: z.number().optional(),
  party: z.array(z.strictObject({
    dbId: z.number(),
    name: z.string(),
    level: z.number(),
    id: z.number(),
    uid: z.number(),
    lvl: z.number(),
    isLeader: z.number().optional(),
    leader: z.number().optional(),
  })).optional(),
  player: z.number().optional(),
  plots: z.array(z.strictObject({
    id: z.number(),
    pos: z.tuple([z.number(), z.number(), z.number()]),
    dim: z.tuple([z.number(), z.number(), z.number()]),
    // sellCd: z.number(),
    x: z.number(),
    y: z.number(),
    z: z.number(),
    w: z.number(),
    h: z.number(),
    d: z.number(),
  })).optional(),
  powerOn: z.number().optional(),
  profession: z.number().optional(),
  professionMd: z.string().optional(),
  professions: z.record(z.string(), z.strictObject({
    level: z.number(),
    lvl: z.number(),
    // md: z.string(),
    profession: z.number(),
    xp: z.number(),
  })).optional(), // z.set(z.string()).optional(),
  qual: z.number().optional(),
  r: z.number().optional(),
  recycler: z.strictObject({
    input: z.array(z.union([itemSchema, z.null()])),
    output: z.array(z.union([itemSchema, z.null()])),
  }).optional(),
  rep: z.number().optional(),
  safe: z.number().optional(),
  share: z.number().optional(),
  silver: z.number().optional(),
  skills: z.array(z.union([z.null(), skillSchema])).optional(),
  skin: z.number().optional(),
  skinMd: z.string().optional(),
  spawn: z.strictObject({
    x: z.number(),
    y: z.number(),
    z: z.number(),
  }).optional(),
  stage: z.number().optional(),
  stageMd: z.string().optional(),
  station: z.number().optional(),
  stats: z.strictObject({
    block: z.number(),
    climbSpeed: z.number(),
    critRes: z.number(),
    dagger: z.number(),
    dexDef: z.number(),
    doubleHit: z.number(),
    eleChance: z.strictObject({
      phys: z.number(),
      fire: z.number(),
      cold: z.number(),
      elec: z.number(),
      acid: z.number(),
    }),
    hp: z.number(),
    hpRegen: z.number(),
    intDef: z.number(),
    moveSpeed: z.number(),
    mp: z.number(),
    mpRegen: z.number(),
    parry: z.number(),
    pen: z.strictObject({
      phys: z.number(),
      fire: z.number(),
      cold: z.number(),
      elec: z.number(),
      acid: z.number(),
    }),
    res: z.strictObject({
      phys: z.number(),
      fire: z.number(),
      cold: z.number(),
      elec: z.number(),
      acid: z.number(),
    }),
    strDef: z.number(),
    threatMult: z.number(),
  }).optional(),
  storage: z.union([z.record(z.string(), itemSchema), z.array(z.union([itemSchema, z.null()]))]).optional(),
  // @ts-ignore
  tags: z.instanceof(top.Set),
  targetId: z.number().optional(),
  terrain: z.number().optional(),
  threat: z.number().optional(),
  tree: z.number().optional(),
  type: z.number(),
  typeMd: z.string(),
  uid: z.number().optional(),
  v: z.number().optional(),
  w: z.number(),
  wild: z.number().optional(),
  x: z.number(),
  xmogs: z.any(),
  xp: z.number().optional(),
  y: z.number(),
  z: z.number(),
})

const characterSchema = entitySchema.required({
  aid: true,
  bag: true,
  carId: true,
  casting: true,
  cds: true,
  cid: true,
  combat: true,
  crafting: true,
  dx: true,
  dy: true,
  effects: true,
  fx: true,
  gcd: true,
  gear: true,
  gold: true,
  hp: true,
  i: true,
  inventory: true,
  learnedPassives: true,
  learnedSkills: true,
  learnedStats: true,
  level: true,
  loadout: true,
  lvl: true,
  mailbox: true,
  maxGold: true,
  maxHp: true,
  maxMp: true,
  maxShopGold: true,
  mods: true,
  mogs: true,
  moveSpeed: true,
  mp: true,
  mtx: true,
  name: true,
  party: true,
  plots: true,
  professions: true,
  recycler: true,
  rep: true,
  silver: true,
  skills: true,
  spawn: true,
  stats: true,
  uid: true,
  xp: true,
})

const apiSchema = z.strictObject({
  abandonMission: z.function(),
  addMog: z.function(),
  addPassive: z.function(),
  addSkill: z.function(),
  addSkillPoint: z.function(),
  addTransmog: z.function(),
  buyPlot: z.function(),
  c: characterSchema,
  camera: z.strictObject({
    x: z.number(),
    y: z.number(),
  }),
  canGather: z.function(),
  canPayCost: z.function(),
  canUseConsumable: z.function(),
  canUseRune: z.function(),
  canUseSkill: z.function(),
  canUseSkillCd: z.function(),
  canUseSkillCost: z.function(),
  canUseSkillRange: z.function(),
  cancelOrder: z.function(),
  char: characterSchema,
  character: characterSchema,
  chop: z.function(),
  chunks: z.record(z.string(), z.array(z.array(z.array(z.number())))),
  climb: z.function(),
  combine: z.function(),
  combineItems: z.function(),
  constants: z.strictObject({
    AGGRO_RANGE: z.number(),
    BYTE_LIMIT: z.number(),
    BYTE_LIMIT_TIMESPAN: z.number(),
    CALL_LIMIT: z.number(),
    CALL_LIMIT_TIMESPAN: z.number(),
    CHUNK_DIM: z.tuple([z.number(), z.number(), z.number()]),
    CHUNK_DIMENSION: z.tuple([z.number(), z.number(), z.number()]),
    CHUNK_SIZE: z.strictObject({
      w: z.number(),
      h: z.number(),
      d: z.number(),
    }),
    CRIT: z.number(),
    CRIT_MULT: z.number(),
    DMG_TYPE_FX_CHANCE_BASE: z.number(),
    DMG_TYPE_FX_MAX: z.number(),
    GCD: z.number(),
    GCD_BASE: z.number(),
    INTERACT_RANGE: z.number(),
    LEVEL_BUFFER: z.number(),
    MAX_DMG_TYPE_EFFECT: z.number(),
    MAX_DODGE: z.number(),
    MAX_MOD_TIER: z.number(),
    MAX_REP: z.number(),
    MAX_RES: z.number(),
    MAX_STACK_SIZE: z.number(),
    MELEE_RANGE: z.number(),
    MIN_REP: z.number(),
    MISSION_RANGE: z.number(),
    MOVEMENT_SPEED: z.number(),
    MOVEMENT_SPEED_BASE: z.number(),
    PIXELS_PER_UNIT: z.number(),
    PX_PER_UNIT: z.number(),
    PX_PER_UNIT_ZOOMED: z.number(),
    RANGED_RANGE: z.number(),
    RANGE_MELEE_BASE: z.number(),
    TIER_SIZE: z.number(),
    TWO_HANDED_MULT: z.number(),
    VERSION: z.number(),
    XP_DEATH_PENALTY: z.number(),
    ZONE_LEVELS_PER_ZONE_TIER: z.number(),
    ZONE_LEVEL_RADIUS: z.number(),
  }),
  craft: z.function(),
  debug: z.boolean(),
  deleteItem: z.function(),
  // @ts-ignore
  deleteItemMap: z.instanceof(top.Map),
  destroyBuilding: z.function(),
  destroyStation: z.function(),
  distance: z.function(),
  draw: z.boolean(),
  e: z.array(entitySchema),
  editor: z.unknown(),
  emit: z.function(),
  enchant: z.function(),
  enchantItem: z.function(),
  enterMagicShrub: z.function(),
  enterPortal: z.function(),
  entities: z.array(entitySchema),
  enums: z.strictObject({
    Class: z.record(classSchema, z.number()),
    DmgType: z.record(dmgTypeSchema, z.number()),
    EnchantType: z.record(enchantTypeSchema, z.number()),
    MatType: z.record(matTypeSchema, z.number()),
    ModType: z.record(modTypeSchema, z.number()),
    Profession: z.record(professionSchema, z.number()),
    Rarity: z.record(raritySchema, z.number()),
    Stage: z.record(stageSchema, z.number()),
    Terrain: z.record(terrainSchema, z.number()),
    Tier: z.record(tierSchema, z.number()),
    Type: z.record(typeSchema, z.number()),
  }),
  equip: z.function(),
  eventDispatcher: z.unknown(),
  fetchMissions: z.function(),
  findAllEntities: z.function(),
  findClosestEntity: z.function(),
  findClosestMonster: z.function(),
  findClosestTree: z.function(),
  findEntities: z.function(),
  findEntity: z.function(),
  findOneEntity: z.function(),
  fps: z.number(),
  gather: z.function(),
  // stopCraft: z.function(),
  get: z.function(),
  getChunkHash: z.function(),
  getChunkKey: z.function(),
  getChunkName: z.function(),
  getCraftingRecipe: z.function(),
  getItemModValue: z.function(),
  getPartyMemberInfo: z.function(),
  getTerrain: z.function(),
  getTerrainAt: z.function(),
  getZoneLevel: z.function(),
  getZoneTier: z.function(),
  hasMp: z.function(),
  // disenchant: z.function(),
  hasTag: z.function(),
  inSkillRange: z.function(),
  isCdReady: z.function(),
  isGatherable: z.function(),
  isGcdReady: z.function(),
  // changeMissionReward: z.function(),
  // toggleMissionVisibility: z.function(),
  isInGatherRange: z.function(),
  // socket: z.function(),
  // unsocket: z.function(),
  isInRange: z.function(),
  isOnCd: z.function(),
  isOnGcd: z.function(),
  isReady: z.function(),
  isSkillInRange: z.function(),
  isSkillReady: z.function(),
  isType: z.function(),
  itemBaseValue: z.function(),
  itemModValue: z.function(),
  joinMission: z.function(),
  learn: z.function(),
  loadScript: z.function(),
  // toggleStation: z.function(),
  loadout: z.function(),
  // lockItems: z.function(),
  // unlockItems: z.function(),
  // stationInfo: z.function(),
  lockItem: z.function(),
  log: z.function(),
  makeMissionPrivate: z.function(),
  makeMissionPublic: z.function(),
  md: z.strictObject({
    e: z.record(z.string(), oldMetadataEntitiesSchema),
    entities: z.record(z.string(), oldMetadataEntitiesSchema),
    i: z.record(z.string(), oldMetadataItemsSchema),
    items: z.record(z.string(), oldMetadataItemsSchema),
    // recipes: z.record(z.string(), z.record(z.string(), z.unknown())),
    // skills: z.strictObject({})
  }),
  mdInfo: z.record(z.string(), z.strictObject({
    slots: z.array(z.string()).optional(),
  })),
  mine: z.function(),
  move: z.function(),
  moveItem: z.function(),
  // @ts-ignore
  moveItemMap: z.instanceof(top.Map),
  moveSkill: z.function(),
  nextChatHideAt: z.number(),
  off: z.function(),
  offAll: z.function(),
  on: z.function(),
  once: z.function(),
  openItem: z.function(),
  openPortal: z.function(),
  openPortalToEvent: z.undefined(),
  partyAccept: z.function(),
  partyDecline: z.function(),
  partyInvite: z.function(),
  partyKick: z.function(),
  partyLeave: z.function(),
  partyPromote: z.function(),
  placeBlock: z.function(),
  placeItem: z.function(),
  placeOrder: z.function(),
  placeStation: z.function(),
  projectiles: z.array(z.strictObject({
    id: z.number(),
    x: z.number(),
    y: z.number(),
    z: z.number(),
    dx: z.number(),
    dy: z.number(),
    speed: z.number(),
    elapsed: z.number(),
    duration: z.number(),
    w: z.number(),
    h: z.number(),
    targetId: z.number().optional(),
    targetX: z.number().optional(),
    targetY: z.number().optional(),
    targetZ: z.number().optional(),
  })),
  recycle: z.function(),
  removeAllListeners: z.function(),
  removeListener: z.function(),
  removeMog: z.function(),
  removePassive: z.function(),
  removeSkill: z.function(),
  removeTransmog: z.function(),
  repair: z.function(),
  rip: z.function(),
  selfDestruct: z.function(),
  sellPlot: z.function(),
  sendItem: z.function(),
  sendMail: z.function(),
  set: z.function(),
  setSpawn: z.function(),
  setTarget: z.function(),
  sortInv: z.function(),
  sortInventory: z.function(),
  startMission: z.function(),
  stop: z.function(),
  suicide: z.function(),
  takeAllItems: z.function(),
  // @ts-ignore
  takeAllItemsMap: z.instanceof(top.Map),
  takeBlock: z.function(),
  takeItem: z.function(),
  takeOrder: z.function(),
  takeStation: z.function(),
  talkWhisper: z.function(),
  targetId: z.number(),
  terrain: z.record(z.string(), z.array(z.array(z.array(z.number())))),
  time: z.number(),
  toCanvasX: z.function(),
  toCanvasY: z.function(),
  toggleMog: z.function(),
  toggleTransmog: z.function(),
  unequip: z.function(),
  unlockItem: z.function(),
  unstuck: z.function(),
  useConsumable: z.function(),
  useElevator: z.function(),
  useRune: z.function(),
  useSkill: z.function(),
  whisper: z.function(),
  // @ts-ignore
  ws: z.instanceof(top.WebSocket),
})

function validateApiSchema () {
  try {
    apiSchema.parse(dw)
    console.log('API is valid')
  } catch (error) {
    if (error instanceof ZodError) {
      // console.error(JSON.stringify(error.errors[0], null, 2))
      error.errors
        // .filter((e) => e.message === 'Required' && e?.received === 'undefined')
        .map((e) => console.error(JSON.stringify(e, null, 2)))
      // console.log([...new Set(error.errors.map((e) => e.message))])
      console.log(`${error.errors.length} errors`)
    }

    console.error('API validation failed', error)
  }
}

validateApiSchema()
setInterval(validateApiSchema, 60 * 60 * 1000)
