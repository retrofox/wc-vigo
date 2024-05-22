/**
 * External dependencies
 */
import { QRCodeSVG } from 'qrcode.react';
import { useBlockProps, InspectorControls } from '@wordpress/block-editor';

/**
 * Internal dependencies
 */
import './editor.scss';
import {
	Panel,
	PanelBody,
	TextControl,
	RangeControl,
} from '@wordpress/components';
import { __ } from '@wordpress/i18n';

/**
 * Edit function for the QR block.
 *
 * @param {Object} props Props passed to the component.
 * @return {Element} Element to render.
 */
export default function QRBlockEdit( props ) {
	const { attributes, setAttributes } = props;

	const { content, size } = attributes;

	return (
		<div { ...useBlockProps() }>
			<InspectorControls>
				<Panel>
					<PanelBody title="QR Code Settings">
						<TextControl
							label={ __( 'Content' ) }
							value={ content }
							onChange={ ( value ) =>
								setAttributes( { content: value } )
							}
							help={ __(
								'The content to encode in the QR code.'
							) }
						/>

						<RangeControl
							step={ 10 }
							value={ size }
							min={ 50 }
							max={ 500 }
							label={ __( 'Size' ) }
							onChange={ ( value ) =>
								setAttributes( { size: value } )
							}
							help={ __( 'The size of the QR code in pixels.' ) }
						/>
					</PanelBody>
				</Panel>
			</InspectorControls>

			<QRCodeSVG value={ attributes?.content } size={ size } />
			<p className="qr__content">{ attributes?.content }</p>
		</div>
	);
}
