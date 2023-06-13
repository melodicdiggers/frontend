export const multyFiltersType = ['articles', 'musics'] as const
export type MultiGenericBlockType = (typeof multyFiltersType)[number]

export type IMultiGenericBlock<T> = {
	[key in MultiGenericBlockType]: { data: [{ attributes: T }] }
}

export class MultiGenericBlock<T> {
	data: T[]
	constructor(props: IMultiGenericBlock<T>, type: MultiGenericBlockType) {
		this.data = props[type].data.map(item => item.attributes)
	}
}
