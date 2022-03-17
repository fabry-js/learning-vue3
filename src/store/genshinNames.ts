import { defineStore } from "pinia";
import { ref } from "vue";

export const useNamesStore = defineStore("names", () => {
  const names = ref([] as string[])

  function addName(passingArray: string[]){
    names.value = passingArray
  }

  return { names, addName }
})