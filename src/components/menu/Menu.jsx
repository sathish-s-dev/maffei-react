/* eslint-disable react/prop-types */
import { Footer, Header, Hero } from '..';
import './Menu.css';
import { menuImages } from '../../assets';

const Menu = () => {
	return (
		<>
			<Header className={'menu__background'}>
				<Hero text={'Menu'} />
			</Header>
			<MenuWelcome />
			{menuImages.map((card, index) => (
				<OverlayCard
					key={index}
					card={card}
					index={index}
				/>
			))}
			<Footer />
		</>
	);
};

export default Menu;

function MenuWelcome() {
	return (
		<section className='text_section'>
			<div className='text_container'>
				<h3 className='menu__section_heading'>
					enjoy innovative menus featuring seasonal recipes inspired by
					traditional culinary styles, authentic ingredients, and modern
					techniques!
				</h3>
				<p className='text light'>
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
				<p className='text light'>
					At the Maffei, you can enjoy an extensive menu from 11.30 am, seven
					days a week! From a quick coffee, a bite to eat at lunch, or a
					deliciously crafted dinner, we do it all. You can also enjoy an
					impressive wine list and an exquisite range of cocktails. Maffei
					Kitchen aims to create an authentic cuisine experience, showcasing
					seasonal dishes historically driven by culinary methods{' '}
					<span className='orange_text'>BY maffei</span>
				</p>
			</div>
		</section>
	);
}

function OverlayCard({ card, index }) {
	const { title, content } = card;
	console.log(index + 1);
	return (
		<section className='main_section'>
			<div className={`background_img section${index + 1}`}>
				<div className='overlay_container'>
					<p className='menu'>Menu</p>
					<h4 className='card_heading'>{title}</h4>
					<div className='content_container'>
						<div className='container'>
							{content.map((item) => (
								<div
									key={item.name}
									className='card_container'>
									<div className='card_text'>
										<h5 className='dish_name'>{item.heading}</h5>
										<p className='dish_text'>{item.text}</p>
									</div>
									<img
										className='dish_img'
										src={item.value}
										alt={item.name}
									/>
								</div>
							))}
						</div>
					</div>
				</div>
			</div>
		</section>
	);
}
