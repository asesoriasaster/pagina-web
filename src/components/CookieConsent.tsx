import {
  useEffect,
  useState,
} from 'react';
import {
  ShieldCheck,
  X,
} from 'lucide-react';

import {
  applyCookieConsent,
  type CookieConsentState,
} from '@/lib/tracking';

const STORAGE_KEY =
  'aster_cookie_consent_v1';

function readConsent():
  | CookieConsentState
  | null {
  try {
    const raw =
      window.localStorage.getItem(
        STORAGE_KEY,
      );

    if (!raw) return null;

    const parsed = JSON.parse(
      raw,
    ) as Partial<CookieConsentState>;

    if (
      typeof parsed.analytics !==
        'boolean' ||
      typeof parsed.marketing !==
        'boolean'
    ) {
      return null;
    }

    return {
      necessary: true,
      analytics:
        parsed.analytics,
      marketing:
        parsed.marketing,
      updatedAt:
        parsed.updatedAt ??
        new Date().toISOString(),
    };
  } catch {
    return null;
  }
}

function makeConsent(
  analytics: boolean,
  marketing: boolean,
): CookieConsentState {
  return {
    necessary: true,
    analytics,
    marketing,
    updatedAt:
      new Date().toISOString(),
  };
}

export default function CookieConsent() {
  const [consent, setConsent] =
    useState<
      CookieConsentState | null
    >(null);

  const [ready, setReady] =
    useState(false);

  const [
    showPreferences,
    setShowPreferences,
  ] = useState(false);

  const [
    analyticsDraft,
    setAnalyticsDraft,
  ] = useState(false);

  const [
    marketingDraft,
    setMarketingDraft,
  ] = useState(false);

  useEffect(() => {
    const saved =
      readConsent();

    setConsent(saved);

    if (saved) {
      setAnalyticsDraft(
        saved.analytics,
      );
      setMarketingDraft(
        saved.marketing,
      );
      applyCookieConsent(saved);
    }

    setReady(true);
  }, []);

  useEffect(() => {
    const openPreferences =
      () => {
        const saved =
          readConsent();

        setAnalyticsDraft(
          saved?.analytics ??
            false,
        );
        setMarketingDraft(
          saved?.marketing ??
            false,
        );
        setShowPreferences(true);
      };

    window.addEventListener(
      'aster:cookie-preferences',
      openPreferences,
    );

    return () =>
      window.removeEventListener(
        'aster:cookie-preferences',
        openPreferences,
      );
  }, []);

  const save = (
    next: CookieConsentState,
  ) => {
    window.localStorage.setItem(
      STORAGE_KEY,
      JSON.stringify(next),
    );

    setConsent(next);
    setAnalyticsDraft(
      next.analytics,
    );
    setMarketingDraft(
      next.marketing,
    );
    applyCookieConsent(next);
    setShowPreferences(false);
  };

  if (!ready) return null;

  return (
    <>
      {!consent && (
        <div className="fixed inset-x-3 bottom-3 z-[210] mx-auto max-w-5xl rounded-[24px] border border-gray-200 bg-white p-5 shadow-2xl sm:p-6">
          <div className="flex flex-col gap-5 lg:flex-row lg:items-center lg:justify-between">
            <div className="max-w-2xl">
              <div className="mb-2 flex items-center gap-2 text-aster-green">
                <ShieldCheck
                  size={20}
                />
                <p className="font-bold">
                  Tu privacidad importa
                </p>
              </div>

              <p className="text-sm leading-relaxed text-aster-gray">
                Aster utiliza
                cookies necesarias para
                el funcionamiento del
                sitio. Con tu
                autorización también
                podemos usar cookies de
                analítica para entender
                cómo se utiliza la web y
                cookies de marketing
                para medir campañas.
                Puedes aceptar,
                rechazar o configurar
                las opcionales.
              </p>
            </div>

            <div className="flex flex-col gap-2 sm:flex-row lg:shrink-0">
              <button
                type="button"
                onClick={() =>
                  save(
                    makeConsent(
                      false,
                      false,
                    ),
                  )
                }
                className="rounded-full border border-gray-300 px-4 py-2.5 text-sm font-semibold text-aster-black transition-colors hover:border-aster-green hover:text-aster-green"
              >
                Rechazar opcionales
              </button>

              <button
                type="button"
                onClick={() =>
                  setShowPreferences(
                    true,
                  )
                }
                className="rounded-full border border-aster-green px-4 py-2.5 text-sm font-semibold text-aster-green transition-colors hover:bg-aster-greenSoft"
              >
                Configurar
              </button>

              <button
                type="button"
                onClick={() =>
                  save(
                    makeConsent(
                      true,
                      true,
                    ),
                  )
                }
                className="rounded-full bg-aster-green px-5 py-2.5 text-sm font-semibold text-white transition-colors hover:bg-aster-greenDark"
              >
                Aceptar todas
              </button>
            </div>
          </div>
        </div>
      )}

      {showPreferences && (
        <div className="fixed inset-0 z-[220] flex items-center justify-center bg-black/45 p-4">
          <div className="w-full max-w-xl rounded-[26px] bg-white p-6 shadow-2xl sm:p-7">
            <div className="mb-6 flex items-start justify-between gap-4">
              <div>
                <p className="text-xl font-bold text-aster-black">
                  Preferencias de
                  cookies
                </p>

                <p className="mt-2 text-sm leading-relaxed text-aster-gray">
                  Tú decides qué
                  tecnologías
                  opcionales puede usar
                  Aster en este
                  navegador.
                </p>
              </div>

              {consent && (
                <button
                  type="button"
                  onClick={() =>
                    setShowPreferences(
                      false,
                    )
                  }
                  aria-label="Cerrar preferencias"
                  className="rounded-full p-2 text-aster-gray transition-colors hover:bg-gray-100 hover:text-aster-black"
                >
                  <X size={20} />
                </button>
              )}
            </div>

            <div className="space-y-3">
              <div className="rounded-2xl border border-gray-200 p-4">
                <div className="flex items-center justify-between gap-4">
                  <div>
                    <p className="font-semibold text-aster-black">
                      Necesarias
                    </p>
                    <p className="mt-1 text-sm text-aster-gray">
                      Permiten funciones
                      esenciales del
                      sitio y no se
                      pueden desactivar.
                    </p>
                  </div>

                  <span className="rounded-full bg-aster-greenSoft px-3 py-1 text-xs font-bold text-aster-green">
                    Siempre activas
                  </span>
                </div>
              </div>

              <label className="flex cursor-pointer items-center justify-between gap-4 rounded-2xl border border-gray-200 p-4">
                <div>
                  <p className="font-semibold text-aster-black">
                    Analítica
                  </p>
                  <p className="mt-1 text-sm text-aster-gray">
                    Permite usar Google
                    Analytics 4 para
                    conocer visitas y
                    uso general de la
                    web.
                  </p>
                </div>

                <input
                  type="checkbox"
                  checked={
                    analyticsDraft
                  }
                  onChange={(event) =>
                    setAnalyticsDraft(
                      event.target
                        .checked,
                    )
                  }
                  className="h-5 w-5 accent-aster-green"
                />
              </label>

              <label className="flex cursor-pointer items-center justify-between gap-4 rounded-2xl border border-gray-200 p-4">
                <div>
                  <p className="font-semibold text-aster-black">
                    Marketing
                  </p>
                  <p className="mt-1 text-sm text-aster-gray">
                    Permite usar Meta
                    Pixel para medir
                    campañas y
                    conversiones
                    publicitarias.
                  </p>
                </div>

                <input
                  type="checkbox"
                  checked={
                    marketingDraft
                  }
                  onChange={(event) =>
                    setMarketingDraft(
                      event.target
                        .checked,
                    )
                  }
                  className="h-5 w-5 accent-aster-green"
                />
              </label>
            </div>

            <div className="mt-6 flex flex-col-reverse gap-2 sm:flex-row sm:justify-end">
              <button
                type="button"
                onClick={() =>
                  save(
                    makeConsent(
                      false,
                      false,
                    ),
                  )
                }
                className="rounded-full border border-gray-300 px-4 py-2.5 text-sm font-semibold text-aster-black"
              >
                Rechazar opcionales
              </button>

              <button
                type="button"
                onClick={() =>
                  save(
                    makeConsent(
                      analyticsDraft,
                      marketingDraft,
                    ),
                  )
                }
                className="rounded-full bg-aster-green px-5 py-2.5 text-sm font-semibold text-white transition-colors hover:bg-aster-greenDark"
              >
                Guardar preferencias
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
