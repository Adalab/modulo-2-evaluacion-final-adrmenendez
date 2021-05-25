'use strict';

function handleDeleteButton(event) {
  const selectedSerie = event.currentTarget;
  const selectedId = parseInt(selectedSerie.id);

  const serieFav = favorites.find((fav) => fav.show.id === selectedId);

  let index = favorites.indexOf(serieFav);
  if (index > -1) {
    favorites.splice(index, 1);
  }
  ensureData();
}

function addDeleteListeners() {
  const xButtons = document.querySelectorAll('.js-x');
  for (const button of xButtons) {
    button.addEventListener('click', handleDeleteButton);
  }
}
