import { useState, useEffect, useRef } from "react";
import "./Select.css";

const Select = (props) => {
	const { options, onSelect, multiple = false, value, placeholder = "Choose an option" } = props;
	const dropdownRef = useRef(null);

	const [isOpen, setIsOpen] = useState(false);
	const [selectedOptions, setSelectedOptions] = useState(multiple ? [] : {});

	const handleOption = (option) => {
		if (multiple) {
			const isSelected = selectedOptions.some(selected => selected.id === option.id);
			let newSelection;

			if (isSelected) {
				// Remove from selection
				newSelection = selectedOptions.filter(selected => selected.id !== option.id);
			} else {
				// Add to selection
				newSelection = [...selectedOptions, option];
			}

			setSelectedOptions(newSelection);
			onSelect(newSelection);
			// Keep dropdown open for multiple selection
		} else {
			setSelectedOptions(option);
			onSelect(option);
			setIsOpen(false);
		}
	};

	useEffect(() => {
		if (multiple) {
			setSelectedOptions([]);
		} else {
			setSelectedOptions({});
		}
	}, [options, multiple]);

	// Support controlled component
	useEffect(() => {
		if (value !== undefined) {
			setSelectedOptions(value);
		}
	}, [value]);

	const handleClickOutside = (event) => {
		if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
			setIsOpen(false);
		}
	};

	useEffect(() => {
		document.addEventListener("mousedown", handleClickOutside);
		return () => {
			document.removeEventListener("mousedown", handleClickOutside);
		};
	}, []);

	// Helper function to check if an option is selected
	const isOptionSelected = (option) => {
		if (multiple) {
			return selectedOptions.some(selected => selected.id === option.id);
		} else {
			return selectedOptions.id === option.id;
		}
	};

	// Helper function to render selected options display
	const renderSelectedDisplay = () => {
		if (multiple) {
			if (selectedOptions.length === 0) {
				return <span className="select-placeholder">{placeholder}</span>;
			} else if (selectedOptions.length === 1) {
				return <span>{selectedOptions[0].text}</span>;
			} else {
				return (
					<div className="multiple-selected">
						<span>{selectedOptions[0].text}</span>
						<span className="selected-count">+{selectedOptions.length - 1} more</span>
					</div>
				);
			}
		} else {
			return selectedOptions.text ? (
				<span>{selectedOptions.text}</span>
			) : (
				<span className="select-placeholder">{placeholder}</span>
			);
		}
	};

	return (
		<div className="custom-select" ref={dropdownRef}>
			<div
				className={isOpen ? "active-selected-option" : "selected-option"}
				onClick={() => setIsOpen(!isOpen)}
			>
				{renderSelectedDisplay()}
			</div>
			{isOpen && (
				<div className="select-content">
					{options.map((option) => (
						<div
							key={option.id}
							className={
								isOptionSelected(option)
									? "active-option option"
									: "option"
							}
							onClick={() => handleOption(option)}
						>
							<span>{option.text}</span>
							{multiple && isOptionSelected(option) && (
								<span className="checkmark">✓</span>
							)}
						</div>
					))}
				</div>
			)}
		</div>
	);
};

export default Select;
