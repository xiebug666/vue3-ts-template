export default function useIntersectionObserver(doms, func) {
  const options = {
    threshold: 0,
  };

  const observer = new IntersectionObserver((entries) => {
    console.log(entries);
    for (entry of entries) {
      if (entry.isIntersecting) {
        const { target } = entry;
        func(target);
        ob.unobserve(target);
      }
    }
  }, options);

  doms.forEach((dom) => {
    observer.observe(dom);
  });
}