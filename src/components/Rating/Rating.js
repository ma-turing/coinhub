import { useState } from "react";
import { Star } from "../../assets/star";
import { colorTypes } from "../../utils/color";
import "./Rating.css";

const Rating = () => {
	const [rating, setRating] = useState(4);

	const handleRating = (index) => {
		setRating(index + 1);
	};

	return (
		<div className="rating-container">
			{[...Array(5)].map((_, index) => {
				return (
					<span
						key={index}
						onClick={() => {
							handleRating(index);
						}}
                        className="rating"
					>
						<Star color={rating > index ? colorTypes.rating : colorTypes.light_text} />
					</span>
				);
			})}
		</div>
	);
};

export default Rating;
