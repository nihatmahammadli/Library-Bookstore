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