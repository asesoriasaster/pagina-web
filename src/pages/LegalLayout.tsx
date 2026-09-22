import {
  useEffect,
  type ReactNode,
} from 'react';
import { ArrowLeft } from 'lucide-react';

import Container from '@/components/Container';

export default function LegalLayout({
  title,
  subtitle,
  children,
}: {
  title: string;
  subtitle: string;
  children: ReactNode;
}) {
  useEffect(() => {
    document.title = `${title} | ASTER 360`;
    window.scrollTo(0, 0);
  }, [title]);

  return (
    <div className="min-h-screen bg-aster-soft text-aster-black">
      <header className="border-b border-gray-200 bg-white">
        <Container>
          <div className="flex min-h-20 items-center justify-between gap-5 py-4">
            <a
              href="/"
              aria-label="Volver a ASTER 360"
              className="inline-flex items-center"
            >
              <img
                src="/assets/images/logo-aster360.png"
                alt="ASTER 360"
                className="h-12 w-auto object-contain"
              />
            </a>

            <a
              href="/"
              className="inline-flex items-center gap-2 rounded-full border border-aster-green px-4 py-2 text-sm font-semibold text-aster-green transition-colors hover:bg-aster-greenSoft"
            >
              <ArrowLeft size={16} />
              Volver al sitio
            </a>
          </div>
        </Container>
      </header>

      <main className="py-14 sm:py-20">
        <Container>
          <article className="mx-auto max-w-4xl rounded-[28px] border border-gray-200 bg-white p-6 shadow-card sm:p-10 lg:p-12">
            <p className="text-sm font-bold uppercase tracking-[0.16em] text-aster-green">
              ASTER 360
            </p>
            <h1 className="mt-3 text-3xl font-extrabold tracking-tight sm:text-4xl">
              {title}
            </h1>
            <p className="mt-4 max-w-3xl text-base leading-relaxed text-aster-gray">
              {subtitle}
            </p>

            <div className="mt-9 space-y-8 text-[15px] leading-7 text-aster-gray [&_a]:font-semibold [&_a]:text-aster-green [&_a]:underline-offset-4 hover:[&_a]:underline [&_h2]:mb-3 [&_h2]:text-xl [&_h2]:font-extrabold [&_h2]:text-aster-black [&_li]:ml-5 [&_li]:list-disc [&_p+p]:mt-3 [&_strong]:font-semibold [&_strong]:text-aster-black">
              {children}
            </div>
          </article>
        </Container>
      </main>

      <footer className="border-t border-gray-200 bg-white py-7">
        <Container>
          <div className="flex flex-col gap-3 text-sm text-aster-gray sm:flex-row sm:items-center sm:justify-between">
            <p>© {new Date().getFullYear()} ASTER SpA.</p>
            <div className="flex flex-wrap gap-x-5 gap-y-2">
              <a href="/privacidad" className="font-semibold hover:text-aster-green">
                Privacidad
              </a>
              <a href="/cookies" className="font-semibold hover:text-aster-green">
                Cookies
              </a>
              <button
                type="button"
                onClick={() =>
                  window.dispatchEvent(
                    new Event('aster:cookie-preferences'),
                  )
                }
                className="font-semibold hover:text-aster-green"
              >
                Configurar cookies
              </button>
            </div>
          </div>
        </Container>
      </footer>
    </div>
  );
}
