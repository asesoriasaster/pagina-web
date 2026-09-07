import { createClient } from '@supabase/supabase-js';

export const visualPreview =
  import.meta.env.DEV && import.meta.env.VITE_VISUAL_PREVIEW === 'true';

const supabaseUrl = import.meta.env.VITE_SUPABASE_URL;
const supabaseAnonKey = import.meta.env.VITE_SUPABASE_ANON_KEY;

if (!visualPreview && (!supabaseUrl || !supabaseAnonKey)) {
  throw new Error('Faltan VITE_SUPABASE_URL o VITE_SUPABASE_ANON_KEY.');
}

const previewMessage = 'Vista previa local: el inicio de sesión y el guardado de datos están desactivados.';

export const supabase = visualPreview
  ? createClient('https://aster-preview.invalid', 'visual-preview-not-a-real-key', {
      auth: {
        persistSession: false,
        autoRefreshToken: false,
        detectSessionInUrl: false,
        storageKey: 'aster-visual-preview',
      },
      global: {
        // Responde localmente: nunca envía consultas a una base de datos.
        fetch: async () => new Response(JSON.stringify({
          message: previewMessage,
          msg: previewMessage,
          error: 'visual_preview_only',
          error_description: previewMessage,
        }), {
          status: 400,
          headers: { 'Content-Type': 'application/json' },
        }),
      },
    })
  : createClient(supabaseUrl, supabaseAnonKey, {
      auth: {
        persistSession: true,
        autoRefreshToken: true,
        detectSessionInUrl: true,
      },
    });
