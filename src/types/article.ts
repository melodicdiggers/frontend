import { MultiGenericBlock } from './multiBlock'

export interface IArticle {
	title: string
	content: any
	category: string
	date: string
	slug: string
	followButtons: [
		{
			url: string
			title: string
		}
	]
	media: {
		data: {
			attributes: {
				url: string
			}
		}
	}
}

export class Article implements IArticle {
	title: string
	content: any
	category: string
	date: string
	slug: string
	followButtons: [
		{
			url: string
			title: string
		}
	]
	media: {
		data: {
			attributes: {
				url: string
			}
		}
	}

	constructor(props: MultiGenericBlock<IArticle>) {
		const item = props.data[0]
		this.title = item.title
		this.content = item.content
		this.category = item.category
		this.slug = item.slug
		this.date = item.date
		this.followButtons = item.followButtons
		this.media = item.media
	}
}
