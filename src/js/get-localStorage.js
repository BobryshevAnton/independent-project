import galleryPage from './gallery-page';
import galleryPageQueue from './gallery-page';
let ADD_WATCH = 'addToWatch';
let ADD_TO_QUEUE = 'addToQueue';

//
let storageJsonWatch = [];
let storageJsonQueue = [];

export default function getLocalStorage() {
  const btnWatched = document.querySelector('.btn-Watched');
  btnWatched.addEventListener('click', handlerBtnWatched);
  function handlerBtnWatched(evt) {
    storageJsonWatch = JSON.parse(localStorage.getItem(ADD_WATCH));
    galleryPage(storageJsonWatch);
  }

  ///
  const btnQueue = document.querySelector('.btn-Queue');
  btnQueue.addEventListener('click', handlerBtnQueue);
  function handlerBtnQueue(evt) {
    storageJsonQueue = JSON.parse(localStorage.getItem(ADD_TO_QUEUE));
    galleryPageQueue(storageJsonQueue);
  }
}
