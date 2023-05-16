import { customRef } from 'vue';

export default function debounceRef(value, delay = 500) {
  let timer = null;
  let v = value
  return customRef((track, trigger) => ({
    get() {
      track();
      return value;
    },
    set(val) {
      clearTimeout(timer);
      timer = setTimeout(() => {
        value = val;
        trigger();
      }, delay);
    },
  }));
}
