<?php
/**
 * Implements hook_shanti_touch_lib().
 * Developer hook to add support for a new library
 */
function hook_shanti_touch_lib() {
  $touch_libs = array();
  // account for quojs being installed
  if (module_exists('quojs')) { // check library has been added
    $touch_libs['quojs'] = array(
      'name' => 'Quo.js', // human name of the project
      'location' => drupal_get_path('module', 'shanti_touch') .'/shanti_touch_libs/shanti_touch_quo.js', // location of the library implementation to load
    );
  }
  return $touch_libs;
}
?>