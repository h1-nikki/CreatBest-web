seajs.config({
  alias: {
    'jquery': 'jquery/jquery.js'
  },
  preload: ["jquery"]
});

/*seajs.modify('jquery', function(require, exports) {
  window.jQuery = window.$ = exports
});*/

seajs.use('jquery.switchable', function() {
  $('#slide').switchable({
    triggers: $('#triggers').find('li'),
    effect: 'fade',
    autoplay: true,
    onSwitch: function(event, currentIndex) {
      var api = this,
          cfg = api.config;

      new $.switchable.Anim(
        $('#mask'),
        {top:1 + 84 * currentIndex},
        cfg.duration,
        cfg.easing
      ).run();
    }
  });
});

seajs.use('a');

seajs.use(['base', 'page'], function(base, page) {
  base.testMethod('beautiful-sea');
  page.testMethod('beautiful-sea');
});