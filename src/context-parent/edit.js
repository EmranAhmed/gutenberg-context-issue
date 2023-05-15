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

	const context = {
		id
	};

	console.log('default parent', context)

	return (
		<div {...blockProps}>
			Parent
			<Context.Provider value={ useMemo( () => context, Object.values( context ) ) }>
				<div {...innerBlockProps} />
			</Context.Provider>
		</div>
	)
}
