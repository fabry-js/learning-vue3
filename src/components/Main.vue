<script setup lang="ts">
import { onMounted, Ref, ref } from "vue";
import axios from "axios";

import { apiUrl } from "../constants";
import { transformNames } from "./utils";
import { useNamesStore } from "../store/genshinNames";

const alertShown = ref(false)
const namesState = useNamesStore()
const selectedName = ref("")

onMounted(async () => {
  await axios.get(`${apiUrl}/characters`)
    .then((res) => {
      namesState.$patch({ names: transformNames(res) })
    })
})

function showAlert(name: string) {
  selectedName.value = name
  alertShown.value = !alertShown.value
}
</script>

<template>
  <div v-if="alertShown">
    <v-alert id="test-alert" type="info">{{ selectedName }}</v-alert>
  </div>
  <div v-for="name in namesState.names">
    <v-card contained-text>
      <v-card-header>
        <v-card-header-text>
          <v-card-title>{{ name }}</v-card-title>
        </v-card-header-text>
      </v-card-header>

      <v-card-actions>
        <v-btn @click="showAlert(name)">Show Message</v-btn>
      </v-card-actions>
    </v-card>
  </div>
</template>

<style scoped>
</style>
