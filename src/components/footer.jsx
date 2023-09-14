import logo from '../assets/header/logo.svg';
import { images } from '../assets';
import './common.css';

const Footer = () => {
	return (
		<footer className='footer'>
			<div className='footer_container'>
				<a
					href='#'
					target='_blank'
					rel='noopener noreferrer'>
					<img
						src={logo}
						alt='logo'
						className='footer_logo'
					/>
				</a>
				<p className='stay'>stay connected</p>
				<div className='icon_container'>
					<SocialIcons />
				</div>
				<p className='footer_text'>
					Koramangala, Peace Vill, Municipal No. 23, 5th Cross, 5th Block,
					Koramangala, Bengaluru, Bengaluru Urban, Karnataka, 560095 For
					Reservation Call: 1800 547 1058
				</p>
				<p className='copyright'>2023 ©. All Rights Reserved</p>
			</div>
		</footer>
	);
};

export default Footer;

export function SocialIcons() {
	const { socialIcons } = images;

	return (
		<>
			{socialIcons.map((icon) => (
				<div
					key={icon.name}
					className='icon'>
					<a
						href='#'
						target='_blank'
						rel='noopener noreferrer'>
						<img
							src={icon.value}
							className='icon_png'
							alt={icon.name}
							style={icon.color}
						/>
						{/* <i
								style={{ '--color': '#d3286f' }}
								className='fa-brands fa-instagram icon_fa'></i> */}
					</a>
				</div>
			))}
		</>
	);
}
