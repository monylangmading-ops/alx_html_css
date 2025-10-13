function toggleMenu() {
  const navLinks = document.getElementById("navLinks");
  const hamburger = document.getElementById("hamburger").querySelector("img");

  navLinks.classList.toggle("show");


  if (navLinks.classList.contains("show")) {
    hamburger.src = "close.png"; 
  } else {
    hamburger.src = "menu.png"; // 
  }
}



