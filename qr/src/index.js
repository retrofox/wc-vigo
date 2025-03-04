/**
 * External dependencies
 */
import { registerBlockType } from '@wordpress/blocks';

/**
 * Internal dependencies
 */
import QRBlockEdit from './edit';
import save from './save';
import metadata from './block.json';
import './style.scss';
import { QRIcon } from './icons/qr';

/**
 * Every block starts by registering a new block type definition.
 *
 * @see https://developer.wordpress.org/block-editor/reference-guides/block-api/block-registration/
 */
registerBlockType( metadata.name, {
	/**
	 * @see ./edit.js
	 */
	edit: QRBlockEdit,

	/**
	 * @see ./save.js
	 */
	save,

	/*
	 * Add a custom Icon
	 */
	icon: QRIcon,
} );
