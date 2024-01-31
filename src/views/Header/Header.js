import { Link } from "react-router-dom";
import { RightArrow } from "../../assets/rightArrow";
import Button from "../../components/Button/Button";
import "./Header.css";

const Header = () => {
	return (
		<div className="header-container">
			<h3 className="brand">CoinHub</h3>
			<div className="menu">
				{/* <Link to={`/home`}>Home</Link>
				<Link to={`/product`}>Product</Link>
				<Link to={`/pricing`}>Pricing</Link>
				<Link to={`/contact`}>Contact</Link> */}
			</div>
			<div className="btn">
				<Button borderless>Login</Button>
				<Button primary className="register">
					Become a member <RightArrow />
				</Button>
			</div>
		</div>
	);
};

export default Header;
