import Button from "../../components/Button/Button";
import Woman from "../../assets/woman.svg";
import "./Home.css";
import ProductCard from "../../components/ProductCard/ProductCard";
import Product from "../Product/Product";
import Review from "../Review/Review";
import AboutUs from "../AboutUs/AboutUs";
import Pricing from "../Pricing/Pricing";
import Contact from "../Contact/Contact";

const products = [
	{
		name: "coinhub Card",
		description: "A physical debit card linked to your account, allowing you to spend your cryptocurrency holdings at millions of merchants worldwide",
	},
	{
		name: "coinhub Wallet",
		description: " Provides users with full control over their private keys, offering enhanced security and privacy compared to keeping funds on exchanges",
	},
	{
		name: "coinhub One",
		description: "Designed to provide users with a seamless and integrated experience for managing their cryptocurrency investments",
	},
];

const Home = () => {
	return (
		<>
			<div className="home-container">
				<div className="hero">
					<div className="hero-1">
						<div>
							<h1>Financial Assistance With True Purpose</h1>
							<h4>
								We know how large objects will act, but things on a small scale
							</h4>
							<div className="hero-btn">
								<Button primary rounded>
									Get Quote Now
								</Button>
								<Button rounded>Learn More</Button>
							</div>
						</div>
					</div>
					<img src={Woman} alt="woman" className="hero-2" />
				</div>

				<div className="people">
					{products.map((product, index) => <ProductCard key={index} product={product} />)}
				</div>
			</div>

			<Product id="product" />
			<Review id="review" />
			<AboutUs id="about-us" />
			<Pricing id="pricing" />
			<Contact id="contact" />
		</>
	);
};

export default Home;
