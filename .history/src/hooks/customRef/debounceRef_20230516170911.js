import { customRef } from 'vue';

export default function debounceRef() {
  return customRef((track,trigger) => { 
    return {
      get(){
        
      }
    }
  });
}