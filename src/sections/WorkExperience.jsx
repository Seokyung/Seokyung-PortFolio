import styled from "styled-components";
import { SectionWrapper } from "../styles/SectionWrapper";
import ProjectBox from "../components/ProjectBox";

const skg_work_experiences = [
	{
		id: 1,
		name: "(주)하우투약",
		title: "약사를 위한 온라인 드럭 스토어, 건강기능식품 커머스 스타트업",
		sector: "(Intern)",
		role: "Frontend Developer",
		period: "2024.02 - 2024.05",
		descriptions: [],
		works: [
			"주요 서비스 및 백오피스 기능 개발 (당신의 영양제, 당영 투게더, 플루투스)",
			"백오피스 공동구매 조회/수정 기능 개발로 공동 구매 링크 생성 자동화 및 운영/마케팅 팀의 업무 효율을 향상시킴",
			"웹사이트 성능 최적화 업무를 진행하면서 폰트 최적화, 이미지 최적화, bundle 크기 줄이기 등 클라이언트단 에서의 성능 최적화 방안들을 비교/연구하여 메인 화면 첫 로드 속도를 기존 4초에서 2초대로 줄임",
			"NextJS를 이용해 회사 랜딩 페이지 개발",
		],
		skills: [],
		links: [
			"https://www.dangyoung.com/",
			"https://together.dangyoung.com/",
			"https://howtoyak.com/",
		],
	},
];

const WorkExperience = () => {
	return (
		<SectionWrapper>
			<Wrapper>
				<h1>Work Experiences</h1>
				<div>
					{skg_work_experiences.map((item) => {
						return <ProjectBox key={item.id} project={item} />;
					})}
				</div>
			</Wrapper>
		</SectionWrapper>
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
