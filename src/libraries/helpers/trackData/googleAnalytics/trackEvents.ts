import { GoogleAnalyticsEvent } from './eventsType';

declare global {
  interface Window {
    dataLayer?: object[];
  }
}

export function trackGoogleAnalyticsEvent(
  eventName: GoogleAnalyticsEvent,
  objectPushedToDataLayer?: Record<string, unknown>
): void {
  if (window.dataLayer) {
    const dataLayerObject = {
      event: eventName,
    };
    if (objectPushedToDataLayer) {
      Object.assign(dataLayerObject, objectPushedToDataLayer);
    }
    window.dataLayer.push(dataLayerObject);
  }
}
