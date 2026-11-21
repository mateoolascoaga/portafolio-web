<script setup lang="ts">
import { ref, onMounted, onUnmounted } from 'vue'
import { Card, CardContent } from '@/components/ui/card'
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from '@/components/ui/carousel'

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

const selectedPhoto = ref<string | null>(null)

const openPhoto = (photo: string) => {
  selectedPhoto.value = `${props.basePath}/${photo}.jpg`
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
            @click.stop="openPhoto(photo)"
            class="h-full overflow-hidden rounded-sm border border-gray-300/80 bg-white/70 shadow-sm group cursor-zoom-in"
          >
            <CardContent class="flex aspect-[6/4] items-center justify-center p-0">
              <img
                :src="`${props.basePath}/${photo}.jpg`"
                :alt="`Drawing ${photo}`"
                class="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
              />
            </CardContent>
          </Card>
        </div>
      </CarouselItem>
    </CarouselContent>

    <CarouselPrevious
      @click.stop
      class="hidden md:flex justify-center items-center bg-white/80 text-gray-800 border-gray-300 shadow-sm hover:bg-black/40 hover:text-white transition-colors"
    />
    <CarouselNext
      @click.stop
      class="hidden md:flex justify-center items-center bg-white/80 text-gray-800 border-gray-300 shadow-sm hover:bg-black/40 hover:text-white transition-colors"
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
        v-if="selectedPhoto"
        @click.stop="closePhoto"
        class="fixed inset-0 z-50 flex items-center justify-center bg-black/80 backdrop-blur-xs p-4 md:p-10 cursor-zoom-out"
      >

        <button
          @click.stop="closePhoto"
          aria-label="Cerrar imagen"
          class="absolute top-6 right-6 flex h-10 w-10 items-center justify-center rounded-full bg-white/15 text-white text-xl hover:bg-white/30 transition-colors cursor-pointer"
        >
          ✕
        </button>

        <img
          :src="selectedPhoto"
          alt="Vista ampliada"
          @click.stop
          class="max-h-[88vh] max-w-[92vw] object-contain rounded-sm shadow-2xl cursor-default"
        />
      </div>
    </Transition>
  </Teleport>
</template>