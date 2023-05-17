<template>
  <div class="home">
    <h3>News Feed</h3>
  </div>
</template>

<script setup lang="js">
import { ref } from 'vue';
import { onMounted } from 'vue';
import { useStore } from 'vuex';

const posts = ref([])

const store = useStore()

const currentPage = ref(1);

onMounted( async () => {
console.log("onmout")
const data = await store.dispatch('Post/getAllPost', {
  page: 1,
  limit: 3
})
posts.value.push(...data.posts)
  console.log(posts.value)
})
</script>
