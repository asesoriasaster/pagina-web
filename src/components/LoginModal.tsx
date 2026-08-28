import {
  useEffect,
  useState,
  type FormEvent,
} from 'react';
import {
  Eye,
  EyeOff,
  LockKeyhole,
  Mail,
  X,
} from 'lucide-react';

import { supabase } from '@/lib/supabase';

interface LoginModalProps {
  open: boolean;
  onClose: () => void;
}

export default function LoginModal({
  open,
  onClose,
}: LoginModalProps) {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] =
    useState(false);
  const [loading, setLoading] = useState(false);
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
      setError('');
      setPassword('');
      setShowPassword(false);
    }
  }, [open]);

  if (!open) {
    return null;
  }

  const handleSubmit = async (
    event: FormEvent<HTMLFormElement>,
  ) => {
    event.preventDefault();

    const normalizedEmail = email
      .trim()
      .toLowerCase();

    if (!normalizedEmail) {
      setError('Ingresa tu correo.');
      return;
    }

    if (!password) {
      setError('Ingresa tu contraseña.');
      return;
    }

    setLoading(true);
    setError('');

    const { error: signInError } =
      await supabase.auth.signInWithPassword({
        email: normalizedEmail,
        password,
      });

    setLoading(false);

    if (signInError) {
      if (
        signInError.message
          .toLowerCase()
          .includes('invalid login credentials')
      ) {
        setError(
          'Correo o contraseña incorrectos.',
        );
        return;
      }

      if (
        signInError.message
          .toLowerCase()
          .includes('email not confirmed')
      ) {
        setError(
          'Tu correo todavía no está confirmado.',
        );
        return;
      }

      setError(
        'No fue posible iniciar sesión. Inténtalo nuevamente.',
      );
      return;
    }

    setPassword('');
    onClose();
  };

  return (
    <div
      className="fixed inset-0 z-[100] flex items-center justify-center px-5 py-8"
      role="dialog"
      aria-modal="true"
      aria-labelledby="login-title"
    >
      <button
        type="button"
        aria-label="Cerrar inicio de sesión"
        onClick={onClose}
        className="absolute inset-0 bg-black/45 backdrop-blur-[2px]"
      />

      <div className="relative z-10 w-full max-w-md overflow-hidden rounded-[28px] border border-gray-100 bg-white shadow-2xl">
        <div className="border-b border-gray-100 px-6 pb-6 pt-7 sm:px-8">
          <div className="flex items-start justify-between gap-4">
            <div>
              <span className="inline-flex items-center gap-2 rounded-full bg-aster-greenSoft px-3 py-1.5 text-xs font-bold text-aster-green">
                <LockKeyhole size={14} />
                Clientes ASTER
              </span>

              <h2
                id="login-title"
                className="mt-4 text-2xl font-extrabold tracking-tight text-aster-black"
              >
                Iniciar sesión
              </h2>

              <p className="mt-2 text-sm leading-relaxed text-aster-gray">
                Ingresa con las mismas credenciales
                que utilizas en ASTER App.
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

        <form
          onSubmit={handleSubmit}
          className="px-6 py-7 sm:px-8"
          noValidate
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
                value={email}
                onChange={(event) => {
                  setEmail(event.target.value);

                  if (error) {
                    setError('');
                  }
                }}
                autoComplete="email"
                placeholder="correo@empresa.cl"
                className="w-full rounded-xl border border-gray-200 bg-white py-3 pl-11 pr-4 text-[15px] text-aster-black outline-none transition-colors placeholder:text-gray-400 focus:border-aster-green"
              />
            </div>
          </label>

          <label className="mt-5 block">
            <span className="mb-2 block text-sm font-semibold text-aster-black">
              Contraseña
            </span>

            <div className="relative">
              <LockKeyhole
                size={18}
                className="pointer-events-none absolute left-4 top-1/2 -translate-y-1/2 text-gray-400"
              />

              <input
                type={
                  showPassword
                    ? 'text'
                    : 'password'
                }
                value={password}
                onChange={(event) => {
                  setPassword(event.target.value);

                  if (error) {
                    setError('');
                  }
                }}
                autoComplete="current-password"
                placeholder="Tu contraseña"
                className="w-full rounded-xl border border-gray-200 bg-white py-3 pl-11 pr-12 text-[15px] text-aster-black outline-none transition-colors placeholder:text-gray-400 focus:border-aster-green"
              />

              <button
                type="button"
                onClick={() =>
                  setShowPassword(
                    (current) => !current,
                  )
                }
                className="absolute right-3 top-1/2 inline-flex h-9 w-9 -translate-y-1/2 items-center justify-center rounded-lg text-gray-400 transition-colors hover:bg-aster-soft hover:text-aster-black"
                aria-label={
                  showPassword
                    ? 'Ocultar contraseña'
                    : 'Mostrar contraseña'
                }
              >
                {showPassword ? (
                  <EyeOff size={18} />
                ) : (
                  <Eye size={18} />
                )}
              </button>
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
            disabled={loading}
            className="mt-6 inline-flex w-full items-center justify-center rounded-full bg-aster-green px-6 py-3.5 text-base font-semibold text-white transition-all duration-200 hover:bg-aster-greenDark disabled:cursor-not-allowed disabled:opacity-60"
          >
            {loading
              ? 'Ingresando...'
              : 'Iniciar sesión'}
          </button>

          <p className="mt-5 text-center text-xs leading-relaxed text-aster-gray">
            El acceso está disponible para clientes
            con una cuenta ASTER activa.
          </p>
        </form>
      </div>
    </div>
  );
}