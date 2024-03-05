import { People } from "../../assets/people.js";
import "./ProductCard.css";

const ProductCard = (props) => {
	const { product } = props;
	
	return (
		<div className="people-container">
			<div className="people-header">
				<People />
				<h5>{product.name}</h5>
			</div>
			<p className="people-description">{product.description}</p>
		</div>
	);
};

export default ProductCard;
