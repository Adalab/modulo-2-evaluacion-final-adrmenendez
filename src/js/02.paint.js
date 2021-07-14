'use strict';

//get html code
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
      htmlCode += `  <i class="far fa-times-circle series_container--x js-x" id= ${serie.show.id}></i>`;
    }
    htmlCode += `</li>`;
  }
  return htmlCode;
}

//paint data
function paintSeries() {
  const mainSeriesContainer = document.querySelector('.js-series-main');
  let htmlCode = getHtmlCode(series);
  mainSeriesContainer.innerHTML = htmlCode;
}

function paintAllSeries() {
  const mainSeriesContainer = document.querySelector('.js-series-main');
  let htmlCode = getHtmlCode(bestSeries);
  mainSeriesContainer.innerHTML = htmlCode;
}

function paintFavoritesSeries() {
  const favoritesSeriesContainer = document.querySelector(
    '.js-series-favorites'
  );
  let htmlCode = getHtmlCode(favorites, true);
  favoritesSeriesContainer.innerHTML = htmlCode;
}
