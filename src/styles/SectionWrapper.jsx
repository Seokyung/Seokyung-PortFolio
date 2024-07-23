import styled from "styled-components";

export const SectionWrapperOuter = styled.div`
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;
	width: 100%;
	min-height: ${(props) => props.$height || "calc(100vh - var(--nav-height))"};
	padding: 1rem 1.5rem;
	background-color: ${(props) =>
		props.$background || "var(--bg-color-default)"};
`;

export const SectionWrapperInner = styled.div`
	display: flex;
	flex-direction: column;
	width: 100%;
	max-width: var(--max-width);
	height: 100%;
	/* @media all and (max-width: 768px) {
		font-size: var(--font-size-sm);
	} */
`;
