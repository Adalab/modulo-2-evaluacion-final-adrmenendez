'use strict';

function listenEvents(selector, handler, eventType = 'click') {
  const elements = document.querySelectorAll(selector);
  for (const element of elements) {
    element.addEventListener(eventType, handler);
  }
}

const isSerieInFavorites = (id) => {
  return !!favorites.find((item) => item.show.id === id);
};

const isSerieInSeries = (id) => {
  return series.find((item) => item.show.id === id);
};

const removeFromFavorites = (id) => {
  favorites = favorites.filter((fav) => fav.show.id !== id);
};

const getCurrentEventId = (ev) => {
  const serie = ev.currentTarget;
  const id = parseInt(serie.id);
  return id;
};
