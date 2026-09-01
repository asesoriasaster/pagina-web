import {
  useState,
  type FormEvent,
  type ReactNode,
} from 'react';

import {
  CheckCircle2,
  Mail,
  MessageCircle,
  Phone,
  Send,
} from 'lucide-react';

import Container from '@/components/Container';
import Reveal from '@/components/Reveal';
import WhatsAppIcon from '@/components/WhatsAppIcon';

const phoneDisplay = '+56 9 8348 0052';
const phoneHref = 'tel:+56983480052';

const whatsappBaseUrl =
  'https://wa.me/56983480052';

const contactEmail =
  'contacto@aster360.cl';

const contactEmailHref =
  'mailto:contacto@aster360.cl';

const netlifyFormName =
  'contacto-aster';

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

interface FormState {
  nombre: string;
  empresa: string;
  tipoNegocio: string;
  correo: string;
  telefono: string;
  mejorar: string;
  mensaje: string;
}

const initialForm: FormState = {
  nombre: '',
  empresa: '',
  tipoNegocio: '',
  correo: '',
  telefono: '',
  mejorar: '',
  mensaje: '',
};

export default function Contact() {
  const [submitted, setSubmitted] =
    useState(false);

  const [submitting, setSubmitting] =
    useState(false);

  const [submitError, setSubmitError] =
    useState('');

  const [form, setForm] =
    useState<FormState>(initialForm);

  const [errors, setErrors] =
    useState<Record<string, string>>({});

  const validate = () => {
    const nextErrors: Record<
      string,
      string
    > = {};

    if (!form.nombre.trim()) {
      nextErrors.nombre =
        'Ingresa tu nombre';
    }

    if (!form.empresa.trim()) {
      nextErrors.empresa =
        'Ingresa tu empresa o negocio';
    }

    if (!form.correo.trim()) {
      nextErrors.correo =
        'Ingresa tu correo';
    } else if (
      !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(
        form.correo,
      )
    ) {
      nextErrors.correo =
        'Ingresa un correo válido';
    }

    if (!form.telefono.trim()) {
      nextErrors.telefono =
        'Ingresa tu teléfono o WhatsApp';
    }

    if (!form.mejorar.trim()) {
      nextErrors.mejorar =
        'Cuéntanos qué necesitas mejorar';
    }

    return nextErrors;
  };

  const handleSubmit = async (
    event: FormEvent<HTMLFormElement>,
  ) => {
    event.preventDefault();

    const nextErrors = validate();

    setErrors(nextErrors);
    setSubmitError('');

    if (
      Object.keys(nextErrors).length > 0
    ) {
      return;
    }

    const formElement =
      event.currentTarget;

    const formData =
      new FormData(formElement);

    formData.set(
      'form-name',
      netlifyFormName,
    );

    const encodedData =
      new URLSearchParams();

    formData.forEach((value, key) => {
      encodedData.append(
        key,
        String(value),
      );
    });

    setSubmitting(true);

    try {
      const response = await fetch('/', {
        method: 'POST',
        headers: {
          'Content-Type':
            'application/x-www-form-urlencoded',
        },
        body: encodedData.toString(),
      });

      if (!response.ok) {
        throw new Error(
          'No fue posible enviar el formulario.',
        );
      }

      setSubmitted(true);
    } catch (error) {
      console.error(
        'Error enviando formulario:',
        error,
      );

      setSubmitError(
        'No pudimos enviar tu consulta. Inténtalo nuevamente o escríbenos a contacto@aster360.cl.',
      );
    } finally {
      setSubmitting(false);
    }
  };

  const update = (
    key: keyof FormState,
    value: string,
  ) => {
    setForm((previous) => ({
      ...previous,
      [key]: value,
    }));

    if (errors[key]) {
      setErrors((previous) => ({
        ...previous,
        [key]: '',
      }));
    }

    if (submitError) {
      setSubmitError('');
    }
  };

  const resetForm = () => {
    setForm(initialForm);
    setErrors({});
    setSubmitError('');
    setSubmitted(false);
  };

  return (
    <section
      id="contacto"
      className="scroll-mt-36 bg-white py-24 sm:py-28 sm:scroll-mt-48"
    >
      <Container>
        <div className="grid items-start gap-14 lg:grid-cols-2">
          <Reveal>
            <div className="max-w-xl">
              <span className="inline-flex items-center gap-2 rounded-full bg-aster-greenSoft px-4 py-2 text-sm font-semibold text-aster-green">
                <MessageCircle size={16} />
                Conversemos
              </span>

              <h2 className="mt-6 text-3xl font-extrabold leading-[1.15] tracking-tight text-aster-black sm:text-4xl">
                ¿Cuánto sabes realmente de
                lo que ocurre en tu negocio?
              </h2>

              <p className="mt-5 text-base leading-relaxed text-aster-gray sm:text-lg">
                Cuéntanos cómo funciona
                actualmente tu negocio y qué
                te gustaría mejorar.
              </p>

              <p className="mt-4 text-[15px] leading-relaxed text-aster-gray">
                Con esa información podremos
                entender mejor tu realidad y
                orientarte hacia la solución
                de Aster que tenga más sentido
                para ti.
              </p>

              <div className="mt-8 rounded-[22px] border border-aster-green/15 bg-aster-greenSoft p-6">
                <p className="text-sm font-bold text-aster-black">
                  Contacto directo
                </p>

                <p className="mt-2 text-sm leading-relaxed text-aster-gray">
                  También puedes comunicarte
                  directamente con nosotros
                  por correo, teléfono o
                  WhatsApp Business.
                </p>

                <div className="mt-5 grid gap-3 sm:grid-cols-2">
                  <a
                    href={
                      contactEmailHref
                    }
                    className="group flex items-center gap-3 rounded-2xl bg-white px-4 py-3 transition-all duration-200 hover:-translate-y-0.5 hover:shadow-sm sm:col-span-2"
                  >
                    <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-aster-greenSoft text-aster-green">
                      <Mail size={18} />
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
                    className="group flex items-center gap-3 rounded-2xl bg-white px-4 py-3 transition-all duration-200 hover:-translate-y-0.5 hover:shadow-sm"
                  >
                    <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-aster-greenSoft text-aster-green">
                      <Phone size={18} />
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
                      whatsappBaseUrl
                    }
                    target="_blank"
                    rel="noreferrer"
                    className="group flex items-center gap-3 rounded-2xl bg-white px-4 py-3 transition-all duration-200 hover:-translate-y-0.5 hover:shadow-sm"
                  >
                    <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-aster-green text-white">
                      <WhatsAppIcon
                        size={18}
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

              <div className="mt-4 rounded-2xl border border-gray-200/70 bg-aster-soft p-6">
                <p className="text-sm font-bold text-aster-black">
                  Sin compromisos.
                </p>

                <p className="mt-2 text-sm leading-relaxed text-aster-gray">
                  Primero entendemos tu
                  negocio. Después evaluamos
                  cómo podemos ayudarte.
                </p>
              </div>
            </div>
          </Reveal>

          <Reveal delay={150}>
            {submitted ? (
              <div className="rounded-[26px] border border-aster-green/20 bg-aster-greenSoft p-8 text-center sm:p-10">
                <span className="mb-5 inline-flex h-14 w-14 items-center justify-center rounded-full bg-aster-green text-white">
                  <CheckCircle2
                    size={28}
                  />
                </span>

                <h3 className="text-xl font-extrabold text-aster-black">
                  Consulta enviada
                </h3>

                <p className="mt-3 text-[15px] leading-relaxed text-aster-gray">
                  Recibimos correctamente
                  los datos que completaste
                  en el formulario.
                </p>

                <p className="mt-2 text-sm leading-relaxed text-aster-gray">
                  Nuestro equipo revisará tu
                  solicitud y te responderá
                  utilizando los datos de
                  contacto que nos indicaste.
                </p>

                <p className="mt-4 text-sm font-semibold text-aster-green">
                  contacto@aster360.cl
                </p>

                <button
                  type="button"
                  onClick={resetForm}
                  className="mt-7 inline-flex items-center justify-center rounded-full border border-aster-green bg-white px-6 py-3 text-sm font-semibold text-aster-green transition-colors hover:bg-aster-green hover:text-white"
                >
                  Enviar otra consulta
                </button>
              </div>
            ) : (
              <form
                name={netlifyFormName}
                method="POST"
                data-netlify="true"
                data-netlify-honeypot="bot-field"
                onSubmit={
                  handleSubmit
                }
                className="rounded-[26px] border border-gray-200/70 bg-aster-soft p-6 shadow-card sm:p-8"
                noValidate
              >
                <input
                  type="hidden"
                  name="form-name"
                  value={
                    netlifyFormName
                  }
                />

                <p className="hidden">
                  <label>
                    No completar
                    <input
                      name="bot-field"
                      autoComplete="off"
                      tabIndex={-1}
                    />
                  </label>
                </p>

                <div className="grid gap-4 sm:grid-cols-2">
                  <Field
                    label="Nombre"
                    error={
                      errors.nombre
                    }
                  >
                    <input
                      type="text"
                      name="nombre"
                      autoComplete="name"
                      value={
                        form.nombre
                      }
                      onChange={(
                        event,
                      ) =>
                        update(
                          'nombre',
                          event.target
                            .value,
                        )
                      }
                      className={inputCls(
                        errors.nombre,
                      )}
                      placeholder="Tu nombre"
                    />
                  </Field>

                  <Field
                    label="Empresa o negocio"
                    error={
                      errors.empresa
                    }
                  >
                    <input
                      type="text"
                      name="empresa"
                      autoComplete="organization"
                      value={
                        form.empresa
                      }
                      onChange={(
                        event,
                      ) =>
                        update(
                          'empresa',
                          event.target
                            .value,
                        )
                      }
                      className={inputCls(
                        errors.empresa,
                      )}
                      placeholder="Nombre de tu negocio"
                    />
                  </Field>
                </div>

                <div className="mt-4">
                  <Field label="Tipo de negocio">
                    <select
                      name="tipoNegocio"
                      value={
                        form.tipoNegocio
                      }
                      onChange={(
                        event,
                      ) =>
                        update(
                          'tipoNegocio',
                          event.target
                            .value,
                        )
                      }
                      className={inputCls()}
                    >
                      <option value="">
                        Selecciona una opción
                      </option>

                      {businessTypes.map(
                        (type) => (
                          <option
                            key={type}
                            value={type}
                          >
                            {type}
                          </option>
                        ),
                      )}
                    </select>
                  </Field>
                </div>

                <div className="mt-4 grid gap-4 sm:grid-cols-2">
                  <Field
                    label="Correo"
                    error={
                      errors.correo
                    }
                  >
                    <input
                      type="email"
                      name="email"
                      autoComplete="email"
                      value={
                        form.correo
                      }
                      onChange={(
                        event,
                      ) =>
                        update(
                          'correo',
                          event.target
                            .value,
                        )
                      }
                      className={inputCls(
                        errors.correo,
                      )}
                      placeholder="correo@ejemplo.cl"
                    />
                  </Field>

                  <Field
                    label="Teléfono / WhatsApp"
                    error={
                      errors.telefono
                    }
                  >
                    <input
                      type="tel"
                      name="telefono"
                      autoComplete="tel"
                      value={
                        form.telefono
                      }
                      onChange={(
                        event,
                      ) =>
                        update(
                          'telefono',
                          event.target
                            .value,
                        )
                      }
                      className={inputCls(
                        errors.telefono,
                      )}
                      placeholder="+56 9..."
                    />
                  </Field>
                </div>

                <div className="mt-4">
                  <Field
                    label="¿Qué necesitas mejorar?"
                    error={
                      errors.mejorar
                    }
                  >
                    <input
                      type="text"
                      name="mejorar"
                      value={
                        form.mejorar
                      }
                      onChange={(
                        event,
                      ) =>
                        update(
                          'mejorar',
                          event.target
                            .value,
                        )
                      }
                      className={inputCls(
                        errors.mejorar,
                      )}
                      placeholder="Ventas, inventario, clientes, control..."
                    />
                  </Field>
                </div>

                <div className="mt-4">
                  <Field label="Cuéntanos un poco más">
                    <textarea
                      name="mensaje"
                      rows={4}
                      value={
                        form.mensaje
                      }
                      onChange={(
                        event,
                      ) =>
                        update(
                          'mensaje',
                          event.target
                            .value,
                        )
                      }
                      className={`${inputCls()} resize-none`}
                      placeholder="Puedes contarnos brevemente qué ocurre hoy en tu negocio."
                    />
                  </Field>
                </div>

                {submitError && (
                  <div className="mt-5 rounded-xl border border-aster-red/20 bg-red-50 px-4 py-3 text-sm font-medium leading-relaxed text-aster-red">
                    {submitError}
                  </div>
                )}

                <button
                  type="submit"
                  disabled={
                    submitting
                  }
                  className="mt-6 inline-flex w-full items-center justify-center gap-2 rounded-full bg-aster-green px-6 py-3.5 text-base font-semibold text-white transition-colors duration-200 hover:bg-aster-greenDark disabled:cursor-not-allowed disabled:opacity-60"
                >
                  <Send size={18} />

                  {submitting
                    ? 'Enviando...'
                    : 'Enviar consulta'}
                </button>

                <p className="mt-4 text-center text-xs leading-relaxed text-aster-gray">
                  Tu consulta será enviada
                  directamente a nuestro
                  equipo. Este formulario no
                  abrirá WhatsApp.
                </p>
              </form>
            )}
          </Reveal>
        </div>
      </Container>
    </section>
  );
}

function inputCls(error?: string) {
  return `w-full rounded-xl border bg-white px-4 py-3 text-[15px] text-aster-black outline-none transition-colors placeholder:text-gray-400 ${
    error
      ? 'border-aster-red'
      : 'border-gray-200 focus:border-aster-green'
  }`;
}

function Field({
  label,
  error,
  children,
}: {
  label: string;
  error?: string;
  children: ReactNode;
}) {
  return (
    <label className="block">
      <span className="mb-1.5 block text-sm font-semibold text-aster-black">
        {label}
      </span>

      {children}

      {error && (
        <span className="mt-1 block text-xs font-medium text-aster-red">
          {error}
        </span>
      )}
    </label>
  );
}