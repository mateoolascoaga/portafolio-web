<script setup lang="ts">
import { RouterLink } from 'vue-router'
import { Button } from '@/components/ui/button'
import { ArrowLeft } from '@lucide/vue'
import { useCharacterMovement } from '@/composables/useCharacterMovement'

const { characterX, characterY, moveTo } = useCharacterMovement()
</script>

<template>
  <main
    @click="moveTo"
    class="relative min-h-screen bg-cover bg-center bg-no-repeat overflow-x-hidden"
    style="background-image: url('/images/fondo.jpg')"
  >
    <div class="absolute inset-0 bg-white/50"></div>

    <div class="relative z-10 min-h-screen flex flex-col items-center justify-center px-4 text-center">
      <div class="bg-white/60 shadow-sm p-8 sm:p-12 max-w-lg w-full flex flex-col items-center">
        <span class="text-xs tracking-[0.3em] uppercase text-gray-500 mb-2">
          Error 404
        </span>

        <h1 class="font-tangerine text-6xl sm:text-7xl text-gray-800 mb-4 leading-tight">
          Página no encontrada
        </h1>

        <p class="text-sm sm:text-base text-gray-600 mb-8 max-w-sm">
          El espacio que buscas no existe o ha cambiado de lugar.
        </p>

        <Button
          as-child
          @click.stop
          class="bg-black/10 text-gray-800 hover:text-white hover:bg-black/30 rounded-none transition-colors"
        >
          <RouterLink to="/" class="flex items-center gap-2">
            <ArrowLeft :size="16" />
            <span>Volver al inicio</span>
          </RouterLink>
        </Button>
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
  </main>
</template>