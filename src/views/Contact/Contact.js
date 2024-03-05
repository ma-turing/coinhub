import { useState } from "react";
import background from "../../assets/contact-background.svg";
import Button from "../../components/Button/Button";
import Select from "../../components/Select/Select";
import { contactData } from "../../utils/contactData";
import "./Contact.css";

const Contact = () => {
	const [selectedHeader, setSelectedHeader] = useState("");
	const [selectedNavItem, setSelectedNavItem] = useState("");

	console.log(selectedNavItem, "selectedNavItem");

	return (
		<div className="contact-container" id="contact">
			<div className="contact-form-wrapper">
				<img src={background} alt="" className="contact-background" />
				<div className="contact-form">
					<h5>Contact Us</h5>
					<h2>Make an Appointment</h2>
					<form>
						<div className="contact-input-wrapper">
							<input type="text" placeholder="Full Name" />
							<input type="email" placeholder="Email" />
						</div>
						<div className="contact-input-wrapper">
							<Select
								options={contactData.map((item) => ({
									id: item.header,
									text: item.header,
								}))}
								onSelect={(option) => setSelectedHeader(option.id)}
							/>
							{selectedHeader &&
							
										<Select
									
											options={contactData
												.find((item) => item.header === selectedHeader)
												?.issues?.map((issue, index) => ({ id: index, text: issue }))}
											// options={item.issues.split(", ").map((text, id) => ({ id, text }))}
											onSelect={(option) => setSelectedNavItem(option.text)}
										/>
								
							}
						</div>
						<textarea placeholder="Message" />
					</form>
					<Button primary medium>
						Book Appointment
					</Button>
				</div>
			</div>
			<div className="contact-footer">
				<div className="contact-footer-text">
					<h3>Consulting Agency For Your Business</h3>
					<p>The quick fox jumps over the lazy dog</p>
				</div>
				<Button primary medium>
					Contact us
				</Button>
			</div>
		</div>
	);
};

export default Contact;
