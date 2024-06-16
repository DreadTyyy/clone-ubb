// Get slider content and bullets container
const sliderContent = document.getElementById("slider-content-berita");
const bulletsBerita = document.getElementById("bullets-slider-berita");

// Clone first few slides for infinite loop effect
const slidesToClone = 4;
for (let i = 0; i < slidesToClone; i++) {
  const clone = sliderContent.children[i].cloneNode(true);
  sliderContent.appendChild(clone);
}

// Function to create bullets
const creatingBullets = () => {
  const totalBerita = sliderContent.children.length;
  const showBerita = 4;
  const totalBullets = Math.ceil((totalBerita - slidesToClone) / showBerita);
  for (let i = 0; i < totalBullets; i++) {
    const div = document.createElement("div");
    div.classList.add(
      "_bullet",
      "w-[10px]",
      "h-[10px]",
      "rounded-full",
      "cursor-pointer"
    );
    if (i === 0) {
      div.classList.add("bg-primary");
    } else {
      div.classList.add("bg-disabled-500");
    }
    bulletsBerita.appendChild(div);
  }
};
creatingBullets();

const bullets = document.querySelectorAll("#bullets-slider-berita ._bullet");

let currentIndex = 0;
const totalSlides = sliderContent.children.length;

// Function to update slider position
const updateSlider = (index) => {
  const offset = index * 280;
  sliderContent.style.transform = `translateX(-${offset}px)`;
  bullets.forEach((bullet, idx) => {
    bullet.classList.toggle(
      "bg-primary",
      idx === index % (totalSlides - slidesToClone)
    );
    bullet.classList.toggle(
      "bg-disabled-500",
      idx !== index % (totalSlides - slidesToClone)
    );
  });
};

// Event listeners for bullet navigation
bullets.forEach((bullet, index) => {
  bullet.addEventListener("click", () => {
    currentIndex = index;
    updateSlider(index);
  });
});

// Variables for drag functionality
let isDown = false;
let startX;
let moveX;

// Mouse events
sliderContent.addEventListener("mousedown", (e) => {
  isDown = true;
  startX = e.pageX - sliderContent.offsetLeft;
  sliderContent.style.cursor = "grabbing";
});

sliderContent.addEventListener("mouseleave", () => {
  isDown = false;
  sliderContent.style.cursor = "grab";
});

sliderContent.addEventListener("mouseup", () => {
  isDown = false;
  sliderContent.style.cursor = "grab";
  handleMoveEnd();
});

sliderContent.addEventListener("mousemove", (e) => {
  if (!isDown) return;
  e.preventDefault();
  moveX = e.pageX - sliderContent.offsetLeft;
  const walk = moveX - startX;
  sliderContent.style.transform = `translateX(${walk}px)`;
});

// Touch events
sliderContent.addEventListener("touchstart", (e) => {
  isDown = true;
  startX = e.touches[0].pageX - sliderContent.offsetLeft;
});

sliderContent.addEventListener("touchend", handleMoveEnd);

sliderContent.addEventListener("touchmove", (e) => {
  if (!isDown) return;
  moveX = e.touches[0].pageX - sliderContent.offsetLeft;
  const walk = moveX - startX;
  sliderContent.style.transform = `translateX(${walk}px)`;
});

// Handle move end for both mouse and touch
const handleMoveEnd = () => {
  isDown = false;
  const walk = moveX - startX;
  if (Math.abs(walk) > 50) {
    if (walk < 0) {
      currentIndex++;
      if (currentIndex >= totalSlides - slidesToClone) {
        sliderContent.style.transition = "none";
        currentIndex = 0;
        sliderContent.style.transform = `translateX(0px)`;
        setTimeout(() => {
          sliderContent.style.transition = "transform 0.5s ease";
          currentIndex++;
          updateSlider(currentIndex);
        }, 0);
      } else {
        updateSlider(currentIndex);
      }
    } else {
      currentIndex--;
      if (currentIndex < 0) {
        sliderContent.style.transition = "none";
        currentIndex = totalSlides - slidesToClone - 1;
        sliderContent.style.transform = `translateX(-${currentIndex * 280}px)`;
        setTimeout(() => {
          sliderContent.style.transition = "transform 0.5s ease";
          currentIndex--;
          updateSlider(currentIndex);
        }, 0);
      } else {
        updateSlider(currentIndex);
      }
    }
  } else {
    updateSlider(currentIndex);
  }
};
