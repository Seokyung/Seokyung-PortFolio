import styled from "styled-components";
import {
	SectionWrapperInner,
	SectionWrapperOuter,
} from "../components/section/SectionWrapper";
import { skg_work_experiences } from "../assets/skg_infos";
import WorkBox from "../components/box/WorkBox";

const WorkExperience = () => {
	return (
		<SectionWrapperOuter
			id="work-experiences"
			$background="var(--color-dark-brown)"
		>
			<SectionWrapperInner>
				<Wrapper>
					<h1>Work Experiences</h1>
					<WorkWrapper>
						{skg_work_experiences.map((work) => {
							return <WorkBox key={work.id} item={work} />;
						})}
					</WorkWrapper>
				</Wrapper>
			</SectionWrapperInner>
		</SectionWrapperOuter>
	);
};

const Wrapper = styled.div`
	margin: 2rem 0;
	h1 {
		margin: 0 0 0.5rem 0.5rem;
		color: var(--color-light-orange);
		font-family: var(--font-family-eng-title);
		font-size: var(--font-size-title);
		letter-spacing: -1.5px;
		line-height: 2.5rem;
	}
`;

const WorkWrapper = styled.div`
	display: flex;
	flex-direction: column;
	gap: 2rem;
`;

export default WorkExperience;
