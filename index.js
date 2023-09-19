import { catsData } from "./catsData.js";
const emotionRadios = document.getElementById("emotion-radios");

function getEmotionsArray(cats) {
  const emotionArray = [];
  for (let cat of cats) {
    for (let emotion of cat.emotionTags) {
      emotionArray.push(emotion);
    }
  }
  return emotionArray;
}

function renderEmotionsRadios(cats) {
  const emotions = getEmotionsArray(cats);
  let emotionList = "";

  for (let emotion of emotions) {
    emotionList += `<div class="radio"><label for="emotion-radios">${emotion}</label><input type="radio" id="${emotion} value="${emotion} name="emotions"></div>`;
  }
  emotionRadios.innerHTML = emotionList;
}

renderEmotionsRadios(catsData);
