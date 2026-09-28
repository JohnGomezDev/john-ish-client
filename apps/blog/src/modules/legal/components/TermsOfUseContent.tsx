import { SITE_FULL_NAME } from '@/modules/layout/constants/layout.constants';

import {
  TERMS_CONTACT_EMAIL,
  TERMS_OF_USE_LAST_UPDATED,
} from '../constants/terms-of-use.constants';

export function TermsOfUseContent(): React.JSX.Element {
  return (
    <article className="mx-auto w-full max-w-6xl px-4 py-8 sm:px-6 sm:py-10 lg:px-8">
      <header className="border-b border-border pb-6 sm:pb-8">
        <h1 className="font-display text-2xl leading-tight font-medium tracking-tight text-primary sm:text-3xl md:text-4xl">
          Términos de Uso y Aviso Legal
        </h1>
        <p className="mt-3 text-sm text-muted-foreground sm:text-base">
          Última actualización: {TERMS_OF_USE_LAST_UPDATED}
        </p>
      </header>

      <div className="mt-8 flex flex-col gap-8 text-sm leading-relaxed text-neutral/80 sm:mt-10 sm:gap-10 sm:text-base">
        <div className="flex flex-col gap-3 sm:gap-4">
          <p>
            Bienvenido a <span className="font-medium text-foreground">{SITE_FULL_NAME}</span>.
          </p>
          <p>
            Este sitio web es un blog personal dedicado a compartir experiencias,
            conocimientos, opiniones, ejemplos y recursos relacionados
            principalmente con el desarrollo de software y la tecnología.
          </p>
          <p>
            Al acceder y utilizar este sitio, aceptas los siguientes términos de
            uso.
          </p>
        </div>

        <section className="flex flex-col gap-3 sm:gap-4">
          <h2 className="font-display text-xl font-medium tracking-tight text-primary sm:text-2xl">
            1. Uso del sitio
          </h2>
          <p>
            El contenido de este sitio se proporciona con fines informativos,
            educativos y personales.
          </p>
          <p>
            Puedes consultar, leer y compartir los contenidos publicados siempre
            que lo hagas de manera lícita y respetando los derechos de autor y
            las condiciones de las licencias que correspondan.
          </p>
          <p>
            No está permitido utilizar el sitio para actividades ilegales,
            fraudulentas o que puedan perjudicar su funcionamiento, seguridad o
            disponibilidad.
          </p>
        </section>

        <section className="flex flex-col gap-3 sm:gap-4">
          <h2 className="font-display text-xl font-medium tracking-tight text-primary sm:text-2xl">
            2. Contenido del blog
          </h2>
          <p>
            Los artículos publicados en este sitio reflejan experiencias,
            conocimientos y opiniones personales del autor.
          </p>
          <p>
            El contenido relacionado con tecnologías, herramientas, lenguajes de
            programación, frameworks y otros productos de software puede cambiar
            con el tiempo.
          </p>
          <p>
            Por esta razón, aunque se procura mantener la información actualizada
            y correcta, no se garantiza que todo el contenido sea permanentemente
            exacto, completo o aplicable a todos los entornos técnicos.
          </p>
          <p>
            Las decisiones tomadas a partir de la información publicada en este
            blog son responsabilidad del lector.
          </p>
        </section>

        <section className="flex flex-col gap-3 sm:gap-4">
          <h2 className="font-display text-xl font-medium tracking-tight text-primary sm:text-2xl">
            3. Ejemplos de código
          </h2>
          <p>
            El blog puede incluir fragmentos de código, configuraciones, comandos
            y ejemplos destinados a fines educativos.
          </p>
          <p>
            Estos ejemplos pueden requerir modificaciones para funcionar
            correctamente en un entorno determinado y pueden depender de
            versiones específicas de software, sistemas operativos, librerías,
            frameworks o servicios externos.
          </p>
          <p>
            Salvo que un artículo indique expresamente lo contrario, los ejemplos
            proporcionados no constituyen una garantía de funcionamiento para un
            propósito específico.
          </p>
          <p>
            Antes de utilizar código publicado en este sitio en sistemas de
            producción, se recomienda revisarlo, probarlo y adaptarlo al entorno
            correspondiente.
          </p>
          <p>
            Cuando un fragmento de código se encuentre sujeto a una licencia
            específica, dicha licencia tendrá prioridad sobre lo indicado de
            manera general en estos términos.
          </p>
        </section>

        <section className="flex flex-col gap-3 sm:gap-4">
          <h2 className="font-display text-xl font-medium tracking-tight text-primary sm:text-2xl">
            4. Propiedad intelectual
          </h2>
          <p>
            Salvo que se indique expresamente lo contrario, los textos,
            artículos, gráficos, diseños y demás contenidos originales publicados
            en este sitio son propiedad de su autor y se encuentran protegidos
            por las normas aplicables sobre propiedad intelectual.
          </p>
          <p>
            El contenido puede incluir referencias, citas, imágenes, marcas,
            nombres comerciales, fragmentos de código o recursos pertenecientes a
            terceros. Estos elementos continúan perteneciendo a sus respectivos
            titulares y se utilizan de acuerdo con las condiciones que les sean
            aplicables.
          </p>
          <p>
            La publicación de una marca, herramienta, producto, proyecto o
            servicio de terceros en este sitio no implica afiliación, patrocinio
            o respaldo por parte de sus respectivos propietarios, salvo que se
            indique expresamente.
          </p>
        </section>

        <section className="flex flex-col gap-3 sm:gap-4">
          <h2 className="font-display text-xl font-medium tracking-tight text-primary sm:text-2xl">
            5. Código y licencias
          </h2>
          <p>
            Cuando un artículo publique código bajo una licencia específica, la
            licencia indicada en dicho artículo será la que determine las
            condiciones de uso, modificación y distribución de ese código.
          </p>
          <p>
            Si no se indica una licencia para un fragmento de código, no debe
            asumirse automáticamente que el código se encuentra bajo una licencia
            de código abierto.
          </p>
        </section>

        <section className="flex flex-col gap-3 sm:gap-4">
          <h2 className="font-display text-xl font-medium tracking-tight text-primary sm:text-2xl">
            6. Enlaces externos
          </h2>
          <p>
            Este sitio puede contener enlaces hacia páginas, repositorios,
            documentación, herramientas y servicios externos.
          </p>
          <p>
            Estos enlaces se proporcionan como referencia o recurso adicional.
          </p>
          <p>
            El autor no controla el contenido, disponibilidad, seguridad,
            políticas de privacidad ni prácticas de los sitios externos y no se
            responsabiliza por los contenidos o servicios ofrecidos por terceros.
          </p>
        </section>

        <section className="flex flex-col gap-3 sm:gap-4">
          <h2 className="font-display text-xl font-medium tracking-tight text-primary sm:text-2xl">
            7. Disponibilidad del sitio
          </h2>
          <p>
            Se procura mantener el sitio disponible y funcionando correctamente,
            pero no se garantiza que estará disponible de manera ininterrumpida o
            libre de errores.
          </p>
          <p>
            El sitio puede ser modificado, actualizado, suspendido o retirado
            temporalmente sin previo aviso cuando sea necesario.
          </p>
        </section>

        <section className="flex flex-col gap-3 sm:gap-4">
          <h2 className="font-display text-xl font-medium tracking-tight text-primary sm:text-2xl">
            8. Limitación de responsabilidad
          </h2>
          <p>
            El contenido publicado en este blog se proporciona de buena fe y con
            fines informativos y educativos.
          </p>
          <p>
            El autor no será responsable por daños, pérdidas o inconvenientes
            derivados de la utilización de la información publicada, incluyendo,
            entre otros, problemas derivados del uso de ejemplos de código,
            configuraciones, comandos, herramientas o recomendaciones técnicas.
          </p>
          <p>
            Esto no pretende excluir o limitar responsabilidades que legalmente
            no puedan ser excluidas o limitadas conforme a la legislación
            aplicable.
          </p>
        </section>

        <section className="flex flex-col gap-3 sm:gap-4">
          <h2 className="font-display text-xl font-medium tracking-tight text-primary sm:text-2xl">
            9. Opiniones personales
          </h2>
          <p>
            Las opiniones expresadas en los artículos pertenecen al autor en el
            momento de su publicación.
          </p>
          <p>
            Las opiniones sobre tecnologías, empresas, productos, herramientas o
            tendencias no constituyen necesariamente recomendaciones
            profesionales, comerciales o de inversión.
          </p>
        </section>

        <section className="flex flex-col gap-3 sm:gap-4">
          <h2 className="font-display text-xl font-medium tracking-tight text-primary sm:text-2xl">
            10. Cambios en los contenidos
          </h2>
          <p>
            El autor puede modificar, actualizar, corregir o eliminar artículos y
            otros contenidos publicados en el sitio cuando lo considere
            necesario.
          </p>
          <p>
            La fecha de actualización de un artículo podrá utilizarse para
            indicar cuándo fue revisado por última vez.
          </p>
        </section>

        <section className="flex flex-col gap-3 sm:gap-4">
          <h2 className="font-display text-xl font-medium tracking-tight text-primary sm:text-2xl">
            11. Cambios en estos términos
          </h2>
          <p>
            Estos términos pueden actualizarse cuando cambien las funcionalidades
            del sitio, su contenido o las circunstancias legales aplicables.
          </p>
          <p>
            La versión vigente será la publicada en esta página e incluirá la
            fecha de su última actualización.
          </p>
        </section>

        <section className="flex flex-col gap-3 sm:gap-4">
          <h2 className="font-display text-xl font-medium tracking-tight text-primary sm:text-2xl">
            12. Legislación aplicable
          </h2>
          <p>
            Estos términos se interpretarán de acuerdo con las leyes aplicables
            de la República de Colombia, sin perjuicio de las normas imperativas
            que puedan resultar aplicables según las circunstancias.
          </p>
        </section>

        <section className="flex flex-col gap-3 sm:gap-4">
          <h2 className="font-display text-xl font-medium tracking-tight text-primary sm:text-2xl">
            13. Contacto
          </h2>
          <p>
            Para preguntas relacionadas con el contenido, estos términos o el
            funcionamiento del sitio, puedes escribir a:
          </p>
          <p>
            <span className="font-medium text-foreground">Correo electrónico:</span>{' '}
            <a
              href={`mailto:${TERMS_CONTACT_EMAIL}`}
              className="text-primary underline-offset-2 transition-colors hover:underline"
            >
              {TERMS_CONTACT_EMAIL}
            </a>
          </p>
        </section>

        <p className="border-t border-border pt-6 text-sm text-muted-foreground sm:pt-8">
          Última actualización: {TERMS_OF_USE_LAST_UPDATED}
        </p>
      </div>
    </article>
  );
}
