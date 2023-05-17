export default function useSliceData(data, count, fn) {
  if (data.length === 0) {
    return;
  }
  let i = 0;
  function render() {
    if (i + count >= data.length) {
      const sliceData = data.slice(i);
      fn(sliceData);
      return;
    }
    requestAnimationFrame(() => {
      const sliceData = data.slice(i, i + count);
      fn(sliceData);
      i += count;
      render();
    });
  }
  render();
}
