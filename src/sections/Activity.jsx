import styled from "styled-components";
import {
	SectionWrapperInner,
	SectionWrapperOuter,
} from "../styles/SectionWrapper";

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
				return <span key={item.id}>{item.title}</span>;
			});
	};

	return (
		<SectionWrapperOuter id="activities" $height="auto" $background="#111">
			<SectionWrapperInner>
				<Wrapper>
					<h1>Activity</h1>
					<div>
						<Container>
							<h2>Awards</h2>
							<ActivityBox>{renderActivities("award")}</ActivityBox>
						</Container>
						<Container>
							<h2>Certificates</h2>
							<ActivityBox>{renderActivities("certificate")}</ActivityBox>
						</Container>
						<Container>
							<h2>ETC</h2>
							<ActivityBox>{renderActivities("etc")}</ActivityBox>
						</Container>
					</div>
				</Wrapper>
			</SectionWrapperInner>
		</SectionWrapperOuter>
	);
}

const Wrapper = styled.div`
	width: 100%;
	/* max-width: 1200px; */
	margin: 3rem 0;
	h1 {
		margin-bottom: 2rem;
		color: var(--font-color-light);
		font-size: var(--font-size-title-lg);
		font-family: var(--font-family-eng-title);
	}
	> div {
		display: flex;
		flex-direction: column;
		gap: 3rem;
	}
`;

const Container = styled.div`
	h2 {
		margin-bottom: 0.75rem;
		padding-left: 0.25rem;
		color: #999;
		font-size: var(--font-size-lg);
		font-family: var(--font-family-eng);
		font-weight: 500;
	}
`;

const ActivityBox = styled.div`
	display: flex;
	flex-direction: column;
	gap: 0.75rem;
	padding: 1rem 1.5rem;
	background-color: #fff;
	border-radius: 10px;
	span {
		font-size: var(--font-size-md);
		line-height: 1.5rem;
	}
`;

export default Activity;
