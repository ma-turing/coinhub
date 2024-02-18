import SectionHeaders from "../../components/SectionHeaders/SectionHeaders";
import User from "../../assets/user.svg";
import "./Review.css"
import Rating from "../../components/Rating/Rating";

const Review = () => {
    return (
        <div className="review-container">
            <SectionHeaders heading="What Clients Say" subheading={`Problems trying to resolve the conflict between \\\\n the two major realms of Classical physics: Newtonian mechanics `} />
            <div className="client-review">
                <img src={User} alt="client review"/>
                <SectionHeaders subheading={`Slate helps you see how many more days you need \\\\n to work to reach your financial goal for the month and year.`} />
                <Rating />
                <h3 className="client-name">Regina Miles</h3>
                <p className="client-title">Designer</p>
            </div>
        </div>
    )
}

export default Review