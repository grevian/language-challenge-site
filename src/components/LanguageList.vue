<script setup lang="ts">
import {ref} from "vue";

const languages = ref(new Array<String>("Perl","Python","C","Java","OpenGOAL","Clojure","Rust","Go"))
</script>

<template>
  <IListGroup>
    <IListGroupItem v-for="lang in languages" :to="{name: 'Language', params: {language: lang.toLowerCase() }}">
      {{ lang }}
    </IListGroupItem >
  </IListGroup>
</template>

<style scoped>

</style>