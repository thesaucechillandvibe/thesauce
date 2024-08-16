const images = ['assets/image1.png', 'assets/image2.png', 'assets/image3.png', 'assets/image4.png', 'assets/image5.png', 'assets/image6.png', 'assets/image7.png', 'assets/image8.png'];
let currentIndex = 0;
let isTransitioning = false;

function updateImage() {
    const menuImage = document.getElementById('menuImage');
    
    if (isTransitioning) return;
    
    isTransitioning = true;
    menuImage.style.opacity = 0;

    setTimeout(() => {
        menuImage.src = images[currentIndex];
        menuImage.onload = () => {
            menuImage.style.opacity = 1;
        };
        
        setTimeout(() => {
            isTransitioning = false;
        }, 500);
    }, 500);

    // Update button states
    document.getElementById('prevBtn').disabled = currentIndex === 0;
    document.getElementById('nextBtn').disabled = currentIndex === images.length - 1;
}

function nextPage() {
    if (currentIndex < images.length - 1 && !isTransitioning) {
        currentIndex++;
        updateImage();
    }
}

function prevPage() {
    if (currentIndex > 0 && !isTransitioning) {
        currentIndex--;
        updateImage();
    }
}

window.onload = updateImage;
