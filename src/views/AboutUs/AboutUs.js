import SectionHeaders from "../../components/SectionHeaders/SectionHeaders";
import About from "../../assets/about-us.svg";
import "./AboutUs.css"

const AboutUs = () => {
	return (
		<div id="about-us" className="about-us-container">
			<SectionHeaders
				heading="About Us"
				subheading={`Problems trying to resolve the conflict between \\\\n the two major realms of Classical physics: Newtonian mechanics`}
			/>

			<div className="about-us-section">
				<img src={About} alt="About Coinbase" />
				<div className="about-us-content">
					<h3>A rethink of how we work</h3>
					<p>
						Slate helps you see how many more days you need to work to reach
						your financial goal for the month and year.When you add work to your
						Slate calendar we automatically calculate useful insights about the
						financial health of your business.
					</p>
                    <h6>Jim - Product Designer</h6>
				</div>
			</div>
		</div>
	);
};

export default AboutUs;
