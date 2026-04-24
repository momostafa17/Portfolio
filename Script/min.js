let sections = document.querySelectorAll("section");

let observer = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("show");
      }
    });
  },
  {
    threshold: 0.15,
  },
);

sections.forEach((section) => {
  section.classList.add("hide");
  observer.observe(section);
});
