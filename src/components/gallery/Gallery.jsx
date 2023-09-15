import { Footer, Header, Hero } from '..';

import './Gallery.css';
import { GallerySection } from './GallerySection';

const Gallery = () => {
	return (
		<>
			<Header className={'gallery__background'}>
				<Hero text={'Gallery'} />
			</Header>
			<GallerySection />
			<Footer />
		</>
	);
};

export default Gallery;
