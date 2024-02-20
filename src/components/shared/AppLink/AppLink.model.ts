export const APP_BUTTON_TYPE = ['primary', 'secondary'] as const;
export type AppButtonType = (typeof APP_BUTTON_TYPE)[number];

export const APP_BUTTON_STATE = [
  'enabled',
  'disabled',
  'loadingDots',
  'loadingSpinner',
] as const;
export type AppButtonState = (typeof APP_BUTTON_STATE)[number];
