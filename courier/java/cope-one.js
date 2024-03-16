const navBar = document.getElementById('nav');
const nav = () =>{
    navbar.addEventListener("scroll", function () {
      window.addEventListener("scroll", function () {
        if (window.scrollY > 100) {
          // Change 100 to whatever scroll position you desire
          nav.style.backgroundColor = "green"; // Change navbar background color to green
        } else {
          nav.style.backgroundColor = "transparent"; // Change navbar background color to transparent
        }
      });
    });
}
nav();