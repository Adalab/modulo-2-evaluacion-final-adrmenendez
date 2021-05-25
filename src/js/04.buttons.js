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

//listen to buttons
searchBarBtn.addEventListener('click', handleSearchClick);
resetButton.addEventListener('click', handleReset);
searchBtn.addEventListener('click', showBar);
