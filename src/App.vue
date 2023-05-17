<template>
  <div>
    <Test></Test>
    <div>{{ v }}</div>
    <input v-model="v" type="text" />
  </div>
</template>

<script setup>
import Test from '@/components/Test.vue';
import { debounceRef } from './hooks';

const v = debounceRef('');
</script>

<style scoped lang="less">
.logo {
  height: 6em;
  padding: 1.5em;
  will-change: filter;
  transition: filter 300ms;
}
.logo:hover {
  filter: drop-shadow(0 0 2em #646cffaa);
}
.logo.vue:hover {
  filter: drop-shadow(0 0 2em #42b883aa);
}
</style>
