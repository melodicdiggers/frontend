import { MultiGenericBlock } from './multiBlock'

export interface IEvent {
	title: string
	location: string
	eventDate: string
	slug: string
	ticketPrices: {
		name: string
		value: string
	}
	media: {
		data: [
			{
				attributes: {
					url: string
				}
			}
		]
	}
}

export class Event implements IEvent {
	title: string
	location: string
	eventDate: string
	slug: string
	ticketPrices: {
		name: string
		value: string
	}
	media: {
		data: [
			{
				attributes: {
					url: string
				}
			}
		]
	}

	constructor(props: MultiGenericBlock<IEvent>) {
		const item = props.data[0]
		this.title = item.title
		this.location = item.location
		this.eventDate = item.eventDate
		this.slug = item.slug
		this.ticketPrices = item.ticketPrices
		this.media = item.media
	}
}
