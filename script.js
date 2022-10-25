const nav = document.querySelector('.nav')
window.onscroll = function () {
  let top = window.scrollY;
  if (top >= 50) {
    nav.classList.add('active')
  }else{
    nav.classList.remove('active')
  }
}

let sideMenu = document.getElementById("sideMenu");

  const openMenu = () => {
    sideMenu.style.right = "0";
  }

  const closeMenu = () => {
    sideMenu.style.right = "-200px";
  }