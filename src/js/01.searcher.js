'use strict';

function searchSeries() {
  const searchInputValue = searchInput.value;
  fetch(`//api.tvmaze.com/search/shows?q=${searchInputValue}`)
    .then((res) => res.json())
    .then((data) => {
      series = data;
      ensureData();
    });
}
searchSeries();

function getHtmlCode(array, showRemoveIcon) {
  let htmlCode = '';
  for (const serie of array) {
    const serieFav = favorites.find((fav) => fav.show.id === serie.show.id);
    htmlCode += `<li class= "series_container-main">`;
    if (serieFav === undefined) {
      htmlCode += `<section class="series_container js-series-card" id= ${serie.show.id}>`;
    } else {
      htmlCode += `<section class="series_container js-series-card favorite" id= ${serie.show.id}>`;
    }

    if (serie.show.image === null) {
      htmlCode += `  <img src="${'https://via.placeholder.com/210x295/ffffff/666666/?text=TV'}" alt="" class="series_container--img" />`;
    } else {
      htmlCode += `  <img src="${serie.show.image.medium}" alt="" class="series_container--img" />`;
    }

    htmlCode += `  <h2 class="series_container--title">${serie.show.name}</h2>`;
    htmlCode += `</section>`;
    if (showRemoveIcon === true) {
      htmlCode += `  <i class="far fa-times-circle series_container--x js-x"></i>`;
    }
    htmlCode += `</li>`;
  }
  return htmlCode;
}

function paintSeries() {
  let htmlCode = getHtmlCode(series);
  mainSeriesContainer.innerHTML = htmlCode;
  addListeners();
}

function handleSearchClick(ev) {
  ev.preventDefault();
  searchSeries();
}

searchBarBtn.addEventListener('click', handleSearchClick);

//show search bar extra
function showBar(event) {
  const searchForm = event.target.closest('form');

  searchForm.classList.toggle('show');
  searchForm.classList.toggle('form');
}

searchBtn.addEventListener('click', showBar);
