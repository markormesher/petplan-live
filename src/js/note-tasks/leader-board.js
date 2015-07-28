// Generated by CoffeeScript 1.9.3
(function() {
  var w;

  w = window;

  w.load_leader_board = function(id, data) {
    var bg, i, note, output, values;
    values = w.readCleanLines(data);
    note = w.getNote(id);
    bg = w.getBackgroundDiv(note);
    bg.css('background-image', 'url("images/leader-board-bg.png")');
    bg.css('background-size', 'auto 85%');
    bg.html('');
    w.setNoteTitle(bg, values[0]);
    i = 1;
    output = '';
    while (true) {
      output += '<p class="leader-board-entry"><span>' + i + '<sup>' + w.getOrdinal(i) + '</sup></span> ' + values[i] + '</p>';
      ++i;
      if (i >= values.length) {
        break;
      }
    }
    return bg.html(bg.html() + output);
  };

}).call(this);

//# sourceMappingURL=leader-board.js.map
