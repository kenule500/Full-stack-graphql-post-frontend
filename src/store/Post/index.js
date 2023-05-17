import { GET_ALL_POST } from "@/gql";
import apolloClient from "@/vue-apollo";

const state = {};
const getters = {};

const mutations = {};

const actions = {
  async getAllPost({ dipatch }, userData) {
    try {
      let {
        data: { getAllPosts },
      } = await apolloClient.query({
        query: GET_ALL_POST,
        variables: userData,
      });
      return getAllPosts;
    } catch (error) {}
  },
};

export default {
  state,
  getters,
  mutations,
  actions,
  namespaced: true,
};
