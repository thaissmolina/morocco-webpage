

var elemento = document.getElementById("e");

// Create an Intersection Observer instance
var observer = new IntersectionObserver(function(entries, observer) {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      // Calculate the opacity based on the intersection ratio
      var opacity = entry.intersectionRatio;
      elemento.style.opacity = opacity;
    }
  });
}, { threshold: [0, 0, 0, 0.5, 0.15,0.25, 0.35,0.50, 0.75, 1] });

// Start observing the element
observer.observe(elemento);





