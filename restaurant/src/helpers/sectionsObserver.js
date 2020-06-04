const highlightSectionsOnScroll = (sectionNode) => {

  const navLi = sectionNode.current.parentNode.children[1].children[0].children[1].children[0].children;
  const navLinks = [...navLi].map(li => li.children[0]);

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

  observer.observe(sectionNode.current);

  return observer;
}

export default highlightSectionsOnScroll;