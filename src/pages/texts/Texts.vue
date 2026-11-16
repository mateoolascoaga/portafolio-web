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
    class="relative min-h-screen bg-cover bg-center bg-no-repeat"
    style="background-image: url('/images/fondotextos.jpg')"
  >
  
    <div class="absolute inset-0 bg-white/50"></div>

   <div class="relative z-10 min-h-screen flex flex-col justify-center items-center">

    <div class="bg-white/50 shadow-sm p-12">

    <h1 class="font-tangerine text-8xl mb-12 text-gray-800 text-center">
      Textos
    </h1>

    <div class="flex flex-col items-center gap-6">

      <div class="flex flex-col items-center gap-6">
        <a
          v-for="texto in textos"
          :key="texto.id"
          :href="`#/texts/${texto.id}`"
          target="_blank"
          rel="noopener noreferrer"
          class="text-xl text-gray-700 bg-black/20 p-2 hover:text-white hover:bg-black/40 transition-all duration-300"
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
