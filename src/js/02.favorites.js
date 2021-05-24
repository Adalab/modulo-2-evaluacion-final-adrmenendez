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
  setData('favoritesLocal', favorites);
  paintFavoritesSeries();
}

function paintFavoritesSeries() {
  if (localStorage.getItem('favoritesLocal')) {
    const localFavs = JSON.parse(localStorage.getItem('favoritesLocal'));
    let htmlCode = getHtmlCode(localFavs);
    favoritesSeriesContainer.innerHTML = htmlCode;
  } else {
    let htmlCode = getHtmlCode(favorites);
    favoritesSeriesContainer.innerHTML = htmlCode;
  }
}

paintFavoritesSeries();
