<script setup lang="ts">
  import VueMarkdown from "vue-markdown-render";
  import {ref} from "vue";
  const src = ref('# header')

  const props = defineProps({
    language: { type: String, default: "go" }
  })

  var isLoaded = ref(false)
  fetch( import.meta.env.BASE_URL + props.language + `.md`).then(response => {
    response.text().then(value => {
      isLoaded.value = true;
      src.value = value;
    })
  })

</script>

<template>
  <div style="padding: 1em">
    <VueMarkdown v-if="isLoaded" :source="src"></VueMarkdown>
    <ILoader v-else />
    <IButton :to="{ path: '/' }"> Pick a new challenge </IButton>
  </div>
</template>

<style scoped>

</style>