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
	console.log(contactBlock)

	return (
		<div className='flex flex-col'>
			<div>Contact Page</div>
		</div>
	)
}
