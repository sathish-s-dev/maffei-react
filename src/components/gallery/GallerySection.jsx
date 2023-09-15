import { images } from '../../assets';

export function GallerySection() {
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
