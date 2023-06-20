import { MultiGenericBlock } from './multiBlock'

export interface IEvent {
	title: string
	location: string
	eventDate: string
	slug: string
	description: string
	media: {
		data: [
			{
				attributes: {
					url: string
				}
			}
		]
	}
	ticket: {
		data: [
			{
				attributes: {
					name: string
					ammount: number
					available: boolean
					value: number
				}
			}
		]
	}
}

export class Event implements IEvent {
	title: string
	location: string
	eventDate: string
	description: string
	slug: string
	media: {
		data: [
			{
				attributes: {
					url: string
				}
			}
		]
	}
	ticket: {
		data: [
			{
				attributes: {
					name: string
					ammount: number
					available: boolean
					value: number
				}
			}
		]
	}

	constructor(props: MultiGenericBlock<IEvent>) {
		const item = props.data[0]
		this.title = item.title
		this.location = item.location
		this.description = item.description
		this.eventDate = item.eventDate
		this.slug = item.slug
		this.media = item.media
		this.ticket = item.ticket
	}
}
