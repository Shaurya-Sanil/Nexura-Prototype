const adImages = [
    'images/brands.jpg',
    'images/brands-2.jpg',
    'images/brands-3.jpg',
    'images/brands-4.jpg',
    'images/brand-ad-5.jpg'
];

let currentIndex = 0;
const adImageElement = document.getElementById('ad-image');

function changeImage() {
    currentIndex = (currentIndex + 1) % adImages.length;
    adImageElement.src = adImages[currentIndex];
}

// Change image every 3 seconds (3000 ms)
setInterval(changeImage, 3000);
