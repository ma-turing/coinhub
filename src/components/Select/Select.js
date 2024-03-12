import { useState, useEffect, useRef } from "react";
import "./Select.css";

const Select = (props) => {
	const { options, onSelect } = props;
	const dropdownRef = useRef(null);

	const [isOpen, setIsOpen] = useState(false);
	const [selectedOption, setSelectedOption] = useState({});

	const handleOption = (option) => {
		setSelectedOption(option);
        onSelect(option);
		setIsOpen(false);
	};

	useEffect(() => {
		setSelectedOption({});
	}, [options]);

	const handleClickOutside = (event) => {
		if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
			setIsOpen(false);
		}
	};

	useEffect(() => {
		document.addEventListener("mousedown", handleClickOutside);
	}, []);

	return (
		<div className="custom-select" ref={dropdownRef}>
			<div
				className={isOpen ? "active-selected-option" : "selected-option"}
				onClick={() => setIsOpen(!isOpen)}
			>
				{selectedOption.text ? (
					<span>{selectedOption.text}</span>
				) : (
					<span className="select-placeholder">Choose an option</span>
				)}
			</div>
			{isOpen && (
				<div className="select-content">
					{options.map((option) => (
						<div
							key={option.id}
							className={
								selectedOption.id === option.id
									? "active-option option"
									: "option"
							}
							onClick={() => handleOption(option)}
						>
							<span>{option.text}</span>
						</div>
					))}
				</div>
			)}
		</div>
	);
};

export default Select;
