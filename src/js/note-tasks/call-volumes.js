// Generated by CoffeeScript 1.9.3
(function() {
  var w;

  w = window;

  w.load_call_volumes = function(id, data) {
    var bg, center, i, line, note, results, value, values;
    values = w.readCleanLines(data);
    note = w.getNote(id);
    note.html("");
    bg = w.getBackgroundDiv(note);
    bg.css('background-image', 'url("images/phone-bg.png")');
    bg.css('background-size', 'auto 85%');
    center = w.getCenterDiv(bg);
    i = 0;
    results = [];
    while (true) {
      value = values[i + 1];
      line = values[i];
      line = line.replace(/###/, "<span>" + value + "</span>");
      center.html(center.html() + ("<p class=\"call-volumes-line\">" + line + "</p>"));
      i += 2;
      if (i >= values.length) {
        break;
      } else {
        results.push(void 0);
      }
    }
    return results;
  };

}).call(this);

//# sourceMappingURL=call-volumes.js.map
