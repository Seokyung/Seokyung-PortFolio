// icons
import js_icon from "../assets/img/javascript_icon.png";
import react_icon from "../assets/img/react_icon.png";
import redux_icon from "../assets/img/redux_icon.png";
import next_icon from "../assets/img/next_icon.png";
import html_icon from "../assets/img/html_icon.png";
import css_icon from "../assets/img/css_icon.png";
import scss_icon from "../assets/img/scss_icon.png";
import bootstrap_icon from "../assets/img/bootstrap_icon.png";
import styled_components_icon from "../assets/img/styled_components_icon.png";
import firebase_icon from "../assets/img/firebase_icon.png";
import c_icon from "../assets/img/c_icon.png";
import cplusplus_icon from "../assets/img/c++_icon.png";

// screenshots
import im1 from "../assets/img/projects/im_1.jpg";
import im2 from "../assets/img/projects/im_2.jpg";
import im3 from "../assets/img/projects/im_3.jpg";

import rolling1 from "../assets/img/projects/rolling_1.png";
import rolling2 from "../assets/img/projects/rolling_2.png";
import rolling3 from "../assets/img/projects/rolling_3.png";
import rolling4 from "../assets/img/projects/rolling_4.png";
import rolling5 from "../assets/img/projects/rolling_5.png";
import rolling6 from "../assets/img/projects/rolling_6.png";

import hellogachon1 from "../assets/img/projects/hellogachon_1.png";
import hellogachon2 from "../assets/img/projects/hellogachon_2.png";
import hellogachon3 from "../assets/img/projects/hellogachon_3.png";
import hellogachon4 from "../assets/img/projects/hellogachon_4.png";
import hellogachon5 from "../assets/img/projects/hellogachon_5.png";
import hellogachon6 from "../assets/img/projects/hellogachon_6.png";
import hellogachon7 from "../assets/img/projects/hellogachon_7.png";
import hellogachon8 from "../assets/img/projects/hellogachon_8.png";
import hellogachon9 from "../assets/img/projects/hellogachon_9.png";

export const skg_info = {
	name: "지서경",
	eng_name: "Seokyung Jee",
	birth: "2000.02.25",
	location: "경기도 용인",
	tel: "010-9016-6764",
	email: "3skjee@naver.com",
	education: "가천대학교 컴퓨터공학과 졸업 (2023.02)",
	github: "https://github.com/Seokyung",
	blog: "https://catrulestheworld.tistory.com",
};

export const skg_intro_texts = [
	{
		id: 1,
		text: "반복적이고 이해하기 어려운 코드를 사용하기 쉽고 가독성 좋은 코드로 바꾸는 것을 좋아합니다.",
	},
	{
		id: 2,
		text: "편안하게 움직이는 반응형 웹을 좋아합니다.",
	},
	{
		id: 3,
		text: "사용자가 접근하기 쉬운 직관적인 UX/UI를 고민합니다.",
	},
	{
		id: 4,
		text: "개인 프로젝트를 진행하여 서비스 개발부터 디자인, 배포까지 해 본 경험이 있습니다.",
	},
	{
		id: 5,
		text: "성장하는 개발자가 되기 위해 꾸준히 공부하고 노력합니다.",
	},
	// {
	// 	id: 6,
	// 	text: "길고양이 한마리 입양해 둘이서 오순도순 사는게 꿈입니다.",
	// },
];

export const skg_work_experiences = [
	{
		id: 1,
		companyName: "(주)하우투약",
		companyInfo: "건강기능식품 커머스 스타트업",
		sector: "Intern",
		role: "Frontend Developer",
		period: "2024.02 - 2024.05",
		descriptions: [],
		works: [
			"주요 서비스 및 백오피스 기능 개발 (당신의 영양제, 당영 투게더, 플루투스)",
			"백오피스 공동구매 조회/수정 기능 개발로 공동 구매 링크 생성 자동화 및 운영/마케팅팀의 업무 효율이 향상됨",
			"웹사이트 성능 최적화 업무를 진행하면서 폰트 최적화, 이미지 최적화, bundle 크기 줄이기 등 클라이언트 단에서의 성능 최적화 방안들을 비교/연구하여 메인 화면 첫 로드 속도를 기존 4초에서 2초대로 줄임",
			"NextJS를 이용해 회사 랜딩 페이지 개발",
		],
		skills: [],
		links: [
			{
				siteName: "당영몰",
				url: "https://www.dangyoung.com/",
			},
			{
				siteName: "당영투게더",
				url: "https://together.dangyoung.com/",
			},
			{
				siteName: "하우투약",
				url: "https://howtoyak.com/",
			},
		],
	},
];

export const skg_projects = [
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
		github: "https://github.com/Seokyung/Rolling-Rolling",
		url: "https://rolling-rolling.web.app/",
		imgs: [
			{ src: rolling1, alt: "rolling1" },
			{ src: rolling2, alt: "rolling2" },
			{ src: rolling3, alt: "rolling3" },
			{ src: rolling4, alt: "rolling4" },
			{ src: rolling5, alt: "rolling5" },
			{ src: rolling6, alt: "rolling6" },
		],
	},
	{
		id: 2,
		name: "IM",
		title: "주변인들의 평가와 피드백으로 만들어나가는 나만의 온라인 명함",
		sector: "Team Project",
		role: "Web Frontend Developer",
		period: "2023.08",
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
		github: "https://github.com/Wacathon/frontend",
		imgs: [
			{ src: im1, alt: "im1" },
			{ src: im2, alt: "im2" },
			{ src: im3, alt: "im3" },
		],
	},
	{
		id: 3,
		name: "printf_ HelloGachon",
		title: "가천대학교 컴퓨터공학과 새내기를 위한 RPG형 가이드 게임",
		sector: "Team Project",
		role: "Game Client Developer",
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
		github: "https://github.com/HelloGachon/HelloGachon",
		imgs: [
			{ src: hellogachon1, alt: "hellogachon1" },
			{ src: hellogachon2, alt: "hellogachon2" },
			{ src: hellogachon3, alt: "hellogachon3" },
			{ src: hellogachon4, alt: "hellogachon4" },
			{ src: hellogachon5, alt: "hellogachon5" },
			{ src: hellogachon6, alt: "hellogachon6" },
			{ src: hellogachon7, alt: "hellogachon7" },
			{ src: hellogachon8, alt: "hellogachon8" },
			{ src: hellogachon9, alt: "hellogachon9" },
		],
	},
];

export const skg_activities = [
	{
		id: 1,
		sector: "certificates",
		title: "정보처리산업기사 자격증 취득 (2020.12)",
	},
	{
		id: 2,
		sector: "certificates",
		title: "TOEIC 875점 취득 (2022.10.30)",
	},
	{
		id: 3,
		sector: "certificates",
		title: "정보처리기사 자격증 취득 (2023.09)",
	},
	{
		id: 4,
		sector: "awards",
		title: "가천대학교 컴퓨터공학과 주최 아이디어톤 우수상 수상 (2018.12)",
	},
	{
		id: 5,
		sector: "awards",
		title: "제 1회 가천대학교 와글와글 해커톤 우수상 수상 (2023.08)",
	},
	{
		id: 6,
		sector: "etc",
		title: "디랩 코딩학원 Robotics 교사 재직 (2020.04 - 2020.08)",
	},
];

export const skg_skills = [
	{
		sector: "frontend",
		skillName: "ReactJS",
		icon: react_icon,
	},
	{
		sector: "frontend",
		skillName: "Redux",
		icon: redux_icon,
	},
	{
		sector: "frontend",
		skillName: "NextJS",
		icon: next_icon,
	},
	{
		sector: "frontend",
		skillName: "JavaScript",
		icon: js_icon,
	},
	{
		sector: "frontend",
		skillName: "HTML",
		icon: html_icon,
	},
	{
		sector: "frontend",
		skillName: "CSS",
		icon: css_icon,
	},
	{
		sector: "frontend",
		skillName: "SCSS",
		icon: scss_icon,
	},
	{
		sector: "frontend",
		skillName: "Bootstrap",
		icon: bootstrap_icon,
	},
	{
		sector: "frontend",
		skillName: "styled\ncomponents",
		icon: styled_components_icon,
	},
	{
		sector: "backend",
		skillName: "Firebase",
		icon: firebase_icon,
	},
	{
		sector: "programming",
		skillName: "C",
		icon: c_icon,
	},
	{
		sector: "programming",
		skillName: "C++",
		icon: cplusplus_icon,
	},
];
