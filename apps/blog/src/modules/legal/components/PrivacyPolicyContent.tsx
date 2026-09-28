import { SITE_FULL_NAME } from '@/modules/layout/constants/layout.constants';

import {
  PRIVACY_CONTACT_EMAIL,
  PRIVACY_CONTROLLER_COUNTRY,
  PRIVACY_CONTROLLER_NAME,
  PRIVACY_POLICY_LAST_UPDATED,
  PRIVACY_SITE_URL,
} from '../constants/privacy-policy.constants';

export function PrivacyPolicyContent(): React.JSX.Element {
  return (
    <article className="mx-auto w-full max-w-6xl px-4 py-8 sm:px-6 sm:py-10 lg:px-8">
      <header className="border-b border-border pb-6 sm:pb-8">
        <h1 className="font-display text-2xl leading-tight font-medium tracking-tight text-primary sm:text-3xl md:text-4xl">
          Política de Privacidad
        </h1>
        <p className="mt-3 text-sm text-muted-foreground sm:text-base">
          Última actualización: {PRIVACY_POLICY_LAST_UPDATED}
        </p>
      </header>

      <div className="mt-8 flex flex-col gap-8 text-sm leading-relaxed text-neutral/80 sm:mt-10 sm:gap-10 sm:text-base">
        <p>
          Esta Política de Privacidad describe cómo se maneja la información de
          los visitantes de {SITE_FULL_NAME}, un blog personal dedicado a
          compartir experiencias, conocimientos y opiniones relacionados con el
          desarrollo de software y la tecnología.
        </p>

        <section className="flex flex-col gap-3 sm:gap-4">
          <h2 className="font-display text-xl font-medium tracking-tight text-primary sm:text-2xl">
            1. Responsable
          </h2>
          <p>
            El responsable de este sitio web y del tratamiento de los datos
            personales que eventualmente puedan ser tratados a través de él es:
          </p>
          <ul className="flex flex-col gap-1.5 pl-0">
            <li>
              <span className="font-medium text-foreground">Nombre:</span>{' '}
              {PRIVACY_CONTROLLER_NAME}
            </li>
            <li>
              <span className="font-medium text-foreground">País:</span>{' '}
              {PRIVACY_CONTROLLER_COUNTRY}
            </li>
            <li>
              <span className="font-medium text-foreground">Sitio web:</span>{' '}
              <a
                href={PRIVACY_SITE_URL}
                className="text-primary underline-offset-2 transition-colors hover:underline"
              >
                {PRIVACY_SITE_URL}
              </a>
            </li>
            <li>
              <span className="font-medium text-foreground">Contacto:</span>{' '}
              <a
                href={`mailto:${PRIVACY_CONTACT_EMAIL}`}
                className="text-primary underline-offset-2 transition-colors hover:underline"
              >
                {PRIVACY_CONTACT_EMAIL}
              </a>
            </li>
          </ul>
        </section>

        <section className="flex flex-col gap-3 sm:gap-4">
          <h2 className="font-display text-xl font-medium tracking-tight text-primary sm:text-2xl">
            2. Información que recopilamos
          </h2>
          <p>
            Actualmente, este sitio web es un blog estático y no cuenta con
            formularios de contacto, registro de usuarios, cuentas, comentarios,
            newsletter ni mecanismos propios para recopilar información personal
            de los visitantes.
          </p>
          <p>
            Por lo tanto, el sitio no solicita directamente información como
            nombre, dirección de correo electrónico, número telefónico u otros
            datos personales para permitir la navegación o lectura de sus
            contenidos.
          </p>
        </section>

        <section className="flex flex-col gap-3 sm:gap-4">
          <h2 className="font-display text-xl font-medium tracking-tight text-primary sm:text-2xl">
            3. Información técnica
          </h2>
          <p>
            El funcionamiento de un sitio web puede implicar que determinados
            proveedores de infraestructura, alojamiento o servicios técnicos
            procesen información técnica relacionada con las solicitudes
            realizadas al sitio, como direcciones IP, información del navegador,
            dispositivo, fecha y hora de acceso o registros técnicos.
          </p>
          <p>
            La existencia y naturaleza de estos registros puede depender del
            proveedor de alojamiento y de la infraestructura utilizada para
            operar el sitio.
          </p>
          <p>
            El responsable del blog no utiliza actualmente esta información para
            crear perfiles personales, realizar publicidad personalizada ni
            realizar actividades de seguimiento con fines comerciales.
          </p>
        </section>

        <section className="flex flex-col gap-3 sm:gap-4">
          <h2 className="font-display text-xl font-medium tracking-tight text-primary sm:text-2xl">
            4. Cookies y tecnologías de seguimiento
          </h2>
          <p>
            Actualmente, este sitio no utiliza Google Analytics, sistemas de
            publicidad personalizada ni herramientas propias de seguimiento del
            comportamiento de los visitantes.
          </p>
          <p>
            Si en el futuro se incorporan cookies u otras tecnologías de
            seguimiento que impliquen un tratamiento adicional de datos
            personales, esta política será actualizada para informar sobre ellas
            y, cuando corresponda, solicitar las autorizaciones necesarias.
          </p>
        </section>

        <section className="flex flex-col gap-3 sm:gap-4">
          <h2 className="font-display text-xl font-medium tracking-tight text-primary sm:text-2xl">
            5. Enlaces a sitios y servicios externos
          </h2>
          <p>
            El blog puede contener enlaces hacia sitios web, repositorios,
            herramientas, redes sociales y otros servicios de terceros.
          </p>
          <p>
            Por ejemplo, los enlaces de contacto pueden dirigir al visitante
            hacia una página externa o hacia servicios de mensajería como
            WhatsApp.
          </p>
          <p>
            Una vez que el visitante abandona este sitio y accede a un servicio
            externo, el tratamiento de la información queda sujeto a las
            políticas y condiciones de dicho tercero. El responsable de este
            blog no controla las prácticas de privacidad de servicios externos.
          </p>
        </section>

        <section className="flex flex-col gap-3 sm:gap-4">
          <h2 className="font-display text-xl font-medium tracking-tight text-primary sm:text-2xl">
            6. Finalidad del tratamiento de datos personales
          </h2>
          <p>
            Dado que el sitio actualmente no cuenta con mecanismos propios para
            recopilar datos personales de los visitantes, no se realiza un
            tratamiento sistemático de datos personales con fines de registro,
            marketing, publicidad o elaboración de perfiles.
          </p>
          <p>
            Si en el futuro se implementan funcionalidades que requieran
            recopilar datos personales, se informará previamente sobre las
            finalidades correspondientes y se actualizará esta Política de
            Privacidad.
          </p>
        </section>

        <section className="flex flex-col gap-3 sm:gap-4">
          <h2 className="font-display text-xl font-medium tracking-tight text-primary sm:text-2xl">
            7. Consultas y solicitudes
          </h2>
          <p>
            Para realizar una consulta, solicitud o reclamo relacionado con el
            tratamiento de datos personales, el titular puede comunicarse a:
          </p>
          <p>
            <span className="font-medium text-foreground">Correo electrónico:</span>{' '}
            <a
              href={`mailto:${PRIVACY_CONTACT_EMAIL}`}
              className="text-primary underline-offset-2 transition-colors hover:underline"
            >
              {PRIVACY_CONTACT_EMAIL}
            </a>
          </p>
          <p>
            Las solicitudes serán atendidas de acuerdo con los términos y
            procedimientos establecidos por la legislación colombiana aplicable.
          </p>
        </section>

        <section className="flex flex-col gap-3 sm:gap-4">
          <h2 className="font-display text-xl font-medium tracking-tight text-primary sm:text-2xl">
            8. Seguridad
          </h2>
          <p>
            Se adoptan medidas razonables para mantener la seguridad y
            disponibilidad del sitio web y evitar accesos no autorizados a la
            información que eventualmente pueda encontrarse bajo responsabilidad
            del administrador del sitio.
          </p>
          <p>
            No obstante, ningún sistema conectado a Internet puede garantizar
            una seguridad absoluta.
          </p>
        </section>

        <section className="flex flex-col gap-3 sm:gap-4">
          <h2 className="font-display text-xl font-medium tracking-tight text-primary sm:text-2xl">
            9. Actualizaciones de esta política
          </h2>
          <p>
            Esta Política de Privacidad podrá ser modificada cuando cambien las
            funcionalidades del sitio, los servicios utilizados o las
            obligaciones legales aplicables.
          </p>
          <p>
            La versión vigente será la publicada en esta página y mostrará la
            fecha de su última actualización.
          </p>
        </section>

        <p className="border-t border-border pt-6 text-sm text-muted-foreground sm:pt-8">
          Última actualización: {PRIVACY_POLICY_LAST_UPDATED}
        </p>
      </div>
    </article>
  );
}
