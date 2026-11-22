<script setup lang="ts">
import { useCharacterMovement } from '@/composables/useCharacterMovement'

const textos = [
  { id: 1, titulo: 'Botón plateado, contra' },
  { id: 2, titulo: 'El mejor regalo' },
]

const { characterX, characterY, moveTo } = useCharacterMovement()
</script>

<template>
  <main
    @click="moveTo"
    class="relative min-h-screen bg-cover bg-center bg-no-repeat overflow-x-hidden"
    style="background-image: url('/images/fondotextos.jpg')"
  >
  
    <div class="absolute inset-0 bg-white/50"></div>

   <div class="relative z-10 min-h-screen flex flex-col justify-center items-center px-4 sm:px-6 py-20 sm:py-16">

    <div class="bg-white/50 shadow-sm p-6 sm:p-10 md:p-12 w-full max-w-md sm:max-w-lg">

    <h1 class="font-tangerine text-6xl sm:text-7xl md:text-8xl mb-8 sm:mb-10 md:mb-12 text-gray-800 text-center">
      Textos
    </h1>

    <div class="flex flex-col items-center gap-4 sm:gap-6 w-full">

      <div class="flex flex-col items-center gap-4 sm:gap-6 w-full">
        <a
          v-for="texto in textos"
          :key="texto.id"
          :href="`#/texts/${texto.id}`"
          target="_blank"
          rel="noopener noreferrer"
          class="w-full sm:w-auto text-center text-lg sm:text-xl text-gray-700 bg-black/20 px-4 py-2.5 sm:p-2 hover:text-white hover:bg-black/40 transition-all duration-300"
        >
          {{ texto.titulo }}
        </a>
      </div>

    </div>

    <div
        class="fixed z-20 pointer-events-none transition-all duration-700 ease-in-out"
        :style="{
            left: `${characterX}px`,
            top: `${characterY}px`,
            transform: 'translate(-50%, -50%)'
        }"
        >
        <img
            src="/images/click.png"
            alt="Personaje"
            class="w-5 h-auto object-contain"
        />
    </div>
    </div>
    </div>
  </main>
</template>