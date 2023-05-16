import { customRef } from 'vue';

export default function debounceRef(value, delay = 500) {
  let timer = null;
  return customRef((track, trigger) => ({
    get() {
      track();
      return value;
    },
    set(val) {
      clear
      value = val;
      trigger();
    },
  }));
}
