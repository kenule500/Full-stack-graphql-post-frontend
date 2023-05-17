<template>
  <div
    class="auth-login flex flex-col mx-auto bg-white max-w-[520px] shadow-md"
  >
    <h3 class="text-3xl font-bold italic p-5 text-blue">Login</h3>
    <div class="p-5 box-border shadow-md">
      <form class="flex flex-col space-y-3" @submit.prevent="authenticateUser">
        <div class="form-group flex flex-col space-y-2">
          <label for="username" class="text-blue font-medium">Username</label>
          <input
            type="text"
            placeholder="Username"
            v-model="user.username"
            class="form-control focus:outline-4 focus:outline-blue h-9 px-4"
            id="username"
          />
        </div>

        <div class="form-group flex flex-col space-y-2">
          <label for="password" class="text-blue font-medium">Password</label>
          <input
            type="text"
            placeholder="Password"
            v-model="user.password"
            class="form-control focus:outline-4 focus:outline-blue h-9 px-4"
            id="password"
          />
        </div>

        <div class="form-group flex flex-col space-y-2 bg-blue h-10 text-white">
          <button class="w-full h-full">Login</button>
        </div>

        <div class="form-group flex flex-col space-y-2 h-10 text-blue">
          <RouterLink to="/auth/register" cass="w-full h-full"
            >Need an account? Register Now!</RouterLink
          >
        </div>
      </form>
    </div>
  </div>
</template>

<script setup>
import { reactive } from "vue";
import { useStore } from "vuex";

const store = useStore();

const user = reactive({
  username: "",
  password: "",
});

const authenticateUser = async () => {
  await store.dispatch("Auth/loginUser", user);
};
</script>

<style lang="scss" scoped></style>
