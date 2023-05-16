import { customRef } from 'vue';

export default function debounceRef(value, delay) {
  let timer = null;
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
