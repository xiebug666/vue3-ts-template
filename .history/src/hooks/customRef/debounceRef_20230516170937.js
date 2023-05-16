import { customRef } from 'vue';

export default function debounceRef() {
  return customRef((track, trigger) => ({
    get() { 
      track();
      return value
    },
    set() {
      trigger
     },
  }));
}
