import SearchApi from './searchApi';
import { createGallery } from './create-gallery';

const form = document.querySelector('.header__form-search');
const indexGallery = document.querySelector('.gallery-container');
let searchFilm = '';
let page = 1;

form.addEventListener('submit', handleSubmit);

const anyText = document.querySelector('.text-empty');
anyText.classList.add('hiden');
anyText.textContent =
  'Search result not successful. Enter the correct movie name...';
const searchApi = new SearchApi();

startPage();

function handleSubmit(event) {
  event.preventDefault();
  const {
    elements: { search },
  } = event.currentTarget;
  searchFilm = search.value;
  page += 1;

  if (searchFilm === '') {
    anyText.classList.remove('hiden');
    return;
  } else {
    anyText.classList.add('hiden');
  }

  searchApi.getSearchMovie(searchFilm, page).then(data => {
    createGallery(data);
  });
}
function startPage() {
  searchFilm = 'red';
  searchApi.getSearchMovie(searchFilm, page).then(data => {
    createGallery(data);
  });
}
