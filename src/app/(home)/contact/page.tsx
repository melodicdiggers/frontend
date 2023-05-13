import { GenericBlock } from '../../../types'
import { Contact, IContactData } from '../../../types/contact'
import { getContactPage } from '../../../utils/url'

async function getContactData(): Promise<Contact | null> {
	try {
		const result = await getContactPage()
		if (result) return new Contact(new GenericBlock<IContactData>(result, 'about'))
		return null
	} catch (err) {
		return null
	}
}

export default async function ContactPage() {
	const contact = await getContactData()
	const { contactBlock } = contact || {}

	return (
		<div className='flex max-w-2xl flex-col gap-8 font-josefin'>
			<div className='text-3xl font-bold'>{contactBlock?.title.toUpperCase()}</div>
			{contactBlock?.contactOptions.map(option => {
				return (
					<div key={`email-${option.title}`}>
						<div className='font-baskervville'>{option.title}</div>
						<a className='font-baskervville leading-8 text-black' href={`mailto:${option.email}`}>
							{option.email}
						</a>
					</div>
				)
			})}
		</div>
	)
}
