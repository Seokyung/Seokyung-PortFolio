import styled from "styled-components";

export const SectionWrapper = styled.div`
	width: 100%;
	min-height: calc(100vh - 60px);
	padding: 1.5rem 2rem;
	background: ${(props) => props.$background || "#fff"};
`;
