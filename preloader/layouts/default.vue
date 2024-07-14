<script setup>
</script>
<template>
  <div id="viewport">
    <ThePreloader />
    <slot />
  </div>
</template>

<style lang="scss">
@tailwind base;
@tailwind components;
@tailwind utilities;

@layer base {
  * {
    @apply box-border m-0 p-0;
  }
  body {
    @apply bg-black font-mono antialiased;
    font-family: 'Anonymous Pro', monospace;
  }
}
</style>
