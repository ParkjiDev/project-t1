import { getNode } from "../lib/index.js";

const swiper = new Swiper(".swiper", {
  loop: true,
  speed: 1000,
  effect: "fade",
  fadeEffect: {
    crossFade: true,
  },
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
    renderBullet: function (index, className) {
      return /* html */ `
        <span class="${className}">
        ${data[index].bullet}
        </span>
      `;
    },
  },
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },

  on: {
    slideChangeTransitionStart: function () {
      const slide = getNode(".swiper-slide-active");
      changeCenterText(slide);
    },
  },
});

function changeCenterText(slide) {
  const index = slide.dataset.index - 1;
  const playerData = data[index];
  changeText(".name", playerData.name);
  changeText(".name-ko", playerData.nameKo);
  changeText(".speaking i", playerData.speaking);
  changeText(".speaking-source", playerData.speakingSource);
  changeText(".profile-birthday", playerData.birthday);
  changeText(".profile-team", playerData.team);
  changeText(".profile-lane", playerData.lane);
  changeText(".profile-debut", playerData.debut);
}

function changeText(node, text) {
  const textNode = getNode(node);
  textNode.textContent = text;
}
