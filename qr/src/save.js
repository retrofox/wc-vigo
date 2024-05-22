import QRCode from 'qrcode.react';
import { useBlockProps } from '@wordpress/block-editor';

export default function save() {
	return (
		<figure { ...useBlockProps.save() }>
			<QRCode value="Hola" renderAs="svg" />
		</figure>
	);
}
