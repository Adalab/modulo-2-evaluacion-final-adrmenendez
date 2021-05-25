'use strict';

//set local storage
function setData(varName, varData) {
  localStorage.setItem(varName, JSON.stringify(varData));
}

function getData(varName) {
  if (localStorage.getItem(varName)) {
    favorites = JSON.parse(localStorage.getItem(varName));
  }
}
