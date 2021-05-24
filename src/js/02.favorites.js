'use strict';

function addListeners() {
  const cards = document.querySelectorAll('.js-series-card');
  for (const card of cards) {
    card.addEventListener('click', handleFavoriteClick);
  }
}

function handleFavoriteClick(event) {
  const selectedSerie = event.currentTarget;

  const selectedId = parseInt(selectedSerie.id);

  const serieInfo = series.find((serie) => serie.show.id === selectedId);
  const serieFav = favorites.find((fav) => fav.show.id === serieInfo.show.id);

  if (serieFav === undefined) {
    favorites.push(serieInfo);
  } else {
    favorites = favorites.filter((fav) => fav.show.id !== selectedId);
  }
  ensureData();
}

function paintFavoritesSeries() {
  let htmlCode = getHtmlCode(favorites, true);
  favoritesSeriesContainer.innerHTML = htmlCode;
  //addDeleteListeners();
}
