import { styled } from "styled-components";
import {colorTypes} from "../../utils/color"

export const StyledButton = styled.button`
	background-color: ${(props) => (props.primary ? colorTypes.primary : colorTypes.light_text)};
	color: ${(props) => (props.primary ? colorTypes.light_text : colorTypes.primary)};
	padding: ${(props) => (props.medium ? "15px 50px" : "15px 30px")};
	border: ${(props) => (props.borderless ? "none" : `1px solid ${colorTypes.primary}`)};
	border-radius: ${(props) => (props.rounded ? "50px" : "10px")};
	font-size: 15px;
	font-weight: 600;
	cursor: pointer;
`;
