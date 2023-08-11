<template>
    <div>
        <div class="py-8 px-4 mx-auto max-w-screen-xl text-center lg:py-16">
        <h1 class="text-3xl font-bold text-gray-900 dark:text-white">Category Product</h1>
        <br>
        <div class="grid md:grid-cols-4 gap-8">
    <div class="w-full max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
        <a href="#">
            <center><img class="p-8 rounded-t-lg" src="https://fakestoreapi.com/img/71-3HjGNDUL._AC_SY879._SX._UX._SY._UY_.jpg" alt="product image" style="height: 250px; width: 250px;"/></center>
        </a>
        <div class="px-5 pb-5">
                <router-link :to="{ name: 'products' }">
                    <center><h5 class="text-xl font-semibold tracking-tight text-gray-900 dark:text-white">MEN'S CLOTHING</h5></center>
                </router-link>
        </div>
    </div>
    <div class="w-full max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
        <a href="#">
            <center><img class="p-8 rounded-t-lg" src="https://fakestoreapi.com/img/71YAIFU48IL._AC_UL640_QL65_ML3_.jpg" alt="product image" style="height: 250px; width: 250px;"/></center>
        </a>
        <div class="px-5 pb-5">
                <router-link :to="{ name: 'products' }">
                    <center><h5 class="text-xl font-semibold tracking-tight text-gray-900 dark:text-white">JEWELRY</h5></center>
                </router-link>
        </div>
    </div>
    <div class="w-full max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
        <a href="#">
            <center><img class="p-8 rounded-t-lg" src="https://fakestoreapi.com/img/61mtL65D4cL._AC_SX679_.jpg" alt="product image" style="height: 250px; width: 250px;"/></center>
        </a>
        <div class="px-5 pb-5">
                <router-link :to="{ name: 'products' }">
                    <center><h5 class="text-xl font-semibold tracking-tight text-gray-900 dark:text-white">ELECTRONIC</h5></center>
                </router-link>
        </div>
    </div>
    <div class="w-full max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
        <a href="#">
            <center><img class="p-8 rounded-t-lg" src="https://fakestoreapi.com/img/61pHAEJ4NML._AC_UX679_.jpg" alt="product image" style="height: 250px; width: 250px;"/></center>
        </a>
        <div class="px-5 pb-5">
                <router-link :to="{ name: 'products' }">
                    <center><h5 class="text-xl font-semibold tracking-tight text-gray-900 dark:text-white">WOMEN'S CLOTHING</h5></center>
                </router-link>
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