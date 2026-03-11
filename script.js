const events = document.querySelectorAll('.event');

// Modal functionality for images
const modal = document.getElementById('modal');
const modalImage = document.getElementById('modal-image');
const modalDesc = document.getElementById('modal-desc');
const closeBtn = document.querySelector('.close');

document.querySelectorAll('.content-table img').forEach(img => {
    img.addEventListener('click', () => {
        modalImage.src = img.src;
        modalDesc.textContent = img.dataset.desc;
        modal.style.display = 'block';
    });
});

closeBtn.addEventListener('click', () => {
    modal.style.display = 'none';
});

window.addEventListener('click', (e) => {
    if (e.target === modal) {
        modal.style.display = 'none';
    }
});

// No carousel navigation - let browser handle scrolling naturally