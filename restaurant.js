// Add active class to the current link
var currentLocation = location.href;
var navLinks = document.querySelectorAll('.navbar-nav a');
for (var i = 0; i < navLinks.length; i++) {
    if (navLinks[i].href === currentLocation) {
        navLinks[i].className += " active";
    }
}



//auto increment code


        document.addEventListener('DOMContentLoaded', function() {
          function animateValue(id, start, end, duration) {
            const obj = document.getElementById(id);
            let startTimestamp = null;
            const step = (timestamp) => {
              if (!startTimestamp) startTimestamp = timestamp;
              const progress = Math.min((timestamp - startTimestamp) / duration, 1);
              obj.textContent = Math.floor(progress * (end - start) + start) + '+';
              if (progress < 1) {
                window.requestAnimationFrame(step);
              }
            };
            window.requestAnimationFrame(step);
          }
      
          const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
              if (entry.isIntersecting) {
                animateValue('experience', 0, 18, 10000);
                animateValue('menus', 0, 100, 10000);
                animateValue('staff', 0, 50, 10000);
                animateValue('customers', 0, 15000, 10000);
                observer.disconnect(); // Stop observing after animation
              }
            });
          }, { threshold: 0.5 }); // Adjust the threshold as needed
      
          observer.observe(document.querySelector('.row.mt-5'));
        });
      

        // table booking javascript
        // document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        //     anchor.addEventListener('click', function (e) {
        //         e.preventDefault();
        //         document.querySelector(this.getAttribute('href')).scrollIntoView({
        //             behavior: 'smooth'
        //         });
        //     });
        // });