/* eslint-disable react/prop-types */
export function OverlayCard({ card, index }) {
	const { title, content } = card;
	// console.log(index + 1);
	return (
		<section className='main_section'>
			<div className={`background_img section${index + 1}`}>
				<div className='overlay_container'>
					<p className='menu'>Menu</p>
					<h4 className='card_heading'>{title}</h4>
					<div className='content_container'>
						<div className='container'>
							{content.map((item) => (
								<div
									key={item.name}
									className='card_container'>
									<div className='card_text'>
										<h5 className='dish_name'>{item.heading}</h5>
										<p className='dish_text'>{item.text}</p>
									</div>
									<img
										className='dish_img'
										src={item.value}
										alt={item.name}
									/>
								</div>
							))}
						</div>
					</div>
				</div>
			</div>
		</section>
	);
}
