console.log(data);
const swiper = new Swiper(".swiper", {
  loop: true, // loop
  speed: 1000, // added(slide speed)
  effect: "fade",
  fadeEffect: {
    // added
    crossFade: true, // added(resolve the overlapping of the slides)
  },
  pagination: {
    // pagination(dots)
    el: ".swiper-pagination",
    renderBullet: function (index, className) {
      return /* html */ `
        <span class="${className}">
        ${data[index].bullet}
        </span>
      `;
    },
  },
  navigation: {
    // navigation(arrows)
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
});
