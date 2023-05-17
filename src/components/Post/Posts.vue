<template>
  <div class="posts"></div>
</template>

<script setup>
import { defineProps } from "vue";

const props = defineProps({
  post: {
    type: Array,
    required: true,
  },
});
</script>

<style lang="scss" scoped></style>
