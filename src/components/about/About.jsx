import { Footer, Header, Hero } from '..';

import { QuoteSection } from '../home/quote';

import './About.css';
import { ChefSection } from './ChefSection';
import { RareGalaxy } from './RareGalaxy';

function About() {
	return (
		<>
			<Header>
				<Hero text='About us' />
			</Header>
			<RareGalaxy />
			<ChefSection />
			<QuoteSection />
			<Footer />
		</>
	);
}

export default About;
