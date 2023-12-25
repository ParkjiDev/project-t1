import { getNode } from "../lib/index.js";

const buttonWrapper = getNode(".button-wrapper");

function handleClick(e) {
  const button = e.target.closest("button");
  if (!button) return;
  const url = button.dataset.url;
  window.open(url);
}
buttonWrapper.addEventListener("click", handleClick);
