import { SocialIcons } from '../footer';

export function ChefSection() {
	return (
		<section className='chef_section'>
			<div className='chef'>
				<img
					src='./chef.jpg'
					className='chef_img'
					alt=''
				/>
			</div>
			<div className='chef_content'>
				<p className='chef_sub_heading'>Ammar’s magic.</p>
				<h3 className='chef_heading'>
					Twenty-five years of culinary excellence!
				</h3>
				<p className='chef_text'>
					Maffei comes from two unique galaxies visible only in red and infrared
					light, making them extremely rare and unique. The brand takes
					inspiration from the galaxies’ rarity and envisions giving customers
					the same experience. Chef Ammar Molki will serve as the Executive Chef
					of Maffei Kitchen. He brings 25+ years of Culinary experience from
					Lebanon, allowing him to curate innovative menus featuring seasonal
					recipes inspired by traditional culinary styles, authentic
					ingredients, and modern techniques. Come experience the Ammar Magic at
					Maffei!
				</p>
				<div
					className='icon_container'
					id='left'>
					<SocialIcons />
				</div>
				<img
					src='./sign.svg'
					className='right'
					alt=''
				/>
			</div>
		</section>
	);
}
