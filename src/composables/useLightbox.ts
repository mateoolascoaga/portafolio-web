import { ref, computed, onMounted, onUnmounted } from 'vue'

export function useLightbox<T>(items: T[]) {
  const selectedIndex = ref<number | null>(null)

  const selectedItem = computed<T | null>(() =>
    selectedIndex.value !== null ? items[selectedIndex.value] ?? null : null
  )

  const isOpen = computed(() => selectedIndex.value !== null)

  function open(index: number) {
    selectedIndex.value = index
  }

  function close() {
    selectedIndex.value = null
  }

  function next() {
    if (selectedIndex.value === null || items.length === 0) return
    selectedIndex.value = (selectedIndex.value + 1) % items.length
  }

  function prev() {
    if (selectedIndex.value === null || items.length === 0) return
    selectedIndex.value = (selectedIndex.value - 1 + items.length) % items.length
  }

  function handleKeydown(event: KeyboardEvent) {
    if (!isOpen.value) return

    if (event.key === 'Escape') {
      close()
    } else if (event.key === 'ArrowRight') {
      next()
    } else if (event.key === 'ArrowLeft') {
      prev()
    }
  }

  onMounted(() => {
    window.addEventListener('keydown', handleKeydown)
  })

  onUnmounted(() => {
    window.removeEventListener('keydown', handleKeydown)
  })

  return {
    selectedIndex,
    selectedItem,
    isOpen,
    open,
    close,
    next,
    prev,
  }
}