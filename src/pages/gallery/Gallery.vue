<script setup lang="ts">
import { computed } from 'vue'
import { ChevronLeft, ChevronRight, X } from '@lucide/vue'
import { useCharacterMovement } from '@/composables/useCharacterMovement'
import { useLightbox } from '@/composables/useLightbox'

const galleryPhotos = [
  'fondo',
  'fondotextos',
  'fondotextos1',
  'fondotextos2',
  'fondodibujos',
  'fondocontacto',
  'galeria1',
  'galeria2',
]

const basePath = '/images'
const { characterX, characterY, moveTo } = useCharacterMovement()

const {
  selectedIndex,
  selectedItem: selectedPhoto,
  open: openPhoto,
  close: closePhoto,
  next: nextPhoto,
  prev: prevPhoto,
} = useLightbox(galleryPhotos)

const selectedPhotoUrl = computed(() =>
  selectedPhoto.value ? `${basePath}/${selectedPhoto.value}.jpg` : null
)
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
            @click.stop="openPhoto(index)"
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
          v-if="selectedPhotoUrl"
          @click.stop="closePhoto"
          class="fixed inset-0 z-50 flex items-center justify-center bg-black/80 backdrop-blur-xs p-3 sm:p-4 md:p-10 cursor-zoom-out"
        >
          <button
            type="button"
            @click.stop="closePhoto"
            aria-label="Cerrar imagen"
            class="absolute top-4 right-4 sm:top-6 sm:right-6 flex h-9 w-9 sm:h-10 sm:w-10 items-center justify-center rounded-full bg-white/15 text-white hover:bg-white/30 transition-colors cursor-pointer"
          >
            <X :size="20" />
          </button>

          <button
            type="button"
            @click.stop="prevPhoto"
            aria-label="Imagen anterior"
            class="absolute left-3 sm:left-6 flex h-10 w-10 items-center justify-center rounded-full bg-white/15 text-white hover:bg-white/30 transition-colors cursor-pointer"
          >
            <ChevronLeft :size="22" />
          </button>

          <div @click.stop class="flex flex-col items-center cursor-default">
            <img
              :src="selectedPhotoUrl"
              :alt="`Vista ampliada ${selectedPhoto}`"
              class="max-h-[82vh] sm:max-h-[85vh] max-w-[85vw] object-contain rounded-sm shadow-2xl"
            />
            <span class="mt-3 text-xs tracking-widest uppercase text-white/75">
              {{ (selectedIndex ?? 0) + 1 }} / {{ galleryPhotos.length }}
            </span>
          </div>

          <button
            type="button"
            @click.stop="nextPhoto"
            aria-label="Imagen siguiente"
            class="absolute right-3 sm:right-6 flex h-10 w-10 items-center justify-center rounded-full bg-white/15 text-white hover:bg-white/30 transition-colors cursor-pointer"
          >
            <ChevronRight :size="22" />
          </button>
        </div>
      </Transition>
    </Teleport>
  </main>
</template>