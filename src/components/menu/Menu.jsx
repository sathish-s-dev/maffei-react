/* eslint-disable react/prop-types */
import { Footer, Header, Hero } from '..';
import './Menu.css';
import { menuImages } from '../../assets';
import { Welcome } from './Welcome';
import { OverlayCard } from './OverlayCard';

const Menu = () => {
	return (
		<>
			<Header className={'menu__background'}>
				<Hero text={'Menu'} />
			</Header>
			<Welcome />
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
