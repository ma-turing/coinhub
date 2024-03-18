import { Link, useNavigate } from "react-router-dom";
import { RightArrow } from "../../assets/rightArrow";
import Button from "../../components/Button/Button";
import AnchorLink from "react-anchor-link-smooth-scroll";
import "./Header.css";

const Header = () => {
	const navigate = useNavigate();

	const handleClick = () => {
		navigate('/explore');
	};

	return (
		<div className="header-container">
			<Link exact to="/" className="brand">
				<h3>coinhub</h3>
			</Link>
			<div className="menu">
				<Link exact to="/">
					Home
				</Link>
				<AnchorLink
					onClick={() => {
						navigate("/about-us");
					}}
					href="#about-us"
				>
					About Us
				</AnchorLink>
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
			<Button primary className="explore-btn" onClick={handleClick}>
				Explore now <RightArrow />
			</Button>
		</div>
	);
};

export default Header;
