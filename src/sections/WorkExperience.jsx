import styled from "styled-components";
import {
	SectionWrapperInner,
	SectionWrapperOuter,
} from "../styles/SectionWrapper";
import ProjectBox from "../components/box/ProjectBox";
import { skg_work_experiences } from "../assets/skg_infos";

const WorkExperience = () => {
	return (
		<SectionWrapperOuter id="work-experiences">
			<SectionWrapperInner>
				<Wrapper>
					<h1>Work Experiences</h1>
					<div>
						{skg_work_experiences.map((item) => {
							return <ProjectBox key={item.id} project={item} />;
						})}
					</div>
				</Wrapper>
			</SectionWrapperInner>
		</SectionWrapperOuter>
	);
};

const Wrapper = styled.div`
	width: 100%;
	/* max-width: 1000px; */
	margin: 1rem 0;
	h1 {
		margin-bottom: 1rem;
		padding: 0.5rem;
		/* color: #cc6c1c; */
		color: var(--font-color-primary);
		font-family: var(--font-family-eng-title);
		font-size: var(--font-size-title-lg);
		line-height: 2.75rem;
	}
`;

export default WorkExperience;
