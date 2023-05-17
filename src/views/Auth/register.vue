<template>
  <div
    class="auth-login flex flex-col mx-auto bg-white max-w-[520px] shadow-md"
  >
    <h3 class="text-3xl font-bold italic p-5 text-blue">Register</h3>
    <div class="p-5 box-border shadow-md">
      <form class="flex flex-col space-y-3" @submit.prevent="signUpUser">
        <div class="form-group flex flex-col space-y-2">
          <label for="firstName" class="text-blue font-medium"
            >First Name</label
          >
          <input
            type="text"
            placeholder="First Name"
            v-model="user.firstName"
            class="form-control focus:outline-4 focus:outline-blue h-9 px-4 border"
            id="firstName"
          />
        </div>

        <div class="form-group flex flex-col space-y-2">
          <label for="lastName" class="text-blue font-medium">Last Name</label>
          <input
            type="text"
            v-model="user.lastName"
            placeholder="Last Name"
            class="form-control focus:outline-4 focus:outline-blue h-9 px-4 border"
            id="lastName"
          />
        </div>

        <div class="form-group flex flex-col space-y-2">
          <label for="username" class="text-blue font-medium">Username</label>
          <input
            type="text"
            placeholder="Username"
            v-model="user.username"
            class="form-control focus:outline-4 focus:outline-blue h-9 px-4 border"
            id="username"
          />
        </div>

        <div class="form-group flex flex-col space-y-2">
          <label for="email" class="text-blue font-medium">Email</label>
          <input
            type="email"
            placeholder="Email"
            v-model="user.email"
            class="form-control focus:outline-4 focus:outline-blue h-9 px-4 border"
            id="email"
          />
        </div>

        <div class="form-group flex flex-col space-y-2">
          <label for="password" class="text-blue font-medium">Password</label>
          <input
            type="password"
            v-model="user.password"
            placeholder="Password"
            class="form-control focus:outline-4 focus:outline-blue h-9 px-4 border"
            id="password"
          />
        </div>

        <div class="form-group flex flex-col space-y-2 bg-blue h-10 text-white">
          <button class="w-full h-full">Register</button>
        </div>

        <div class="form-group flex flex-col space-y-2 h-10 text-blue">
          <RouterLink to="/auth/login" cass="w-full h-full"
            >Already have an account? Login Now!</RouterLink
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
  email: "",
  firstName: "",
  lastName: "",
});

const signUpUser = () => {
  store.dispatch("Auth/registerUser", user);
  // console.log("USER", user);
};
</script>

<style lang="scss" scoped></style>

// const user = store.state.Auth.user; // const authStatus =
store.state.Auth.authStatus; // const isAuth = store.getters["Auth/isAuth"];
