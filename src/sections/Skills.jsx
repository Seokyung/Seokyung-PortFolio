import styled from "styled-components";
import { SectionWrapper } from "../styles/SectionWrapper";

const skg_skills = [
	{
		id: 1,
		sector: "frontend",
		skillName: "JavaScript",
	},
	{
		id: 2,
		sector: "frontend",
		skillName: "ReactJS",
	},
	{
		id: 3,
		sector: "frontend",
		skillName: "HTML",
	},
	{
		id: 4,
		sector: "frontend",
		skillName: "CSS",
	},
	{
		id: 5,
		sector: "frontend",
		skillName: "SCSS",
	},
	{
		id: 6,
		sector: "backend",
		skillName: "Firebase",
	},
];

function Skills() {
	const renderSkills = (sector) => {
		return skg_skills
			.filter((el) => el.sector === sector)
			.map((item) => {
				return (
					<SkillBox key={item.id}>
						<span>{item.skillName}</span>
					</SkillBox>
				);
			});
	};

	return (
		<SectionWrapper $background="#f3a683">
			<h1>Skills</h1>
			<Wrapper>
				<h2>Frontend</h2>
				{renderSkills("frontend")}
			</Wrapper>
			<Wrapper>
				<h2>Backend</h2>
				{renderSkills("backend")}
			</Wrapper>
		</SectionWrapper>
	);
}

const Wrapper = styled.div`
	margin: 1rem 0;
`;

const SkillBox = styled.div`
	padding: 0.5rem;
	background-color: #fff;
	h3 {
		text-transform: capitalize;
	}
`;

export default Skills;
