import { styled } from "styled-components";

export const StyledButton = styled.button`
    background-color: ${(props) => (props.primary ? "#23A6F0" : "#FFF")};
    color: ${(props) => (props.primary ? "#FFF" : "#23A6F0")};
    padding: ${(props) => props.large ? "15px 50px" : "15px 30px"};
    border: ${(props) => (props.borderless ? "none" : "1px solid #23A6F0")};
    border-radius: ${(props) => (props.rounded ? "50px" : "10px")};
    font-size: 15px;
    font-weight: 600;
    cursor: pointer;
`;