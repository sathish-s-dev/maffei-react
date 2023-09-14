import { images } from '../../assets';

export function OurSpace() {
	const { slider2: artisian } = images;
	return (
		<section className='main'>
			<div className='home__section2'>
				<p className='ourspace welcome'>our space</p>
				<div className='flex our_space_title'>
					<h2 className='home__section_heading section_2 Artisan'>
						The Fine Artisan Kitchen
					</h2>
					<a
						href='../gallery/gallery_page.html'
						className='btn view'>
						View gallery
					</a>
				</div>
			</div>
			<div className='img_slider2'>
				{artisian.map((img, index) => (
					<div
						key={index}
						className='slider2_img_wrapper flex'>
						<img
							src={img.value}
							alt={img.name}
							className='slider_image2'
						/>
					</div>
				))}
			</div>
		</section>
	);
}
