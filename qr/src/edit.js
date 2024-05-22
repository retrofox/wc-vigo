/**
 * External dependencies
 */
import { QRCodeSVG } from 'qrcode.react';
import { useBlockProps } from '@wordpress/block-editor';

/**
 * Internal dependencies
 */
import './editor.scss';

/**
 * Edit function for the QR block.
 *
 * @param {Object} props Props passed to the component.
 * @return {Element} Element to render.
 */
export default function QRBlockEdit( props ) {
	const { attributes } = props;

	return (
		<div { ...useBlockProps() }>
			<div { ...useBlockProps() }>
				<QRCodeSVG value={ attributes?.content } />
				<p className="qr__content">{ attributes?.content }</p>
			</div>
		</div>
	);
}
