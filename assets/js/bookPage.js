
const sendBtn = document.querySelector("#myBtn");
const myInput = document.querySelector(".myInput");
const commentsDiv = document.querySelector(".comments");
const btnBack = document.querySelector(".btnBack");



document.addEventListener("keydown", function (e) {
    if (e.key === "Enter") {
        addcomment()    }})

    function addcomment(){
        if( myInput.value != "" ){
            let myComment = document.createElement("div");
            myComment.setAttribute("class", "comment");
            
            let pElement = document.createElement("p");
            pElement.innerHTML = `<span class="span-comment"><p class="anonim-word">anonim</p> ${myInput.value}</span>`;
            myComment.appendChild(pElement);
        
            commentsDiv.appendChild(myComment);
            myInput.value= ""
    
        }
        else{
            myComment.style.display = 'none';
    
        }
    }
    sendBtn.addEventListener("click",  addcomment)
    document.addEventListener("keydown", function (e) {
        if (e.key === "Enter") {
            addcomment()    }})
    
            btnBack.addEventListener("click", function(){
                window.location.href="Catalog.html"
            })