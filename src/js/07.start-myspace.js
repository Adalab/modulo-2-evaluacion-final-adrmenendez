'use strict';

function startMySpace() {
  paintFavoritesSeries();
  listenEvents('.js-x', handleDeleteButton);
  resetButton.addEventListener('click', handleReset);
}
