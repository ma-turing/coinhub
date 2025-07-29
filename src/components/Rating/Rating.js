import { useState } from "react";
import { Star } from "../../assets/star";
import { colorTypes } from "../../utils/color";
import "./Rating.css";

const Rating = ({ value, onChange, readOnly = false }) => {
	const [internalRating, setInternalRating] = useState(4);

	// Use controlled value if provided, otherwise use internal state
	const currentRating = value !== undefined ? value : internalRating;

	const handleRating = (index) => {
		if (readOnly) return;

		const newRating = index + 1;
		if (onChange) {
			onChange(newRating);
		} else {
			setInternalRating(newRating);
		}
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
                        className={`rating ${readOnly ? 'rating-readonly' : ''}`}
					>
						<Star color={currentRating > index ? colorTypes.rating : colorTypes.light_text} />
					</span>
				);
			})}
		</div>
	);
};

export default Rating;
