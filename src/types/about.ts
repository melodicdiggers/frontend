import { GenericBlock } from './block'

export interface IAbout {
	aboutBlock: IAboutBlockInterface
}
export interface IAboutBlockInterface {
	title: string
	subTitle: string
	description: string
}

export class About implements IAbout {
	aboutBlock: IAboutBlockInterface
	constructor(props: GenericBlock<IAbout>) {
		this.aboutBlock = props.data.aboutBlock
	}
}
