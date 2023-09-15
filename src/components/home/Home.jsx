import { Footer, Header, Reservation } from '../../components';
import { images } from '../../assets';
import { TributeImage } from './Tribute';
import { ImageSlider } from './ImageSilder';
import { OurSpace } from './OurSpace';
import { QuoteSection } from './quote';
import { PinchSection } from './pinch';
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
