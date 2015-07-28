// Generated by CoffeeScript 1.9.3
(function() {
  var loadNote, notes, w;

  w = window;

  w.feedbackDelay = 0;

  w.feedbackSpeed = 15000;

  w.tweetsDelay = 5000;

  w.tweetsSpeed = 15000;

  w.slideShowDelay = 10000;

  w.slideShowSpeed = 15000;

  notes = [
    {
      id: 0,
      job: 'ticker',
      data: 'news-ticker'
    }, {
      id: 1,
      job: 'clock',
      data: null
    }, {
      id: 2,
      job: 'feedback',
      data: 'feedback'
    }, {
      id: 3,
      job: 'tweets',
      data: 'tweets'
    }, {
      id: 4,
      job: 'dial',
      data: 'dial-1'
    }, {
      id: 5,
      job: 'dial',
      data: 'dial-2'
    }, {
      id: 6,
      job: 'leader-board',
      data: 'leader-board-1'
    }, {
      id: 7,
      job: 'slide-show',
      data: 'slide-show'
    }, {
      id: 8,
      job: 'leader-board',
      data: 'leader-board-2'
    }, {
      id: 9,
      job: 'identify',
      data: null
    }, {
      id: 10,
      job: 'identify',
      data: null
    }, {
      id: 11,
      job: 'identify',
      data: null
    }
  ];

  $(document).ready(function() {
    return initNotes();
  });

  window.initNotes = function(n) {
    var data, i, ref, ref1, results;
    if (n == null) {
      n = -1;
    }
    if (n >= 0) {
      loadNote(notes[n].id, notes[n].job, (ref = notes[n]) != null ? ref.data : void 0);
      return;
    }
    i = 0;
    results = [];
    while (true) {
      data = (ref1 = notes[i]) != null ? ref1.data : void 0;
      if (data === null) {
        loadNote(notes[i].id, notes[i].job, null);
      } else {
        if ($.isArray(w._HOOKS[data])) {
          w._HOOKS[data][w._HOOKS[data].length] = i;
        } else {
          w._HOOKS[data] = [i];
        }
      }
      ++i;
      if (i === notes.length) {
        break;
      } else {
        results.push(void 0);
      }
    }
    return results;
  };

  loadNote = function(id, role, data) {
    w = window;
    switch (role) {
      case 'clock':
        return w.load_clock(id);
      case 'dial':
        return w.load_dial(id, data);
      case 'feedback':
        return w.load_feedback(id);
      case 'leader-board':
        return w.load_leader_board(id, data);
      case 'identify':
        return w.load_identify(id);
      case 'slide-show':
        return w.load_slide_show(id);
      case 'ticker':
        return w.load_ticker();
      case 'tweets':
        return w.load_tweets(id);
    }
  };

}).call(this);

//# sourceMappingURL=tasks.js.map
