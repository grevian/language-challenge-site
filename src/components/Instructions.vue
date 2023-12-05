<script setup lang="ts">
import { ref } from 'vue';
import { useRouter } from 'vue-router'
import type { SelectOption } from '@inkline/inkline';

const router = useRouter()

const options = ref<SelectOption[]>([
  { id: 'System Languages', label: 'System Languages' },
  { id: 'LISPs', label: 'LISPs' },
  { id: 'Classical', label: 'Classical' },
  { id: 'Boring and Popular', label: 'Boring and Popular' },
  { id: 'Weird Shit', label: 'Weird Shit' },
]);
const selected = ref(options[0]);

let themeMap = new Map<String, Array<String>>([
  ['System Languages', ["rust", "c"]],
  ['LISPs', ["clojure", "opengoal"]],
  ['Classical', ["c", "perl"]],
  ['Boring and Popular', ["go", "java", "python"]],
  ['Weird Shit', ["html", "opengoal"]],
])
function issueChallenge() {
  let options = themeMap.get(selected.value)
  const randomSelection = options[Math.floor(Math.random() * options.length)];
  router.push({ name: 'Language', params: { language: randomSelection.toLowerCase() } })
}
</script>

<template>
    <p>Pick a challenge theme, and we'll provide a specific programming language with a set of learning-resources</p>
    <ISelect v-model="selected" :options="options" placeholder="Choose something.." />
    <br />
    <IButton color="primary" @click="issueChallenge" v-if="selected != null">Challenge Me!</IButton>
</template>

<style scoped>

</style>
