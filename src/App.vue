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
  <RouterView />
</template>
   
   
   
   
   


