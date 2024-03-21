const MAX_HACHTAGS_COUNT = 5;
const VALID_SYMBOLS = /^#[a-za-яё0-9]{1,19}$/i;
const HASHTAG_ERROR_TEXT = 'Введите только символы #, а-я, 0-9, а-яё';

const pictureUploadForm = document.querySelector('.img-upload__form');
const pictureForm = document.querySelector('.img-upload__form');
const pictureUploadBlock = document.querySelector('.img-upload__overlay');
const bodyElement = document.querySelector('body');
const closeButton = document.querySelector('.img-upload__cancel');
const hashtagInput = document.querySelector('.text__hashtags');
const commentFormInput = document.querySelector('.text__description');

const pristine = new Pristine(pictureForm, {
  classTo: 'img-upload__field-wrapper',//элемент на который будут добавляться классы
  errorTextParent: 'img-upload__field-wrapper', //класс в который будет выводиться текст ошибки
});

pristine.addValidator(
  hashtagInput,
  validateHashtags,
  HASHTAG_ERROR_TEXT
);

function validateHashtags (value) {
  const tags = value.trim().//обрезаеи пробелы
    split(' ').//убираем пробелы между элементами
    filter((tag) => tag.trim().length);//убираем пробелы в случае если был множественный пробел
  return hasValidCount(tags) && hasUniqueHashtags(tags) && tags.every(isValidHashtags);
}


function isValidHashtags (tag) {
  return VALID_SYMBOLS.test(tag);//проверяем правильность ввоода сивволов по руглярному выражению
}

function hasUniqueHashtags (tags) {
  const lowerCaseTags = tags.map((tag) => tag.toLowerCase());
  return lowerCaseTags.length === new Set(lowerCaseTags).size;//проверяем уникальность введеных хештегов
}

function hasValidCount (value) {
  return value.legnth <= MAX_HACHTAGS_COUNT;//проверяем количество введенных хештегов
}


function openFilterModal () {
  pictureUploadBlock.classList.remove('hidden');
  bodyElement.classList.add('modal-open');

  document.addEventListener('keydown', pushEscButton);
}

function closeFilterModal () {
  pictureForm.reset();
  pristine.reset();
  pictureUploadBlock.classList.add('hidden');
  bodyElement.classList.remove('modal-open');

  document.removeEventListener('keydown', pushEscButton);
}

pictureForm.addEventListener('change', () => {
  openFilterModal();
});

closeButton.addEventListener('click', () => {
  closeFilterModal();
});

function pushEscButton (evt) {
  if (evt.key === 'Escape') {
    evt.preventDefault();
    closeFilterModal();
  }
}

commentFormInput.addEventListener('focus', () => {
  document.removeEventListener('keydown', pushEscButton);
});

commentFormInput.addEventListener('blur', () => {
  document.addEventListener('keydown', pushEscButton);
});

hashtagInput.addEventListener('focus', () => {
  document.removeEventListener('keydown', pushEscButton);
});

hashtagInput.addEventListener('blur', () => {
  document.addEventListener('keydown', pushEscButton);
});

function onFormSubmit (evt) {
  evt.preventDefault();
  pristine.validate();
}

pictureUploadForm.addEventListener('submit', onFormSubmit);
