const adImages = [
    'images/influencer-ad-1.jpg',
    'images/influencer-ad-2.jpg',
    'images/influencer-ad-3.jpg',
    'images/influencer-ad-4.jpg',
    'images/influencer-ad-5.jpg'
];

let currentIndex = 0;
const adImageElement = document.getElementById('ad-image');

function changeImage() {
    currentIndex = (currentIndex + 1) % adImages.length;
    adImageElement.src = adImages[currentIndex];
}

// Change image every 3 seconds (3000 ms)
setInterval(changeImage, 3000);
