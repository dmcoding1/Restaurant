const animateNavbar = (nav, header) => {

  const options = {
    rootMargin: "-40% 0% 0% 0%",
  };

  const intersectionCallback = (entries) => {
    entries.forEach((entry) => {
      if (!entry.isIntersecting) {
        nav.classList.add("main-nav--narrow", "main-nav--back-animation");
      } else {
        nav.classList.remove("main-nav--narrow");
      }
    });
  };

  const observer = new IntersectionObserver(intersectionCallback, options);

  if (window.innerWidth > 767) {
    observer.observe(header)
  } else {
    observer.unobserve(header);
  }  

};

export default animateNavbar;
