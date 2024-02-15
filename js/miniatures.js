const pictureTemplate = document.querySelector('#picture').content.querySelector('.picture');
const pictureBlock = document.querySelector('.pictures');

function createPicture ({url,likes,comments}) {
  const pictureElement = pictureTemplate.cloneNode(true);
  pictureElement.querySelector('.picture__img').src = url;
  pictureElement.querySelector('.picture__likes').textContent = likes;
  pictureElement.querySelector('.picture__comments').textContent = comments.length;
  return pictureElement;
}

function createAllPicture (pictures) {
  const pictureFragment = document.createDocumentFragment();
  pictures.forEach ((picture) => {
    const thumbnail = createPicture(picture);
    pictureFragment.append(thumbnail);
  });
  pictureBlock.append(pictureFragment);
}

export {createAllPicture};

