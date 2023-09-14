import { Footer, Header, Hero } from '..';
import { images } from '../../assets';

import './Gallery.css';

const Gallery = () => {
	return (
		<>
			<Header className={"gallery__background"}>
				<Hero text={'Gallery'} />
			</Header>
			<GalleryCont />
			<Footer />
		</>
	);
};

export default Gallery;

function GalleryCont() {
	const { gallery } = images;
	return (
		<section className='img_gallery'>
			{gallery.map((item) => (
				<div
					className='container'
					key={item.name}>
					<img
						src={item.value}
						className='gallery_img'
						alt={item.name}
						loading='lazy'
					/>
				</div>
			))}
		</section>
	);
}
