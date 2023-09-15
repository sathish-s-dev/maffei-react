import { SocialIcons } from '../footer';

export function ContactForm() {
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
