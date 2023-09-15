import { Link } from 'react-router-dom';

export const NavItems = () => {
	const navLinks = [
		{
			id: 1,
			text: 'Home',
			path: '/maffei-react',
		},
		{
			id: 2,
			text: 'Our Story',
			path: '/maffei-react/about',
		},
		{
			id: 3,
			text: 'Menu',
			path: '/maffei-react/menu',
		},
		{
			id: 4,
			text: 'Events',
			path: '/maffei-react/events',
		},
		{
			id: 5,
			text: 'Gallery',
			path: '/maffei-react/gallery',
		},
		{
			id: 6,
			text: 'Contact us',
			path: '/maffei-react/contact',
		},
	];
	return (
		<>
			{navLinks.map((item) => (
				<Link
					to={item.path}
					key={item.id}>
					<li className='nav_item active'>
						{item.text}
						{/* circle class */}
						<div className=''></div>
					</li>
				</Link>
			))}
			<a
				href='#'
				id='reservation'
				className='nav_item btn reservation'>
				Reservation
			</a>
		</>
	);
};
