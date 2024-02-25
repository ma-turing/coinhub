import Button from "../../components/Button/Button";
import Woman from "../../assets/woman.svg";
import "./Home.css";
import PeopleCard from "../../components/PeopleCard/PeopleCard";
import Product from "../Product/Product";
import Review from "../Review/Review";
import AboutUs from "../AboutUs/AboutUs";
import Pricing from "../Pricing/Pricing";
import Contact from "../Contact/Contact";

const people = {
	title: "The quick fox jumps over the lazy dog",
	description: "the quick fox jumps over the lazy dog the quick fox jumps over the lazy dog",
};

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
					{new Array(3).fill(people).map((person, index) => (
						<PeopleCard key={index} person={person} />
					))}
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
