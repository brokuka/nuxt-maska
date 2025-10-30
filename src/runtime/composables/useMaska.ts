import type { MaskaDetail, MaskInputOptions } from 'maska'
import { MaskInput } from 'maska'
import { onBeforeUnmount, onMounted, ref } from 'vue'

export function useMaska(options: MaskInputOptions = {}) {
  const inputRef = ref<HTMLInputElement | null>(null)
  const masked = ref('')
  const unmasked = ref('')
  const completed = ref(false)

  let maskInput: MaskInput | null = null

  onMounted(() => {
    if (inputRef.value) {
      maskInput = new MaskInput(inputRef.value, {
        ...options,
        onMaska: (detail: MaskaDetail) => {
          masked.value = detail.masked
          unmasked.value = detail.unmasked
          completed.value = detail.completed

          if (options.onMaska) {
            if (Array.isArray(options.onMaska)) {
              options.onMaska.forEach(fn => fn(detail))
            }
            else {
              options.onMaska(detail)
            }
          }
        },
      })
    }
  })

  onBeforeUnmount(() => {
    if (maskInput) {
      maskInput.destroy()
    }
  })

  return {
    inputRef,
    masked,
    unmasked,
    completed,
  }
}
