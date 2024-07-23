const navmenu = document.getElementById("nav-menu");
const group = document.querySelector(".group");
const elements = document.querySelector(".elements");
const close = document.querySelector(".close");

group.addEventListener("click", function () {
  elements.style.display = "block";
  elements.innerHTML = `
  <svg 
  class = "close"
  xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 18 18" fill="none">
  <path d="M1 1L17 17M17 1L1 17" stroke="white" stroke-width="2"/>
   </svg>
   <ul class = "nav-responsive">
          <li><a class="home" href="./Home.html">Home</a></li>
          <li><a href="">Catalog</a></li>
          <li><a href="">About Store</a></li>
          <li><a href="">Contact Us</a></li>
          <li><a href="">Search</a></li>
        </ul>
  `;
  document.addEventListener("click", function (event) {
    if (event.target.classList.contains("close")) {
      elements.style.display = "none";
    }
  });
});
