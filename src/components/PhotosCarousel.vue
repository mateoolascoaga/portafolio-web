<script setup lang="ts">
import { computed } from 'vue'
import { Card, CardContent } from '@/components/ui/card'
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from '@/components/ui/carousel'
import { ChevronLeft, ChevronRight, X } from '@lucide/vue'
import { useLightbox } from '@/composables/useLightbox'

interface Props {
  photos: string[]
  basePath: string
  autoplayDelay?: number
  loop?: boolean
  dragFree?: boolean
}

const props = withDefaults(defineProps<Props>(), {
  autoplayDelay: 2000,
  loop: true,
  dragFree: true,
})

const {
  selectedIndex,
  selectedItem: selectedPhoto,
  open: openPhoto,
  close: closePhoto,
  next: nextPhoto,
  prev: prevPhoto,
} = useLightbox(props.photos)

const selectedPhotoUrl = computed(() =>
  selectedPhoto.value ? `${props.basePath}/${selectedPhoto.value}.jpg` : null
)
</script>

<template>
  <Carousel
    class="relative w-full max-w-md md:max-w-2xl lg:max-w-3xl"
    :opts="{
      align: 'start',
      loop: props.loop,
      dragFree: props.dragFree,
    }"
  >
    <CarouselContent class="-ml-2 md:-ml-4">
      <CarouselItem
        v-for="(photo, i) in props.photos"
        :key="i"
        class="pl-2 md:pl-4 md:basis-1/2"
      >
        <div class="p-1 h-full">
          <Card
            @click.stop="openPhoto(i)"
            class="h-full overflow-hidden rounded-sm border border-gray-300/80 bg-white/70 shadow-sm group cursor-zoom-in"
          >
            <CardContent class="flex aspect-[6/4] items-center justify-center p-0">
              <img
                :src="`${props.basePath}/${photo}.jpg`"
                :alt="`Obra ${photo}`"
                class="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
              />
            </CardContent>
          </Card>
        </div>
      </CarouselItem>
    </CarouselContent>

    <CarouselPrevious
      @click.stop
      class="flex -left-3 md:-left-12 h-7 w-7 md:h-8 md:w-8 justify-center items-center bg-white/90 text-gray-800 border-gray-300 shadow-sm hover:bg-gray-800 hover:text-white transition-colors"
    />
    <CarouselNext
      @click.stop
      class="flex -right-3 md:-right-12 h-7 w-7 md:h-8 md:w-8 justify-center items-center bg-white/90 text-gray-800 border-gray-300 shadow-sm hover:bg-gray-800 hover:text-white transition-colors"
    />
  </Carousel>

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
        class="fixed inset-0 z-50 flex items-center justify-center bg-black/80 backdrop-blur-xs p-4 md:p-10 cursor-zoom-out"
      >
        <button
          type="button"
          @click.stop="closePhoto"
          aria-label="Cerrar imagen"
          class="absolute top-6 right-6 flex h-10 w-10 items-center justify-center rounded-full bg-white/15 text-white hover:bg-white/30 transition-colors cursor-pointer"
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
            class="max-h-[82vh] max-w-[85vw] object-contain rounded-sm shadow-2xl"
          />
          <span class="mt-3 text-xs tracking-widest uppercase text-white/75">
            {{ (selectedIndex ?? 0) + 1 }} / {{ props.photos.length }}
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
</template>