/**
 * External dependencies
 */
import { QRCodeSVG } from 'qrcode.react';
import { useBlockProps, InspectorControls } from '@wordpress/block-editor';

/**
 * Internal dependencies
 */
import './editor.scss';
import { Panel, PanelBody, TextControl } from '@wordpress/components';
import { __ } from '@wordpress/i18n';

/**
 * Edit function for the QR block.
 *
 * @param {Object} props Props passed to the component.
 * @return {Element} Element to render.
 */
export default function QRBlockEdit( props ) {
	const { attributes, setAttributes } = props;

	return (
		<div { ...useBlockProps() }>
			<div { ...useBlockProps() }>
				<InspectorControls>
					<Panel>
						<PanelBody title="QR Code Settings">
							<TextControl
								label={ __( 'Content' ) }
								value={ attributes?.content }
								onChange={ ( value ) =>
									setAttributes( { content: value } )
								}
								help={ __(
									'The content to encode in the QR code.'
								) }
							/>
						</PanelBody>
					</Panel>
				</InspectorControls>

				<QRCodeSVG value={ attributes?.content } />
				<p className="qr__content">{ attributes?.content }</p>
			</div>
		</div>
	);
}
