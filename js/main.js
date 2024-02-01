const NAMESLIST = [
    'Иван',
    'Дмитрий',
    'Ксения',
    'Виктор',
    'Екатерина',
    'Анастасия',
    'Антон',
];

const COMMENTSLIST = ['Всё отлично!',
    'В целом всё неплохо. Но не всё.',
    'Когда вы делаете фотографию, хорошо бы убирать палец из кадра. В конце концов это просто непрофессионально.',
    'Моя бабушка случайно чихнула с фотоаппаратом в руках и у неё получилась фотография лучше.',
    'Я поскользнулся на банановой кожуре и уронил фотоаппарат на кота и у меня получилась фотография лучше.',
    'Лица у людей на фотке перекошены, как будто их избивают. Как можно было поймать такой неудачный момент?!',
];

const DESCRIPTIONLIST = [
    'описание 1',
    'описание 2',
    'описание 3',
    'описание 4',
    'описание 5',
    'описание 6',
    'описание 7',
    'описание 8',
    'описание 9',
  ];

//Функция для получения уникального id путем увеличивания на единицу числа, с помощью замыкания
function createId () {
  let idNumber = 0;
  return function () {
    number++;
    return number;
  }
}

const idCreator = createId();
const urlCreator = createId();

//функция получения рандомного числа в диапзоне от a до b
function getRandomInteger (a, b) {
  const lower = Math.ceil(Math.min(a, b));
  const upper = Math.floor(Math.max(a, b));
  const result = Math.random() * (upper - lower + 1) + lower;
  return Math.floor(result);
};

//функция для генерации массива комментариев
function getComments () {
  return {
    id: idCreator(),
    avatar: `img/avatar-${getRandomInteger(1, 6)}.svg`,
    message: COMMENTSLIST[getRandomInteger(0, COMMENTSLIST.length - 1)],
    name: NAMESLIST[getRandomInteger(0, NAMESLIST.length - 1)],
  }
};

//функция для создаания фотографии опубликованной юзером
function makeUserPhoto () {
  return {
    id: idCreator(),
    url: urlCreator(),
    description: DESCRIPTIONLIST[getRandomInteger(0, DESCRIPTIONLIST.length -1)],
    likes: getRandomInteger(15,200),
    comments: Array.from({length: getRandomInteger(1,15)}, getComments)
  }
};

console.log(makeUserPhoto());

const generateArrayPictures = Array.from({length: 25}, makeUserPhoto);
console.log(generateArrayPictures);



