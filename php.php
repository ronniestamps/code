<?php
/**
 *      _____  _    _ _____  
 *     |  __ \| |  | |  __ \ 
 *     | |__) | |__| | |__) |
 *     |  ___/|  __  |  ___/ 
 *     | |    | |  | | |     
 *     |_|    |_|  |_|_|     
 *                           
 * 		Client: Califronia Department of Corrections and Rehabilitation (CDCR).
 *		Project: Improved UX dashboard for Absorb Learning Management System.
 *		Description: .
 *
 *		Working in tandem with Absorb Infuse API development.
 *
 *		Absorb Infuse WordPress plugin.
 *		Plugin name: Absorb Infuse
 *		Description: Custom Absorb Infuse API integration plugin using CDCR Microsoft Azure as Identity Provider for SSO.
 *
 */

// Sanity check.
if (!defined('ABSPATH')) die('Direct access is not allowed.');


// Requirements
require_once('includes/api-model.php');

/**
 * Install function
 * Create necessary tables and setup default variables.
 */
function absorb_infuse_install() {
  

}

/**
 * Main init function.
 */
function absorb_infuse_init() {
  
  // Start the session if it hasn't been started yet.
  if (!session_id()) {
    session_start();
  }

  // Add necessary scripts.
  wp_enqueue_script('absorb', plugins_url().'/absorb-infuse/assets/js/scripts.js',array('jquery') ,'1.0.0' ,true);
  
}


/**
 * Start and/or recreate the session.
 */
function absorb_infuse_recreate_session() {
  if (session_id()) {
    session_destroy();
    session_start();
  }
  else {
    session_start();
  }
}

/**
 * Actions.
 */
add_action('init', 'absorb_infuse_init');

/**
 * Filters.
 */
//add_filter('authenticate', 'get_token', 25, 3);
add_filter('login_redirect','login_redirect', 20, 3);


/**
 * Registers.
 */
register_activation_hook(__FILE__, 'absorb_infuse_install');



	function get_token($user, $username, $password) {

		$curl = curl_init();

		curl_setopt_array($curl, array(
			CURLOPT_URL => get_field('api_key', 'options').'/authentication',
			CURLOPT_RETURNTRANSFER => true,
			CURLOPT_ENCODING => '',
			CURLOPT_MAXREDIRS => 10,
			CURLOPT_TIMEOUT => 0,
			CURLOPT_FOLLOWLOCATION => true,
			CURLOPT_HTTP_VERSION => CURL_HTTP_VERSION_1_1,
			CURLOPT_CUSTOMREQUEST => 'POST',
			CURLOPT_POSTFIELDS => '{
		"username": "' . $username . '",
		"password": "' . $password . '",
		"scope": [
		"Learner"
		],
		"accessMode": "API"
		}',
			CURLOPT_HTTPHEADER => array(
				'x-api-key: ' . get_field('api_key', 'options') . '',
				'Content-Type: application/json'
			),
		));

		$authResponse = json_decode(curl_exec($curl), true);
		curl_close($curl);

   // $_SESSION["token"] = isset($authResponse['token']) ? $authResponse['token'] : '';
   // $_SESSION["scope"] = isset($authResponse['scope']) ? $authResponse['scope'] : '';

		return $user;
	}


	/**
	 * WordPress function for redirecting users on login based on user role
	 */
	function login_redirect($url, $request, $user) {
		if ($user && is_object($user) && is_a($user, 'WP_User')) {
			if ($user->has_cap('administrator') || $user->has_cap('editor')) {
				$url = admin_url();
			} else {
				$url = home_url('/dashboard/');
			}
		}

		return $url;
	}