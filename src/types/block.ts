export const filtersType = ['header', 'footer', 'about', 'dynamicBlock', 'aboutPage'] as const
export type GenericBlockType = (typeof filtersType)[number]

export type IGenericBlock<T> = {
	[key in GenericBlockType]: { data: { attributes: T } }
}

export class GenericBlock<T> {
	data: T
	constructor(props: IGenericBlock<T>, type: GenericBlockType) {
		this.data = props[type].data.attributes
	}
}
