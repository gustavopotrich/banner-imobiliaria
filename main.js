document.addEventListener("DOMContentLoaded", () => {
  /**
   * Implements an image carousel that cycles through images with a specified interval.
   *
   * This function selects all images within elements having the class "house-image" and
   * cycles through them, displaying one image at a time by adding and removing the "active" class.
   *
   * The carousel starts by showing the first image and automatically transitions to the next image
   * every 4 seconds.
   *
   * @constant {NodeList} images - A collection of image elements within the ".house-image" container.
   * @constant {number} totalImages - The total number of images in the carousel.
   * @constant {number} currentIndex - The index of the currently displayed image.
   *
   * @function showNextImage - A function that updates the current image by removing the "active" class
   * from the current image and adding it to the next image in the sequence. It loops back to the first
   * image after the last one.
   *
   * @fires setInterval - Sets a timer to automatically call the showNextImage function every 4 seconds.
   */

  // IMAGE CAROUSEL
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

  // ANIMATION NUMBERS
  /**
   * Animates a numerical value within a DOM element from a starting value to an end value.
   * Utilizes the GSAP library to create a smooth transition effect.
   *
   * @param {HTMLElement} selector - The DOM element whose inner text will be animated.
   * @param {number} endValue - The final value to which the number will animate.
   *
   * @example
   * // Animates the number in the element with id "clients" from 75 to 1500 over 2 seconds.
   * animateNumber(document.getElementById("clients"), 1500);
   *
   * @description
   * This function uses GSAP's `fromTo` method to animate the `innerText` property of the specified
   * DOM element. The animation starts from a default value of 75 and transitions to the specified
   * `endValue` over a duration of 2 seconds. The easing function used is "power1.out" for a smooth
   * deceleration effect. The `snap` property ensures that the `innerText` is rounded to the nearest
   * integer during the animation. The `onUpdate` callback updates the element's `innerHTML` to
   * display the current animated value followed by a "+" sign.
   */

  const animateNumber = (selector, endValue) => {
    gsap.fromTo(
      selector,
      { innerText: 75 },
      {
        innerText: endValue,
        duration: 2,
        ease: "power1.out",
        snap: { innerText: 1 },
        onUpdate: function () {
          selector.innerHTML = Math.ceil(this.targets()[0].innerText) + "+";
        },
      }
    );
  };

  animateNumber(document.getElementById("clients"), 1500);
  animateNumber(document.getElementById("properties"), 950);
  animateNumber(document.getElementById("experience"), 10);
  animateNumber(document.getElementById("partners"), 150);
});
