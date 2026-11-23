import { ref, onMounted } from 'vue'

const characterX = ref(40)
const characterY = ref(0)
const hasInteracted = ref(false)
let isInitialized = false

export function useCharacterMovement() {
  onMounted(() => {
    if (!isInitialized) {
      characterY.value = window.innerHeight - 80
      isInitialized = true
    }
  })

  function moveTo(event: MouseEvent) {
    hasInteracted.value = true
    characterX.value = event.clientX
    characterY.value = event.clientY
  }

  return {
    characterX,
    characterY,
    hasInteracted,
    moveTo,
  }
}