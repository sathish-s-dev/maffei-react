import { Footer, Header, Reservation } from '../../components';
import { images } from '../../assets';
import {
	TributeImage,
	ImageSlider,
	OurSpace,
	QuoteSection,
	PinchSection,
} from '.';
import './home.css';
import { Hero } from '../../components';

const Home = () => {
	const {
		home: {
			resevation: { wine },
		},
	} = images;
	return (
		<>
			<Header className={'home__background'}>
				<Hero />
			</Header>
			<TributeImage />
			<ImageSlider />
			<OurSpace />
			<QuoteSection />
			<Reservation img={wine} />
			<PinchSection />
			<Footer />
		</>
	);
};

export default Home;
