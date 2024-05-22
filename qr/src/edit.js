/**
 * External dependencies
 */
import { __ } from '@wordpress/i18n';

/**
 * Internal dependencies
 */
import { useBlockProps } from '@wordpress/block-editor';
import './editor.scss';

/**
 * Edit function for the QR block.
 *
 * @return {Element} Element to render.
 */
export default function Edit() {
	return (
		<p { ...useBlockProps() }>
			{ __( 'QR block – hello from the editor!', 'qr' ) }
		</p>
	);
}
