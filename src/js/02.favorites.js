'use strict';

function addListeners() {
  const cards = document.querySelectorAll('.js-series-card');
  for (const card of cards) {
    card.addEventListener('click', handleFavoriteClick);
  }
}
function handleFavoriteClick(event) {
  const selectedSerie = event.currentTarget;

  //selected serie es un li, y yo no quiero codigo html, quiero un objeto, por eso tengo que buscar el objeto que se corresponde con mi array en mi array de series ppal.
  const selectedId = parseInt(selectedSerie.id);
  const serieInfo = series.find((serie) => serie.show.id === selectedId);

  //voy metiendo ese objeto que encuentro en mi array de favoritas
  favorites.push(serieInfo);
  paintFavoritesSeries();
  //selectedSerie.classList.toggle('favorite');
  setData('favoritesLocal', favorites);
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
