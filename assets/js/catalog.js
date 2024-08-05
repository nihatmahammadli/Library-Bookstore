document.addEventListener('DOMContentLoaded', function() {
    const prevArrow = document.querySelector("#prev-arrow");
    const nextArrow = document.querySelector("#next-arrow");
    const bookSection = document.querySelector(".books");
  
    prevArrow.addEventListener('click', function() {
      bookSection.scrollBy({
        left: -200, // Sola kaydırma mesafesi (px cinsinden)
        behavior: 'smooth'
      });
    });
  
    nextArrow.addEventListener('click', function() {
      bookSection.scrollBy({
        left: 200, // Sağa kaydırma mesafesi (px cinsinden)
        behavior: 'smooth'
      });
    });
  });
  
  document.addEventListener('DOMContentLoaded', function() {
    const prevArrow2 = document.querySelector("#prev-arrow-2");
    const nextArrow2 = document.querySelector("#next-arrow-2");
    const bookSection2 = document.querySelector("#books-2");
  
    prevArrow2.addEventListener('click', function() {
      bookSection2.scrollBy({
        left: -200, // Sola kaydırma mesafesi (px cinsinden)
        behavior: 'smooth'
      });
    });
  
    nextArrow2.addEventListener('click', function() {
      bookSection2.scrollBy({
        left: 200, // Sağa kaydırma mesafesi (px cinsinden)
        behavior: 'smooth'
      });
    });
  });
  
  document.addEventListener('DOMContentLoaded', function() {
    const prevArrow3 = document.querySelector("#prev-arrow-3");
    const nextArrow3 = document.querySelector("#next-arrow-3");
    const bookSection3 = document.querySelector("#books-3");
  
    prevArrow3.addEventListener('click', function() {
      bookSection3.scrollBy({
        left: -200, // Sola kaydırma mesafesi (px cinsinden)
        behavior: 'smooth'
      });
    });
  
    nextArrow3.addEventListener('click', function() {
      bookSection3.scrollBy({
        left: 200, // Sağa kaydırma mesafesi (px cinsinden)
        behavior: 'smooth'
      });
    });
  });
  
  const API_KEY = "AIzaSyBAe_MuxIPVzIqg03Sianpb-FQ26qVAelQ";
  
  // API çağrısı
  fetch(`https://www.googleapis.com/books/v1/volumes?q=book&key=${API_KEY}`)
    .then((response) => {
      if (!response.ok) {
        console.log(`API request failed with status ${response.status}: ${response.statusText}`);
        return;
      }
      return response.json();
    })
    .then((data) => {
      console.log(data);
      displayBooks(data.items); // Veriyi displayBooks fonksiyonuna geçiriyoruz
    })
    .catch((err) => {
      console.log("Error occurred:", err.message);
    });
  
  // Kitapları görüntüleme fonksiyonu
  // function displayBooks(books) {
  //   const allBooks1 = document.querySelector(".books"); // `.books` sınıfını kullanın
  //   const allBooks2 = document.querySelector("#books-2"); // `#books-2` ID'sini kullanın
  //   const allBooks3 = document.querySelector("#books-3"); // `#books-3` ID'sini kullanın
  
  //   if (!allBooks1 || !allBooks2 || !allBooks3) {
  //     console.error("One or more books elements not found");
  //     return;
  //   }
  // Kitapları görüntüleme fonksiyonu
function displayBooks(books) {
  const allBooks1 = document.querySelector(".books");
  const allBooks2 = document.querySelector("#books-2");
  const allBooks3 = document.querySelector("#books-3");

  if (!allBooks1 || !allBooks2 || !allBooks3) {
    console.error("One or more books elements not found");
    return;
  }

  allBooks1.innerHTML = '';
  allBooks2.innerHTML = '';
  allBooks3.innerHTML = '';

  books.forEach(book => {
    const title = book.volumeInfo.title;
    const thumbnail = book.volumeInfo.imageLinks?.thumbnail || 'default-thumbnail.jpg';
    const author = book.volumeInfo.authors?.join(', ') || 'Unknown Author';
    const infoLink = book.volumeInfo.infoLink || '#';

    const bookElement = document.createElement("div");
    bookElement.classList.add("book-div");

    bookElement.innerHTML = `
      <img src="${thumbnail}" alt="Book Image" />
      <div class="book-inf">
          <div class="book-name">
          <h5>${title}</h5>
        <span>${author}</span>
          </div>

        
        <button class="read-more-btn" data-book='${JSON.stringify(book)}'>READ MORE</button>
      </div>
    `;

    allBooks1.appendChild(bookElement.cloneNode(true));
    allBooks2.appendChild(bookElement.cloneNode(true));
    allBooks3.appendChild(bookElement.cloneNode(true));
  });

  const readMoreButtons = document.querySelectorAll(".read-more-btn");
  readMoreButtons.forEach(button => {
    button.addEventListener("click", function () {
      const bookData = JSON.parse(button.getAttribute('data-book'));
      localStorage.setItem('selectedBook', JSON.stringify(bookData));
      window.location.href = "BookPage.html";
    });
  });
}
