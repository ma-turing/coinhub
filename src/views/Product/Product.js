import SectionHeaders from "../../components/SectionHeaders/SectionHeaders";
import ProductOverlay from "../../assets/product-overlay.svg"
import ProductLayer from "../../assets/product-layer.svg"
import "./Product.css"

const Product = () => {
	return (
		<div className="product-container">
			<SectionHeaders
				heading={`Better Strategy \\\\n With Quality Business`}
				subheading={`Problems trying to resolve the conflict between \\\\n the two major realms of Classical physics: Newtonian mechanics`}
			/>
            <div className="product-background">
                <img src={ProductOverlay} alt="product-background" className="background"/>
                <img src={ProductLayer} alt="product-layer" className="layer"/>
            </div>
		</div>
	);
};

export default Product