export const APP_BUTTON_TYPE = ["primary", "white"] as const;

export type AppButtonType = (typeof APP_BUTTON_TYPE)[number];

export const APP_BUTTON_STATE = [
  "default",
  "loading",
  "disabled",
  "no-availability",
] as const;

export type AppButtonState = (typeof APP_BUTTON_STATE)[number];
