<template>
  <div class="bg-bgDark text-ash-100 border border-b-8 border-blue">
    <div class="flex justify-between items-center mx-4 py-2">
      <p class="text-3xl text-white">Vue apollo</p>
      <div class="flex justify-between space-x-5 group">
        <router-link to="/" class="hover:text-ash-200">Home</router-link>
        <router-link to="/about" class="hover:text-ash-200">About</router-link>
        <router-link v-if="!isAuth" to="/auth/login" class="hover:text-ash-200"
          >Login</router-link
        >
        <router-link
          v-if="!isAuth"
          to="/auth/register"
          class="hover:text-ash-200"
          >Register</router-link
        >
        <router-link
          v-if="isAuth"
          to="/dashboard/my-profile"
          class="hover:text-ash-200"
          >Profile</router-link
        >
        <router-link
          v-if="isAuth"
          to="/dashboard/my-posts"
          class="hover:text-ash-200"
          >My Posts</router-link
        >
        <router-link
          v-if="isAuth"
          to="/dashboard/logout"
          class="hover:text-ash-200"
          >Logout</router-link
        >
      </div>
    </div>
  </div>
</template>

<script setup lang="js">
import { useStore } from "vuex";
import { computed } from "vue";
const store = useStore()

const isAuth = computed(() => store.getters["Auth/isAuth"]);
</script>

<style lang="scss" scoped></style>
