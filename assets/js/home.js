const navmenu = document.getElementById("nav-menu");
const group = document.querySelector(".group");
const elements = document.querySelector(".elements");
const close = document.querySelector(".close");

group.addEventListener("click", function () {
  elements.style.display = "block";
  elements.innerHTML = `
  <svg 
  class = "close"
  xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 18 18" fill="none">
  <path d="M1 1L17 17M17 1L1 17" stroke="white" stroke-width="2"/>
   </svg>
        <p>Join us</p>
   <ul class = "nav-responsive">
          <li><a href="./index.html">Home</a></li>
          <li><a href="./catalog.html">Catalog</a></li>
          <li><a href="./aboutStore.html">About Store</a></li>
          <li><a href="./contactUs.html">Contact Us</a></li>
          <li><a href="./search.html">Search</a></li>
          <li ><button class = "resp-join-us">Join Us</button></li>
        </ul>

  `;

  document.addEventListener("click", function (event) {
    if (event.target.classList.contains("resp-join-us")) {
      elements.innerHTML = `
      <svg 
      class = "close"
      xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 18 18" fill="none">
      <path d="M1 1L17 17M17 1L1 17" stroke="white" stroke-width="2"/>
      </svg>
      <div class="join-us-background-resp"></div>
      <div class="join-us-div-resp"><div>
      <h1 class="join-h2-resp">Join Us</h1>
              <input
                placeholder="Full Name"
                class="input-1"
                type="text"
                name=""
                id=""
              />
              <input
                placeholder="Email"
                class="input-1"
                type="email"
                name=""
                id=""
              />
              <button class="join-button-resp">Join</button>

    `;
    }
  });

  document.addEventListener("click", function (event) {
    if (event.target.classList.contains("close")) {
      elements.style.display = "none";
    }
  });
});

const joinUs = document.querySelector(".joinUs");
const joinUsdiv = document.querySelector(".join-us-div");
const joinUsback = document.querySelector(".join-us-background");
const joinButton = document.querySelector(".join-button");

joinUs.addEventListener("click", function () {
  joinUsdiv.style.display = "block";
  joinUsback.style.display = "block";
});

joinButton.addEventListener("click", function () {
  joinUsdiv.style.display = "none";
  joinUsback.style.display = "none";
});

joinUsback.addEventListener("click", function () {
  joinUsdiv.style.display = "none";
  joinUsback.style.display = "none";
});

const joinButtonresp = document.querySelector(".join-button-resp");
