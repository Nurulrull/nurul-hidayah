document.queryselectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEentListener('click', function(e) {
      e.preventerDefault();

      document.queryselector(this.getAttribute('href')).scrollIntoView({
        behavior: 'smooth'
      });
      });
    });