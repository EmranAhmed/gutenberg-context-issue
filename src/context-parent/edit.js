import './editor.scss'

import { useState, useMemo } from '@wordpress/element'

import { useBlockProps, useInnerBlocksProps } from '@wordpress/block-editor'

import { Context } from '../utils'

export default function Edit ({ attributes, setAttributes, clientId }) {

	const [id, setId] = useState(999)

	const blockProps = useBlockProps()

	const innerBlockProps = useInnerBlocksProps(blockProps, {
		allowedBlocks: ['custom/context-child'],
	})

	console.log('parent block', id)

	return (
		<div {...blockProps}>
			Parent
			<Context.Provider value={{ id }}>
				<div {...innerBlockProps} />
			</Context.Provider>
		</div>
	)
}
