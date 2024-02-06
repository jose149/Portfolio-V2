import { getDomain } from "@/libraries";

const DEFAULT_MARKET_ORIGIN = "https://josecrespi.netlify.app/";

export const getMarketOrigin = (): string =>
  getDomain.isProduction ? window.location.origin : DEFAULT_MARKET_ORIGIN;
