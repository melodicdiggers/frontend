import { GenericBlock } from './block'

export interface IArticle {
	title: string
	content: string
	category: string
}

export class Article implements IArticle {
	title: string
	content: string
	category: string
	constructor(props: GenericBlock<IArticle>) {
		this.title = props.data.title
		this.content = props.data.content
		this.category = props.data.category
	}
}
