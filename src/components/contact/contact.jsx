import { Footer, Header } from '..';
import { ContactForm } from './ContactForm';
import { Location } from './Location';
import './contact.css';

const ContactPage = () => {
	return (
		<>
			<Header className={'contact__background'} />
			<ContactForm />
			<Location />
			<Footer />
		</>
	);
};

export default ContactPage;


