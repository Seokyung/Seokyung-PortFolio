import styled from "styled-components";
import {
	SectionWrapperInner,
	SectionWrapperOuter,
} from "../components/section/SectionWrapper";
import { skg_skills } from "../assets/skg_infos";

function Skills() {
	const renderSkills = (sector) => {
		return (
			<SectorBox>
				{/* <h2>{sector}</h2> */}
				<SkillContainer>
					{skg_skills
						// .filter((el) => el.sector === sector)
						.map((item) => {
							return (
								<SkillBox key={item.skillName}>
									<IconBox>
										<img src={item.icon} alt="skill_icon" />
									</IconBox>
									<span>{item.skillName}</span>
								</SkillBox>
							);
						})}
				</SkillContainer>
			</SectorBox>
		);
	};

	return (
		<SectionWrapperOuter id="skills" $background="var(--color-light-blue)">
			<SectionWrapperInner>
				<Wrapper>
					<h1>Skills</h1>
					<SkillWrapper>
						{renderSkills("frontend")}
						{/* {renderSkills("backend")} */}
					</SkillWrapper>
				</Wrapper>
			</SectionWrapperInner>
		</SectionWrapperOuter>
	);
}

const Wrapper = styled.div`
	width: 100%;
	max-width: var(--max-box-width);
	margin: 2rem 0;
	h1 {
		margin: 0 0 1rem 0.5rem;
		font-family: var(--font-family-eng-title);
		font-size: var(--font-size-title);
		color: var(--font-color-light);
	}
`;

const SkillWrapper = styled.div`
	display: flex;
	gap: 1.25rem;
	@media (max-width: 768px) {
		flex-direction: column;
		gap: 2rem;
	}
`;

const SectorBox = styled.div`
	display: flex;
	flex-direction: column;
	align-items: center;
	width: 100%;
	h2 {
		margin-bottom: 0.25rem;
		font-family: var(--font-family-eng-card-title);
		font-size: 1.375rem;
		color: var(--font-color-light);
		text-transform: capitalize;
	}
`;

const SkillContainer = styled.div`
	width: 100%;
	display: grid;
	grid-template-columns: repeat(auto-fill, minmax(120px, auto));
	gap: 1.5rem 1.25rem;
	padding: 1.75rem 1rem;
	border: 1px solid var(--font-color-light);
	border-radius: 15px;
	@media (max-width: 768px) {
		grid-template-columns: repeat(auto-fill, minmax(80px, auto));
	}
`;

const SkillBox = styled.div`
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;
	span {
		color: var(--font-color-light);
		font-family: var(--font-family-eng);
		font-size: 0.9rem;
		font-weight: 500;
		letter-spacing: -0.25px;
		text-align: center;
		white-space: pre-wrap;
	}
`;

const IconBox = styled.div`
	width: 100px;
	height: auto;
	margin-bottom: 0.75rem;
	@media (max-width: 768px) {
		width: 70px;
	}
	@media (max-width: 320) {
		width: 40px;
	}
	img {
		width: 100%;
	}
`;

export default Skills;
