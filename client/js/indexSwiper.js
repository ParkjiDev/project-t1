import { getNode } from "../lib/dom/getNode.js";

const swiper = new Swiper(".swiper", {
  loop: true,
  autoplay: true,
  parallax: true,
  speed: 2000,
  allowTouchMove: false,
});

const MAIN_PAGE_URL = "./views/main.html";
const body = getNode("body");

function handleClick() {
  window.location.href = MAIN_PAGE_URL;
}
body.addEventListener("click", handleClick);
