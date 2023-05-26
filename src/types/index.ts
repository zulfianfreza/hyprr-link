export enum BUTTON_TYPE {
  FILL = 'fill',
  FILLROUNDED = 'fillrounded',
  FILLROUNDEDFULL = 'fillroundedfull',
  OUTLINE = 'outline',
  OUTLINEROUNDED = 'outlinerounded',
  OUTLINEROUNDEDFULL = 'outlineroundedfull',
  SOFTSHADOW = 'softshadow',
  SOFTSHADOWROUNDED = 'softshadowrounded',
  SOFTSHADOWROUNDEDFULL = 'softshadowroundedfull',
  HARDSHADOW = 'hardshadow',
  HARDSHADOWROUNDED = 'hardshadowrounded',
  HARDSHADOWROUNDEDFULL = 'hardshadowroundedfull',
}

export enum BACKGROUND_TYPE {
  SOLID = 'solid',
  GRADIENT = 'gradient',
  CUBE = 'cube',
  WIREFRAME = 'wireframe',
  COLORFUL = 'colorful',
  POLKA = 'polka',
  MINERAL_BLUE = 'mineralblue',
  MINERAL_GREEN = 'mineralgreen',
  MINERAL_ORANGE = 'mineralorange',
  MINERAL_YELLOW = 'mineralyellow',
}

export const BACKGROUND_LIST = [
  BACKGROUND_TYPE.SOLID as string,
  BACKGROUND_TYPE.GRADIENT as string,
  BACKGROUND_TYPE.CUBE as string,
  BACKGROUND_TYPE.COLORFUL as string,
  BACKGROUND_TYPE.POLKA as string,
]
