import {PHOTOS_COUNT} from './data.js';

//функция получения рандомного числа в диапзоне от a до b
function getRandomInteger (a, b) {
  const lower = Math.ceil(Math.min(a, b));
  const upper = Math.floor(Math.max(a, b));
  const result = Math.random() * (upper - lower + 1) + lower;
  return Math.floor(result);
}

//функция для получения уникального id в диапазоне от min до max
function createRandomIdFromRangeGenerator (min, max) {
  const previousValues = [];

  return function () {
    let currentValue = getRandomInteger(min, max);
    if (previousValues.length >= (max - min + 1)) {
      return null;
    }
    while (previousValues.includes(currentValue)) {
      currentValue = getRandomInteger(min, max);
    }
    previousValues.push(currentValue);
    return currentValue;
  };
}

const generatePhotoId = createRandomIdFromRangeGenerator(1, PHOTOS_COUNT);
const generatePhotoUrl = createRandomIdFromRangeGenerator(1, PHOTOS_COUNT);
const generateCommentId = createRandomIdFromRangeGenerator(1, 1000);

export {getRandomInteger, createRandomIdFromRangeGenerator, generatePhotoId, generatePhotoUrl, generateCommentId};
