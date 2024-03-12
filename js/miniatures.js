import {openFullSizePicture} from './big-pictures.js';

const pictureTemplate = document.querySelector('#picture').content.querySelector('.picture');
const pictureBlock = document.querySelector('.pictures');
const commentsContainer = document.querySelector('.social__comments');

//создаем миниатюру, вешаем обработчик для открытия полноразмерной фотографии
function createPicture ({url,likes,comments,description,id}) {
  const pictureElement = pictureTemplate.cloneNode(true);
  const imgElement = pictureElement.querySelector('.picture__img');
  imgElement.src = url;
  imgElement.textContent = description;
  imgElement.dataset.id = id;
  pictureElement.querySelector('.picture__likes').textContent = likes;
  pictureElement.querySelector('.picture__comments').textContent = comments.length;
  commentsContainer.innerHTML = '';
  pictureElement.addEventListener('click' , () => {
    openFullSizePicture(id);
  });
  return pictureElement;
}

//создаем массив миниатюр и добавляем их на страницу через шаблон
function createAllPicture (pictures) {
  const pictureFragment = document.createDocumentFragment();
  pictures.forEach ((picture) => {
    const miniature = createPicture(picture);
    pictureFragment.append(miniature);
  });
  pictureBlock.append(pictureFragment);
}

export {createAllPicture};

