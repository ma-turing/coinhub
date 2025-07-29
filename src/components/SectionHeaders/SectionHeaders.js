import "./SectionHeaders.css";

const SectionHeaders = (props) => {
	const { heading, subheading } = props;

	return (
		<div className="section-headers">
			{heading && heading.split("\\\\n").map((h, index) => (
				<h2 key={index}>{h}</h2>
			))}
			{subheading && subheading.split("\\\\n").map((s, index) => <p key={index}>{s}</p>)}
		</div>
	);
};

export default SectionHeaders;
