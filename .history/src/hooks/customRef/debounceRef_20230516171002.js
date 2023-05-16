import { customRef } from 'vue';

export default function debounceRef(value, delay) {
  return customRef((track, trigger) => ({
    get() {
      track();
      return value;
    },
    set() {
      trigger();
    },
  }));
}
