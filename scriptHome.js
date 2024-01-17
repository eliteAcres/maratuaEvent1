
// for rotating image
document.addEventListener("DOMContentLoaded", function () {
    let currentImageIndex = 0;
    const imagePaths = ['a1.jpg', 'a2.jpg', 'a3.jpg', 'a4.jpg', 'a5.jpg', 'a6.jpg', 'a7.jpg', 'a8.jpg', 'a9.jpg', 'a10.jpg', 'a11.jpg', 'a12.jpg', 'a13.jpg', 'a14.jpg'];

    function rotateImages() {
        document.getElementById('image1').src = 'images/' + imagePaths[(currentImageIndex + imagePaths.length - 1) % imagePaths.length];
        document.getElementById('image2').src = 'images/' + imagePaths[currentImageIndex];
        document.getElementById('image3').src = 'images/' + imagePaths[(currentImageIndex + 1) % imagePaths.length];
        currentImageIndex = (currentImageIndex + 1) % imagePaths.length;
    }

    function nextImage() {
        currentImageIndex = (currentImageIndex + 1) % imagePaths.length;
        updateImages();
    }

    function prevImage() {
        currentImageIndex = (currentImageIndex + imagePaths.length - 1) % imagePaths.length;
        updateImages();
    }

    function updateImages() {
        document.getElementById('image1').src = 'images/' + imagePaths[(currentImageIndex + imagePaths.length - 1) % imagePaths.length];
        document.getElementById('image2').src = 'images/' + imagePaths[currentImageIndex];
        document.getElementById('image3').src = 'images/' + imagePaths[(currentImageIndex + 1) % imagePaths.length];
    }

    // Set up manual click event listeners
    document.getElementById('prevBtn').addEventListener('click', prevImage);
    document.getElementById('nextBtn').addEventListener('click', nextImage);

    // Set up automatic rotation
    setInterval(rotateImages, 3000);
});



