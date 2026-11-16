
<script setup lang="ts">
import { useRoute } from 'vue-router'

const route = useRoute()

const textos: Record<string, {
  titulo: string,
  contenido: string,
  fondo: string
}> = {
  '1': {
    titulo: 'Botón plateado, contra',
    fondo: '/images/fondotextos1.jpg',
    contenido: `
        Si algunas dijeron que Dios es un tubo,
        para mí, ahora, todo se resume a una superficie.
        Como la piel, donde es igual de fácil
        dibujar que en un papel.
        Hojas del menor gramaje
        para llorar al ver lo que hay detrás.
        Algunas siluetas que no sé
        de dónde vienen y se resbalan
        hacia mis dedos.
        Superficie y agujero,
        final del camino o un lugar generalmente oscuro.

        Es natural encontrar agujeros,
        punto y coma, ya lo decía el marco.
        Y cuando alargamos el plano,
        es imposible no darse cuenta de que
        se junta con el siguiente, se confunde.
        De esta manera, una hoja,
        llegan las notas a la mesa de al lado,
        a las paredes, techos, columnas.
        Ahora unos apuntes están muy lejos,
        casi no se entienden.
        Ojalá haber escogido, pero para las próximas,
        “tener en cuenta siempre la superficie”.

        Cualquier cosa puede estar tan cerca
        o lejos como se desee,
        y cualquier organización de esas cosas
        para entenderlas
        puede ser ficción o creencia.
        En mi caso, he caído en el agujero
        que delimita una superficie,
        y como siento mi cuerpo más lejos del suelo
        elijo pensarlo.
        No hay agua, no puedo confundirlo con
        un pozo, cuevas,
        estoy seguro de su condición de agujero.

        Es más fácil aprovechar el papel y las siluetas.
        Con las manos, abiertas, sudadas,
        toco la mesa y así tu muslo, mejilla,
        el contacto no viaja por la superficie
        porque es toda la misma, extensísima.
        Juego con tu pelo en el suelo
        tocando tu pupila y el cristal del escaparate.
        Se ocupa de la distancia, siendo todo,
        si lo escoges, inmediato.
    `,
  },

  '2': {
    titulo: 'El mejor regalo',
    fondo: '/images/fondotextos2.jpg',
    contenido: `A 3000km por debajo del nivel del agua, crecen unas formas blandas Moldeables y Sublimes que operan entre lo real y lo ficticio. Los buzos más expertos entrenan cuatro meses para poder alcanzar los Nuevos Juguetes, que tienen precios altísimos. Estas criaturas no deberían existir, adquieren un tamaño demasiado grande, pero el placer y la recompensa guían la codicia sin fondo. La promesa del viaje más dulce hace 
        que la Gente se tire al agua sin saber nadar, 
        el deseo ampliando sus pulmones y el orgasmo adivinado excede las capacidades 
        de los cuerpos.

        Aquellos Ricos Afortunados disfrutan del placer Inmensurable, de membranas y babas deslizándose por cada agujero
        generando Esas Sensaciones que no se pueden obtener de otra manera.
        El contacto con la superfície es tan fuerte que hace daño

        Criaturas Abyectas y Reptantes.

        tejidos mojados que resbalan con olor a sal y color blanquecino o rosado que recuerda a la boca por dentro. La humedad se expulsa a través de los poros y les envuelve una suave niebla cargada del veneno que aumenta los genitales y los lleva a extremos inesperados. El clítoris expandido sobresale afilado y agujerea la ropa
        Crecimiento Exponencial

        Estas formas no se pueden agarrar con las manos ni dirigir,
        Ellas saben 
        conocen la erótica y siempre actúan en consecuencia.
        Los buzos practican el deseo y bajan cargados de anhelo como un reclamo que engancha a sus cuerpos el máximo de criaturas. Antes de alcanzar el clímax Inevitable, tienen que haber vuelto a tierra o el placer vacía sus pulmones y anula el aliento. Los que no controlan Las Imágenes se enfrentan a más de dos formas que extraen todo y secan
        absorben
        hasta la última gota dejando pieles huecas que llegan flotando a la superfície,
        exhibidas como trofeos siniestros o ejemplos de La Cumbre del Placer.

        En tan solo un segundo y medio, la piel del emprendedor moderno se expande
        en todas las direcciones, ocupando los Ejes
        consecuencia directa de respirar ese aire
        y el Contacto aún no ha llegado.
        Habitando este Nuevo Estado de Conciencia (en el que caben el dolor y el miedo), una criatura se desliza rápidamente Como Una Limpieza o Reconocimiento Médico que deja el cuerpo cubierto de gelatina punzante. La estimulación constante es sobrecogedora y nuestro nómada digital atraviesa el placer entero y le da la vuelta.
        Es así, del revés, totalmente perdido en Lo Que Siente, cuando se le permite abrir los ojos y observar su cuerpo transformado
        Genitales Irreconocibles e Hinchados nunca habían albergado tanto. Un dolor profundo vuelve a bajar los párpados
        viene acompañado del Mayor Orgasmo acumulándose en cada lugar para luego 
        romper en mil pedazos
        al Jóven con Lágrimas, consciente de que este ha sido El Mejor Regalo.
        `,
  },
}

const texto = textos[String(route.params.id)]
</script>

<template>
  <main
    class="relative min-h-screen bg-cover bg-center bg-no-repeat px-12 py-16"
    :style="{ backgroundImage: `url('${texto?.fondo}')` }"
  >

    <div class="absolute inset-0 bg-white/50"></div>

    <div class="relative z-10 min-h-screen flex flex-col justify-center">

      <article
        v-if="texto"
        class="max-w-2xl mx-auto text-center bg-white/70 shadow-lg p-10"
      >
        <h1 class="font-tangerine text-7xl mb-12 text-gray-800">
          {{ texto.titulo }}
        </h1>

        <p class="text-lg leading-9 text-gray-700 whitespace-pre-line">
          {{ texto.contenido }}
        </p>
      </article>

      <p v-else class="text-center text-gray-800">
        Este texto no existe.
      </p>

    </div>
  </main>
</template>
