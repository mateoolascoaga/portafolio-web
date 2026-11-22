<script setup lang="ts">
import { ref } from 'vue'
import { Mail, Check, Copy, Send } from '@lucide/vue'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Textarea } from '@/components/ui/textarea'
import { Label } from '@/components/ui/label'
import { useCharacterMovement } from '@/composables/useCharacterMovement'

const { characterX, characterY, moveTo } = useCharacterMovement()

const email = 'mateoolascoaga1@gmail.com'
const instagramHandle = '@olasc0aga'
const instagramUrl = 'https://www.instagram.com/olasc0aga/'

const copied = ref(false)
const sent = ref(false)

const form = ref({
  nombre: '',
  correo: '',
  mensaje: '',
})

const copyEmail = async () => {
  await navigator.clipboard.writeText(email)
  copied.value = true
  setTimeout(() => {
    copied.value = false
  }, 2000)
}

const handleSubmit = () => {
  if (!form.value.nombre.trim() || !form.value.correo.trim() || !form.value.mensaje.trim()) {
    return
  }

  sent.value = true
  form.value = { nombre: '', correo: '', mensaje: '' }

  setTimeout(() => {
    sent.value = false
  }, 4000)
}
</script>

<template>
  <main
    @click="moveTo"
    class="relative min-h-screen bg-cover bg-center bg-no-repeat overflow-x-hidden"
    style="background-image: url('/images/fondocontacto.jpg')"
  >
    <div class="absolute inset-0 bg-white/50"></div>

    <div class="relative z-10 min-h-screen flex flex-col justify-center items-center px-4 sm:px-6 py-20 sm:py-16">
      <div
        @click.stop
        class="bg-white/60 shadow-sm p-6 sm:p-10 md:p-12 w-full max-w-xl flex flex-col items-center"
      >
        <h1 class="font-tangerine text-6xl sm:text-7xl md:text-8xl mb-6 sm:mb-8 text-gray-800 text-center">
          Contacto
        </h1>

        <p class="text-sm sm:text-base text-gray-700 text-center mb-8 max-w-md leading-relaxed">
          Para cualquier cuestión o consulta sobre los textos y dibujos, puedes escribirme directamente:
        </p>

        <div class="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4 w-full mb-8">
          <div class="flex items-center justify-between gap-2 bg-black/10 px-4 py-3 text-gray-800">
            <a
              :href="`mailto:${email}`"
              class="flex items-center gap-2.5 text-xs sm:text-sm hover:underline truncate"
            >
              <Mail class="w-4 h-4 shrink-0" />
              <span class="truncate">{{ email }}</span>
            </a>

            <button
              type="button"
              @click="copyEmail"
              :aria-label="copied ? 'Correo copiado' : 'Copiar correo'"
              class="p-1.5 text-gray-600 hover:text-gray-900 transition-colors cursor-pointer shrink-0"
              title="Copiar correo"
            >
              <Check v-if="copied" class="w-4 h-4 text-green-700" />
              <Copy v-else class="w-4 h-4" />
            </button>
          </div>

          <a
            :href="instagramUrl"
            target="_blank"
            rel="noopener noreferrer"
            class="flex items-center justify-center sm:justify-start gap-2.5 bg-black/10 hover:bg-black/25 hover:text-white px-4 py-3 text-xs sm:text-sm text-gray-800 transition-colors"
          >
            <Instagram class="w-4 h-4 shrink-0" />
            <span>{{ instagramHandle }}</span>
          </a>
        </div>

        <form @submit.prevent="handleSubmit" class="w-full flex flex-col gap-4">
          <div class="flex flex-col gap-1.5">
            <Label for="nombre" class="text-xs uppercase tracking-wider text-gray-600">
              Nombre
            </Label>
            <Input
              id="nombre"
              v-model="form.nombre"
              type="text"
              placeholder="Tu nombre"
              required
              class="rounded-none bg-white/70 border-gray-300 focus-visible:ring-gray-400"
            />
          </div>

          <div class="flex flex-col gap-1.5">
            <Label for="correo" class="text-xs uppercase tracking-wider text-gray-600">
              Tu correo
            </Label>
            <Input
              id="correo"
              v-model="form.correo"
              type="email"
              placeholder="tu@correo.com"
              required
              class="rounded-none bg-white/70 border-gray-300 focus-visible:ring-gray-400"
            />
          </div>

          <div class="flex flex-col gap-1.5">
            <Label for="mensaje" class="text-xs uppercase tracking-wider text-gray-600">
              Mensaje
            </Label>
            <Textarea
              id="mensaje"
              v-model="form.mensaje"
              rows="4"
              placeholder="Escribe aquí tu mensaje..."
              required
              class="rounded-none bg-white/70 border-gray-300 focus-visible:ring-gray-400 resize-none"
            />
          </div>

          <Button
            type="submit"
            class="mt-2 w-full rounded-none bg-black/20 text-gray-800 hover:bg-gray-800 hover:text-white transition-all duration-300 cursor-pointer"
          >
            <Send class="w-4 h-4 mr-2" />
            Enviar mensaje
          </Button>

          <p
            v-if="sent"
            class="text-center text-sm text-gray-800 bg-white/80 py-2 px-3 border border-gray-300"
          >
            Mensaje enviado. ¡Gracias por escribir!
          </p>
        </form>
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
  </main>
</template>



