/**
 * External dependencies
 */
import { QRCodeSVG } from 'qrcode.react';
import { useBlockProps } from '@wordpress/block-editor';
import { Flex, FlexItem, TextControl } from '@wordpress/components';
import { __ } from '@wordpress/i18n';

/**
 * Internal dependencies
 */
import './editor.scss';

/**
 * Edit function for the QR block.
 *
 * @return {Element} Element to render.
 */
export default function Edit() {
	return (
		<p { ...useBlockProps() }>
			<QRCodeSVG value="https://vigo.wordcamp.org/2024/" />
		</p>
	);
}
