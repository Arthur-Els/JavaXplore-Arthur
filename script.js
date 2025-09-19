  // Observer untuk animasi card
  const cardObserver = new IntersectionObserver((entries, observer) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add("show");
        observer.unobserve(entry.target); // supaya animasi hanya sekali
      }
    });
  }, {
    threshold: 0.4
  });

  // Observe semua card
  document.querySelectorAll(".card").forEach(card => {
    cardObserver.observe(card);
  });

  