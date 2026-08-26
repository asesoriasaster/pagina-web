import { useEffect, useState } from 'react';
import { ChevronDown, Menu, X } from 'lucide-react';
import { navLinks, serviceDropdown } from '@/data/navigation';
import WhatsAppIcon from '@/components/WhatsAppIcon';

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false);
  const [mobileServicesOpen, setMobileServicesOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);

    onScroll();
    window.addEventListener('scroll', onScroll);

    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = menuOpen ? 'hidden' : '';

    return () => {
      document.body.style.overflow = '';
    };
  }, [menuOpen]);

  const handleLinkClick = () => {
    setMenuOpen(false);
    setMobileServicesOpen(false);
    setServicesOpen(false);
  };

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 bg-white/95 backdrop-blur transition-shadow duration-300 ${
        scrolled ? 'shadow-[0_1px_0_0_rgba(17,17,17,0.08)]' : ''
      }`}
    >
      <div className="mx-auto w-full max-w-content px-5 sm:px-6 lg:px-8">
        <div className="flex h-20 items-center justify-between">
          <a
            href="#inicio"
            onClick={handleLinkClick}
            className="flex shrink-0 items-center"
            aria-label="ASTER - Inicio"
          >
            <img
              src="/assets/images/ASTER_LOGO.jpeg"
              alt="Logo ASTER"
              className="h-14 w-auto object-contain"
            />
          </a>

          <nav
            className="hidden items-center gap-5 xl:flex"
            aria-label="Navegación principal"
          >
            {navLinks.map((link) =>
              link.hasDropdown ? (
                <div
                  key={link.href}
                  className="relative"
                  onMouseEnter={() => setServicesOpen(true)}
                  onMouseLeave={() => setServicesOpen(false)}
                >
                  <button
                    type="button"
                    onClick={() => setServicesOpen((open) => !open)}
                    aria-expanded={servicesOpen}
                    aria-haspopup="true"
                    className="group relative flex items-center gap-1 whitespace-nowrap text-[13.5px] font-semibold text-aster-green transition-colors hover:text-aster-greenDark"
                  >
                    {link.label}

                    <ChevronDown
                      size={14}
                      className={`transition-transform duration-200 ${
                        servicesOpen ? 'rotate-180' : ''
                      }`}
                    />

                    <span className="absolute -bottom-1 left-0 h-[2px] w-0 bg-aster-green transition-all duration-300 group-hover:w-full" />
                  </button>

                  {servicesOpen && (
                    <div className="absolute left-1/2 top-full z-[60] w-64 -translate-x-1/2 pt-3">
                      <div className="overflow-hidden rounded-2xl border border-gray-100 bg-white py-2 shadow-cardHover">
                        {serviceDropdown.map((item) => (
                          <a
                            key={item.href}
                            href={item.href}
                            onClick={handleLinkClick}
                            className="block px-5 py-3 text-sm font-semibold text-aster-black transition-colors hover:bg-aster-greenSoft hover:text-aster-green"
                          >
                            {item.label}
                          </a>
                        ))}
                      </div>
                    </div>
                  )}
                </div>
              ) : (
                <a
                  key={link.href}
                  href={link.href}
                  onClick={handleLinkClick}
                  className="group relative whitespace-nowrap text-[13.5px] font-semibold text-aster-green transition-colors hover:text-aster-greenDark"
                >
                  {link.label}

                  <span className="absolute -bottom-1 left-0 h-[2px] w-0 bg-aster-green transition-all duration-300 group-hover:w-full" />
                </a>
              ),
            )}
          </nav>

          <div className="ml-4 hidden shrink-0 items-center xl:flex">
            <a
              href="https://wa.me/56983480052"
              onClick={handleLinkClick}
              className="inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-full bg-aster-green px-5 py-2.5 text-[14px] font-semibold text-white shadow-sm transition-all duration-200 hover:bg-aster-greenDark hover:shadow-cardHover"
            >
              <WhatsAppIcon size={17} />
              Hablar con Aster
            </a>
          </div>

          <button
            type="button"
            onClick={() => {
              setMenuOpen((open) => !open);
              setMobileServicesOpen(false);
            }}
            className="inline-flex h-10 w-10 items-center justify-center rounded-lg text-aster-green transition-colors hover:bg-aster-soft xl:hidden"
            aria-label={menuOpen ? 'Cerrar menú' : 'Abrir menú'}
            aria-expanded={menuOpen}
          >
            {menuOpen ? <X size={26} /> : <Menu size={26} />}
          </button>
        </div>
      </div>

      <div
        className={`overflow-hidden border-t border-gray-100 bg-white transition-[max-height,opacity] duration-300 ease-in-out xl:hidden ${
          menuOpen ? 'max-h-[48rem] opacity-100' : 'max-h-0 opacity-0'
        }`}
      >
        <nav
          className="flex flex-col gap-1 px-6 py-4"
          aria-label="Navegación móvil"
        >
          {navLinks.map((link) =>
            link.hasDropdown ? (
              <div key={link.href}>
                <button
                  type="button"
                  onClick={() =>
                    setMobileServicesOpen((open) => !open)
                  }
                  aria-expanded={mobileServicesOpen}
                  className="flex w-full items-center justify-between border-b border-gray-100 py-3 text-base font-semibold text-aster-green"
                >
                  {link.label}

                  <ChevronDown
                    size={18}
                    className={`transition-transform duration-200 ${
                      mobileServicesOpen ? 'rotate-180' : ''
                    }`}
                  />
                </button>

                <div
                  className={`overflow-hidden transition-[max-height,opacity] duration-300 ${
                    mobileServicesOpen
                      ? 'max-h-64 opacity-100'
                      : 'max-h-0 opacity-0'
                  }`}
                >
                  <div className="flex flex-col pl-4">
                    {serviceDropdown.map((item) => (
                      <a
                        key={item.href}
                        href={item.href}
                        onClick={handleLinkClick}
                        className="border-b border-gray-100 py-3 text-[15px] font-medium text-aster-black transition-colors hover:text-aster-green"
                      >
                        {item.label}
                      </a>
                    ))}
                  </div>
                </div>
              </div>
            ) : (
              <a
                key={link.href}
                href={link.href}
                onClick={handleLinkClick}
                className="border-b border-gray-100 py-3 text-base font-semibold text-aster-green"
              >
                {link.label}
              </a>
            ),
          )}

          <a
            href="https://wa.me/56983480052"
            onClick={handleLinkClick}
            className="mt-4 inline-flex items-center justify-center gap-2 rounded-full bg-aster-green px-6 py-3 text-base font-semibold text-white"
          >
            <WhatsAppIcon size={19} />
            Hablar con Aster
          </a>
        </nav>
      </div>
    </header>
  );
}