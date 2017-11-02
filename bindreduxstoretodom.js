const unlace = require('unlace');

/**
 * Class bindreduxstoretodom renders entire state to DOM
 * @param {Object} store - Redux store
 * @param {string} divID - ID of div to render to
 * @public
 */
function bindreduxstoretodom(store, divID) {
  const target = document.getElementById(divID);
  store.subscribe(() => {
    target.innerHTML = unlace(store.getState(), 'DOM');
  });
}

module.exports = bindreduxstoretodom;
