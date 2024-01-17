

// Logic specific to gettingHere.html
document.addEventListener("DOMContentLoaded", function () {
    var displayedImage = document.getElementById("displayedImage");
    var zoomLevel = 1;
    // ... (rest of the code for zooming and dragging)

    // Function to navigate back to discover-1.html
    function goBack() {
        window.location.href = "discover.html";
    }

    // Back button click event
    var backButton = document.querySelector(".backButton");
    if (backButton) { // Check if the back button exists
        backButton.addEventListener("click", goBack);
    }


    // Home button click event
    var homeButton = document.getElementById("homeButton");
    homeButton.addEventListener("click", function () {
        window.location.href = "home.html";
    });

    // Retrieve the stored image link from localStorage
    var imageLink = localStorage.getItem("imageLink");

    // Set the displayed image source
    displayedImage.src = imageLink;
});

// When the user clicks on <div>, open the popup
function myFunction() {
    var popup = document.getElementById("myPopup");
    popup.classList.toggle("show");
}



//Adding gesture-based zoom in and zoom out functionality involves detecting touch events for pinch gestures. 
document.addEventListener("DOMContentLoaded", function () {
    var displayedImage = document.getElementById("displayedImage");
    var zoomLevel = 1; // Initial zoom level
    var maxZoom = 3; // Maximum zoom level
    var minZoom = 0.5; // Minimum zoom level

    var offsetX = 0; // Variable to store X-coordinate of touch/mouse pointer when dragging starts
    var offsetY = 0; // Variable to store Y-coordinate of touch/mouse pointer when dragging starts
    var lastX = 0;
    var lastY = 0;
    var isDragging = false; // Flag to indicate whether dragging is in progress

    // Pinch zoom variables
    var initialDistance = 0;
    var currentDistance = 0;

    function zoomIn() {
        if (zoomLevel < maxZoom) {
            zoomLevel += 0.1; // Increase zoom level by a small increment
            updateZoomAndTranslate();
        }
    }

    function zoomOut() {
        if (zoomLevel > minZoom) {
            zoomLevel -= 0.1; // Decrease zoom level by a small increment
            updateZoomAndTranslate();
        }
    }

    function updateZoomAndTranslate() {
        displayedImage.style.transform = `scale(${zoomLevel}) translate(${offsetX}px, ${offsetY}px)`;
    }

    function startDragging(e) {
        isDragging = true;
        offsetX = e.clientX - lastX;
        offsetY = e.clientY - lastY;
    }

    function stopDragging() {
        isDragging = false;
    }

    function dragImage(e) {
        if (isDragging) {
            lastX = e.clientX - offsetX;
            lastY = e.clientY - offsetY;

            displayedImage.style.transform = `scale(${zoomLevel}) translate(${lastX}px, ${lastY}px)`;
        }
    }

    // Pinch zoom functions
    function startPinch(e) {
        var touch1 = e.touches[0];
        var touch2 = e.touches[1];

        initialDistance = Math.hypot(touch1.clientX - touch2.clientX, touch1.clientY - touch2.clientY);
    }

    function updatePinch(e) {
        var touch1 = e.touches[0];
        var touch2 = e.touches[1];

        currentDistance = Math.hypot(touch1.clientX - touch2.clientX, touch1.clientY - touch2.clientY);

        if (initialDistance === 0) {
            initialDistance = currentDistance;
        } else {
            var pinchDelta = currentDistance - initialDistance;

            if (pinchDelta > 0) {
                zoomIn();
            } else if (pinchDelta < 0) {
                zoomOut();
            }

            initialDistance = currentDistance;
        }
    }

    function stopPinch() {
        initialDistance = 0;
    }

    // Event listeners
    displayedImage.addEventListener("mousedown", startDragging);
    document.addEventListener("mousemove", dragImage);
    document.addEventListener("mouseup", stopDragging);

    // Touch events for pinch zoom
    displayedImage.addEventListener("touchstart", startPinch);
    displayedImage.addEventListener("touchmove", updatePinch);
    displayedImage.addEventListener("touchend", stopPinch);

    // Function to navigate back to discover.html
    function goBack() {
        window.location.href = "discover.html";
    }

    // Attach event listeners to buttons
    var backButton = document.querySelector(".backButton");
    backButton.addEventListener("click", goBack);

    // Function back to home
    function goHome() {
        window.location.href = "home.html";
    }
    // Attach event listeners to buttons
    var homeButton = document.querySelector("homeButton");
    homeButton.addEventListener("click", goHome);

    // Retrieve the stored image link from localStorage
    var imageLink = localStorage.getItem("imageLink");

    // Set the displayed image source
    displayedImage.src = imageLink;
});





// When the user clicks on <div>, open the popup
function myFunction() {
    var popup = document.getElementById("myPopup");
    popup.classList.toggle("show");
}


