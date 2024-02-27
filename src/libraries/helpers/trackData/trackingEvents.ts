import { GoogleAnalyticsEvent } from './googleAnalytics/eventsType';
import { trackGoogleAnalyticsEvent } from './googleAnalytics/trackEvents';

export function trackContactButtonClicked(): void {
  trackGoogleAnalyticsEvent(GoogleAnalyticsEvent.contactButtonClick);
}
