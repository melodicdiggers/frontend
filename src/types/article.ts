import { MultiGenericBlock } from './multiBlock'

export interface IArticle {
	title: string
	content: string
	category: string
	article_slug: string
	createdAt: string
	mediaArticle: {
		data: {
			attributes: {
				url: string
			}
		}
	}
}

export class Article implements IArticle {
	title: string
	content: string
	category: string
	article_slug: string
	createdAt: string
	mediaArticle: {
		data: {
			attributes: {
				url: string
			}
		}
	}
	constructor(props: MultiGenericBlock<IArticle>) {
		this.title = props.data[0].title
		this.content = props.data[0].content
		this.category = props.data[0].category
		this.createdAt = props.data[0].createdAt
		this.article_slug = props.data[0].article_slug
		this.mediaArticle = props.data[0].mediaArticle
	}
}
