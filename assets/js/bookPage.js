
const sendBtn = document.querySelector("#myBtn");
const myInput = document.querySelector(".myInput");
const commentsDiv = document.querySelector(".comments");

sendBtn.addEventListener("click", function() {
    let myComment = document.createElement("div");
    myComment.setAttribute("class", "comment");
    
    let pElement = document.createElement("p");
    pElement.innerHTML = `<span class="span-comment"><p class="anonim-word">anonim</p> ${myInput.value}</span>`;
    myComment.appendChild(pElement);

    commentsDiv.appendChild(myComment);
    myInput.value= ""
    
});
