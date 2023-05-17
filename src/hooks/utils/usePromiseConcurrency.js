export default function usePromiseConcurrency(tasks = [], concurrency = 0) {
  return new Promise((resolve) => {
    if (tasks.length === 0) {
      resolve();
      return;
    }
    let nextIndex = 0;
    let fulfilledCount = 0;
    const next = () => {
      const task = tasks[nextIndex];
      nextIndex += 1;
      task().then(() => {
        fulfilledCount += 1;
        if (nextIndex < tasks.length) {
          next();
        } else if (fulfilledCount === tasks.length) {
          resolve();
        }
      });
    };
    for (let i = 0; i < concurrency && i < tasks.length; i += 1) {
      next();
    }
  });
}
