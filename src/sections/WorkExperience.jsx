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
						{skg_work_experiences.map((item) => {
							return <WorkBox key={item.id} item={item} />;
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
		color: var(--font-color-primary);
		font-family: var(--font-family-eng-title);
		font-size: 2rem;
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
