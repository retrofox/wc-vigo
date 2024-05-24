/**
 * External dependencies
 */
import { QRCodeSVG } from 'qrcode.react';
import { settings } from '@wordpress/icons';
import {
	useBlockProps,
	InspectorControls,
	BlockControls,
} from '@wordpress/block-editor';

/**
 * Internal dependencies
 */
import './editor.scss';
import {
	Panel,
	PanelBody,
	TextControl,
	RangeControl,
	RadioControl,
	ToolbarDropdownMenu,
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

	const { content, size, mode } = attributes;

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
								'The content to encode in the QR code. Enabled only in static mode.'
							) }
							disabled={ mode === 'dynamic' }
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

						<RadioControl
							label={ __( 'Mode' ) }
							selected={ attributes.mode }
							options={ [
								{ label: 'Static', value: 'static' },
								{
									label: 'Post link (dynamic)',
									value: 'dynamic',
								},
								{ label: 'Interactive', value: 'interactive' },
							] }
							onChange={ ( value ) =>
								setAttributes( { mode: value } )
							}
						/>
					</PanelBody>
				</Panel>
			</InspectorControls>

			<BlockControls group="block">
				<ToolbarDropdownMenu
					className="wp-block-vigo-qr__size-dropdown"
					icon={ settings }
					label={ __( 'Size' ) }
					popoverProps={ {
						className: 'wp-block-vigo-qr__size-dropdown-popover',
					} }
					controls={ [
						{
							title: __( 'Small' ),
							onClick: () => setAttributes( { size: 150 } ),
							isActive: size === 150,
						},
						{
							title: __( 'Medium' ),
							onClick: () => setAttributes( { size: 250 } ),
							isActive: size === 250,
						},
						{
							title: __( 'Large' ),
							onClick: () => setAttributes( { size: 350 } ),
							isActive: size === 350,
						},
					] }
				/>
			</BlockControls>

			<QRCodeSVG value={ attributes?.content } size={ size } />
			<p className="qr__content">{ attributes?.content }</p>
		</div>
	);
}
