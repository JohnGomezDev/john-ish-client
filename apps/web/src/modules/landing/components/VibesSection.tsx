'use client';

import { motion } from 'framer-motion';

import { SectionFrame } from '@/modules/landing/components/SectionFrame';
import { useScrollFadeUp } from '@/modules/landing/hooks/use-animations';

import { MusicPlayerCard } from '@/modules/songs/components/MusicPlayerCard';

export function VibesSection(): React.JSX.Element {
  const aboutCard = useScrollFadeUp();
  const playerCard = useScrollFadeUp(0.12);

  return (
    <SectionFrame
      id="vibes"
      index="03"
      label="vibras"
      ariaLabelledBy="vibes-heading"
      density="regular"
    >
      <div className="grid grid-cols-1 items-stretch gap-8 md:grid-cols-[minmax(0,1.35fr)_minmax(0,1fr)] md:gap-0">
        <motion.article {...aboutCard} className="flex flex-col gap-4 sm:gap-5 md:pr-8">
          <h2
            id="vibes-heading"
            className="font-display text-xl font-medium tracking-tight text-foreground sm:text-2xl"
          >
            Más allá de la pantalla
          </h2>

          <div className="flex flex-col gap-4 text-sm leading-relaxed text-muted-foreground sm:text-base">
            <p>
              No todo empieza con la solución correcta. A veces hay que probar, equivocarse, investigar y volver a empezar. Me interesa entender por qué hacemos las cosas de cierta manera, qué problemas estamos resolviendo y qué podemos simplificar. Construyo software, pero también aprendo de cada decisión que tomo en el camino.
            </p>
            <p>
              Fuera del editor, soy una persona apasionada por la vida. Me gustan los deportes, la astronomía, los videojuegos, y por supuesto, la música.
              Es por eso que comparto contigo mi canción favorita del momento, la cual iré actualizando según mi mood.
            </p>
          </div>
        </motion.article>

        <motion.div
          {...playerCard}
          className="md:border-l md:pl-8"
        >
          <MusicPlayerCard />
        </motion.div>
      </div>
    </SectionFrame>
  );
}
