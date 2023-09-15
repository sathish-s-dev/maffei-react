import Slider from 'react-slick';
import { images } from '../../assets';

export function OurSpace() {
	const { slider2: artisian } = images;

	var settings = {
		dots: false,
		infinite: true,
		autoplay: true,
		speed: 2500,
		slidesToShow: 4,
		slidesToScroll: 1,
		initialSlide: 0,
		rows: 1,
		responsive: [
			{
				breakpoint: 1024,
				settings: {
					slidesToShow: 3,
					slidesToScroll: 1,
					infinite: true,
					dots: true,
				},
			},
			{
				breakpoint: 600,
				settings: {
					slidesToShow: 2,
					slidesToScroll: 1,
					initialSlide: 2,
				},
			},
			{
				breakpoint: 480,
				settings: {
					slidesToShow: 1,
					slidesToScroll: 1,
				},
			},
		],
	};
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
				<Slider {...settings}>
					{artisian.map((item) => (
						<div key={item.name}>
							<img
								src={item.value}
								alt={item.name}
								className='slider_image2'
							/>
						</div>
					))}
				</Slider>
				{/* {artisian.map((img, index) => (
					<div
						key={index}
						className='slider2_img_wrapper flex'>
						<img
							src={img.value}
							alt={img.name}
							className='slider_image2'
						/>
					</div>
				))} */}
			</div>
		</section>
	);
}
