function useIntersectionObserver(doms, func) {
  const observer = new IntersectionObserver((entries) => {
    console.log(entries);
  });

  doms.forEach((dom) => {
    observer.observe(dom);
  });
}
