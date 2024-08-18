import styled from "styled-components";

export const SectionWrapperOuter = styled.div`
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;
	width: 100%;
	height: 100%;
	min-height: ${(props) => props.$height || "calc(100vh - var(--nav-height))"};
	padding: 1rem 1.5rem;
	background-color: ${(props) =>
		props.$background || "var(--bg-color-default)"};
	@media all and (max-width: 768px) {
		padding: 1rem;
	}
`;

export const SectionWrapperInner = styled.div`
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-content: center;
	flex-wrap: wrap;
	width: 100%;
	max-width: var(--max-width);
	height: 100%;
`;
