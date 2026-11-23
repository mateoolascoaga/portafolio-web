<script setup lang="ts">
import { useRouter } from 'vue-router'
import { LayoutGridCircles } from '@lucide/vue'
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu'

const router = useRouter()

const goTo = (path: string) => {
  router.push(path)
}
</script>

<template>
  <div @click.stop class="fixed top-6 left-6 z-40">
    <DropdownMenu>
      <DropdownMenuTrigger
        aria-label="Abrir menú"
        class="group flex items-center justify-center p-2.5 rounded-sm bg-white/70 backdrop-blur-xs border border-gray-300/80 shadow-sm text-gray-800 hover:bg-black/30 hover:text-white hover:shadow-md hover:scale-105 active:scale-95 transition-all duration-300 cursor-pointer"
      >
        <LayoutGridCircles class="w-5 h-5 transition-transform duration-300 group-hover:rotate-90" />
      </DropdownMenuTrigger>

      <DropdownMenuContent align="start" class="w-48 bg-white/95 backdrop-blur-xs border-gray-200">
        <DropdownMenuLabel class="text-xs uppercase tracking-wider text-gray-400">
          Navegación
        </DropdownMenuLabel>
        <DropdownMenuSeparator />
        
        <DropdownMenuItem as-child>
  <RouterLink to="/" class="w-full cursor-pointer">Inicio</RouterLink>
      </DropdownMenuItem>
      <DropdownMenuItem as-child>
        <RouterLink to="/texts" class="w-full cursor-pointer">Textos</RouterLink>
      </DropdownMenuItem>
      <DropdownMenuItem as-child>
        <RouterLink to="/drawings" class="w-full cursor-pointer">Dibujos</RouterLink>
      </DropdownMenuItem>
      <DropdownMenuItem as-child>
        <RouterLink to="/gallery" class="w-full cursor-pointer">Galería</RouterLink>
      </DropdownMenuItem>
      <DropdownMenuItem as-child>
        <RouterLink to="/contact" class="w-full cursor-pointer">Contacto</RouterLink>
      </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  </div>
</template>