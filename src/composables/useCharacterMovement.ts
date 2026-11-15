import { ref, onMounted } from 'vue'

export function useCharacterMovement() {
  const characterX = ref(40)
  const characterY = ref(0)

  onMounted(() => {
    characterY.value = window.innerHeight - 80
  })

 function moveTo(event: MouseEvent) {
  characterX.value = event.clientX
  characterY.value = event.clientY
}
   
  return {
    characterX,
    characterY,
    moveTo
  }
}