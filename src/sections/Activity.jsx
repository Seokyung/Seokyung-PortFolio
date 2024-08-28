import styled from "styled-components";
import {
	SectionWrapperInner,
	SectionWrapperOuter,
} from "../components/section/SectionWrapper";
import { skg_activities } from "../assets/skg_infos";

function Activity() {
	const renderActivities = (sector) => {
		return (
			<ActivityContainer $area={sector}>
				<h4>{sector}</h4>
				<ActivityBox>
					{skg_activities
						.filter((el) => el.sector === sector)
						.map((item) => {
							return <li key={item.id}>{item.title}</li>;
						})}
				</ActivityBox>
			</ActivityContainer>
		);
	};

	return (
		<SectionWrapperOuter id="activities" $background="var(--color-light-brown)">
			<SectionWrapperInner>
				<Wrapper>
					<h1>Activity</h1>
					<ActivityWrapper>
						{renderActivities("certificates")}
						{renderActivities("awards")}
						{renderActivities("etc")}
					</ActivityWrapper>
				</Wrapper>
			</SectionWrapperInner>
		</SectionWrapperOuter>
	);
}

const Wrapper = styled.div`
	width: 100%;
	max-width: var(--max-card-width);
	margin: 2rem 0;
	h1 {
		margin: 0 0 1rem 0.5rem;
		color: var(--font-color-light);
		font-size: var(--font-size-title);
		font-family: var(--font-family-eng-title);
	}
`;

const ActivityWrapper = styled.div`
	display: grid;
	grid-template-areas:
		"certificates awards"
		"certificates etc";
	grid-template-columns: repeat(2, 1fr);
	grid-template-rows: repeat(2, 1fr);
	gap: 1.5rem 1rem;
	width: 100%;
	@media (max-width: 768px) {
		grid-template-areas:
			"certificates"
			"awards"
			"etc";
		grid-template-columns: repeat(1, 1fr);
		grid-template-rows: repeat(1, 1fr);
		gap: 1rem;
	}
`;

const ActivityContainer = styled.div`
	display: flex;
	flex-direction: column;
	grid-area: ${(props) => props.$area};
	h4 {
		margin: 0 0 0.375rem 0.25rem;
		color: var(--color-dark-brown);
		font-size: 1.375rem;
		font-family: var(--font-family-eng-card-title);
		font-weight: 500;
		text-transform: capitalize;
	}
`;

const ActivityBox = styled.ul`
	display: flex;
	flex-direction: column;
	gap: 0.25rem;
	padding: 0.75rem 1rem 0.75rem 1.5rem;
	width: 100%;
	height: 100%;
	/* max-height: 200px; */
	background-color: var(--bg-color-light);
	border-radius: 10px;
	list-style-type: "- ";
	li {
		font-size: 0.9rem;
		font-weight: 500;
		letter-spacing: -0.85px;
		word-spacing: 1px;
		line-height: 1.25rem;
	}
`;

export default Activity;
