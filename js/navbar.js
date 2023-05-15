const header = document.querySelector('#header');
const navbar = document.querySelector('.navcontainer');

function fixNavbar() {
  if (window.scrollY + 65 > header.offsetHeight) {
    navbar.classList.add('fixed-nav');
  } else {
    navbar.classList.remove('fixed-nav');
  }
}

window.addEventListener('scroll', fixNavbar);
