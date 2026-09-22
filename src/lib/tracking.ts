export type CookieConsentState = {
  necessary: true;
  analytics: boolean;
  marketing: boolean;
  updatedAt: string;
};

const GA_ID =
  import.meta.env.VITE_GA_MEASUREMENT_ID?.trim();

const META_PIXEL_ID =
  import.meta.env.VITE_META_PIXEL_ID?.trim();

type Fbq = ((
  ...args: unknown[]
) => void) & {
  callMethod?: (...args: unknown[]) => void;
  queue?: unknown[][];
  loaded?: boolean;
  version?: string;
};

declare global {
  interface Window {
    dataLayer?: unknown[][];
    gtag?: (...args: unknown[]) => void;
    fbq?: Fbq;
    _fbq?: Fbq;
  }
}

function setGoogleDisabled(
  disabled: boolean,
) {
  if (!GA_ID) return;

  (
    window as unknown as Record<
      string,
      unknown
    >
  )[`ga-disable-${GA_ID}`] = disabled;
}

function loadGoogleAnalytics() {
  if (!GA_ID) return;

  setGoogleDisabled(false);

  if (!window.gtag) {
    window.dataLayer =
      window.dataLayer ?? [];

    window.gtag = (
      ...args: unknown[]
    ) => {
      window.dataLayer?.push(args);
    };
  }

  if (
    !document.getElementById(
      'aster-ga4',
    )
  ) {
    const script =
      document.createElement('script');

    script.id = 'aster-ga4';
    script.async = true;
    script.src =
      `https://www.googletagmanager.com/gtag/js?id=${encodeURIComponent(
        GA_ID,
      )}`;

    document.head.appendChild(
      script,
    );
  }

  window.gtag(
    'js',
    new Date(),
  );

  window.gtag(
    'config',
    GA_ID,
    {
      send_page_view: true,
    },
  );
}

function disableGoogleAnalytics() {
  setGoogleDisabled(true);
}

function createFbq(): Fbq {
  const fbq = ((
    ...args: unknown[]
  ) => {
    if (fbq.callMethod) {
      fbq.callMethod(...args);
      return;
    }

    fbq.queue?.push(args);
  }) as Fbq;

  fbq.queue = [];
  fbq.loaded = true;
  fbq.version = '2.0';

  return fbq;
}

function loadMetaPixel() {
  if (!META_PIXEL_ID) return;

  if (!window.fbq) {
    window.fbq = createFbq();
    window._fbq = window.fbq;
  }

  if (
    !document.getElementById(
      'aster-meta-pixel',
    )
  ) {
    const script =
      document.createElement('script');

    script.id =
      'aster-meta-pixel';
    script.async = true;
    script.src =
      'https://connect.facebook.net/en_US/fbevents.js';

    document.head.appendChild(
      script,
    );
  }

  window.fbq(
    'consent',
    'grant',
  );

  window.fbq(
    'init',
    META_PIXEL_ID,
  );

  window.fbq(
    'track',
    'PageView',
  );
}

function disableMetaPixel() {
  window.fbq?.(
    'consent',
    'revoke',
  );
}

export function applyCookieConsent(
  consent: CookieConsentState,
) {
  if (consent.analytics) {
    loadGoogleAnalytics();
  } else {
    disableGoogleAnalytics();
  }

  if (consent.marketing) {
    loadMetaPixel();
  } else {
    disableMetaPixel();
  }
}

export function trackAnalyticsEvent(
  eventName: string,
  params?: Record<
    string,
    string | number | boolean
  >,
) {
  if (!GA_ID || !window.gtag) {
    return;
  }

  window.gtag(
    'event',
    eventName,
    params ?? {},
  );
}

export function trackMetaEvent(
  eventName: string,
  params?: Record<
    string,
    string | number | boolean
  >,
) {
  if (
    !META_PIXEL_ID ||
    !window.fbq
  ) {
    return;
  }

  window.fbq(
    'trackCustom',
    eventName,
    params ?? {},
  );
}
