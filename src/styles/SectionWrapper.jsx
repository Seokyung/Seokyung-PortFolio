import styled from "styled-components";

const Wrapper = styled.div`
	width: 100%;
	padding: 1.5rem 2rem;
	background: ${(props) => props.background || "inherit"};
`;

function SectionWrapper({ children, ...props }) {
	return <Wrapper {...props}>{children}</Wrapper>;
}

export default SectionWrapper;
