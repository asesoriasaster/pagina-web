import { useEffect, useState } from 'react';
import { ChevronDown, Menu, X } from 'lucide-react';
import { navLinks, serviceDropdown } from '@/data/navigation';

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
      className={`fixed top-0 inset-x-0 z-50 bg-white/95 backdrop-blur transition-shadow duration-300 ${
        scrolled ? 'shadow-[0_1px_0_0_rgba(17,17,17,0.08)]' : ''
      }`}
    >
      <div className="mx-auto w-full max-w-content px-5 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          <a href="#inicio" className="flex items-center shrink-0" aria-label="ASTER - Inicio">
            <img
              src="/assets/images/ASTER_LOGO.jpeg"
              alt="Logo ASTER"
              className="h-13 sm:h-14 w-auto object-contain"
              style={{ height: '3.5rem' }}
            />
          </a>

          <nav className="hidden xl:flex items-center gap-5" aria-label="Navegación principal">
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
                    onClick={() => setServicesOpen((v) => !v)}
                    aria-expanded={servicesOpen}
                    aria-haspopup="true"
                    className="flex items-center gap-1 text-[13.5px] font-semibold text-aster-green hover:text-aster-greenDark transition-colors relative group whitespace-nowrap"
                  >
                    {link.label}
                    <ChevronDown size={14} className={`transition-transform duration-200 ${servicesOpen ? 'rotate-180' : ''}`} />
                    <span className="absolute -bottom-1 left-0 w-0 h-[2px] bg-aster-green transition-all duration-300 group-hover:w-full" />
                  </button>
                  {servicesOpen && (
                    <div className="absolute top-full left-1/2 -translate-x-1/2 mt-2 w-60 bg-white rounded-2xl border border-gray-100 shadow-cardHover py-2 z-[60] animate-fadeUp">
                      {serviceDropdown.map((item) => (
                        <a
                          key={item.href}
                          href={item.href}
                          onClick={handleLinkClick}
                          className="block px-5 py-3 text-sm font-semibold text-aster-black hover:text-aster-green hover:bg-aster-greenSoft transition-colors"
                        >
                          {item.label}
                        </a>
                      ))}
                    </div>
                  )}
                </div>
              ) : (
                <a
                  key={link.href}
                  href={link.href}
                  className="text-[13.5px] font-semibold text-aster-green hover:text-aster-greenDark transition-colors relative group whitespace-nowrap"
                >
                  {link.label}
                  <span className="absolute -bottom-1 left-0 w-0 h-[2px] bg-aster-green transition-all duration-300 group-hover:w-full" />
                </a>
              )
            )}
          </nav>

          <div className="hidden xl:flex items-center shrink-0 ml-4">
            <a
              href="#contacto"
              className="inline-flex items-center justify-center rounded-full bg-aster-green px-5 py-2.5 text-[14px] font-semibold text-white shadow-sm hover:bg-aster-greenDark hover:shadow-cardHover transition-all duration-200 whitespace-nowrap"
            >
              Hablar con Aster
            </a>
          </div>

          <button
            type="button"
            onClick={() => setMenuOpen((v) => !v)}
            className="xl:hidden inline-flex items-center justify-center h-10 w-10 rounded-lg text-aster-green hover:bg-aster-soft transition-colors"
            aria-label={menuOpen ? 'Cerrar menú' : 'Abrir menú'}
            aria-expanded={menuOpen}
          >
            {menuOpen ? <X size={26} /> : <Menu size={26} />}
          </button>
        </div>
      </div>

      <div
        className={`xl:hidden overflow-hidden bg-white border-t border-gray-100 transition-[max-height,opacity] duration-300 ease-in-out ${
          menuOpen ? 'max-h-[40rem] opacity-100' : 'max-h-0 opacity-0'
        }`}
      >
        <nav className="flex flex-col px-6 py-4 gap-1" aria-label="Navegación móvil">
          {navLinks.map((link) =>
            link.hasDropdown ? (
              <div key={link.href}>
                <button
                  onClick={() => setMobileServicesOpen((v) => !v)}
                  className="w-full flex items-center justify-between py-3 text-base font-semibold text-aster-green border-b border-gray-100"
                >
                  {link.label}
                  <ChevronDown size={18} className={`transition-transform duration-200 ${mobileServicesOpen ? 'rotate-180' : ''}`} />
                </button>
                {mobileServicesOpen && (
                  <div className="flex flex-col pl-4">
                    {serviceDropdown.map((item) => (
                      <a
                        key={item.href}
                        href={item.href}
                        onClick={handleLinkClick}
                        className="py-3 text-[15px] font-medium text-aster-black border-b border-gray-100"
                      >
                        {item.label}
                      </a>
                    ))}
                  </div>
                )}
              </div>
            ) : (
              <a
                key={link.href}
                href={link.href}
                onClick={handleLinkClick}
                className="py-3 text-base font-semibold text-aster-green border-b border-gray-100"
              >
                {link.label}
              </a>
            )
          )}
          <a
            href="#contacto"
            onClick={handleLinkClick}
            className="mt-4 inline-flex items-center justify-center rounded-full bg-aster-green px-6 py-3 text-base font-semibold text-white"
          >
            Hablar con Aster
          </a>
        </nav>
      </div>
    </header>
  );
}
