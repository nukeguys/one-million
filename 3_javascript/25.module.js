import { generateRandomInt } from "./25.utils.js";

(function () {
  const degreeEl = document.querySelector("span");
  degreeEl.textContent = generateRandomInt(-12, 12);
})();
