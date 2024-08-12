import styled from "styled-components";
import {
	SectionWrapperInner,
	SectionWrapperOuter,
} from "../styles/SectionWrapper";
import ProjectBox from "../components/box/ProjectBox";

const skg_projects = [
	{
		id: 1,
		name: "Rolling-Rolling",
		title: "웹으로 즐기는 추억의 롤링페이퍼",
		sector: "Toy Project",
		role: "Web Frontend Developer",
		period: "2023.03 - 2023.06",
		descriptions: [
			"웹으로 롤링페이퍼를 만들고 지인들과 공유할 수 있는 웹 서비스",
			"개인 프로젝트로 제작한 서비스로 1인 기획, 개발, 디자인, 배포, 운영중",
		],
		works: [
			"서비스 기획",
			"전체 기능 개발",
			"Google Firebase를 이용해 서버, 데이터베이스 연결",
			"Redux를 이용해 상태 관리",
		],
		skills: ["ReactJS", "JavaScript", "Redux", "Firebase", "HTML/CSS"],
		links: [
			"https://github.com/Seokyung/Rolling-Rolling",
			"https://rolling-rolling.web.app/",
		],
	},
	{
		id: 2,
		name: "IM",
		title: "주변인들의 평가와 피드백으로 만들어나가는 나만의 온라인 명함",
		sector: "Team Project",
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
	{
		id: 3,
		name: "printf_HelloGachon",
		title: "가천대학교 컴퓨터공학과 새내기를 위한 RPG형 가이드 게임",
		sector: "Team Project",
		role: "Web Frontend Developer",
		period: "2021.03 - 2021.06",
		descriptions: [
			"가천대학교 컴퓨터공학과 새내기가 학교 생활의 전반적인 부분을 게임으로 체험해 볼 수 있는 가이드 게임",
			"모바일, PC버전 모두 지원하는 Top-Down RPG 형식의 픽셀 게임",
		],
		works: [
			"서비스 기획, 개발 방향 설정, 스토리 구성",
			"캐릭터 능력치 로직 개발",
			"수강신청 미니게임 구현",
			"Asset 제작 (교내 맵, 배경, 구조물, 아이콘 등)",
		],
		skills: ["Unity", "C#"],
		links: ["https://github.com/HelloGachon/HelloGachon"],
	},
];

function Project() {
	return (
		<SectionWrapperOuter id="projects">
			<SectionWrapperInner>
				<Wrapper>
					<h1>Projects</h1>
					<div>
						{skg_projects.map((item) => {
							return <ProjectBox key={item.id} project={item} />;
						})}
					</div>
				</Wrapper>
			</SectionWrapperInner>
		</SectionWrapperOuter>
	);
}

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
	> div {
		display: flex;
		flex-direction: column;
		gap: 4rem;
	}
`;

export default Project;
