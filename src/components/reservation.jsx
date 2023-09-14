/* eslint-disable react/prop-types */
import { images } from '../assets';

export function Reservation({ img }) {
	const {
		home: {
			resevation: { callIcon },
		},
	} = images;
	return (
		<section className='reservation_section'>
			<div className='form_container'>
				<form action=''>
					<p className='welcome'>Reservation</p>
					<h2 className='home__section_heading form_heading'>
						Are you ready for a culinary adventure?
					</h2>
					<label htmlFor='name'>
						Name <span className='plus red'> *</span>
					</label>
					<input
						type='text'
						id='name'
						placeholder='Your Name'
					/>
					<label htmlFor='Mobile'>
						Mobile Number <span className='plus red'> *</span>
					</label>
					<input
						type='text'
						id='Mobile'
						placeholder='9090909090'
					/>
					<a
						href='#'
						className='btn send'>
						{' '}
						send OTP
					</a>
					<div className='input_container'>
						<div className='input'>
							<label htmlFor='date'>
								Date <span className='plus red'> *</span>
							</label>
							<input
								type='text'
								name='date'
								id='date'
							/>
						</div>
						<div className='input'>
							<label htmlFor='time'>
								Time <span className='plus red'> *</span>
							</label>
							<input
								type='text'
								name='time'
								id='time'
							/>
						</div>

						<div className='input'>
							<label htmlFor='guests'>
								Number of Guests<span className='plus grey'> *</span>
							</label>
							<select
								name='guests'
								id='guests'>
								<option value='1'>1</option>
								<option value='2'>2</option>
								<option value='3'>3</option>
								<option value='4'>4</option>
							</select>
						</div>
					</div>
					<input
						type='submit'
						className='btn reserve'
						value='Reserve a table'
					/>
					<div>
						<img
							src={callIcon.value}
							alt={callIcon.name}
							className='call_icon'
						/>
						<p className='text'>For Reservation Call: 1800 547 1058</p>
					</div>
				</form>
			</div>
			<div className='wine_container'>
				<img
					className='wine'
					src={img.value}
					alt={img.name}
				/>
			</div>
		</section>
	);
}
