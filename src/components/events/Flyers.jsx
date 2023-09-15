/* eslint-disable react/prop-types */
export function Flyers({ flyers, className }) {
	console.log(flyers);
	return (
		<>
			{flyers.map((flyer) => (
				<img
					key={flyer.name}
					src={flyer.value}
					alt={flyer.name}
					className={className}
				/>
			))}
		</>
	);
}
