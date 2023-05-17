<template>
  <div id="app" class="h-screen flex flex-col">
    <navbar />
    <div class="py-5 bg-background flex-grow">
      <router-view />
    </div>
    <Footer />
  </div>
</template>
<script setup lang="js">
import Navbar from './components/Layouts/Navbar.vue';
import Footer from './components/Layouts/Footer.vue';
import {useStore} from 'vuex';
import { onMounted } from 'vue';
const store = useStore();




onMounted(() => {
const data = store.getters['Auth/isAuth']
if(data) store.dispatch('Auth/getAuthUser')
})
</script>
