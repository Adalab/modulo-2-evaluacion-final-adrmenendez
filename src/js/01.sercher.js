'use strict';

let series = [];

function searchSeries() {
  const searchInputValue = searchInput.value;
  fetch(`http://api.tvmaze.com/search/shows?q=${searchInputValue}`)
    .then((res) => res.json())
    .then((data) => {
      series = data;
      paintSeries();
    });
}

function paintSeries() {
  let htmlCode = '';
  for (const serie of series) {
    htmlCode += `<section class="series_container">`;
    if (serie.show.image === null) {
      htmlCode += `  <img src="${'https://via.placeholder.com/210x295/ffffff/666666/?text=TV'}" alt="" class="series_container--img" />`;
    } else {
      htmlCode += `  <img src="${serie.show.image.medium}" alt="" class="series_container--img" />`;
    }
    htmlCode += `  <h2 class="series_container--title">${serie.show.name}</h2>`;
    htmlCode += `</section>`;
  }
  mainSeriesContainer.innerHTML = htmlCode;
}

function handleClick(ev) {
  ev.preventDefault();
  searchSeries();
}

searchBtn.addEventListener('click', handleClick);
