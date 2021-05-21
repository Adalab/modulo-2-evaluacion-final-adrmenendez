'use strict';

function searchSeries() {
  const searchInputValue = searchInput.value;
  fetch(`http://api.tvmaze.com/search/shows?q=${searchInputValue}`)
    .then((res) => res.json())
    .then((data) => {
      series = data;
      paintSeries();
    });
}

function getHtmlCode(array) {
  let htmlCode = '';
  for (const serie of array) {
    htmlCode += `<section class="series_container js-series-card" id= ${serie.show.id}>`;
    if (serie.show.image === null) {
      htmlCode += `  <img src="${'https://via.placeholder.com/210x295/ffffff/666666/?text=TV'}" alt="" class="series_container--img" />`;
    } else {
      htmlCode += `  <img src="${serie.show.image.medium}" alt="" class="series_container--img" />`;
    }
    htmlCode += `  <h2 class="series_container--title">${serie.show.name}</h2>`;
    htmlCode += `</section>`;
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
