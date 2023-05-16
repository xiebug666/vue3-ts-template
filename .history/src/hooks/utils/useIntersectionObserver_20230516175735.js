function useIntersectionObserver(dom, func) {
  const observer = new IntersectionObserver((entries) => {
    console.log(entries);
  });

  dom.
}
