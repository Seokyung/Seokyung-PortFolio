import styled from "styled-components";
import {
	SectionWrapperInner,
	SectionWrapperOuter,
} from "../styles/SectionWrapper";
import { skg_skills } from "../assets/skg_infos";

function Skills() {
	const renderSkills = (sector) => {
		return skg_skills
			.filter((el) => el.sector === sector)
			.map((item) => {
				return (
					<SkillBox key={item.id}>
						<img src={item.icon} alt="skill_icon" />
						<span>{item.skillName}</span>
					</SkillBox>
				);
			});
	};

	return (
		<SectionWrapperOuter id="skills">
			<SectionWrapperInner>
				<Wrapper>
					<h1>Skills</h1>
					<div>
						<SectorBox>
							<h2>Frontend</h2>
							<div>{renderSkills("frontend")}</div>
						</SectorBox>
						<SectorBox>
							<h2>Backend</h2>
							<div>{renderSkills("backend")}</div>
						</SectorBox>
					</div>
				</Wrapper>
			</SectionWrapperInner>
		</SectionWrapperOuter>
	);
}

const Wrapper = styled.div`
	/* width: 100%; */
	margin: 1.5rem 0;
	h1 {
		font-family: var(--font-family-eng-title);
		font-size: var(--font-size-title-lg);
		color: var(--font-color-primary);
	}
	> div {
		display: flex;
		flex-direction: column;
		gap: 2.5rem;
		margin-top: 1rem;
	}
`;

const SectorBox = styled.div`
	display: flex;
	flex-direction: column;
	align-items: center;
	h2 {
		margin-bottom: 0.75rem;
		font-family: var(--font-family-eng);
		font-size: var(--font-size-title);
		color: var(--font-color-light);
	}
	> div {
		width: 100%;
		display: grid;
		grid-template-columns: repeat(3, 1fr);
		gap: 1rem;
		padding: 1.75rem 1rem;
		border: 1px solid #fff;
		border-radius: 20px;
		@media (max-width: 768px) {
			grid-template-columns: repeat(1, 1fr);
		}
	}
`;

const SkillBox = styled.div`
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;
	padding: 0.5rem;
	img {
		width: 100%;
		max-width: 200px;
		height: auto;
	}
	span {
		margin-top: 0.75rem;
		font-family: var(--font-family-eng);
		font-size: var(--font-size-lg);
		font-weight: 500;
		color: var(--font-color-light);
		text-transform: capitalize;
	}
`;

export default Skills;
