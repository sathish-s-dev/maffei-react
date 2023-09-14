export const NavItems = () => {
	const navLinks = [
		{
			id: 1,
			text: 'Home',
			path: '#',
		},
		{
			id: 2,
			text: 'Our Story',
			path: '#',
		},
		{
			id: 3,
			text: 'Menu',
			path: '#',
		},
		{
			id: 4,
			text: 'Events',
			path: '#',
		},
		{
			id: 5,
			text: 'Gallery',
			path: '#',
		},
		{
			id: 6,
			text: 'Contact us',
			path: '#',
		},
	];
	return (
		<>
			{navLinks.map((item) => (
				<a
					href='#'
					key={item.id}>
					<li className='nav_item active'>
						{item.text}
						{/* circle class */}
						<div className=''></div>
					</li>
				</a>
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
