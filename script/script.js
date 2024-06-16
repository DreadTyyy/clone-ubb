document.addEventListener("DOMContentLoaded", () => {
  const hamburger = document.getElementById("hamburger");

  hamburger.addEventListener("click", () => {
    const navbar = document.getElementById("navigation-bar");
    navbar.classList.toggle("_active");
  });

  const dropdowns = document.querySelectorAll("._dropdown");
  dropdowns.forEach((dropdown) => {
    dropdown.addEventListener("click", () => {
      dropdown.classList.toggle("focus");
    });
  });

  const listHeader = [
    "slider-1b-m6-q50.webp",
    "slider-2-m6-q50.webp",
    "slider-3-m6-q50.webp",
    "slider-4-m6-q50.webp",
  ];

  const imageHeader = document.getElementById("image-header");
  const prevHeader = document.getElementById("prev-slider-header");
  const nextHeader = document.getElementById("next-slider-header");

  let autoChangeInterval;

  checkIndex = () => {
    let index = 0;
    const imageNow = imageHeader.src;
    const splitImage = imageNow.split("/");
    const nameImage = splitImage[splitImage.length - 1];
    for (let i = 0; i < listHeader.length; i++) {
      if (listHeader[index] === nameImage) {
        return index;
      }
      if (index > listHeader.length - 1) {
        return index === 0;
      }
      index++;
    }
  };

  const changeImage = (newIndex) => {
    imageHeader.style.opacity = 0;
    setTimeout(() => {
      imageHeader.src = `assets/header/${listHeader[newIndex]}`;
      imageHeader.style.opacity = 1;
    }, 400);
  };

  const startAutoChange = () => {
    autoChangeInterval = setInterval(() => {
      const index = checkIndex();
      const nextIndex = index === listHeader.length - 1 ? 0 : index + 1;
      changeImage(nextIndex);
    }, 5000); // Change image every 3 seconds
  };

  const resetAutoChange = () => {
    clearInterval(autoChangeInterval);
    startAutoChange();
  };

  prevHeader.addEventListener("click", () => {
    const index = checkIndex();
    const prevIndex = index === 0 ? listHeader.length - 1 : index - 1;
    changeImage(prevIndex);
    resetAutoChange();
  });

  nextHeader.addEventListener("click", () => {
    const index = checkIndex();
    const nextIndex = index === listHeader.length - 1 ? 0 : index + 1;
    changeImage(nextIndex);
    resetAutoChange();
  });
  startAutoChange();
});
