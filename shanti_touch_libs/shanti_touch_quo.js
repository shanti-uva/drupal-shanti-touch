(function ($) {
  $(document).ready(function(){
    if (Drupal.settings.shanti_touch.prev) {
      $$('#content').swipeRight(function(){
        if (Drupal.settings.shanti_touch.prev_link != '') {
          window.location = Drupal.settings.shanti_touch.prev_link;
        }
      });
    }
    if (Drupal.settings.shanti_touch.next) {
      $$('#content').swipeLeft(function(){
        if (Drupal.settings.shanti_touch.next_link != '') {
          window.location = Drupal.settings.shanti_touch.next_link;
        }
      });
    }
	// get menu
	if (Drupal.settings.shanti_touch.menu) {
      $$('#content').pinchOut(function(){
        if (Drupal.settings.shanti_touch.menu_link != '') {
          window.location = Drupal.settings.shanti_touch.menu_link;
        }
      });
    }
	// pinch in
	if (Drupal.settings.shanti_touch.menu) {
      $$('#content').pinchIn(function(){
        if (Drupal.settings.shanti_touch.prog_link != '') {
          window.location = Drupal.settings.shanti_touch.prog_link;
        }
      });
    }
  });
})(jQuery);