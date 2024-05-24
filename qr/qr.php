<?php
/**
 * Plugin Name:       QR block
 * Description:       QR block utilities
 * Requires at least: 6.1
 * Requires PHP:      7.0
 * Version:           0.1.0
 * Author:            Damián Suárez (retrofox)
 * License:           GPL-2.0-or-later
 * License URI:       https://www.gnu.org/licenses/gpl-2.0.html
 * Text Domain:       qr
 *
 * @package Vigo
 */

if ( ! defined( 'ABSPATH' ) ) {
	exit; // Exit if accessed directly.
}

/**
 * Registers the block using the metadata loaded from the `block.json` file.
 * Behind the scenes, it registers also all assets so they can be enqueued
 * through the block editor in the corresponding context.
 *
 * @see https://developer.wordpress.org/reference/functions/register_block_type/
 */
function vigo_qr_block_init() {
	register_block_type( __DIR__ . '/build' );
}
add_action( 'init', 'vigo_qr_block_init' );

add_action( 'enqueue_block_assets', 'myplugin_enqueue_if_block_is_present' );
function myplugin_enqueue_if_block_is_present(){

    if ( has_block( 'my-plugin/my-block' ) || true ) {
        wp_enqueue_script(
			'myplugin_script',
			plugin_dir_url( __FILE__ ) . 'assets/js/qrcodegen.js',
			array(),
			'1.0.0',
			true
		);
    }
}