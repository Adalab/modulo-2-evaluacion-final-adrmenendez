'use strict';

function ensureData() {
  setData('favoritesLocal', favorites);
  //paintFavoritesSeries();
  paintSeries();
  listenEvents('.js-series-card', handleFavoriteClick);
  listenEvents('.js-x', handleDeleteButton);
}

getData('favoritesLocal');
ensureData();
