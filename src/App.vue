<script setup>
import Foo from '@/components/Foo.vue';
import { debounceRef } from './hooks';

const v = debounceRef('');
</script>

<template>
  <div>
    <Foo></Foo>
    <div>{{ v }}</div>
    <input v-model="v" type="text" />
  </div>
</template>

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
