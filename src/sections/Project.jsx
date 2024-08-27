import styled from "styled-components";
import {
	SectionWrapperInner,
	SectionWrapperOuter,
} from "../components/section/SectionWrapper";
import ProjectBox from "../components/box/ProjectBox";
import { skg_projects } from "../assets/skg_infos";

function Project() {
	return (
		<SectionWrapperOuter id="projects" $background="var(--color-dark-green)">
			<SectionWrapperInner>
				<Wrapper>
					<h1>Projects</h1>
					<ProjectWrapper>
						{skg_projects.map((project) => {
							return <ProjectBox key={project.id} item={project} />;
						})}
					</ProjectWrapper>
				</Wrapper>
			</SectionWrapperInner>
		</SectionWrapperOuter>
	);
}

const Wrapper = styled.div`
	margin: 2rem 0;
	h1 {
		margin: 0 0 0.5rem 0.5rem;
		/* color: var(--font-color-primary); */
		color: var(--color-light-orange);
		font-family: var(--font-family-eng-title);
		font-size: 2rem;
		letter-spacing: -1.5px;
		line-height: 2.5rem;
	}
`;

const ProjectWrapper = styled.div`
	display: flex;
	flex-direction: column;
	gap: 2rem;
`;

export default Project;
