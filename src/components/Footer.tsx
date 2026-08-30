import {
  Instagram,
  Mail,
  Phone,
} from 'lucide-react';

import Container from '@/components/Container';
import WhatsAppIcon from '@/components/WhatsAppIcon';
import { serviceDropdown } from '@/data/navigation';

const footerNavigation = [
  {
    label: 'Aster App',
    href: '#aster-app',
  },
  {
    label: 'Pymes',
    href: '#comercio',
  },
  {
    label: 'Empresas',
    href: '#empresas',
  },
  {
    label: 'Planes',
    href: '#planes',
  },
  {
    label: 'Nosotros',
    href: '#nosotros',
  },
  {
    label: 'Contacto',
    href: '#contacto',
  },
];

const phoneDisplay =
  '+56 9 8348 0052';

const phoneHref =
  'tel:+56983480052';

const whatsappHref =
  'https://wa.me/56983480052';

const contactEmail =
  'contacto@aster360.cl';

const contactEmailHref =
  'mailto:contacto@aster360.cl';

const instagramHref =
  'https://www.instagram.com/aster.asesorias/';

export default function Footer() {
  return (
    <footer className="border-t border-gray-100 bg-white">
      <Container>
        <div className="grid gap-10 py-14 md:grid-cols-2 lg:grid-cols-[1.5fr_1fr_1fr]">
          <div>
            <a
              href="#inicio"
              className="inline-flex items-center"
              aria-label="ASTER - Inicio"
            >
              <img
                src="/assets/images/ASTER_LOGO.jpeg"
                alt="Logo ASTER"
                className="mb-4 h-12 w-auto object-contain"
                loading="lazy"
                decoding="async"
              />
            </a>

            <p className="max-w-md text-sm font-semibold uppercase leading-relaxed tracking-wide text-aster-black">
              Asesorías administrativas,
              comerciales y estratégicas
            </p>

            <p className="mt-4 max-w-md text-sm leading-relaxed text-aster-gray">
              Tecnología, información y
              acompañamiento para ayudarte
              a entender mejor tu negocio
              y tomar mejores decisiones.
            </p>
          </div>

          <div>
            <p className="mb-4 text-sm font-bold text-aster-black">
              Navegación
            </p>

            <ul className="space-y-2.5">
              {footerNavigation.map(
                (link) => (
                  <li key={link.href}>
                    <a
                      href={link.href}
                      className="text-[15px] text-aster-gray transition-colors hover:text-aster-green"
                    >
                      {link.label}
                    </a>
                  </li>
                ),
              )}
            </ul>
          </div>

          <div>
            <p className="mb-4 text-sm font-bold text-aster-black">
              Servicios
            </p>

            <ul className="space-y-2.5">
              {serviceDropdown.map(
                (link) => (
                  <li key={link.href}>
                    <a
                      href={link.href}
                      className="text-[15px] text-aster-gray transition-colors hover:text-aster-green"
                    >
                      {link.label}
                    </a>
                  </li>
                ),
              )}
            </ul>

            <a
              href={whatsappHref}
              target="_blank"
              rel="noreferrer"
              className="mt-6 inline-flex items-center justify-center gap-2 rounded-full bg-aster-green px-5 py-2.5 text-sm font-semibold text-white transition-colors hover:bg-aster-greenDark"
            >
              <WhatsAppIcon size={17} />
              Hablar con Aster
            </a>
          </div>
        </div>

        <div className="mb-8 rounded-[22px] border border-aster-green/15 bg-aster-greenSoft px-6 py-5 sm:px-8">
          <div className="flex flex-col gap-5 lg:flex-row lg:items-center lg:justify-between">
            <div className="lg:max-w-[36%]">
              <p className="text-sm font-bold uppercase tracking-wide text-aster-green">
                Contacto Aster
              </p>

              <p className="mt-1 text-sm leading-relaxed text-aster-gray">
                Estamos disponibles para
                conversar sobre tu negocio.
              </p>
            </div>

            <div className="grid gap-3 sm:grid-cols-3 lg:flex lg:items-center lg:gap-7">
              <a
                href={
                  contactEmailHref
                }
                className="group flex min-w-0 items-center gap-3 rounded-2xl bg-white/65 px-3 py-2.5 transition-all duration-200 hover:bg-white lg:bg-transparent lg:px-0 lg:py-0"
              >
                <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-white text-aster-green shadow-sm">
                  <Mail size={17} />
                </span>

                <span className="min-w-0">
                  <span className="block text-xs font-medium text-aster-gray">
                    Correo
                  </span>

                  <span className="block text-sm font-semibold text-aster-black transition-colors group-hover:text-aster-green">
                    {contactEmail}
                  </span>
                </span>
              </a>

              <a
                href={phoneHref}
                className="group flex min-w-0 items-center gap-3 rounded-2xl bg-white/65 px-3 py-2.5 transition-all duration-200 hover:bg-white lg:bg-transparent lg:px-0 lg:py-0"
              >
                <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-white text-aster-green shadow-sm">
                  <Phone size={17} />
                </span>

                <span className="min-w-0">
                  <span className="block text-xs font-medium text-aster-gray">
                    Teléfono
                  </span>

                  <span className="block whitespace-nowrap text-sm font-semibold text-aster-black transition-colors group-hover:text-aster-green">
                    {phoneDisplay}
                  </span>
                </span>
              </a>

              <a
                href={
                  whatsappHref
                }
                target="_blank"
                rel="noreferrer"
                className="group flex min-w-0 items-center gap-3 rounded-2xl bg-white/65 px-3 py-2.5 transition-all duration-200 hover:bg-white lg:bg-transparent lg:px-0 lg:py-0"
              >
                <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-aster-green text-white shadow-sm">
                  <WhatsAppIcon
                    size={17}
                  />
                </span>

                <span className="min-w-0">
                  <span className="block text-xs font-medium text-aster-gray">
                    WhatsApp Business
                  </span>

                  <span className="block whitespace-nowrap text-sm font-semibold text-aster-black transition-colors group-hover:text-aster-green">
                    {phoneDisplay}
                  </span>
                </span>
              </a>
            </div>
          </div>
        </div>

        <div className="h-px bg-gradient-to-r from-transparent via-aster-green/30 to-transparent" />

        <div className="flex flex-col gap-5 py-6">
          <div className="flex flex-col justify-between gap-3 sm:flex-row sm:items-center">
            <p className="text-sm text-aster-gray">
              © {new Date().getFullYear()}{' '}
              Aster. Todos los derechos
              reservados.
            </p>

            <p className="text-sm font-semibold tracking-wide text-aster-black">
              Información para decidir.
              Libertad para avanzar.
            </p>
          </div>

          <div className="flex flex-col gap-3 border-t border-gray-100 pt-5 sm:flex-row sm:items-center sm:justify-end sm:gap-5">
            <a
              href={
                contactEmailHref
              }
              className="inline-flex items-center gap-2 text-sm font-semibold text-aster-gray transition-colors hover:text-aster-green"
            >
              <Mail size={16} />
              {contactEmail}
            </a>

            <a
              href={
                instagramHref
              }
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 text-sm font-semibold text-aster-gray transition-colors hover:text-aster-green"
              aria-label="Instagram de Aster"
            >
              <Instagram size={17} />
              @aster.asesorias
            </a>
          </div>
        </div>
      </Container>
    </footer>
  );
}