let slideIndex = 0;

function changeSlide(n) {
    const slides = document.querySelectorAll('.user-style-image');
    slideIndex += n;
    if (slideIndex >= slides.length) {
        slideIndex = 0;
    }
    if (slideIndex < 0) {
        slideIndex = slides.length - 1;
    }
    showSlide(slideIndex);
}

function showSlide(index) {
    const slides = document.querySelectorAll('.user-style-image');
    slides.forEach((slide) => {
        slide.style.display = 'none';
    });
    slides[index].style.display = 'block';
}
function showUploadMessage() {
    const uploadMessage = document.querySelector('.upload-message');
    uploadMessage.style.display = 'block';
}

document.addEventListener('DOMContentLoaded', function() {
    const addPictureButton = document.querySelector('.add-picture-button');
    const uploadMessage = document.querySelector('.upload-message');

    addPictureButton.addEventListener('click', function() {
        uploadMessage.style.display = 'block';
    });

    addPictureButton.addEventListener('mouseleave', function() {
        uploadMessage.style.display = 'none';
    });
});

'''hii'''

function handleFileUpload(event) {
    const file = event.target.files[0];
    
    if (file) {
        const reader = new FileReader();
        
        reader.onload = function(e) {
            const imageSrc = e.target.result;
            // Create a new image element dynamically
            const newImage = document.createElement('img');
            newImage.src = imageSrc;
            newImage.alt = 'User Styled T-Shirt'; // Add appropriate alt text
            // Append the new image to the user-style-carousel
            const carousel = document.querySelector('.user-style-carousel');
            carousel.appendChild(newImage);
        };
        
        reader.readAsDataURL(file);
    }
}