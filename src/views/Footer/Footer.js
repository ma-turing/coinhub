import { useNavigate } from "react-router-dom";
import AnchorLink from "react-anchor-link-smooth-scroll";
import facebook from "../../assets/facebook.svg";
import instagram from "../../assets/instagram.svg";
import twitter from "../../assets/twitter.svg";
import { footerData } from "../../utils/footerData";
import "./Footer.css";

const Footer = () => {
	const navigate = useNavigate();

	return (
		<div className="footer-container">
			<div className="footer-content">
				<h3>Get In Touch</h3>
				<p>The quick fox jumps over the lazy dog</p>
				<div className="footer-logo">
					<img src={facebook} alt="" />
					<img src={instagram} alt="" />
					<img src={twitter} alt="" />
				</div>
			</div>
			{footerData.map((data, index) => (
				<div className="footer-content" key={index}>
					<h3>{data.header}</h3>
					{data.nav_items.map((nav, idx) => (
						<AnchorLink
							key={idx}
							onClick={() => {
								navigate(`/${nav.link}`);
							}}
							href={`#${nav.link}`}
						>
							{nav.text}
						</AnchorLink>
					))}
				</div>
			))}
		</div>
	);
};

export default Footer;
