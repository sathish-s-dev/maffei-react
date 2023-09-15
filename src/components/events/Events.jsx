/* eslint-disable react/prop-types */

import './Events.css';

import { Footer, Header, Hero } from '..';
import { EventsSection } from './EventsSection';

const Events = () => {
	return (
		<>
			<Header className={'events__background'}>
				<Hero text={'Events'} />
			</Header>
			<EventsSection />
			<Footer />
		</>
	);
};

export default Events;


