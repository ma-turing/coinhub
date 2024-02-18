import Button from "../../components/Button/Button";
import Woman from "../../assets/woman.svg";
import "./Home.css";
import PeopleCard from "../../components/PeopleCard/PeopleCard";
import AboutUs from "../AboutUs/AboutUs";
import Review from "../Review/Review";

const people = {
	title: "The quick fox jumps over the lazy dog",
	description:
		"the quick fox jumps over the lazy dog the quick fox jumps over the lazy dog",
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
                {
                    new Array(3).fill(people).map((person, index) => <PeopleCard key={index} person={person} />)
                }
            </div>
		</div>

        <Review />
         <AboutUs />
         </>
	);
};

export default Home;
