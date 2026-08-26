const images = document.querySelectorAll('.gallery-grid img');
const lightbox = document.getElementById('lightbox');
const lightboxImg = document.getElementById('lightboxImg');
const closeBtn = document.getElementById('closeBtn');

// Open Lightbox
images.forEach(image => {
    image.addEventListener('click', () => {
        lightbox.classList.add('active');
        lightboxImg.src = image.src;
    });
});

// Close with Button
closeBtn.addEventListener('click', () => {
    lightbox.classList.remove('active');
});

// Close when clicking outside image
lightbox.addEventListener('click', (e) => {
    if (e.target !== lightboxImg) {
        lightbox.classList.remove('active');
    }
});

// Close with ESC key
document.addEventListener('keydown', (e) => {
    if (e.key === "Escape") {
        lightbox.classList.remove('active');
    }
});