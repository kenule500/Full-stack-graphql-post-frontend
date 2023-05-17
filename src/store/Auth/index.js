import { AUTHENTICATED_USER, AUTHENTICATE_USER, REGISTER_USER } from "@/gql";
import apolloClient from "@/vue-apollo";
import router from "@/router";

const state = {
  authStatus: false,
  user: {},
  token: localStorage.getItem("apollo-token") || null,
};
const getters = {
  user: (state) => state.user,
  authStatus: (state) => state.authStatus,
  isAuth: (state) => !!state.token,
  token: (state) => state.token,
};

const mutations = {
  LOGIN_USER(state, payload) {
    state.user = payload.user;
    state.authStatus = true;
  },

  SET_TOKEN(state, payload) {
    state.token = payload;
  },

  LOGOUT_USER(state) {
    state.user = {};
    state.authStatus = false;
    state.token = null;
    localStorage.removeItem("apollo-token");
  },
};

const actions = {
  async loginUser({ dispatch }, userData) {
    try {
      let {
        data: { authenticateUser },
      } = await apolloClient.mutate({
        mutation: AUTHENTICATE_USER,
        variables: userData,
      });
      dispatch("setAuthUserData", authenticateUser);
    } catch (error) {
      Toast.fire({
        icon: "error",
        title: error.message.split(","),
      });
    }
  },

  async setAuthUserData({ commit }, payload) {
    commit("LOGIN_USER", payload);
    commit("SET_TOKEN", payload.token);

    //  SET TOKEN IN LOCAL STORAGE
    localStorage.setItem("apollo-token", payload.token.split(" ")[1]);
    router.push("/dashboard");
    Toast.fire({
      icon: "success",
      title: "You are now looged in",
    });
  },

  async registerUser({ dispatch }, userData) {
    try {
      let {
        data: { registerUser },
      } = await apolloClient.mutate({
        mutation: REGISTER_USER,
        variables: {
          input: {
            email: userData.email,
            firstName: userData.firstName,
            username: userData.username,
            lastName: userData.lastName,
            password: userData.password,
          },
        },
      });
      dispatch("setAuthUserData", registerUser);
    } catch (error) {
      console.log(error);
    }
  },

  async getAuthUser({ commit, dispatch }) {
    try {
      let {
        data: { authUserProfile },
      } = await apolloClient.query({
        query: AUTHENTICATED_USER,
      });

      commit("LOGIN_USER", authUserProfile);
    } catch (error) {
      console.log(error);
      dispatch("logoutUser");
    }
  },

  async logoutUser({ commit }) {
    commit("LOGOUT_USER");
  },
};

export default {
  state,
  getters,
  mutations,
  actions,
  namespaced: true,
};

// try {
//   const { mutate: registerUserMutation } = useMutation(RegisterUser);
//   console.log("userdata", registerUserMutation);
//   const { data } = registerUserMutation({
//     variables: {
//       input: {
//         email: userData.input.email,
//         firstName: userData.input.firstName,
//         username: userData.input.username,
//         lastName: userData.input.lastName,
//         password: userData.input.password,
//       },
//     },
//   });

//   console.log("data", result);
//   const { token, user: registeredUser } = data.registerUser;
//   commit("LOGIN_USER", { user: registeredUser });
//   commit("SET_TOKEN", token);
//   // Additional logic after successful registration
// } catch (error) {
//   // Handle error
// }
