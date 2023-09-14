import { images } from '../../assets';

export function PinchSection() {
	const {
		flyers,
		home: { pinIcon },
	} = images;
	return (
		<section className='final'>
			<div className='pinch_container'>
				<h3 className='pinch'>A pinch of passion in every dish</h3>
				<p className='heading_text pinch_text'>
					Truly authentic Mediterranean food made with the freshest and finest
					ingredients
				</p>

				<a
					href='../Events//Events_page.html'
					className='btn event'>
					Events
				</a>
				<a
					href='../contact/contact_page.html'
					className='map btn'>
					<img
						src={pinIcon.value}
						alt={pinIcon.name}
						className='pin'
					/>
					<p className='location'>Bengaluru</p>
				</a>
			</div>
			{flyers.map((flyer) => (
				<img
					key={flyer.name}
					src={flyer.value}
					alt={flyer.name}
					className='pinch_img'
				/>
			))}
		</section>
	);
}
