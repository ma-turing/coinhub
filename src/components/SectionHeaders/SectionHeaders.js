import "./SectionHeaders.css";

const SectionHeaders = (props) => {
	const { heading, subheading } = props;

	return (
		<div className="section-headers">
			{heading && heading.split("\\\\n").map((h) => (
				<h2>{h}</h2>
			))}
			{subheading && subheading.split("\\\\n").map(s => <p>{s}</p>)}
		</div>
	);
};

export default SectionHeaders;
