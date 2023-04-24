export interface IHeader {
	title: string
	headerBlock: IHeaderBlock[]
}

export interface IHeaderBlock {
	title: string
	options: IOptions[]
}
export interface IOptions {
	slug: string
	route: string
	title: string
}
