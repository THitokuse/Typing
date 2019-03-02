(function() {
  'use strict';

  let currentWord = 'apple'
  let currentLocation = 0;
  let score = 0;
  let miss = 0;
  let target = document.getElementById('target');
  let scoreLabel = document.getElementById('score');
  let missLabel = document.getElementById('miss');

  target.innerHTML = currentWord;
  scoreLabel.innerHTML = score;
  missLabel.innerHTML = miss;

  window.addEventListener('keyup', function(e) {
    //e.keyCode
    //console.log(String.fromCharCode(e.keyCode));
    if (String.fromCharCode(e.keyCode) === currentWord[currentLocation].toUpperCase()) {
      //console.log('score!');
    } else {
      //console.log('miss!');
    }
  });
})();
