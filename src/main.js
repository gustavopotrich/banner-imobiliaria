document.addEventListener("DOMContentLoaded", () => {
  const images = document.querySelectorAll(".house-image img");
  let currentIndex = 0;
  const totalImages = images.length;

  const showNextImage = () => {
    images[currentIndex].classList.remove("active");
    currentIndex = (currentIndex + 1) % totalImages;
    images[currentIndex].classList.add("active");
  };

  // Show the first image initially
  images[currentIndex].classList.add("active");

  // Change image every 3 seconds
  setInterval(showNextImage, 4000);
});
