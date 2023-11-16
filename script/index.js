// hamburger menu button
function navMenuBtn() {
  const x = document.getElementById("menu-mobile");
  x.style.display = (x.style.display === "none") ? "flex" : "none";
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