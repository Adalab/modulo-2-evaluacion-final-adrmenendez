'use strict';

function addListeners() {
  const cards = document.querySelectorAll('.js-series-card');
  for (const card of cards) {
    card.addEventListener('click', handleFavoriteClick);
  }
}
function handleFavoriteClick(event) {
  const selectedSerie = event.currentTarget;
  selectedSerie.classList.toggle('favorite');

  //busco en mi array series el elemento que tenga el mismo id que el que he seleccionado
}

function paintFavoritesSeries() {
  let htmlCode = getHtmlCode(favorites);
  favoritesSeriesContainer.innerHTML = htmlCode;
}
