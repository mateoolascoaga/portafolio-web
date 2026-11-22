<script setup lang="ts">
import PhotoCarousel from '@/components/PhotosCarousel.vue'
import { useCharacterMovement } from '@/composables/useCharacterMovement'

const drawingPhotos = [
  'drawing1',
  'drawing2',
  'drawing3',
]

const { characterX, characterY, moveTo } = useCharacterMovement()
</script>

<template>
  <main
    @click="moveTo"
    class="relative min-h-screen bg-cover bg-center bg-no-repeat overflow-x-hidden"
    style="background-image: url('/images/fondodibujos.jpg')"
  >
    <div class="absolute inset-0 bg-white/50"></div>

   
    <div class="relative z-10 min-h-screen flex flex-col justify-center items-center px-4 sm:px-6 py-20 sm:py-16">
      

      <div class="bg-white/50 shadow-sm p-5 sm:p-8 md:p-12 w-full max-w-4xl flex flex-col items-center">
        <h1 class="font-tangerine text-6xl sm:text-7xl md:text-8xl mb-8 sm:mb-10 md:mb-12 text-gray-800 text-center">
          Dibujos
        </h1>

        <PhotoCarousel
          base-path="/images"
          :photos="drawingPhotos"
        />
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
  </main>
</template>