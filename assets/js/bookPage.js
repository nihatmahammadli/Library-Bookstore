const sendBtn = document.querySelector("#myBtn");
const myInput = document.querySelector(".myInput");
const btnBack = document.querySelector(".btnBack");

const myList = document.querySelector(".comments");

let userList = [];
let getUserList;

function addcomment() {
  myList.innerHTML = "";
  getUserList = JSON.parse(localStorage.getItem("userList")) || [];
  if (getUserList.length === 0) {
    myList.innerHTML = `          <span class="no-text">No comments yet</span>
`;
  } else {
    for (let i = 0; i < getUserList.length; i++) {
      let myComment = document.createElement("div");
      myComment.setAttribute("class", "comment");

      let pElement = document.createElement("p");
      pElement.innerHTML = `<span class="span-comment"><p class="anonim-word">anonim</p> ${getUserList[i]}</span>`;
      myComment.appendChild(pElement);

      myList.appendChild(myComment);
    }
  }
}

addcomment();

function showComment() {
  let comments = JSON.parse(localStorage.getItem("userList")) || [];
  const newComment = myInput.value.trim();

  if (newComment) {
    comments.push(newComment);
    localStorage.setItem("userList", JSON.stringify(comments));
    myInput.value = ""; // Yorum eklendikten sonra giriş kutusunu temizle
    addcomment();
  } else {
    alert("Please enter a comment.");
  }
}

sendBtn.addEventListener("click", showComment);

document.addEventListener("keydown", function (e) {
  if (e.key === "Enter") {
    showComment();
  }
});

btnBack.addEventListener("click", function () {
  window.location.href = "catalog.html";
});

// function addcomment(){
//     if( myInput.value != "" ){

//         myInput.value= ""

//     }
//     else{
//         myComment.style.display = 'none';

//     }
// }
