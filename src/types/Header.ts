import { GenericBlock } from './block'

export interface IHeader {
	title: string
	headerBlock: IHeaderBlock[]
}

export interface IHeaderBlock {
	title: string
	options: IOptions[] | any
}
export interface IOptions {
	slug: string
	route: string
	title: string
}

export class Header implements IHeader {
	title: string
	headerBlock: IHeaderBlock[]
	constructor(props: GenericBlock<IHeader>) {
		this.title = props.data.title
		this.headerBlock = props.data.headerBlock
	}
}
