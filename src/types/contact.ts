import { GenericBlock } from './block'

export interface IContactData {
	contactBlock: IContactBlockInterface
}
export interface IContactBlockInterface {
	title: string
	contactOptions: IContactOptions[]
}

export interface IContactOptions {
	email: string
	title: string
}

export class Contact implements IContactData {
	contactBlock: IContactBlockInterface
	constructor(props: GenericBlock<IContactData>) {
		this.contactBlock = props.data.contactBlock
	}
}
