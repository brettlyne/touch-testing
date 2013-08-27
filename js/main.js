I = {

  $intervalItems: $('.interval-items'),

  init: function () {

    I.timer.init();

   $('.add-action').click(function() {
      I.timer.addInterval('jumping jacks');
    });

  },

};


// setup on page load
$(function () {
    I.init();
});