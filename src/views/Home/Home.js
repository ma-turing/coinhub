import { Suspense, lazy } from "react";
import Button from "../../components/Button/Button";
import Woman from "../../assets/woman.svg";
import LoadingSpinner from "../../components/LoadingSpinner/LoadingSpinner";
import "./Home.css";
import ProductCard from "../../components/ProductCard/ProductCard";

// Lazy load heavy sections that are below the fold
const Product = lazy(() => import("../Product/Product"));
const Review = lazy(() => import("../Review/Review"));
const AboutUs = lazy(() => import("../AboutUs/AboutUs"));
const Pricing = lazy(() => import("../Pricing/Pricing"));
const Contact = lazy(() => import("../Contact/Contact"));

const products = [
	{
		name: "coinhub Card",
		description: "A physical debit card linked to your account, allowing you to spend your cryptocurrency holdings at millions of merchants worldwide",
		userCount: 125000,        // Will display as "125,000 users"
    	transactionVolume: 50000000  // Will display as "$50,000,000 volume"
	},
	{
		name: "coinhub Wallet",
		description: " Provides users with full control over their private keys, offering enhanced security and privacy compared to keeping funds on exchanges",
		userCount: 0,        // Will display as "125,000 users"
		transactionVolume: 50000000  // Will display as "$50,000,000 volume"
	},
	{
		name: "coinhub One",
		description: "Designed to provide users with a seamless and integrated experience for managing their cryptocurrency investments",
		userCount: 125000,        // Will display as "125,000 users"
		transactionVolume: 0  // Will display as "$50,000,000 volume"
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

			<Suspense fallback={<LoadingSpinner message="Loading content..." />}>
				<Product id="product" />
				<Review id="review" />
				<AboutUs id="about-us" />
				<Pricing id="pricing" />
				<Contact id="contact" />
			</Suspense>
		</>
	);
};

export default Home;
