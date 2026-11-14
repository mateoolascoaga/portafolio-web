<script setup lang="ts">
import { Button } from '@/components/ui/button'
import { ArrowDown } from '@lucide/vue'
import { ref, onMounted, onUnmounted } from 'vue'

const showButtons = ref(false)

function handleScroll() {
  showButtons.value = window.scrollY > 50
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
    class="relative min-h-[200vh] bg-cover bg-center bg-no-repeat"
    style="background-image: url('/images/fondo.jpg')"
  >
    <div class="absolute inset-0 bg-white/70"></div>

    <section
      class="relative z-10 h-screen flex flex-col items-center justify-center"
    >
      <h1 class="font-tangerine text-9xl text-gray-800 bg-black/10 p-4 m-2">
        Botón plateado, contra
      </h1>

      <div class="absolute bottom-10 animate-bounce text-gray-800">
        <ArrowDown :size="32" />
      </div>
    </section>

    <section class="relative z-10 h-screen flex items-center justify-center">
      <div
        class="flex gap-4 transition-all duration-700 ease-out"
        :class="showButtons
          ? 'translate-y-0 opacity-100'
          : 'translate-y-20 opacity-0 pointer-events-none'"
      >
        <Button class="bg-black/10 text-gray-800 hover:text-white hover:bg-gray-400 rounded-none">
          <RouterLink to="/texts">Textos</RouterLink>
        </Button>

        <Button class="bg-black/10 text-gray-800 hover:text-white hover:bg-gray-400 rounded-none">
          <RouterLink to="/drawings">Dibujos</RouterLink>
        </Button>

        <Button class="bg-black/10 text-gray-800 hover:text-white hover:bg-gray-400 rounded-none">
          <RouterLink to="/contact">Contacto</RouterLink>
        </Button>
      </div>
    </section>
  </div>
</template>


