define(function(require, exports, module) {

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