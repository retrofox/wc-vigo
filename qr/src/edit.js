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
import { useEntityProp } from '@wordpress/core-data';
import {
	Panel,
	PanelBody,
	TextControl,
	RangeControl,
	RadioControl,
	ToolbarDropdownMenu,
} from '@wordpress/components';
import { __ } from '@wordpress/i18n';
import { useEffect } from '@wordpress/element';

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
	const { attributes, setAttributes, context } = props;
	const { postType, postId } = context;

	const { content, size, mode } = attributes;

	const [ postTitle = '', setTitle ] = useEntityProp(
		'postType',
		postType,
		'title',
		postId
	);

	useEffect( () => {
		if ( mode !== 'dynamic' ) {
			return;
		}
		setAttributes( { content: postTitle } );
	}, [ mode, postTitle, setAttributes ] );

	return (
		<div { ...useBlockProps() }>
			<InspectorControls>
				<Panel>
					<PanelBody title="QR Code Settings">
						<TextControl
							label={ __( 'Content' ) }
							value={ content }
							onChange={ ( value ) =>
								mode === 'dynamic'
									? setTitle( value )
									: setAttributes( { content: value } )
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

						<RadioControl
							label={ __( 'Mode' ) }
							selected={ attributes.mode }
							options={ [
								{ label: 'Static', value: 'static' },
								{
									label: 'Post Title (dynamic)',
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
			{ mode !== 'interactive' ? (
				<p className="qr__content">{ attributes?.content }</p>
			) : (
				<TextControl
					className="qr__content-input"
					value={ attributes?.content }
					onChange={ ( value ) =>
						setAttributes( { content: value } )
					}
				/>
			) }
		</div>
	);
}
