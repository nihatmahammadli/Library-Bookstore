const searchInp = document.querySelector(".inp-search");
const searchBtn = document.querySelector(".inp-submit");
const carousel = document.getElementById("carousel");
const prevArrow = document.getElementById("prev-arrow");
const nextArrow = document.getElementById("next-arrow");

const API_KEY = "AIzaSyCq6HE6PwwbkRgIvgggxyOWrTiI6IM89cU";
let currentIndex = 0;
let books = [];

async function fetchBooks() {
    const query = searchInp.value;
    const url = `https://www.googleapis.com/books/v1/volumes?q=${query}&key=${API_KEY}`;

    try {
        const response = await fetch(url);
        const data = await response.json();

        if (!response.ok) {
            console.log("Olmadı");
        } else {
            console.log(data)
            books = data.items;
            if (books && books.length > 0) {
                await displayBooks(); 
                showArrows();
            } else {
                console.log("Kitap tapılmaı");
                carousel.innerHTML = "<p>The book you were looking for was not found.</p>";
                hideArrows();
            }
        }
    } catch (err) {
        console.error(err.message);
    }
}

async function displayBooks() {
    carousel.innerHTML = ""; 

    if (books.length === 0) {
        return;
    }

    books.forEach((item, index) => {
        const title = item.volumeInfo.title || "Title not available";
        const authors = item.volumeInfo.authors
            ? item.volumeInfo.authors.join(", ")
            : "Authors not available";
        const description = item.volumeInfo.description || "Description not available";
        const thumbnail = item.volumeInfo.imageLinks
            ? item.volumeInfo.imageLinks.thumbnail
            : "Image not available";

        const bookElement = document.createElement("div");
        bookElement.classList.add("carousel-item");
        bookElement.style.display = index === 0 ? "block" : "none"; // İlk kitabı göstərir

        bookElement.innerHTML = `
            <div class="box-2">
                <img src="${thumbnail}" alt="Kitap Görseli" />
                <div class="book-info">
                    <h5>${title}</h5>
                    <h6>${authors}</h6>
                    <p>${description}</p>
                </div>
            </div>
        `;

        carousel.appendChild(bookElement);
    });
    
}

function showBook(index) {
    const items = document.querySelectorAll(".carousel-item");
    items.forEach((item, i) => {
        item.style.display = i === index ? "block" : "none";
    });
}

searchBtn.addEventListener("click", fetchBooks);

searchInp.addEventListener("keydown", function(e) {
    if (e.key === "Enter") {
        e.preventDefault(); // Enter basıldığında formun avtomatik olaraq göndərilməsinin qarşısını almaq üçün
        fetchBooks(); // Axtarış funksiyasını işə salır
    }
});

nextArrow.addEventListener("click", () => {
    if (books.length > 0) {
        currentIndex = (currentIndex + 1) % books.length;
        showBook(currentIndex);
    }
});

prevArrow.addEventListener("click", () => {
    if (books.length > 0) {
        currentIndex = (currentIndex - 1 + books.length) % books.length;
        showBook(currentIndex);
    }
});
// arrow
function showArrows() {
    const prevArrow = document.getElementById('prev-arrow');
    const nextArrow = document.getElementById('next-arrow');
    
    prevArrow.style.display = 'block';
    nextArrow.style.display = 'block';
  }
  function hideArrows() {
    prevArrow.style.display = 'none';
    nextArrow.style.display = 'none';
}
 
  searchBtn.addEventListener('click', function() {
    showArrows();
    data(); 
  });
  