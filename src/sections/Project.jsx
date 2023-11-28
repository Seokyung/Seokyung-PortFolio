import styled from "styled-components";
import { SectionWrapper } from "../styles/SectionWrapper";

const skg_projects = [
	{
		id: 1,
		name: "IM",
		title: "주변인들의 평가와 피드백으로 만들어나가는 나만의 온라인 명함",
		role: "Web Frontend Developer",
		period: "2023.08 - ",
		descriptions: [
			"가천대학교 제 1회 학생 주도 해커톤 대회(와글와글 해커톤)에서 우수상을 수상한 프로젝트",
			"주변인들의 피드백과 평가를 토대로 육각형 지표 그래프를 생성해 좀 더 객관적인 내 강점들을 부각시킬 수 있는 온라인 명함 제공",
		],
		works: [
			"서비스 프론트엔드 기능 개발 (명함 생성, 사용자 정보 설정, 명함 공유, 피드백 제출 등)",
			"서비스 UX/UI 구현",
			"육각형 지표 데이터 시각화",
		],
		skills: ["ReactJS", "JavaScript", "HTML/CSS"],
		links: ["https://github.com/Wacathon/frontend"],
	},
];

function Project() {
	const renderProjects = () => {
		return skg_projects.map((item) => {
			return (
				<ProjectBox key={item.id}>
					<h2>{item.name}</h2>
					<span>{item.title}</span>
					<span>{item.role}</span>
					<span>{item.period}</span>
					<ContentBox>
						<h4>Descriptions</h4>
						<ul>
							{item.descriptions.map((el, idx) => {
								return <li key={idx}>{el}</li>;
							})}
						</ul>
					</ContentBox>
					<ContentBox>
						<h4>What Did I Do</h4>
						<ul>
							{item.works.map((el, idx) => {
								return <li key={idx}>{el}</li>;
							})}
						</ul>
					</ContentBox>
					<ContentBox>
						<h4>Links</h4>
						<ul>
							{item.links.map((el, idx) => {
								return (
									<li key={idx}>
										<a href={el} target="_blank" rel="noreferrer">
											{el}
										</a>
									</li>
								);
							})}
						</ul>
					</ContentBox>
				</ProjectBox>
			);
		});
	};

	return (
		<SectionWrapper $background="#786fa6">
			<h1>Project</h1>
			<Wrapper>{renderProjects()}</Wrapper>
		</SectionWrapper>
	);
}

const Wrapper = styled.div`
	margin: 1rem 0;
`;

const ProjectBox = styled.div`
	display: flex;
	flex-direction: column;
	padding: 0.5rem;
	background-color: #fff;
	h2 {
		font-weight: 700;
	}
	> span {
		padding: 0.25rem 0;
	}
`;

const ContentBox = styled.div`
	margin: 0.25rem;
	padding: 0.25rem;
	background-color: #ddd;
	h4 {
		font-weight: 600;
	}
	ul {
		li {
			padding: 0.25rem;
		}
	}
`;

export default Project;
