<script setup lang="ts">
import { onMounted, Ref, ref } from "vue";
import axios from "axios";

import { apiUrl } from "../constants";

const data: Ref<string[]> = ref([])

onMounted(async() => {
  await axios.get(`${apiUrl}/characters`)
    .then((res) => data.value = res.data)
})

</script>

<template>
  <div v-for="pg in data">
    {{ pg }}
  </div>
</template>

<style scoped>
a {
  color: #42b983;
}

label {
  margin: 0 0.5em;
  font-weight: bold;
}

code {
  background-color: #eee;
  padding: 2px 4px;
  border-radius: 4px;
  color: #304455;
}
</style>
