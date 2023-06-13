import { MultiGenericBlock } from './multiBlock'

export interface IMusic {
	title: string
	description: string
	category: string
	mediaBlock: MediaBlock[]
}

export interface MediaBlock {
	url: string
}

export class Music implements IMusic {
	title: string
	description: string
	category: string
	mediaBlock: MediaBlock[]

	constructor(props: MultiGenericBlock<IMusic>) {
		const item = props.data[0]
		this.title = item.title
		this.description = item.description
		this.category = item.category
		this.mediaBlock = item.mediaBlock
	}
}
