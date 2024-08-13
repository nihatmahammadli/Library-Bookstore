const sendBtn = document.querySelector("#myBtn");
const myInput = document.querySelector(".myInput");
const btnBack = document.querySelector(".btnBack");

const myList = document.querySelector(".comments");

let userList = [];
let getUserList;


///////////////////////////////////////////////////////////
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
      pElement.innerHTML = `<span class="span-comment"><div class="user-comment"><p class="anonim-word">anonim    </p></div>  ${getUserList[i]}</span>`;
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
    myInput.value = ""; // 
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

document.addEventListener('DOMContentLoaded', function () {
  const selectedBook = JSON.parse(localStorage.getItem('selectedBook'));

  if (!selectedBook) {
    console.error("No book selected");
    return;
  }

  const bookTitleElement = document.querySelector(".aboutBook h1.h1");
  const bookAuthorElement = document.querySelector(".aboutBook span");
  const bookThumbnailElement = document.querySelector(".book-img img");
  const bookThumbnailElementResp = document.querySelector(".book-img-resp img");
  const descriptionElement = document.querySelector("#info-book");
  const descriptionElementResp = document.querySelector(".inf-book-resp");
  const authorName = document.querySelector(".h1-resp");


  const publishedYear = document.querySelector(".year");


  bookTitleElement.textContent = selectedBook.volumeInfo.title || "Title not available";
  bookAuthorElement.textContent = selectedBook.volumeInfo.authors?.join(', ') || "Author not available";
  bookThumbnailElement.src = selectedBook.volumeInfo.imageLinks?.thumbnail
  || "default-thumbnail.jpg";
  bookThumbnailElementResp.src = selectedBook.volumeInfo.imageLinks?.thumbnail || "default-thumbnail.jpg";
  descriptionElement.textContent = selectedBook.volumeInfo.description || "Description not available";
  descriptionElementResp.textContent = selectedBook.volumeInfo.description || "Description not available";
  publishedYear.textContent = selectedBook.volumeInfo.publishedDate || "Description not available";
  authorName.textContent = selectedBook.volumeInfo.authors?.join(', ') || "Author not available";
});

