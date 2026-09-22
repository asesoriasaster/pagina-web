import LegalLayout from '@/pages/LegalLayout';

export default function CookiePolicy() {
  return (
    <LegalLayout
      title="Política de Cookies"
      subtitle="Describe las cookies y tecnologías similares utilizadas en aster360.cl y cómo puedes aceptar, rechazar o modificar tus preferencias."
    >
      <p><strong>Última actualización:</strong> 22 de septiembre de 2026. <strong>Versión:</strong> 1.0.</p>

      <section>
        <h2>1. Qué son las cookies y tecnologías similares</h2>
        <p>
          Las cookies son pequeños archivos o identificadores que un sitio o un proveedor puede almacenar o leer desde el navegador. ASTER también utiliza almacenamiento local del navegador para recordar la decisión del usuario sobre sus preferencias de privacidad.
        </p>
      </section>

      <section>
        <h2>2. Categorías utilizadas por ASTER</h2>
        <p><strong>Necesarias.</strong> Permiten funciones esenciales del sitio y la conservación de tus preferencias de privacidad. No se utilizan para publicidad. La preferencia de consentimiento se registra en el almacenamiento local con la clave <code>aster_cookie_consent_v1</code> y permanece hasta que la modifiques o elimines los datos del sitio desde tu navegador.</p>
        <p><strong>Analítica.</strong> Si la autorizas, ASTER carga Google Analytics 4 para conocer de manera agregada cómo se utiliza el sitio, por ejemplo visitas, páginas consultadas, dispositivos y fuentes de tráfico. Google puede utilizar cookies o identificadores como <code>_ga</code> y variantes asociadas a la propiedad de Analytics.</p>
        <p><strong>Marketing.</strong> Si la autorizas, ASTER carga Meta Pixel para medir campañas, audiencias y conversiones. Meta puede utilizar identificadores y cookies publicitarias, como <code>_fbp</code> u otros mecanismos técnicos según su configuración y políticas vigentes.</p>
      </section>

      <section>
        <h2>3. Consentimiento previo</h2>
        <p>
          Al visitar ASTER por primera vez, las tecnologías de <strong>Analítica</strong> y <strong>Marketing</strong> permanecen bloqueadas. Solo se cargan después de que el usuario autoriza expresamente la categoría correspondiente desde el panel de preferencias.
        </p>
      </section>

      <section>
        <h2>4. Proveedores</h2>
        <ul>
          <li><strong>Google Analytics 4.</strong> Proveedor: Google. Finalidad: medición y analítica web. Identificador de medición utilizado por ASTER: <code>G-G0M1C1WPSW</code>.</li>
          <li><strong>Meta Pixel.</strong> Proveedor: Meta. Finalidad: medición de campañas y conversiones publicitarias. Pixel utilizado por ASTER: <code>1016287424774375</code>.</li>
        </ul>
        <p>
          Estos proveedores pueden procesar datos técnicos de navegación en su propia infraestructura y conforme a sus respectivas condiciones y políticas de privacidad.
        </p>
      </section>

      <section>
        <h2>5. Cómo cambiar o retirar el consentimiento</h2>
        <p>
          Puedes cambiar tu decisión en cualquier momento mediante el enlace <strong>“Configurar cookies”</strong> disponible en el pie de página de ASTER. Al desactivar una categoría, el sitio deja de autorizar nuevas mediciones opcionales de esa categoría.
        </p>
        <p>
          Algunas cookies que ya hubieran sido creadas por un proveedor antes de retirar el consentimiento pueden permanecer en el navegador hasta su vencimiento. Puedes eliminarlas inmediatamente desde la configuración de privacidad o datos del sitio de tu navegador.
        </p>
      </section>

      <section>
        <h2>6. Rechazar cookies opcionales</h2>
        <p>
          Rechazar Analítica o Marketing no impide utilizar las funciones principales de aster360.cl. Las tecnologías necesarias siguen operativas porque permiten funciones esenciales y recordar tu elección.
        </p>
      </section>

      <section>
        <h2>7. Contacto</h2>
        <p>
          Si tienes consultas sobre privacidad o el uso de estas tecnologías, puedes escribir a <a href="mailto:contacto@aster360.cl">contacto@aster360.cl</a>. El responsable es ASTER SpA, representada legalmente por Patricio Ernesto Correa Irribarra, con domicilio en Av. El Ocaso 836 B, Séptimo Sector, Block 3, Depto. 21, Belloto Sur, Quilpué, Región de Valparaíso, Chile.
        </p>
      </section>

      <section>
        <h2>8. Actualizaciones</h2>
        <p>
          Esta política podrá modificarse cuando cambien las tecnologías utilizadas, los proveedores o la normativa aplicable. La fecha de la versión vigente se indica al comienzo de esta página.
        </p>
      </section>
    </LegalLayout>
  );
}
