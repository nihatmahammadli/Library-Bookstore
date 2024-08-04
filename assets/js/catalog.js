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
  function displayBooks(books) {
    const allBooks1 = document.querySelector(".books"); // `.books` sınıfını kullanın
    const allBooks2 = document.querySelector("#books-2"); // `#books-2` ID'sini kullanın
    const allBooks3 = document.querySelector("#books-3"); // `#books-3` ID'sini kullanın
  
    if (!allBooks1 || !allBooks2 || !allBooks3) {
      console.error("One or more books elements not found");
      return;
    }
  
    allBooks1.innerHTML = ''; // Önceki içeriği temizliyoruz
    allBooks2.innerHTML = ''; // Önceki içeriği temizliyoruz
    allBooks3.innerHTML = ''; // Önceki içeriği temizliyoruz
  
    books.forEach(book => {
      const title = book.volumeInfo.title;
      const thumbnail = book.volumeInfo.imageLinks?.thumbnail || 'default-thumbnail.jpg';
      const author = book.volumeInfo.authors?.join(', ') || 'Unknown Author';
      const infoLink = book.volumeInfo.infoLink || '#';
  
      // Yeni bir kitap öğesi oluşturuyoruz
      const bookElement = document.createElement("div");
      bookElement.classList.add("book-div"); // Kitap öğesine "book-div" sınıfını ekliyoruz
  
      bookElement.innerHTML = `
        <img src="${thumbnail}" alt="Book Image" />
        <div class="book-inf">
          <h5>${title}</h5>
          <span>${author}</span>
          
            <button class="read-more-btn">READ MORE</button>
       
        </div>
      `;
  
      // İlk div'e ekliyoruz
      allBooks1.appendChild(bookElement.cloneNode(true));
      // İkinci div'e ekliyoruz
      allBooks2.appendChild(bookElement.cloneNode(true));
      // Üçüncü div'e ekliyoruz
      allBooks3.appendChild(bookElement.cloneNode(true));
    });
  
    // "READ MORE" düğmelerini seç ve olay dinleyicisi ekle
    const readMoreButtons = document.querySelectorAll(".read-more-btn");
    readMoreButtons.forEach(button => {
      button.addEventListener("click", function () {
        window.location.href = "BookPage.html";
      });
    });
  }
  