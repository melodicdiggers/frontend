import { GenericBlock } from './block'

export interface IFooter {
	aboutBlock: IAboutBlock
	contactBlock: IContactBlock
	socialBlock: ISocialBlock
}

export interface IAboutBlock {
	title: string
	subtitle: string
	description: string
}

export interface IContactBlock {
	title: string
	contactOptions: IContact[]
}

export interface ISocialBlock {
	socialMediaOptions: ISocialMedia[]
}

export interface IContact {
	email: string
	title: string
}

export interface ISocialMedia {
	url: string
	title: string
}

export class Footer implements IFooter {
	aboutBlock: IAboutBlock
	contactBlock: IContactBlock
	socialBlock: ISocialBlock
	constructor(props: GenericBlock<IFooter>) {
		this.aboutBlock = props.data.aboutBlock
		this.contactBlock = props.data.contactBlock
		this.socialBlock = props.data.socialBlock
	}
}
