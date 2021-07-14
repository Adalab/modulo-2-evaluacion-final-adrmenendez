'use strict';

function handleReset() {
  favorites = [];
  ensureData();
}

function showBar(event) {
  const searchForm = event.target.closest('form');
  searchForm.classList.toggle('show');
  searchForm.classList.toggle('form');
}

function listenIndexButtons() {
  searchBtn.addEventListener('click', showBar);
  searchInput.addEventListener('keyup', searchSeries);
}
