import { GenericBlock } from './block'

export interface IDynamicBlock {
	landingPageBlock: ILandingPageBlock[]
}

export interface ILandingPageBlock {
	title: string
	url: Object
	photograph: Object
}

export class DynamicBlock implements IDynamicBlock {
	landingPageBlock: ILandingPageBlock[]
	constructor(props: GenericBlock<IDynamicBlock>) {
		this.landingPageBlock = props.data.landingPageBlock
	}
}
