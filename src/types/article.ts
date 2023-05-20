import { MultiGenericBlock } from './multiBlock'

export interface IArticle {
	title: string
	content: string
	category: string
}

export class Article implements IArticle {
	title: string
	content: string
	category: string
	constructor(props: MultiGenericBlock<IArticle>) {
		this.title = props.data[0].title
		this.content = props.data[0].content
		this.category = props.data[0].category
	}
}
