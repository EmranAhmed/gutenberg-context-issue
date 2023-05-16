import './editor.scss'

import { useBlockProps, useInnerBlocksProps } from '@wordpress/block-editor'
import { useContext } from '@wordpress/element'

import { Context } from '../utils'

export default function Edit ({
	attributes,
	setAttributes,
	clientId,
	context,
}) {

	const blockProps = useBlockProps()

	const innerBlockProps = useInnerBlocksProps(blockProps)

	const x = useContext(Context)

	console.log('child block', x)

	return (
		<div {...blockProps}>
			Child block as inner block
			<div {...innerBlockProps} />
		</div>
	)
}
