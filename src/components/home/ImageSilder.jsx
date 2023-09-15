import { images } from '../../assets';
import Slider from 'react-slick';
import '../../assets/slick.css';
import '../../assets/slick-theme.css';

export function ImageSlider() {
	const { slider1 } = images;

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
					slidesToScroll: 3,
					infinite: true,
					dots: true,
				},
			},
			{
				breakpoint: 600,
				settings: {
					slidesToShow: 2,
					slidesToScroll: 2,
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
				<p className='welcome top'>Welcome to maffei</p>
				<div className='flex section2_title'>
					<h2 className='home__section_heading section_2 luscious'>
						Enjoy luscious global cuisines and taste flavors from all around the
						Mediterranean region!
					</h2>
					<a
						href='../menu/menu_page.html'
						className='btn menu_btn float-right'>
						Go to menu
					</a>
				</div>
				<p className='section_cont'>
					At Maffei, you can enjoy an extensive menu from 11.30 am, seven days a
					week! From a quick Turkish coffee, a bite to eat at lunch, or a
					deliciously crafted dinner, we do it all. You can also enjoy an
					impressive wine list and an exquisite range of cocktails. Maffei
					Kitchen aims to create an authentic cuisine experience, showcasing
					seasonal dishes historically driven by culinary methods.
				</p>
			</div>

			<Slider {...settings}>
				{slider1.map((item) => (
					<div key={item.name}>
						<img
							src={item.value}
							alt={item.name}
							className='slider_image1'
						/>
					</div>
				))}
			</Slider>
		</section>
	);
}
