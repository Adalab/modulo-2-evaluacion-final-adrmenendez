'use strict';

function searchSeries() {
  const searchInputValue = searchInput.value.toLowerCase();
  fetch(`//api.tvmaze.com/search/shows?q=${searchInputValue}`)
    .then((res) => res.json())
    .then((data) => {
      series = data;
      ensureData();
    });
}

function getHtmlCode(array, showRemoveIcon) {
  let htmlCode = '';
  for (const serie of array) {
    const serieFav = favorites.find((fav) => fav.show.id === serie.show.id);
    if (serieFav === undefined) {
      htmlCode += `<li class="series_container js-series-card" id= ${serie.show.id}>`;
    } else {
      htmlCode += `<li class="series_container js-series-card favorite" id= ${serie.show.id}>`;
    }

    if (serie.show.image === null) {
      htmlCode += `  <img src="${'https://via.placeholder.com/210x295/ffffff/666666/?text=TV'}" alt="" class="series_container--img" />`;
    } else {
      htmlCode += `  <img src="${serie.show.image.medium}" alt="" class="series_container--img" />`;
    }

    htmlCode += `  <h2 class="series_container--title">${serie.show.name}</h2>`;
    htmlCode += `  <h2 class="series_container--title">x</h2>`;
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

searchBtn.addEventListener('click', handleSearchClick);
