import styled from "styled-components";
import {
	SectionWrapperInner,
	SectionWrapperOuter,
} from "../styles/SectionWrapper";
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
					<div>
						{skg_work_experiences.map((item) => {
							return <WorkBox key={item.id} item={item} />;
						})}
					</div>
				</Wrapper>
			</SectionWrapperInner>
		</SectionWrapperOuter>
	);
};

const Wrapper = styled.div`
	width: 100%;
	margin: 2rem 0;
	h1 {
		margin: 0 0 0.25rem 0.5rem;
		color: var(--font-color-primary);
		font-family: var(--font-family-eng-title);
		font-size: 2rem;
		letter-spacing: -1.5px;
		line-height: 2.5rem;
	}
`;

export default WorkExperience;
