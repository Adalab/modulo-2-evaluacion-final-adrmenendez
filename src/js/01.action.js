'use strict';

function getSeriesInfo() {
  fetch(`//api.tvmaze.com/schedule`)
    .then((res) => res.json())
    .then((data) => {
      bestSeries = data;
      paintAllSeries();
    });
}

function searchSeries() {
  const searchInputValue = searchInput.value;
  fetch(`//api.tvmaze.com/search/shows?q=${searchInputValue}`)
    .then((res) => res.json())
    .then((data) => {
      series = data;
      ensureData();
    });
}

function handleFavoriteClick(event) {
  const selectedSerieId = getCurrentEventId(event);

  const serieInfo = isSerieInSeries(selectedSerieId);
  const id = serieInfo.show.id;

  if (isSerieInFavorites(id)) {
    removeFromFavorites(selectedSerieId);
  } else {
    favorites.push(serieInfo);
  }
  ensureData();
}

function handleDeleteButton(event) {
  const selectedSerieId = getCurrentEventId(event);
  const serieFav = favorites.find((fav) => fav.show.id === selectedSerieId);
  const id = serieFav.show.id;
  removeFromFavorites(id);
  ensureData();
}
