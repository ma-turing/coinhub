import { Link, useNavigate } from "react-router-dom";
import { RightArrow } from "../../assets/rightArrow";
import Button from "../../components/Button/Button";
import AnchorLink from "react-anchor-link-smooth-scroll";
import "./Header.css";

const Header = () => {
	const navigate = useNavigate();

	return (
		<div className="header-container">
			<Link exact to="/" className="brand">
				<h3>CoinHub</h3>
			</Link>
			<div className="menu">
				<Link exact to="/">
					Home
				</Link>
				<Link to="/explore">Explore</Link>
				<AnchorLink
					onClick={() => {
						navigate("/product");
					}}
					href="#product"
				>
					Product
				</AnchorLink>
				<AnchorLink
					onClick={() => {
						navigate("/pricing");
					}}
					href="#pricing"
				>
					Pricing
				</AnchorLink>
				<AnchorLink
					onClick={() => {
						navigate("/contact");
					}}
					href="#contact"
				>
					Contact
				</AnchorLink>
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
