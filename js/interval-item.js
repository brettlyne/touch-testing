I.intervalItem = (function (name, time) {
  this.name = name ? name : 'new item';
  this.time = time ? time : 30;
  this.render();
});


I.intervalItem.prototype = {

  render: function () {
    this.el = $('<li><span class="interval-name">' + this.name + '</span><span class="interval-time">' + this.time + '</span>');
    this.el.appendTo(I.$intervalItems);
  }

};