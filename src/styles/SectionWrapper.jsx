import styled from "styled-components";

export const SectionWrapper = styled.div`
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;
	width: 100%;
	min-height: ${(props) => props.$height || "calc(100vh - 60px)"};
	padding: 1.5rem 2rem;
	background: ${(props) => props.$background || "var(--bg-color-default)"};
`;
