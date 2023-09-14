/* eslint-disable react/prop-types */

import './Events.css';

import { Footer, Header, Hero } from '..';
import { images } from '../../assets';

const Events = () => {
	return (
		<>
			<Header className={'events__background'}>
				<Hero text={'Events'} />
			</Header>
			<EventPage />
			<Footer />
		</>
	);
};

export default Events;

function EventPage() {
	const { flyers } = images;
	return (
		<section className='Events_section'>
			<div className='events__img_container'>
				<Flyers
					flyers={flyers}
					className='event'
				/>
			</div>
		</section>
	);
}

function Flyers({ flyers, className }) {
	console.log(flyers);
	return (
		<>
			{flyers.map((flyer) => (
				<img
					key={flyer.name}
					src={flyer.value}
					alt={flyer.name}
					className={className}
				/>
			))}
		</>
	);
}
