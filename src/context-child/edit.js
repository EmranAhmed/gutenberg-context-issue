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

	console.log('from child', x)

	return (
		<div {...blockProps}>
			Children
			<div {...innerBlockProps} />
		</div>
	)
}
