// Generated by CoffeeScript 1.9.3
(function() {
  var addToTicker, getTickerWidths, loadTickerText, tickerLeft, tickerMove, tickerRunning, tickerSeparator, tickerWidth, tickerWrapperWidth, w;

  w = window;

  tickerWidth = tickerWrapperWidth = tickerLeft = 0;

  tickerSeparator = '<span>&nbsp;&nbsp;&bull;&nbsp;&nbsp;</span>';

  tickerRunning = false;

  w.load_ticker = function() {
    if (tickerRunning) {
      return;
    }
    tickerRunning = true;
    loadTickerText();
    getTickerWidths();
    return tickerMove();
  };

  getTickerWidths = function() {
    tickerWidth = $('.ticker-text').width();
    return tickerWrapperWidth = $('.ticker').width();
  };

  loadTickerText = function() {
    var i, j, len, lines, r, results;
    $('.ticker-text').html('');
    lines = w.readCleanLines('news-ticker');
    results = [];
    for (i = j = 0, len = lines.length; j < len; i = ++j) {
      r = lines[i];
      results.push(addToTicker(r, i));
    }
    return results;
  };

  addToTicker = function(r, i) {
    var tickerText;
    tickerText = $('.ticker-text');
    if (i > 0) {
      tickerText.html(tickerText.html() + tickerSeparator);
    }
    return tickerText.html(tickerText.html() + r);
  };

  tickerMove = function() {
    if (--tickerLeft < -tickerWidth) {
      loadTickerText();
      getTickerWidths();
      tickerLeft = tickerWrapperWidth;
    }
    $('.ticker-text').css('margin-left', tickerLeft + 'px');
    return setTimeout(tickerMove, 15);
  };

}).call(this);

//# sourceMappingURL=ticker.js.map
