import { images } from '../../assets';

export function QuoteSection() {
	const {
		home: { quote },
	} = images;
	return (
		<section className='quote_section'>
			<div className='quote_container'>
				<img
					src={quote.value}
					alt={quote.name}
					className='quote_mark'
				/>
				<p className='quote_text'>
					Never underestimate the power of good food. Eating delicious food can
					be a life changing experience
					<span className='author'>By Maffei</span>
				</p>
				<div className='carousal_container'>
					<div className='carocircle visible'></div>
					<div className='carocircle visible'></div>
					<div className='carocircle visible'></div>
				</div>
			</div>
		</section>
	);
}
