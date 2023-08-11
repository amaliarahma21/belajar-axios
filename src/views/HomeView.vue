<template>
    <div>
        <div class="py-8 px-4 mx-auto max-w-screen-xl text-center lg:py-16">
        <h1 class="text-3xl font-bold text-gray-900 dark:text-white">Description of Product</h1>
        <br>
        <div class="grid md:grid-cols-4 gap-8">
          <div v-for="data in products" :key="data.id">
    <div class="max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700 h-96">
        <a href="#">
          <img class="p-8 rounded-t-lg" :src="data.image" alt="product image" style="height: 200px; width:200px "/>
        </a>
        <div class="p-5">
            <a href="#">
                <h5 class="mb-2 text-l font-bold tracking-tight text-gray-900 dark:text-white">{{ data.title }}</h5>
            </a>
            <p class="mb-3 font-normal text-gray-700 dark:text-gray-400">{{ data.description }}</p>
        </div>
    </div>
    </div>
    </div>
    </div>
    </div> 
</template>

<script>
import store from '../store';

import { useStore } from 'vuex';
// const store = useStore();
// const getProducts = computed(() => {
//     return store.getters.getProducts
// })
// const products = computed(() => {
//     return store.state.products
// })

// onMounted(() => {
//     store.dispatch('fetchProduct')
// })

export default {
  computed: {
      getProducts(){
          return this.$store.getters.getProducts
      },
      products() {
          return this.$store.state.products
      }
      },
  mounted() {
      return this.$store.dispatch('fetchProduct')
  }
}

</script>

<style scoped>

</style>