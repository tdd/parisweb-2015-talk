(function() {
  init();

  var wordSpans;

  function alterWord() {
    var index = Math.floor(Math.random() * wordSpans.length), wordSpan = wordSpans[index];
    wordSpans.splice(index, 1);
    wordSpans.push(wordSpan);

    switch(Math.floor(Math.random() * 4)) {
      case 0:
        toggle('fontWeight', 'bold', 'normal')
        break;
      case 1:
        wordSpan.style.color = randomColor();
        break;
      case 2:
        wordSpan.style.fontSize = (0.5 + Math.random()).toFixed(2) + 'em';
        break;
    }

    function randomColor() {
      var rgb = [0, 0, 0].map(function() { return Math.round(Math.random() * 255); });
      return 'rgb(' + rgb + ')';
    }

    function toggle(prop, value1, value2) {
      wordSpan.style[prop] = (wordSpan.style[prop] === value1 ? value2 : value1);
    }
  }

  function init() {
    Array.prototype.slice.call(document.querySelectorAll('p')).forEach(function(par) {
      par.innerHTML = par.innerText.split(/\b/).map(function(word) {
        return '<span>' + word + '</span>';
      }).join(' ');
    });

    setTimeout(function() {
      wordSpans = Array.prototype.slice.call(document.querySelectorAll('p > span'));
      setInterval(alterWord, 50);
    }, 0);
  }
})();
