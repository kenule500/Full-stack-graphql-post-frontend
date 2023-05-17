<template>
  <div>
    <input type="file" ref="fileInput" @change="handleFileUpload" />
    <button @click="uploadImage">Upload</button>
  </div>
</template>

<script setup lang="js">
import apolloClient from '@/vue-apollo';
import { gql } from 'graphql-tag';
import {ref} from 'vue'

const UPLOAD_IMAGE_MUTATION = gql`
  mutation($file: Upload!) {
    imageUploader(file: $file)
  }
`;

const file = ref(null);
const fileInput = ref(null);

const handleFileUpload = () => {
  file.value = fileInput.value.files[0];
};

const uploadImage = async () => {
  console.log(file.value)
  try {
    const { data } = await apolloClient.mutate({mutation: UPLOAD_IMAGE_MUTATION,
      variables: {
        file: file.value,
      },
    });
    console.log(data)
    // Handle the response data or perform any necessary actions
  } catch (error) {
    console.log(error)
    // Handle the error
  }
};
</script>
