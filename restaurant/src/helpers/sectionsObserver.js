const highlightSectionsOnScroll = () => {
  
  const sections = document.querySelectorAll("section");
  const navLinks = document.querySelectorAll(".main-nav__link a");

  const observerCallback = (entries, observer) => {
    entries.forEach(entry => {
      let currentTarget = Array.from(navLinks).find(a => a.text.toLowerCase().includes(entry.target.id));
      if (entry.isIntersecting) {        
        currentTarget.classList.add("selected");
      } else {
        currentTarget.classList.remove("selected");
      }
    })
  };

  const options = {
    treshold: 1,
    rootMargin: "-50% 0px -50% 0px"
  };

  const observer = new IntersectionObserver(observerCallback, options);

  sections.forEach(section => {
    observer.observe(section);
  });

}

export default highlightSectionsOnScroll;