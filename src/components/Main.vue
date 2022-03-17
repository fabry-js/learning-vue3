<script setup lang="ts">
import { onMounted, Ref, ref } from "vue";
import axios from "axios";

import { apiUrl } from "../constants";

const data: Ref<string[]> = ref([])

onMounted(async() => {
  await axios.get(`${apiUrl}/characters`)
    .then((res) => {
      const originData: string[] = res.data
      const finalArr: string[] = []

      originData.forEach((charName) => {
        let _uppedName = charName.replace(charName[0], charName[0].toUpperCase())
        let finalName = ""
        if(_uppedName.includes("-") === true){
          const _dashNameArray = _uppedName.replace("-", " ").split(" ")
          const _dashNameFirstUppedPortion = _dashNameArray[0]
          const _dashNameLowerPortion = _dashNameArray[1]
          const _uppedLowerPortion = _dashNameLowerPortion.replace(_dashNameLowerPortion[0], _dashNameLowerPortion[0].toUpperCase())

          finalName = `${_dashNameFirstUppedPortion} ${_uppedLowerPortion}`
        } else {
          finalName = _uppedName
        }
        finalArr.push(finalName)
      })

      data.value = finalArr
    })
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
