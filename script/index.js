function openNav() {
    document.getElementById("menu-mobile").style.display = "flex";
  }
  
  function closeNav() {
    document.getElementById("menu-mobile").style.display = "none";
  }

  // navbar scroll effect
  const navbar = document.getElementById('navbar');

window.addEventListener('scroll', () => {
    if (window.scrollY > 50) { // Adjust this value based on when you want the color to change
        navbar.classList.add('scrolled');
    } else {
        navbar.classList.remove('scrolled');
    }
});