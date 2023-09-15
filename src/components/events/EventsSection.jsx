import { images } from '../../assets';
import { Flyers } from './Flyers';

export function EventsSection() {
	const { flyers } = images;
	return (
		<section className='Events_section'>
			<div className='events__img_container'>
				<Flyers
					flyers={flyers}
					className='event'
				/>
			</div>
		</section>
	);
}
