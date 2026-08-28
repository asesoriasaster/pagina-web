import { useState } from 'react';
import { CheckCircle2, Send } from 'lucide-react';
import Container from '@/components/Container';
import Reveal from '@/components/Reveal';

const businessTypes = [
  'Almacén / Minimarket',
  'Botillería',
  'Panadería',
  'Barbería / Estética',
  'Restaurante / Cafetería',
  'Ferretería',
  'Tienda / Retail',
  'Empresa / Pyme consolidada',
  'Otro',
];

export default function Contact() {
  const [submitted, setSubmitted] = useState(false);
  const [form, setForm] = useState({
    nombre: '',
    empresa: '',
    tipoNegocio: '',
    correo: '',
    telefono: '',
    mejorar: '',
    mensaje: '',
  });
  const [errors, setErrors] = useState<Record<string, string>>({});

  const validate = () => {
    const e: Record<string, string> = {};
    if (!form.nombre.trim()) e.nombre = 'Ingresa tu nombre';
    if (!form.empresa.trim()) e.empresa = 'Ingresa tu empresa o negocio';
    if (!form.correo.trim()) e.correo = 'Ingresa tu correo';
    else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.correo)) e.correo = 'Correo no válido';
    if (!form.telefono.trim()) e.telefono = 'Ingresa tu teléfono o WhatsApp';
    if (!form.mejorar.trim()) e.mejorar = 'Cuéntanos qué necesitas mejorar';
    return e;
  };

  const handleSubmit = (ev: React.FormEvent) => {
    ev.preventDefault();
    const e = validate();
    setErrors(e);
    if (Object.keys(e).length === 0) {
      setSubmitted(true);
    }
  };

  const update = (key: string, value: string) => {
    setForm((prev) => ({ ...prev, [key]: value }));
    if (errors[key]) setErrors((prev) => ({ ...prev, [key]: '' }));
  };

  return (
    <section id="contacto" className="py-24 sm:py-28 bg-white">
      <Container>
        <div className="grid lg:grid-cols-2 gap-14 items-start">
          <Reveal>
            <h2 className="text-3xl sm:text-4xl font-extrabold leading-[1.15] tracking-tight text-aster-black">
              ¿Cuánto sabes realmente de lo que ocurre en tu negocio?
            </h2>
            <p className="mt-5 text-base sm:text-lg text-aster-gray leading-relaxed">
              Conversemos sobre cómo funciona actualmente y qué podemos hacer para mejorarlo.
            </p>
            <p className="mt-4 text-[15px] text-aster-gray leading-relaxed">
              Completa tus datos y te contactaremos por WhatsApp para conversar sobre tu negocio y orientarte sobre la solución más adecuada.
            </p>
            <a
              href="#contacto"
              className="mt-8 inline-flex items-center justify-center rounded-full bg-aster-green px-7 py-3.5 text-base font-semibold text-white shadow-cardHover hover:bg-aster-greenDark transition-colors duration-200"
            >
              Hablar con Aster
            </a>
          </Reveal>

          <Reveal delay={150}>
            {submitted ? (
              <div className="rounded-[26px] bg-aster-greenSoft border border-aster-green/20 p-10 text-center">
                <span className="inline-flex items-center justify-center h-14 w-14 rounded-full bg-aster-green text-white mb-5">
                  <CheckCircle2 size={28} />
                </span>
                <h3 className="text-xl font-extrabold text-aster-black">¡Mensaje enviado!</h3>
                <p className="mt-3 text-[15px] text-aster-gray leading-relaxed">
                  Gracias por contactarnos. Nos pondremos en contacto contigo a la brevedad.
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="rounded-[26px] bg-aster-soft border border-gray-200/70 p-8 shadow-card" noValidate>
                <div className="grid sm:grid-cols-2 gap-4">
                  <Field label="Nombre" error={errors.nombre}>
                    <input type="text" value={form.nombre} onChange={(e) => update('nombre', e.target.value)} className={inputCls(errors.nombre)} />
                  </Field>
                  <Field label="Empresa o negocio" error={errors.empresa}>
                    <input type="text" value={form.empresa} onChange={(e) => update('empresa', e.target.value)} className={inputCls(errors.empresa)} />
                  </Field>
                </div>

                <div className="mt-4">
                  <Field label="Tipo de negocio">
                    <select value={form.tipoNegocio} onChange={(e) => update('tipoNegocio', e.target.value)} className={inputCls()}>
                      <option value="">Selecciona una opción</option>
                      {businessTypes.map((t) => <option key={t} value={t}>{t}</option>)}
                    </select>
                  </Field>
                </div>

                <div className="grid sm:grid-cols-2 gap-4 mt-4">
                  <Field label="Correo" error={errors.correo}>
                    <input type="email" value={form.correo} onChange={(e) => update('correo', e.target.value)} className={inputCls(errors.correo)} />
                  </Field>
                  <Field label="Teléfono / WhatsApp" error={errors.telefono}>
                    <input type="tel" value={form.telefono} onChange={(e) => update('telefono', e.target.value)} className={inputCls(errors.telefono)} />
                  </Field>
                </div>

                <div className="mt-4">
                  <Field label="¿Qué necesitas mejorar?" error={errors.mejorar}>
                    <input type="text" value={form.mejorar} onChange={(e) => update('mejorar', e.target.value)} className={inputCls(errors.mejorar)} />
                  </Field>
                </div>

                <div className="mt-4">
                  <Field label="Mensaje">
                    <textarea rows={3} value={form.mensaje} onChange={(e) => update('mensaje', e.target.value)} className={inputCls()} />
                  </Field>
                </div>

                <button
                  type="submit"
                  className="mt-6 w-full inline-flex items-center justify-center gap-2 rounded-full bg-aster-green px-6 py-3.5 text-base font-semibold text-white hover:bg-aster-greenDark transition-colors duration-200"
                >
                  <Send size={18} /> Enviar mensaje
                </button>
              </form>
            )}
          </Reveal>
        </div>
      </Container>
    </section>
  );
}

function inputCls(error?: string) {
  return `w-full rounded-xl bg-white border px-4 py-3 text-[15px] text-aster-black placeholder:text-gray-400 outline-none transition-colors ${
    error ? 'border-aster-red' : 'border-gray-200 focus:border-aster-green'
  }`;
}

function Field({ label, error, children }: { label: string; error?: string; children: React.ReactNode }) {
  return (
    <label className="block">
      <span className="block text-sm font-semibold text-aster-black mb-1.5">{label}</span>
      {children}
      {error && <span className="block text-xs text-aster-red mt-1 font-medium">{error}</span>}
    </label>
  );
}
