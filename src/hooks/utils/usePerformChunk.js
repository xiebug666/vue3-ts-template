export default function usePerformChunk(data, fn) {
  if (data.length === 0) {
    return;
  }
  let i = 0;
  function run() {
    if (i === data.length) {
      return;
    }
    requestIdleCallback((idle) => {
      while (idle.timeRemaining() > 0 && i < data.length) {
        fn(data[i]);
        i += 1;
      }
      run();
    });
  }
  run();
}
