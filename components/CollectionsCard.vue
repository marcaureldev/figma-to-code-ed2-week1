<template>
  <div class="max-w-15 p-2 border border-[#B8BABE] rounded-lg box" data-aos="fade-up">
    <img :src="collection.pictures" alt="Image CyberPunk">
    <div class="flex justify-between items-center">
      <h1 class="text-sm font-medium">{{ collection.title }}</h1>
      <p class="flex gap-1 items-center text-sm p-2">
        <img src="/icons/ethereum.svg" alt="Jeton Ethereum">
        <span>68</span>
      </p>
    </div>

    <button class="border w-full rounded-lg py-1 font-medium">Place a Bid</button>

  </div>
</template>

<script>
import { onMounted } from 'vue';
import AOS from 'aos';
import 'aos/dist/aos.css'
export default {
  props: {
    collection: Object,
  },

  setup() {
    onMounted(() => {
      AOS.init();
    });
  },

}
</script>

<style></style>