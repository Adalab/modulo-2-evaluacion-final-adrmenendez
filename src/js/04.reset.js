'use strict';

function handleReset() {
  favorites = [];
  ensureData();
}

resetButton.addEventListener('click', handleReset);
