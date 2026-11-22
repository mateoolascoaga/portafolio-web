<script setup lang="ts">
import { ref, onMounted, onUnmounted } from 'vue'
import { useCharacterMovement } from '@/composables/useCharacterMovement'

const galleryPhotos = [
  'fondo',
  'fondotextos',
  'fondotextos1',
  'fondotextos2',
  'fondodibujos',
  'fondocontacto',
]

const basePath = '/images'
const { characterX, characterY, moveTo } = useCharacterMovement()

const selectedPhoto = ref<string | null>(null)

const openPhoto = (photo: string) => {
  selectedPhoto.value = `${basePath}/${photo}.jpg`
}

const closePhoto = () => {
  selectedPhoto.value = null
}

const handleKeydown = (e: KeyboardEvent) => {
  if (e.key === 'Escape' && selectedPhoto.value) {
    closePhoto()
  }
}

onMounted(() => window.addEventListener('keydown', handleKeydown))
onUnmounted(() => window.removeEventListener('keydown', handleKeydown))
</script>

<template>
  <main
    @click="moveTo"
    class="relative min-h-screen bg-neutral-50 overflow-x-hidden"
  >

    <div class="relative z-10 min-h-screen flex flex-col justify-center items-center px-4 sm:px-6 md:px-12 py-20 sm:py-16">
      
      <div class="w-full max-w-7xl flex flex-col items-center">
        <h1 class="font-tangerine text-6xl sm:text-7xl md:text-8xl mb-8 sm:mb-12 md:mb-14 text-gray-800 text-center">
          Galería
        </h1>

        <div class="grid grid-cols-1 md:grid-cols-2 gap-5 sm:gap-8 md:gap-10 w-full">
          <div
            v-for="(photo, index) in galleryPhotos"
            :key="index"
            @click.stop="openPhoto(photo)"
            class="group relative aspect-[4/3] overflow-hidden rounded-sm border border-gray-200 bg-white shadow-sm cursor-zoom-in"
          >
            <img
              :src="`${basePath}/${photo}.jpg`"
              :alt="`Imagen ${photo}`"
              class="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
            />
          </div>
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

    <Teleport to="body">
      <Transition
        enter-active-class="transition-opacity duration-200 ease-out"
        enter-from-class="opacity-0"
        enter-to-class="opacity-100"
        leave-active-class="transition-opacity duration-150 ease-in"
        leave-from-class="opacity-100"
        leave-to-class="opacity-0"
      >
        <div
          v-if="selectedPhoto"
          @click.stop="closePhoto"
          class="fixed inset-0 z-50 flex items-center justify-center bg-black/80 backdrop-blur-xs p-3 sm:p-4 md:p-10 cursor-zoom-out"
        >
          <button
            @click.stop="closePhoto"
            aria-label="Cerrar imagen"
            class="absolute top-4 right-4 sm:top-6 sm:right-6 flex h-9 w-9 sm:h-10 sm:w-10 items-center justify-center rounded-full bg-white/15 text-white text-lg sm:text-xl hover:bg-white/30 transition-colors cursor-pointer"
          >
            ✕
          </button>

          <img
            :src="selectedPhoto"
            alt="Vista ampliada"
            @click.stop
            class="max-h-[85vh] sm:max-h-[88vh] max-w-[94vw] sm:max-w-[92vw] object-contain rounded-sm shadow-2xl cursor-default"
          />
        </div>
      </Transition>
    </Teleport>
  </main>
</template>