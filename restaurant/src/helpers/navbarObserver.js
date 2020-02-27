const animateNavbar = () => {
    const nav = document.querySelector(".main-nav");
    const header = document.querySelector(".header");

    const options = {
      rootMargin: "-40% 0% 0% 0%"
    };

    const intersectionCallback = entries => {
      entries.forEach(entry => {
        if (!entry.isIntersecting) {
          nav.classList.add("main-nav--narrow", "main-nav--back-animation");
        } else {
          nav.classList.remove("main-nav--narrow");
        }
      })
    };

    const observer = new IntersectionObserver(intersectionCallback, options);

    observer.observe(header);
}

export default animateNavbar;