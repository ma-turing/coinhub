import SectionHeaders from "../../components/SectionHeaders/SectionHeaders";
import PricingCard from "../../components/PricingCard/PricingCard";
import { pricingData } from "../../utils/pricingData";
import "./Pricing.css";

const Pricing = () => {
	return (
		<div className="pricing-container" id="pricing">
			<SectionHeaders
				heading="Pricing"
				subheading={`Problems trying to resolve the conflict between \\\\n the two major realms of Classical physics: Newtonian mechanics `}
			/>
			<div className="prices">
				{pricingData.map((data, index) => (
					<PricingCard key={index} data={data} />
				))}
			</div>
		</div>
	);
};

export default Pricing;
