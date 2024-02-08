import { People } from "../../assets/people.js";
import "./PeopleCard.css";

const PeopleCard = (props) => {
	const { person } = props;
	
	return (
		<div className="people-container">
			<div className="people-header">
				<People />
				<h5>{person.title}</h5>
			</div>
			<p className="people-description">{person.description}</p>
		</div>
	);
};

export default PeopleCard;
