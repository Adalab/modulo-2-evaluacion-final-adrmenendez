'use strict';

function handleReset() {
  favorites = [];
  ensureData();
}

function handleSearchClick(ev) {
  ev.preventDefault();
  searchSeries();
}

function showBar(event) {
  const searchForm = event.target.closest('form');
  searchForm.classList.toggle('show');
  searchForm.classList.toggle('form');
}

listenEvents('.js-search-button', showBar);
searchInput.addEventListener('keyup', handleSearchClick);
resetButton.addEventListener('click', handleReset);
