import { Check } from "../../assets/check";
import { colorTypes } from "../../utils/color";
import Button from "../Button/Button"
import "./PricingCard.css"

const PricingCard = (props) => {
	const { data } = props;

	return (
		<div className="pricing-card-container">
			<h5 className="pricing-card-heading">{data.heading}</h5>
			<h3 className="pricing-card-subheading">{data.subheading}</h3>
			<div className="price">
				<h2>{data.price}</h2>
				<div>
					<h5>$</h5>
					<h6>Per Month</h6>
				</div>
			</div>

			<div className="pricing-features">
				{data.features.map((feature, index) => (
					<div key={index}>
						<Check
							color={feature.checked ? colorTypes.success : colorTypes.muted}
						/>
						<h6>{feature.text}</h6>
					</div>
				))}
			</div>

			<Button primary large>{data.btn_text}</Button>
		</div>
	);
};

export default PricingCard;
