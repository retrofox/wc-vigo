/**
 * External dependencies
 */
import { QRCodeSVG } from 'qrcode.react';
import { useBlockProps } from '@wordpress/block-editor';
import { Flex, FlexItem } from '@wordpress/components';

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
		<Flex direction="column">
			<FlexItem>
				<p { ...useBlockProps() }>
					<QRCodeSVG value={ attributes?.content } />
				</p>
			</FlexItem>
			<FlexItem>
				<p>{ attributes?.content }</p>
			</FlexItem>
		</Flex>
	);
}
