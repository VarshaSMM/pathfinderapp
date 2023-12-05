document.addEventListener("DOMContentLoaded", loadpage);

function loadpage() {
  const imageArray = [
    "https://i.postimg.cc/pTnQYBJ4/wayfinder2.png",
    "https://i.postimg.cc/gkQxDCN0/wayfinder3.png",
    "https://i.postimg.cc/2y5x4sTw/wayfinder4.png",
    "https://i.postimg.cc/LswqyrHD/wayfinder5.png",
    "https://i.postimg.cc/c4RbdS2K/wayfinder6.png",
    "https://i.postimg.cc/3JhH3zzS/pantrylast.png",
    "",
  ];

  const showImageButton = document.getElementById("showImage");
  const imageDisplay = document.getElementById("currentImage");

  // Counter to keep track of the current image index
  let currentIndex = 0;

  // Event listener for the button click
  showImageButton.addEventListener("click", buttonListener);

  function buttonListener() {
    // Check if the current index is at the last image
    if (currentIndex < imageArray.length - 1) {
      // Set the source to the current image in the array
      imageDisplay.src = imageArray[currentIndex];
      // Increment the index
      currentIndex++;
    } else {
      // Set the source to the last image
      imageDisplay.src = imageArray[currentIndex];

      // Remove the button listener to disable further clicks
      showImageButton.removeEventListener("click", buttonListener);

      // Display the home button or perform any other action
      displayHomeButton();
    }
  }

  function displayHomeButton() {
    // Assuming you have a home button element with the id 'homeButton'
    const homeButton = document.getElementById("homeButton");
    showImageButton.style.display = "none";
    imageDisplay.style.display = "none";
    // Set the home button to be visible or perform any other action
    homeButton.style.display = "block";
  }

  document
    .getElementById("pantryButton")
    .addEventListener("click", function () {
      var homeElement = document.getElementById("home");
      var imagesElement = document.getElementById("images");

      // Toggle the display property
      homeElement.style.display = "none";
      imagesElement.style.display = "block";
    });
  document.getElementById("homeButton").addEventListener("click", function () {
    var homeElement = document.getElementById("home");
    var imagesElement = document.getElementById("images");

    // Toggle the display property
    homeElement.style.display = "block";
    imagesElement.style.display = "none";
  });
}
