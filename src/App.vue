<script setup lang="ts">
import { computed } from 'vue'
import { useRoute } from 'vue-router'
import NavMenu from '@/components/NavMenu.vue'

const route = useRoute()

const showMenu = computed(() => {
  return route.path !== '/' && route.name !== 'home'
})
</script>

<template>
  <NavMenu v-if="showMenu" />

  <RouterView v-slot="{ Component }">
    <Transition
      mode="out-in"
      enter-active-class="transition-all duration-300 ease-out"
      enter-from-class="opacity-0 translate-y-1"
      enter-to-class="opacity-100 translate-y-0"
      leave-active-class="transition-all duration-200 ease-in"
      leave-from-class="opacity-100 translate-y-0"
      leave-to-class="opacity-0 -translate-y-1"
    >
      <component :is="Component" :key="route.path" />
    </Transition>
  </RouterView>
</template>
   
   
   
   
   


