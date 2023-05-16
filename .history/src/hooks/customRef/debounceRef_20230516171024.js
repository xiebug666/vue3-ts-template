import { customRef } from 'vue';

export default function debounceRef(value, delay) {
  let timer
  return customRef((track, trigger) => ({
    get() {
      track();
      return value;
    },
    set(val) {
      value = val;
      trigger();
    },
  }));
}
