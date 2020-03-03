const lazyLoadImages = () => {
  
  const images = document.querySelectorAll("[data-src]");

  const observerCallback = (entries, observer) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {  
          const imgSrc = entry.target.dataset.src;      
          if (entry.target.tagName === "IMG") {
            entry.target.src = imgSrc;
          } else {
            entry.target.style.backgroundImage = `url(${imgSrc})`;
          }

          observer.unobserve(entry.target);
        }
    })
  };

  const options = {
    treshold: 0,
    rootMargin: "1000px 0px 0px 0px"
  };

  const observer = new IntersectionObserver(observerCallback, options);

  images.forEach(image => {
    observer.observe(image);
  });

}

export default lazyLoadImages;