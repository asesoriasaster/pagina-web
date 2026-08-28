import {
  useEffect,
  useState,
  type FormEvent,
} from 'react';
import type { User } from '@supabase/supabase-js';
import {
  Briefcase,
  Mail,
  Phone,
  Save,
  UserRound,
  X,
} from 'lucide-react';

import { supabase } from '@/lib/supabase';

export interface PerfilWeb {
  nombre: string | null;
  apellido: string | null;
  telefono: string | null;
  cargo: string | null;
}

interface ProfileModalProps {
  open: boolean;
  onClose: () => void;
  user: User;
  onProfileSaved?: (
    profile: PerfilWeb,
  ) => void;
}

export default function ProfileModal({
  open,
  onClose,
  user,
  onProfileSaved,
}: ProfileModalProps) {
  const [nombre, setNombre] = useState('');
  const [apellido, setApellido] =
    useState('');
  const [telefono, setTelefono] =
    useState('');
  const [cargo, setCargo] = useState('');

  const [loading, setLoading] =
    useState(false);
  const [saving, setSaving] =
    useState(false);
  const [error, setError] = useState('');

  useEffect(() => {
    if (!open) {
      return;
    }

    const previousOverflow =
      document.body.style.overflow;

    document.body.style.overflow = 'hidden';

    const handleKeyDown = (
      event: KeyboardEvent,
    ) => {
      if (event.key === 'Escape') {
        onClose();
      }
    };

    window.addEventListener(
      'keydown',
      handleKeyDown,
    );

    return () => {
      document.body.style.overflow =
        previousOverflow;

      window.removeEventListener(
        'keydown',
        handleKeyDown,
      );
    };
  }, [open, onClose]);

  useEffect(() => {
    if (!open) {
      return;
    }

    const loadProfile = async () => {
      setLoading(true);
      setError('');

      const {
        data,
        error: profileError,
      } = await supabase
        .from('perfiles_web')
        .select(
          'nombre, apellido, telefono, cargo',
        )
        .eq('user_id', user.id)
        .maybeSingle();

      if (profileError) {
        setError(
          'No fue posible cargar tu perfil.',
        );
        setLoading(false);
        return;
      }

      setNombre(data?.nombre ?? '');
      setApellido(data?.apellido ?? '');
      setTelefono(data?.telefono ?? '');
      setCargo(data?.cargo ?? '');

      setLoading(false);
    };

    void loadProfile();
  }, [open, user.id]);

  if (!open) {
    return null;
  }

  const handleSubmit = async (
    event: FormEvent<HTMLFormElement>,
  ) => {
    event.preventDefault();

    const nombreLimpio = nombre.trim();
    const apellidoLimpio =
      apellido.trim();
    const telefonoLimpio =
      telefono.trim();
    const cargoLimpio = cargo.trim();

    if (!nombreLimpio) {
      setError('Ingresa tu nombre.');
      return;
    }

    if (!apellidoLimpio) {
      setError('Ingresa tu apellido.');
      return;
    }

    setSaving(true);
    setError('');

    const profile: PerfilWeb = {
      nombre: nombreLimpio,
      apellido: apellidoLimpio,
      telefono: telefonoLimpio || null,
      cargo: cargoLimpio || null,
    };

    const { error: saveError } =
      await supabase
        .from('perfiles_web')
        .upsert(
          {
            user_id: user.id,
            ...profile,
            updated_at:
              new Date().toISOString(),
          },
          {
            onConflict: 'user_id',
          },
        );

    setSaving(false);

    if (saveError) {
      setError(
        'No fue posible guardar tu perfil. Inténtalo nuevamente.',
      );
      return;
    }

    onProfileSaved?.(profile);
    onClose();
  };

  return (
    <div
      className="fixed inset-0 z-[110] flex items-center justify-center px-5 py-8"
      role="dialog"
      aria-modal="true"
      aria-labelledby="profile-title"
    >
      <button
        type="button"
        aria-label="Cerrar perfil"
        onClick={onClose}
        className="absolute inset-0 bg-black/45 backdrop-blur-[2px]"
      />

      <div className="relative z-10 max-h-[90vh] w-full max-w-lg overflow-y-auto rounded-[28px] border border-gray-100 bg-white shadow-2xl">
        <div className="border-b border-gray-100 px-6 pb-6 pt-7 sm:px-8">
          <div className="flex items-start justify-between gap-4">
            <div>
              <span className="inline-flex items-center gap-2 rounded-full bg-aster-greenSoft px-3 py-1.5 text-xs font-bold text-aster-green">
                <UserRound size={14} />
                Mi cuenta ASTER
              </span>

              <h2
                id="profile-title"
                className="mt-4 text-2xl font-extrabold tracking-tight text-aster-black"
              >
                Mi perfil
              </h2>

              <p className="mt-2 text-sm leading-relaxed text-aster-gray">
                Completa tu información
                personal para personalizar tu
                experiencia en ASTER.
              </p>
            </div>

            <button
              type="button"
              onClick={onClose}
              className="inline-flex h-10 w-10 shrink-0 items-center justify-center rounded-full text-aster-gray transition-colors hover:bg-aster-soft hover:text-aster-black"
              aria-label="Cerrar"
            >
              <X size={20} />
            </button>
          </div>
        </div>

        {loading ? (
          <div className="px-6 py-12 text-center text-sm font-medium text-aster-gray sm:px-8">
            Cargando tu perfil...
          </div>
        ) : (
          <form
            onSubmit={handleSubmit}
            className="px-6 py-7 sm:px-8"
          >
            <label className="block">
              <span className="mb-2 block text-sm font-semibold text-aster-black">
                Correo
              </span>

              <div className="relative">
                <Mail
                  size={18}
                  className="pointer-events-none absolute left-4 top-1/2 -translate-y-1/2 text-gray-400"
                />

                <input
                  type="email"
                  value={user.email ?? ''}
                  readOnly
                  className="w-full cursor-not-allowed rounded-xl border border-gray-200 bg-gray-50 py-3 pl-11 pr-4 text-[15px] text-aster-gray outline-none"
                />
              </div>

              <span className="mt-2 block text-xs text-aster-gray">
                El correo corresponde a tu
                cuenta ASTER y no se modifica
                desde este perfil.
              </span>
            </label>

            <div className="mt-5 grid gap-5 sm:grid-cols-2">
              <label className="block">
                <span className="mb-2 block text-sm font-semibold text-aster-black">
                  Nombre
                </span>

                <div className="relative">
                  <UserRound
                    size={18}
                    className="pointer-events-none absolute left-4 top-1/2 -translate-y-1/2 text-gray-400"
                  />

                  <input
                    type="text"
                    value={nombre}
                    onChange={(event) => {
                      setNombre(
                        event.target.value,
                      );
                      setError('');
                    }}
                    autoComplete="given-name"
                    placeholder="Tu nombre"
                    className="w-full rounded-xl border border-gray-200 bg-white py-3 pl-11 pr-4 text-[15px] text-aster-black outline-none transition-colors placeholder:text-gray-400 focus:border-aster-green"
                  />
                </div>
              </label>

              <label className="block">
                <span className="mb-2 block text-sm font-semibold text-aster-black">
                  Apellido
                </span>

                <div className="relative">
                  <UserRound
                    size={18}
                    className="pointer-events-none absolute left-4 top-1/2 -translate-y-1/2 text-gray-400"
                  />

                  <input
                    type="text"
                    value={apellido}
                    onChange={(event) => {
                      setApellido(
                        event.target.value,
                      );
                      setError('');
                    }}
                    autoComplete="family-name"
                    placeholder="Tu apellido"
                    className="w-full rounded-xl border border-gray-200 bg-white py-3 pl-11 pr-4 text-[15px] text-aster-black outline-none transition-colors placeholder:text-gray-400 focus:border-aster-green"
                  />
                </div>
              </label>
            </div>

            <label className="mt-5 block">
              <span className="mb-2 block text-sm font-semibold text-aster-black">
                Teléfono
              </span>

              <div className="relative">
                <Phone
                  size={18}
                  className="pointer-events-none absolute left-4 top-1/2 -translate-y-1/2 text-gray-400"
                />

                <input
                  type="tel"
                  value={telefono}
                  onChange={(event) => {
                    setTelefono(
                      event.target.value,
                    );
                    setError('');
                  }}
                  autoComplete="tel"
                  placeholder="+56 9 1234 5678"
                  className="w-full rounded-xl border border-gray-200 bg-white py-3 pl-11 pr-4 text-[15px] text-aster-black outline-none transition-colors placeholder:text-gray-400 focus:border-aster-green"
                />
              </div>
            </label>

            <label className="mt-5 block">
              <span className="mb-2 block text-sm font-semibold text-aster-black">
                Cargo
              </span>

              <div className="relative">
                <Briefcase
                  size={18}
                  className="pointer-events-none absolute left-4 top-1/2 -translate-y-1/2 text-gray-400"
                />

                <input
                  type="text"
                  value={cargo}
                  onChange={(event) => {
                    setCargo(
                      event.target.value,
                    );
                    setError('');
                  }}
                  autoComplete="organization-title"
                  placeholder="Ej: Gerente General"
                  className="w-full rounded-xl border border-gray-200 bg-white py-3 pl-11 pr-4 text-[15px] text-aster-black outline-none transition-colors placeholder:text-gray-400 focus:border-aster-green"
                />
              </div>
            </label>

            {error && (
              <div
                className="mt-5 rounded-xl border border-red-100 bg-red-50 px-4 py-3 text-sm font-medium text-red-700"
                role="alert"
              >
                {error}
              </div>
            )}

            <button
              type="submit"
              disabled={saving}
              className="mt-6 inline-flex w-full items-center justify-center gap-2 rounded-full bg-aster-green px-6 py-3.5 text-base font-semibold text-white transition-all duration-200 hover:bg-aster-greenDark disabled:cursor-not-allowed disabled:opacity-60"
            >
              <Save size={18} />

              {saving
                ? 'Guardando...'
                : 'Guardar información'}
            </button>
          </form>
        )}
      </div>
    </div>
  );
}