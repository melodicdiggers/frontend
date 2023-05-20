import { GenericBlock } from './block'

export interface IDynamicBlock {
	landingPageBlock: ILandingPageBlock[]
}

export interface ILandingPageBlock {
	title: string
	url: {
		url: string
		key: string
	}
	photograph: {
		data: {
			attributes: {
				url: string
				width: number
				height: number
			}
		}
	}
}

export class DynamicBlock implements IDynamicBlock {
	landingPageBlock: ILandingPageBlock[]
	constructor(props: GenericBlock<IDynamicBlock>) {
		this.landingPageBlock = props.data.landingPageBlock
	}
}
