/**
 * External dependencies
 */
import QRCode from 'qrcode.react';
import { useBlockProps } from '@wordpress/block-editor';

export default function save( { attributes } ) {
	const { content, size } = attributes;
	return (
		<div { ...useBlockProps.save() }>
			<QRCode value={ content } size={ size } renderAs="svg" />
			<p className="qr__content">{ attributes?.content }</p>
		</div>
	);
}
