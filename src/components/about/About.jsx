import { Footer, Header, Hero } from '..';
import { SocialIcons } from '../footer';
import { QuoteSection } from '../home';

import './About.css';

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

export function RareGalaxy() {
	return (
		<section className='rare_galaxy'>
			<div className='center'>
				<p className='sub_heading'>Inspired by a rare galaxy</p>
				<h3 className='about__section_heading'>
					Our food is a tribute to the warm Mediterranean lands, with enriched
					and delicious Lebanese, Moroccan, and Greek flavors.
				</h3>
				<p className='section_content'>
					The Maffei, “The Fine Artisan Kitchen,” offers an array of dishes,
					sourcing the finest fresh produce and seasonally acquired ingredients
					to create an unforgettable culinary experience with its world-class
					international chef. The beautifully marinated olives, feta cheese, the
					aroma of Moroccan spices, sumac, and fresh rosemary with the tasty
					olive oil will take you on a food journey you will remember forever!
					Maffei’s cuisine takes inspiration from the warm Mediterranean lands,
					particularly culturally enriched and delicious Lebanese, Moroccan and
					Greek cuisine.
				</p>
			</div>
		</section>
	);
}

function ChefSection() {
	return (
		<section className='chef_section'>
			<div className='chef'>
				<img
					src='./chef.jpg'
					className='chef_img'
					alt=''
				/>
			</div>
			<div className='chef_content'>
				<p className='chef_sub_heading'>Ammar’s magic.</p>
				<h3 className='chef_heading'>
					Twenty-five years of culinary excellence!
				</h3>
				<p className='chef_text'>
					Maffei comes from two unique galaxies visible only in red and infrared
					light, making them extremely rare and unique. The brand takes
					inspiration from the galaxies’ rarity and envisions giving customers
					the same experience. Chef Ammar Molki will serve as the Executive Chef
					of Maffei Kitchen. He brings 25+ years of Culinary experience from
					Lebanon, allowing him to curate innovative menus featuring seasonal
					recipes inspired by traditional culinary styles, authentic
					ingredients, and modern techniques. Come experience the Ammar Magic at
					Maffei!
				</p>
				<div
					className='icon_container'
					id='left'>
					<SocialIcons />
				</div>
				<img
					src='./sign.svg'
					className='right'
					alt=''
				/>
			</div>
		</section>
	);
}
