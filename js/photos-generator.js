import {getRandomInteger, generatePhotoId, generatePhotoUrl, generateCommentId} from './util.js';
import {COMMENTS_ARRAY_LENGTH, NAMES_LIST, DESCRIPTION_LIST, COMMENTS_LIST} from './data.js';

//функция для генерации массива комментариев
function getComments () {
  return {
    id: generateCommentId(),
    avatar: `img/avatar-${getRandomInteger(1, 6)}.svg`,
    message: COMMENTS_LIST[getRandomInteger(0, COMMENTS_LIST.length - 1)],
    name: NAMES_LIST[getRandomInteger(0, NAMES_LIST.length - 1)],
  };
}

//функция для создаания фотографии опубликованной юзером
function makeUserPhoto () {
  return {
    id: generatePhotoId(),
    url: `photos/${generatePhotoUrl()}.jpg`,
    description: DESCRIPTION_LIST[getRandomInteger(0, DESCRIPTION_LIST.length - 1)],
    likes: getRandomInteger(15,200),
    comments: Array.from({length: getRandomInteger(COMMENTS_ARRAY_LENGTH.min,COMMENTS_ARRAY_LENGTH.max)}, getComments)
  };
}

export {makeUserPhoto};
