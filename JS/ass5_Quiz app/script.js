function animateCounter(id, start, end, duration) {
    let range = end - start;
    let current = start;
    let increment = end > start ? 1 : -1;
    let stepTime = Math.abs(Math.floor(duration / range));
    let timer = setInterval(() => {
      current += increment;
      document.getElementById(id).textContent = current;
      if (current === end) {
        clearInterval(timer);
      }
    }, stepTime);
  }

  
  animateCounter("followers", 0, 1200, 2000);
  animateCounter("services", 0, 350, 2000);
  animateCounter("categories", 0, 50, 2000);
  

  setTimeout(() => {
            Swal.fire({
                title: 'Welcome to my website',
                text: 'I hope you have a great journey!',
                icon: 'success',
                confirmButtonText: 'OK'
            });
        }, 4000);
    
