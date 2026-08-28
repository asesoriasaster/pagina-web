import { Instagram, Linkedin, Mail, MessageCircle } from 'lucide-react';
import Container from '@/components/Container';
import { navLinks } from '@/data/navigation';

export default function Footer() {
  return (
    <footer className="bg-white border-t border-gray-100">
      <Container>
        <div className="py-14 grid gap-10 lg:grid-cols-[1.5fr_1fr_1fr]">
          <div>
            <img src="/assets/images/ASTER_LOGO.jpeg" alt="Logo ASTER" className="h-12 w-auto object-contain mb-4" />
            <p className="text-sm font-semibold text-aster-black uppercase tracking-wide">
              Asesorías administrativas, comerciales y estratégicas
            </p>
            <div className="flex items-center gap-3 mt-6">
              <SocialLink icon={<Instagram size={18} />} label="Instagram" />
              <SocialLink icon={<Linkedin size={18} />} label="LinkedIn" />
              <SocialLink icon={<MessageCircle size={18} />} label="WhatsApp" />
              <SocialLink icon={<Mail size={18} />} label="Correo" />
            </div>
          </div>

          <div>
            <p className="text-sm font-bold text-aster-black mb-4">Navegación</p>
            <ul className="space-y-2.5">
              {navLinks.map((link) => (
                <li key={link.href}>
                  <a href={link.href} className="text-[15px] text-aster-gray hover:text-aster-green transition-colors">
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <p className="text-sm font-bold text-aster-black mb-4">Legal</p>
            <ul className="space-y-2.5">
              <li><a href="#" className="text-[15px] text-aster-gray hover:text-aster-green transition-colors">Política de privacidad</a></li>
              <li><a href="#" className="text-[15px] text-aster-gray hover:text-aster-green transition-colors">Términos y condiciones</a></li>
            </ul>
          </div>
        </div>

        <div className="h-px bg-gradient-to-r from-transparent via-aster-green/30 to-transparent" />
        <div className="py-6 flex flex-col sm:flex-row items-center justify-between gap-3">
          <p className="text-sm text-aster-gray">© {new Date().getFullYear()} Aster. Todos los derechos reservados.</p>
          <p className="text-sm font-semibold text-aster-black tracking-wide">Información para decidir. Libertad para avanzar.</p>
        </div>
      </Container>
    </footer>
  );
}

function SocialLink({ icon, label }: { icon: React.ReactNode; label: string }) {
  return (
    <a
      href="#"
      aria-label={label}
      className="flex items-center justify-center h-10 w-10 rounded-full bg-aster-soft text-aster-black hover:bg-aster-green hover:text-white transition-colors duration-200"
    >
      {icon}
    </a>
  );
}
