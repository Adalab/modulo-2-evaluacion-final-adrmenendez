// 'use strict';

function ensureData() {
  setData('favoritesLocal', favorites);
  paintFavoritesSeries();
  paintSeries();
}

getData('favoritesLocal');
ensureData();
