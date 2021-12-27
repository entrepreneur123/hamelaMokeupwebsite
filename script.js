$(".owl-carousel").owlCarousel({
  loop: true,
  margin: 10,
  nav: true,
  responsive: {
    0: {
      items: 1,
    },
    600: {
      items: 1,
    },
    1000: {
      items: 1,
    },
  },
});

// const toggleButton = document.getElementsByClassName("navlink-toggle")[0];
// const navbarLinks = document.getElementsByClassName("navlink");
// toggleButton.addEventListener("click", function () {
//   for (var i = 0; i < navbarLinks.length; i++)
//     navbarLinks[i].classList.toggle("active");
// });

let hamburgerBtn = document.getElementById("hamburger-btn");
let navLinks = document.getElementById("navlinks");
let barIcon = document.getElementById("bar-icon");
let crossIcon = document.getElementById("cross-icon");
hamburgerBtn.onclick = function () {
  // alert("hi");
  // navLinks.style.display = "flex";
  barIcon.classList.toggle("hide");
  crossIcon.classList.toggle("active");
  navLinks.classList.toggle("active");
};
