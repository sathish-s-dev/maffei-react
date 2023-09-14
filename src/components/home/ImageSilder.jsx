import { images } from '../../assets';

export function ImageSlider() {
	const { slider1 } = images;
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
			<div className='img_slider1'>
				{slider1.map((img, index) => (
					<div
						key={index}
						className='slider1_img_wrapper flex'>
						<img
							src={img.value}
							alt='dish'
							className='slider_image1'
						/>
					</div>
				))}
			</div>
		</section>
	);
}
