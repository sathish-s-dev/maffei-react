import { images } from '../../assets';

export function TributeImage() {
	const {
		home: { light },
	} = images;
	return (
		<section className='main_section1'>
			<div className='img_container'>
				<img
					src={light.value}
					alt={light.name}
					className='light_img'
				/>
			</div>
			<div className='txt_container'>
				<p className='welcome'>Welcome to maffei</p>
				<h3 className='home__section_heading'>
					A tribute to the warm Mediterranean lands enriched with delicious
					Lebanese, Moroccan, and Greek flavors
				</h3>
				<p className='section_cont'>
					The Maffei, “The Fine Artisan Kitchen,” offers an array of dishes,
					sourcing the finest fresh produce and seasonally acquired ingredients
					to create an unforgettable culinary experience with its world-class
					international chef. The beautifully marinated olives, feta cheese, the
					aroma of Moroccan spices, sumac, and fresh rosemary with the tasty
					olive oil will take you on a food journey you will remember forever!
					MaffeiU+0060s cuisine takes inspiration from the warm Mediterranean
					lands, particularly culturally enriched and delicious Lebanese,
					Moroccan and Greek cuisine.
				</p>
				<a
					href='../abou_us/about_page.html'
					className='read_more'>
					Read More<span className='plus'>+</span>
				</a>
			</div>
		</section>
	);
}
