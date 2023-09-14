import { Footer, Header } from '..';
import './contact.css';
import { SocialIcons } from '../footer';

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

export function Location() {
	return (
		<section className='map_embedded'>
			<iframe
				src='https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3888.5715718618308!2d77.61998537460332!3d12.93523471567547!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bae15758f2e2679%3A0xd227bcd119f71ec6!2sMaffei%20Kitchen!5e0!3m2!1sen!2sin!4v1686121635707!5m2!1sen!2sin'
				style={{ border: 0 }}
				allowFullScreen=''
				loading='lazy'
				referrerPolicy='no-referrer-when-downgrade'></iframe>
		</section>
	);
}

function ContactForm() {
	return (
		<section className='contact'>
			<div className='address'>
				<h3 className='sub_heading'>Get In Touch</h3>
				<p className='contact_text light'>
					If you any questions or queries feel free to ask us, our team will
					always be happy to help you.
				</p>
				<h3 className='sub_heading orange'>Contact Info :</h3>
				<p className='footer_text contact_text'>
					Koramangala, Peace Vill, Municipal No. 23, 5th Cross, 5th Block,
					Koramangala, Bengaluru, Bengaluru Urban, Karnataka, 560095 For
					Reservation Call: 1800 547 1058
				</p>
				<h3 className='sub_heading orange'>Connect wih us</h3>
				<div className='icon_container contact_text'>
					<SocialIcons />
				</div>
			</div>
			<aside className='form_content'>
				<form
					action=''
					className='contact_form'>
					<a className='write orange'> WRITE TO US </a>
					<h3 className='sub_heading bottom'>Do you have any Questions?</h3>
					<input
						type='text'
						name='name'
						id='name'
						placeholder='Name'
					/>
					<input
						type='text'
						name='phone'
						id='phone'
						placeholder='Phone'
					/>
					<input
						type='email'
						name='email'
						id='email'
						placeholder='Email'
					/>
					<textarea
						name=''
						id=''
						rows='10'
						placeholder='Message'></textarea>
					<input
						type='submit'
						value='SEND'
						className='btn send'
					/>
				</form>
			</aside>
		</section>
	);
}
