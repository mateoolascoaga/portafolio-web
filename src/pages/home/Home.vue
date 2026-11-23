<script setup lang="ts">
import { Button } from '@/components/ui/button'
import { ArrowDown } from '@lucide/vue'
import { ref, onMounted, onUnmounted } from 'vue'
import { useCharacterMovement } from '@/composables/useCharacterMovement'
import { useRouter } from 'vue-router'

const showButtons = ref(false)

const { characterX, characterY, hasInteracted, moveTo } = useCharacterMovement()

const router = useRouter()

function handleButtonClick(path: string) {
  setTimeout(() => {
    router.push(path)
  }, 1500)
}

function handleScroll() {
  showButtons.value = window.scrollY >= window.innerHeight
}

onMounted(() => {
  window.addEventListener('scroll', handleScroll)
})

onUnmounted(() => {
  window.removeEventListener('scroll', handleScroll)
})
</script>

<template>
  <div
    @click="moveTo"
    class="relative min-h-[200vh] bg-cover bg-center bg-no-repeat overflow-x-hidden"
    style="background-image: url('/images/fondo.jpg')"
  >
    <div class="absolute inset-0 bg-white/50"></div>

    <section
      class="relative z-10 h-screen flex flex-col items-center justify-center px-4"
    >
      <h1 class="font-tangerine text-5xl sm:text-7xl md:text-8xl lg:text-9xl text-gray-800 bg-black/10 p-3 sm:p-4 m-2 text-center leading-tight">
        Botón plateado, contra
      </h1>

      <div class="absolute bottom-8 sm:bottom-10 animate-bounce text-gray-800">
        <ArrowDown :size="32" />
      </div>
    </section>

    <section class="relative z-10 h-screen flex flex-col items-center justify-center px-4">
      <div
        class="flex flex-col sm:flex-row flex-wrap items-center justify-center gap-4 sm:gap-6 w-full max-w-xs sm:max-w-none transition-all duration-1000 ease-in-out"
        :class="showButtons
          ? 'translate-y-0 opacity-100'
          : 'translate-y-20 opacity-0 pointer-events-none'"
      >
        <Button
          @click="handleButtonClick('/texts')"
          class="w-full sm:w-auto bg-black/10 text-gray-800 hover:text-white hover:bg-black/30 rounded-none"
        >
          Textos
        </Button>

        <Button
          @click="handleButtonClick('/drawings')"
          class="w-full sm:w-auto bg-black/10 text-gray-800 hover:text-white hover:bg-black/30 rounded-none"
        >
          Dibujos
        </Button>

        <Button
          @click="handleButtonClick('/gallery')"
          class="w-full sm:w-auto bg-black/10 text-gray-800 hover:text-white hover:bg-black/30 rounded-none"
        >
          Galería
        </Button>

        <Button
          @click="handleButtonClick('/contact')"
          class="w-full sm:w-auto bg-black/10 text-gray-800 hover:text-white hover:bg-black/30 rounded-none"
        >
          Contacto
        </Button>
      </div>

      <div class="h-10 mt-6 flex items-center justify-center">
        <Transition
          enter-active-class="transition-opacity duration-700 ease-out"
          enter-from-class="opacity-0"
          enter-to-class="opacity-100"
          leave-active-class="transition-opacity duration-400 ease-in"
          leave-from-class="opacity-100"
          leave-to-class="opacity-0"
        >
          <button
            v-if="showButtons && !hasInteracted"
            type="button"
            @click.stop="moveTo"
            class="flex items-center gap-2 text-xs tracking-widest uppercase text-gray-600/80 hover:text-gray-900 transition-colors cursor-pointer"
          >
            <span class="flex items-center gap-2 animate-pulse">
              <img src="/images/click.png" alt="" class="w-3.5 h-auto opacity-80" />
              <span>haz clic en el espacio</span>
            </span>
          </button>
        </Transition>
      </div>
    </section>

    <div
      v-if="showButtons"
      class="fixed z-20 text-4xl pointer-events-none transition-all duration-700 ease-in-out"
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
</template>