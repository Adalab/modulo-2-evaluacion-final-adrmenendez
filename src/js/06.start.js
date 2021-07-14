'use strict';

function ensureData() {
  setData('favoritesLocal', favorites);
  paintSeries();
  listenEvents('.js-series-card', handleFavoriteClick);
}
