import {makeUserPhoto} from './photos-generator.js';
import { PHOTOS_COUNT } from './data.js';
import {createAllPicture} from './miniatures.js';

const generateArrayPhoto = Array.from({length: PHOTOS_COUNT}, makeUserPhoto);
createAllPicture(generateArrayPhoto);
