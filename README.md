# Nuxt Maska Module

Nuxt module for Maska input masking library. Just install and use!

## ✨ Features

- 🔥 **Auto-imports** - composables and directives ready to use
- 📝 **Full TypeScript support** - complete type safety
- ⚡️ **Nuxt 3+ ready** - built for Nuxt 3+

## 📦 Installation

```bash
npm install nuxt-maska
# or
yarn add nuxt-maska
# or
pnpm add nuxt-maska
```

That's it! No need to install `maska` separately.

## 🚀 Usage

### 1. Add module to `nuxt.config.ts`

```typescript
export default defineNuxtConfig({
  modules: ['nuxt-maska'],

  // Optional configuration
  maska: {
    autoImports: true, // default: true
    directive: true // default: true
  }
})
```

### 2. Use directive in your components

```vue
<script setup lang="ts">
import type { MaskaDetail } from 'nuxt-maska'

function handleMaska(detail: MaskaDetail) {
  console.log('Masked:', detail.masked)
  console.log('Unmasked:', detail.unmasked)
  console.log('Completed:', detail.completed)
}
</script>

<template>
  <!-- Phone mask -->
  <input v-maska="'+7 (###) ###-##-##'">

  <!-- Credit card -->
  <input v-maska="'#### #### #### ####'">

  <!-- Date -->
  <input v-maska="'##/##/####'">

  <!-- With options -->
  <input
    v-maska="{
      mask: '+7 (###) ###-##-##',
      eager: true,
      onMaska: handleMaska,
    }"
  >
</template>
```

### 3. Use composable

```vue
<script setup lang="ts">
const { inputRef, masked, unmasked, completed } = useMaska({
  mask: '+7 (###) ###-##-##',
  eager: true,
  onMaska: (detail) => {
    console.log('Phone entered:', detail.unmasked)
  }
})
</script>

<template>
  <div>
    <input ref="inputRef" type="tel">
    <p>Formatted: {{ masked }}</p>
    <p>Raw value: {{ unmasked }}</p>
    <p>Is complete: {{ completed }}</p>
  </div>
</template>
```

## ⚙️ Options

### Module Options

```typescript
interface ModuleOptions {
  autoImports?: boolean // Auto-import composables (default: true)
  directive?: boolean // Register v-maska globally (default: true)
}
```

### Composable Options

```typescript
interface UseMaskaOptions {
  mask?: string | string[] // Mask pattern(s)
  tokens?: Record<string, { pattern: RegExp, optional?: boolean }> // Custom tokens
  eager?: boolean // Update on input (default: false)
  reversed?: boolean // Apply mask from right to left
  onMaska?: (detail: MaskaDetail) => void // Callback on change
}
```

### MaskaDetail Type

```typescript
interface MaskaDetail {
  masked: string // Formatted value
  unmasked: string // Raw value without mask
  completed: boolean // Whether mask is fully filled
}
```

## 📝 License

MIT
