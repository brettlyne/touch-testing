I.timer = {

  items: [],
  bRunning:  false,
  currItemIndex: 0,
  currTime: 0,

  timer: function () {
    var t = this;

    if (t.bRunning) {
      if (t.currTime > 0) {
        t.currTime--;
      }
      else {
        if (t.currItemIndex < t.this.items.length) {
          t.currItemIndex++;
          t.currTime = t.items[currItemIndex].name;
        }
        else {
          t.stop(); // you are done
        }
      }
    }
  },

  init: function () {
    this.counter=setInterval(this.timer, 1000); //1000 will  run it every 1 second
  },

  // add an interval-item to timers
  addInterval: function (newName, newDuration) {
    this.items.push( new I.intervalItem(newName, newDuration) );
  },

};