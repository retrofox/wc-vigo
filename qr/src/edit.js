/**
 * External dependencies
 */
import { QRCodeSVG } from 'qrcode.react';

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
			<QRCodeSVG value="Hola!" />
		</p>
	);
}
