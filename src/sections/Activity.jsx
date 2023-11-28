import styled from "styled-components";
import { SectionWrapper } from "../styles/SectionWrapper";

const skg_activities = [
	{
		id: 1,
		sector: "award",
		title: "가천대학교 컴퓨터공학과 주최 아이디어톤 우수상 수상 (2018.12)",
	},
	{
		id: 2,
		sector: "award",
		title: "제 1회 가천대학교 와글와글 해커톤 우수상 수상 (2023.08)",
	},
	{
		id: 3,
		sector: "certificate",
		title: "정보처리산업기사 자격증 취득 (2020.12)",
	},
	{
		id: 4,
		sector: "certificate",
		title: "TOEIC - 875 (2022.10.30)",
	},
	{
		id: 5,
		sector: "certificate",
		title: "정보처리기사 자격증 취득 (2023.09)",
	},
	{
		id: 6,
		sector: "etc",
		title: "디랩 코딩학원 Robotics 교사 재직 (2020.04 - 2020.08)",
	},
];

function Activity() {
	const renderActivities = (sector) => {
		return skg_activities
			.filter((el) => el.sector === sector)
			.map((item) => {
				return (
					<ActivityBox key={item.id}>
						<span>{item.title}</span>
					</ActivityBox>
				);
			});
	};

	return (
		<SectionWrapper $background="#596275">
			<h1>Activity</h1>
			<Wrapper>
				<h2>Awards</h2>
				{renderActivities("award")}
			</Wrapper>
			<Wrapper>
				<h2>Certificates</h2>
				{renderActivities("certificate")}
			</Wrapper>
			<Wrapper>
				<h2>ETC</h2>
				{renderActivities("etc")}
			</Wrapper>
		</SectionWrapper>
	);
}

const Wrapper = styled.div`
	margin: 1rem 0;
`;

const ActivityBox = styled.div`
	padding: 0.5rem;
	background-color: #fff;
	h3 {
		text-transform: capitalize;
	}
`;

export default Activity;
