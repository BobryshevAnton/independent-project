import SearchApi from './searchApi';
import { createGallery } from './create-gallery';

const form = document.querySelector('.header__form-search');

let searchFilm = '';
let page = 1;

form.addEventListener('submit', handleSubmit);

// const anyText = document.querySelector('.header-text');
// anyText.classList.add('header-txt');

const searchApi = new SearchApi();

function handleSubmit(event) {
  event.preventDefault();
  const {
    elements: { search },
  } = event.currentTarget;

  searchFilm = search.value;

  page += 1;
  searchApi.getSearchMovie(searchFilm, page).then(data => {
    if (!data.total_results) {
      console.log('Please enter any text');
      return;
    } else {
      createGallery(data);
    }
  });
}
