import SearchApi from './searchApi';
import createGanres from './create-ganres';
import modalFilm from './modal-film';
const searchApi = new SearchApi();
const indexGallery = document.querySelector('.gallery-container');
// const modalOpen = document.querySelector('.gallery-box');

export function createGallery({ results }) {
  indexGallery.innerHTML = '';

  const markup = results
    .map(({ poster_path, title, release_date, vote_average, genre_ids }) => {
      let emptyImg = 'https://i.ibb.co/JyBCdzw/sinema-empty.jpg';
      let baseImg = `https://image.tmdb.org/t/p/w500${poster_path}`;
      let baseTitle = `${title}`;
      const baseDate = `${release_date.slice(0, 4)}`;
      let ganresTitle = createGanres(genre_ids);

      if (!poster_path) {
        baseImg = emptyImg;
      }
      if (baseTitle.length > 25) {
        baseTitle = baseTitle.slice(0, 30) + '...';
      } else {
        baseTitle;
      }
      if (ganresTitle.length > 2) {
        ganresTitle = ganresTitle.slice(0, 2).join(', ') + ', Other';
      } else {
        ganresTitle = ganresTitle.join(', ');
      }

      return `<li class="gallery-box">
    <div class="gallery-card">
      <img
        class="gallery-img"
        src="${baseImg}"
        alt="${baseTitle}"
        loading="lazy"
      />
    </div>
    <h1 class="gallery-title">${baseTitle}</h1>
    <div class="gallery-info">
      <p class="gallery-ganre">${ganresTitle}</p>
      <p class="gallery-year">${baseDate}</p>
      <p class="gallery-average">${vote_average}</p>
    </div>
  </li>
      `;
    })
    .join('');

  indexGallery.insertAdjacentHTML('beforeend', markup);
  modalFilm({ results });
  //=== elem modal
  //   const modalCont = document.querySelector('.modal-block');
  //   const modal = document.querySelector('[data-modal]');

  //   const filmMass = [...results];
  //   console.log(filmMass);

  //   indexGallery.addEventListener('click', handleClick);
  //   function handleClick(evt) {
  //     modal.classList.toggle('is-hidden');

  //     filmMass.map(elem => {
  //       if (elem.original_title === evt.target.alt) {
  //         let ganresTitle = createGanres(elem.genre_ids);
  //         if (ganresTitle.length > 2) {
  //           ganresTitle = ganresTitle.slice(0, 2).join(', ') + ', Other';
  //         } else {
  //           ganresTitle = ganresTitle.join(', ');
  //         }
  //         let baseImgFilmModal = `https://image.tmdb.org/t/p/w500${elem.poster_path}`;
  //         const markupModal = `

  //       <div class="modal-films">
  //         <img
  //           class="modal-pictures"
  //           src="${baseImgFilmModal}"
  //           alt="${elem.original_title}"
  //           width="375px"
  //         />
  //       </div>
  //       <div class="modal-info">
  //         <h2 class="modal-title">${elem.original_title}</h2>
  //         <table class="modal-info__film">
  //           <tr>
  //             <td class="modal-info__left">Vote / Votes</td>
  //             <td class="modal-info__right">
  //               <span class="modal-span">${elem.vote_average}</span>/${elem.vote_count}
  //             </td>
  //           </tr>
  //           <tr>
  //             <td class="modal-info__left">Popularity</td>
  //             <td class="modal-info__right">${elem.popularity}</td>
  //           </tr>
  //           <tr>
  //             <td class="modal-info__left">Original Title</td>
  //             <td class="modal-info__right">${elem.original_title}</td>
  //           </tr>
  //           <tr>
  //             <td class="modal-info__left">Genre</td>
  //             <td class="modal-info__right">${ganresTitle}</td>
  //           </tr>
  //         </table>

  //         <div class="modal-bottom">
  //           <h2 class="modal-bottom__title">About</h2>
  //           <p class="modal-bottom__text">
  //             ${elem.overview}
  //           </p>
  //         </div>
  //         <div class="modal-button__section">
  //           <button class="modal__btn-libryary" type="button">
  //             add to Watched
  //           </button>
  //           <button class="modal__btn-libryary" type="button">queue</button>
  //         </div>
  //       </div>
  //     `;
  //         modalCont.innerHTML = '';
  //         return modalCont.insertAdjacentHTML('afterbegin', markupModal);
  //       }
  //     });
  //   }
}
