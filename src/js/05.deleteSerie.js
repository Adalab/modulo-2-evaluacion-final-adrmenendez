'use strict';

function handleDeleteButton(event) {
  const selectedSerie = event.target.closest('li');

  const selectedId = parseInt(selectedSerie.id);

  const serieFav = favorites.find((fav) => fav.show.id === selectedId);

  let index = favorites.indexOf(serieFav);
  favorites.splice(index, 1);

  ensureData();
}

function addDeleteListeners() {
  const xButtons = document.querySelectorAll('.js-x');
  for (const button of xButtons) {
    button.addEventListener('click', handleDeleteButton);
  }
}
