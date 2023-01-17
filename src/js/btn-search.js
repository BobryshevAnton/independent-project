const addToWatch = document.querySelector('.addToWatch');
const addToQueue = document.querySelector('.addToQueue');

let ADD_WATCH = 'addToWatch';
let ADD_TO_QUEUE = 'addToQueue';
//
let libryaryWatched = [];
let libruaryQueue = [];

//
// let storageJsonWatch = [];
// storageJsonWatch.push(JSON.parse(localStorage.getItem(ADD_WATCH)));

let storageJsonQueue = [];

export default function btnSearch(elem) {
  elementFilmModal = elem;

  addToWatch.addEventListener('click', handleraddToWatch);
  addToQueue.addEventListener('click', handleraddToQueue);

  ///
  function handleraddToWatch(evt) {
    if (localStorage.length === 0) {
      libryaryWatched.push(elementFilmModal);
      localStorage.setItem(ADD_WATCH, JSON.stringify(libryaryWatched));
    } else if (
      (localStorage.length !== 0) &
      !libryaryWatched.includes(elementFilmModal)
    ) {
      libryaryWatched.push(elementFilmModal);
      localStorage.setItem(ADD_WATCH, JSON.stringify(libryaryWatched));
    }

    //     return; addToWatch.textContent = 'Added';
    //   } else if (localStorage.length !== 0) {
    //     libryaryWatched.push(JSON.parse(localStorage.getItem(ADD_WATCH)));
    //     libryaryWatched.push(elementFilmModal);
    //     localStorage.setItem(ADD_WATCH, JSON.stringify(libryaryWatched));
    //     return;
    //   } else if (!libryaryWatched.includes(elementFilmModal)) {
    //     libryaryWatched.push(elementFilmModal);
    //     localStorage.setItem(ADD_WATCH, JSON.stringify(libryaryWatched));
    //     return;
    //   } else {
    //     return;
    // }
  }
  ///
  function handleraddToQueue(evt) {
    if (libruaryQueue.includes(elementFilmModal)) {
      return;
    } else {
      libruaryQueue.push(elementFilmModal);
      localStorage.setItem(ADD_TO_QUEUE, JSON.stringify(libruaryQueue));
    }
  }
}
// getLocalStorage();
///
// let storageWatch;
// btnWatched.addEventListener('click', handlerBtnWatched);
// function handlerBtnWatched(evt) {
//   storageWatch = localStorage.getItem(ADD_WATCH);
//   // const storageWatch = JSON.parse(localStorage.getItem(ADD_WATCH));
//   console.log(storageWatch);
// }

// btnQueue.addEventListener('click', handleBtnQueue);
// function handleBtnQueue(evt) {
//   localStorage.getItem(ADD_TO_QUEUE);
//   const storageQueue = JSON.parse(localStorage.getItem(ADD_TO_QUEUE));
//   console.log(storageQueue);
// }
