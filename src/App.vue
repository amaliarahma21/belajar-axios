<template>
  <NavbarComponent :idMenu="idMenu" :key="idMenu" />

  <router-view @id-menu="setMenu($event)" />
  </template>

  <script>
  import NavbarComponent from './components/NavbarComponent.vue';
  import { ref } from 'vue'

  export default {
    name: 'App',
    components : {
      NavbarComponent
    },

    setup()
    {
      const idMenu = ref(1)

      function setMenu(id)
      {
        idMenu.value = id;
      }

      return{
        setMenu,
        idMenu,
      }
    }

  }
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osz-font-smoothing: grayscale;
  color: black;
}
</style>