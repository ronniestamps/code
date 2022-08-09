<?php
/**
 *     __          __           _ _____                   
 *     \ \        / /          | |  __ \                  
 *      \ \  /\  / /__  _ __ __| | |__) | __ ___  ___ ___ 
 *       \ \/  \/ / _ \| '__/ _` |  ___/ '__/ _ \/ __/ __|
 *        \  /\  / (_) | | | (_| | |   | | |  __/\__ \__ \
 *         \/  \/ \___/|_|  \__,_|_|   |_|  \___||___/___/
 *                                                        
 *                                                        
 */

/**
 * Panic Button bootstrap file
 *
 * This file is read by WordPress to generate the plugin information in the plugin
 * admin area. This file also includes all of the dependencies used by the plugin,
 * registers the activation and deactivation functions, and defines a function
 * that starts the plugin.
 *
 * @link              http://hostwel.net
 * @since             1.0.0
 * @package           Panic_Button
 *
 * @wordpress-plugin
 * Plugin Name:       Panic Button
 * Plugin URI:        https://hostwel.net/panic-button/
 * Description:       This plugin offers a layer of protection and anonymity for users of Domestic Violence websites by quickly opening a new tab with innocuous content, clearing and replacing history of the tab, and then closing the tab.
 * Version:           1.0.0
 * Author:            Ronnie Stamps
 * Author URI:        https://hostwel.com/
 * License:           GPL-2.0+
 * License URI:       http://www.gnu.org/licenses/gpl-2.0.txt
 * Text Domain:       panic-button
 * Domain Path:       /languages
 */

// If this file is called directly, abort.
if ( ! defined( 'WPINC' ) ) {
	die;
}

/**
 * Current Panic Button version.
 */
define( 'PANIC_BUTTON', '1.0.0' );

/**
 * This runs during plugin activation.
 * This action is documented in includes/class-panic-button-activator.php
 */
function activate_panic_button() {
	require_once plugin_dir_path( __FILE__ ) . 'includes/class-panic-button-activator.php';
	Panic_Button_Activator::activate();
}

/**
 * This runs during plugin deactivation.
 * This action is documented in includes/class-panic-button-deactivator.php
 */
function deactivate_panic_button() {
	require_once plugin_dir_path( __FILE__ ) . 'includes/class-panic-button-deactivator.php';
	Panic_Button_Deactivator::deactivate();
}

register_activation_hook( __FILE__, 'activate_panic_button' );
register_deactivation_hook( __FILE__, 'deactivate_panic_button' );

/**
 * The core plugin class that is used to define language,
 * admin-specific hooks, and public-facing site hooks.
 */
require plugin_dir_path( __FILE__ ) . 'includes/class-panic-button.php';

/**
 * Begins execution of the plugin.
 *
 * Since everything within the plugin is registered via hooks,
 * then kicking off the plugin from this point in the file does
 * not affect the page life cycle.
 *
 * @since    1.0.0
 */
function run_panic_button() {

	$plugin = new Panic_Button();
	$plugin->run();

}

run_panic_button();