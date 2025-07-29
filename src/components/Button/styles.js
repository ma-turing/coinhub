import { styled } from "styled-components";
import {colorTypes} from "../../utils/color"

const getBackgroundColor = (props) => {
	if (props.primary) return colorTypes.primary;
	if (props.secondary) return colorTypes.muted;
	return colorTypes.light_text;
};

const getTextColor = (props) => {
	if (props.primary) return colorTypes.light_text;
	if (props.secondary) return colorTypes.light_text;
	return colorTypes.primary;
};

const getBorderColor = (props) => {
	if (props.borderless) return "none";
	if (props.primary) return `1px solid ${colorTypes.primary}`;
	if (props.secondary) return `1px solid ${colorTypes.muted}`;
	return `1px solid ${colorTypes.primary}`;
};

export const StyledButton = styled.button.withConfig({
	shouldForwardProp: (prop) => !['primary', 'secondary', 'medium', 'rounded', 'borderless'].includes(prop),
})`
	background-color: ${getBackgroundColor};
	color: ${getTextColor};
	padding: ${(props) => (props.medium ? "15px 50px" : "15px 30px")};
	border: ${getBorderColor};
	border-radius: ${(props) => (props.rounded ? "50px" : "10px")};
	font-size: 15px;
	font-weight: 600;
	cursor: pointer;
`;
