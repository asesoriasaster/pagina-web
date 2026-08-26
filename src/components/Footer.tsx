import type { ReactNode } from 'react';
import {
  Instagram,
  Linkedin,
  Mail,
  Phone,
} from 'lucide-react';

import Container from '@/components/Container';
import WhatsAppIcon from '@/components/WhatsAppIcon';
import { serviceDropdown } from '@/data/navigation';

const footerNavigation = [
  { label: 'Aster App', href: '#aster-app' },
  { label: 'Aster Comercio para Pymes', href: '#comercio' },
  { label: 'Empresas & Operaciones', href: '#empresas' },
  { label: 'Planes', href: '#planes' },
  { label: 'Nosotros', href: '#nosotros' },
];

const phoneDisplay = '+56 9 8348 0052';
const phoneHref = 'tel:+56983480052';
const whatsappHref = 'https://wa.me/56983480052';

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
              />
            </a>

            <p className="max-w-md text-sm font-semibold uppercase leading-relaxed tracking-wide text-aster-black">
              Asesorías administrativas, comerciales y estratégicas
            </p>

            <p className="mt-4 max-w-md text-sm leading-relaxed text-aster-gray">
              Tecnología, información y acompañamiento para ayudarte a
              entender mejor tu negocio y tomar mejores decisiones.
            </p>

            <div className="mt-6 flex items-center gap-3">
              <SocialIcon
                icon={<Instagram size={18} />}
                label="Instagram"
              />

              <SocialIcon
                icon={<Linkedin size={18} />}
                label="LinkedIn"
              />

              <a
                href={whatsappHref}
                target="_blank"
                rel="noreferrer"
                aria-label="WhatsApp Business Aster"
                title="WhatsApp Business"
                className="flex h-10 w-10 items-center justify-center rounded-full bg-aster-greenSoft text-aster-green transition-all duration-200 hover:bg-aster-green hover:text-white"
              >
                <WhatsAppIcon size={18} />
              </a>

              <SocialIcon
                icon={<Mail size={18} />}
                label="Correo"
              />
            </div>

            <p className="mt-3 text-xs text-aster-gray">
              Instagram, LinkedIn y correo próximamente.
            </p>
          </div>

          <div>
            <p className="mb-4 text-sm font-bold text-aster-black">
              Navegación
            </p>

            <ul className="space-y-2.5">
              {footerNavigation.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    className="text-[15px] text-aster-gray transition-colors hover:text-aster-green"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <p className="mb-4 text-sm font-bold text-aster-black">
              Servicios
            </p>

            <ul className="space-y-2.5">
              {serviceDropdown.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    className="text-[15px] text-aster-gray transition-colors hover:text-aster-green"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
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

        {/* Contacto */}
        <div className="mb-8 rounded-[22px] border border-aster-green/15 bg-aster-greenSoft px-6 py-5 sm:px-8">
          <div className="flex flex-col gap-5 sm:flex-row sm:items-center sm:justify-between">
            <div>
              <p className="text-sm font-bold uppercase tracking-wide text-aster-green">
                Contacto Aster
              </p>

              <p className="mt-1 text-sm text-aster-gray">
                Estamos disponibles para conversar sobre tu negocio.
              </p>
            </div>

            <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:gap-6">
              <a
                href={phoneHref}
                className="inline-flex items-center gap-2 text-sm font-semibold text-aster-black transition-colors hover:text-aster-green"
              >
                <span className="flex h-9 w-9 items-center justify-center rounded-full bg-white text-aster-green shadow-sm">
                  <Phone size={17} />
                </span>

                <span>
                  <span className="block text-xs font-medium text-aster-gray">
                    Teléfono
                  </span>
                  {phoneDisplay}
                </span>
              </a>

              <a
                href={whatsappHref}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-2 text-sm font-semibold text-aster-black transition-colors hover:text-aster-green"
              >
                <span className="flex h-9 w-9 items-center justify-center rounded-full bg-aster-green text-white shadow-sm">
                  <WhatsAppIcon size={17} />
                </span>

                <span>
                  <span className="block text-xs font-medium text-aster-gray">
                    WhatsApp Business
                  </span>
                  {phoneDisplay}
                </span>
              </a>
            </div>
          </div>
        </div>

        <div className="h-px bg-gradient-to-r from-transparent via-aster-green/30 to-transparent" />

        <div className="flex flex-col items-center justify-between gap-3 py-6 sm:flex-row">
          <p className="text-sm text-aster-gray">
            © {new Date().getFullYear()} Aster. Todos los derechos reservados.
          </p>

          <p className="text-sm font-semibold tracking-wide text-aster-black">
            Información para decidir. Libertad para avanzar.
          </p>
        </div>
      </Container>
    </footer>
  );
}

function SocialIcon({
  icon,
  label,
}: {
  icon: ReactNode;
  label: string;
}) {
  return (
    <span
      aria-label={`${label} - próximamente`}
      title={`${label} - próximamente`}
      className="flex h-10 w-10 cursor-default items-center justify-center rounded-full bg-aster-soft text-aster-gray"
    >
      {icon}
    </span>
  );
}