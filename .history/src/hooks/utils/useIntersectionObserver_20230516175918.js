export default function useIntersectionObserver(doms, func) {
  const options = {
    threshold: 0,
  };

  const observer = new IntersectionObserver((entries) => {
    console.log(entries);
  }, options);

  doms.forEach((dom) => {
    observer.observe(dom);
  });
}
