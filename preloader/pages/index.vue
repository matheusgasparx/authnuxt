<script setup>
import gsap from 'gsap'
import { general } from '@/store/index.js'

watch(() => general.isPreloaderVisible, (val) => {
  if (!val) {
    gsap.from('.gallery', {
      scale: 1.1,
      opacity: 0.2,
      duration: 1,
      delay: 0.1
    })
  }
})

const images = [
  '1.png', '2.png', '3.png', '4.png', '5.png',
  '6.png', '7.png', '8.png', '9.png', '10.png',
  '11.png', '12.png',
]
</script>

<template>
  <div class="gallery will-change-transform will-change-opacity">

    <div
      v-for="_ in 10"
      class="grid grid-cols-3 gap-4"
    >

      <div
        v-for="img in images"
        :key="img"
        class="gallery__item"
      >
        <img
          :src="img"
          class="w-full h-20vw object-cover object-center"
        />
      </div>

    </div>

  </div>
</template>

<style scoped>
.gallery__item {
  height: 20vw;
}
</style>
