export interface IHeader {
	title: string
	headerBlock: HeaderBlock[]
}

export interface HeaderBlock {
	title: string
	options: Options[]
}
export interface Options {
	slug: string
	route: string
	title: string
}
