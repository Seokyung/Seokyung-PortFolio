import styled from "styled-components";
import {
	SectionWrapperOuter,
	SectionWrapperInner,
} from "../components/section/SectionWrapper";
import BusinessCard from "../components/about-me/BusinessCard";
import Introduction from "../components/about-me/Introduction";

function AboutMe() {
	return (
		<SectionWrapperOuter id="about-me" $background="var(--color-grey-brown)">
			<SectionWrapperInner>
				<Wrapper>
					<BusinessCard />
					<Introduction />
				</Wrapper>
			</SectionWrapperInner>
		</SectionWrapperOuter>
	);
}

const Wrapper = styled.div`
	display: flex;
	flex-direction: column;
	align-items: center;
	gap: 5rem;
	width: 100%;
	margin: 3rem 0;
	@media all and (max-width: 768px) {
		gap: 3rem;
		margin: 2rem 0;
	}
`;

export default AboutMe;
