import QRCode from 'qrcode.react';
import { useBlockProps } from '@wordpress/block-editor';

export default function save() {
	return (
		<figure { ...useBlockProps.save() }>
			<QRCode value="https://vigo.wordcamp.org/2024/" renderAs="svg" />
		</figure>
	);
}
