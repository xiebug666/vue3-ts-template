<template>
  <div>
    <button @click="handleClick">button</button>
    <div style="display: flex; flex-wrap: wrap">
      <div v-for="i in showData" :key="i" style="width: fit-content">{{ i }},</div>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue';
import { usePerformChunk, useSliceRendering, useDeepClone, usePromiseConcurrency } from '@/hooks';

const datas = new Array(50).fill(0).map((_, i) => i);
const task = (time) => () =>
  new Promise((resolve) => {
    setTimeout(() => {
      console.log(time);
      resolve(time);
    }, time);
  });

const showData = ref([]);

const handleClick = () => {
  // usePerformChunk(datas, (d) => {
  //   showData.value.push(d);
  // });
  // useSliceRendering(datas, 1, (d) => {
  //   showData.value.push(...d);
  // });
  usePromiseConcurrency([task(3000), task(3000), task(3000), task(2000), task(1000), task(2000)], 4).then((res) => {
    console.log('all result: ', res);
  });
};
</script>
<style scoped lang="less"></style>
