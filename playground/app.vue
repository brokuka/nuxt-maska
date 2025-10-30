<script setup lang="ts">
const { inputRef } = useMaska({
  mask: '##-##',
})
</script>

<template>
  <input ref="inputRef">
</template>
