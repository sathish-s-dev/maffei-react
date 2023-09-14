/* eslint-disable react/prop-types */

export const Hero = ({ text }) => {
	return (
		<>
			{text ? (
				<div className='title'>
					<h1>{text}</h1>
				</div>
			) : (
				<>
					<h1 className='heading'>Your culinary adventure awaits</h1>
					<p className='heading_text'>
						Truly authentic Mediterranean food made with the freshest and finest
						ingredients
					</p>
					<div
						className='flex column'
						id='left'>
						<a
							href='#'
							className='btn home__right'>
							View Menu
						</a>
						<a
							href='#'
							className='btn r_slide'>
							Reserve a table
						</a>
					</div>
				</>
			)}
		</>
	);
};
