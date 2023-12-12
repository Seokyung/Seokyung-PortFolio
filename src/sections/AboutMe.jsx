import styled from "styled-components";
import { SectionWrapper } from "../styles/SectionWrapper";
import { skg_info } from "../assets/skg_info";
import seokyung_logo from "../assets/img/seokyung_logo.png";

function AboutMe() {
	const renderInfos = () => {
		return skg_info.slice(2, 6).map((item) => {
			return (
				<InfoBox key={item.id}>
					<span>{item.title}</span>
					<h2>{item.content}</h2>
				</InfoBox>
			);
		});
	};

	return (
		<SectionWrapper $height="auto" $background="#111">
			<Wrapper>
				<Title>FE Developer Seokyung</Title>
				<Card>
					<Logo>
						<img src={seokyung_logo} alt="sk_logo" />
					</Logo>
					<InfoWrapper>
						<NameBox>
							<span>{skg_info[1].content}</span>
							<h1>{skg_info[0].content}</h1>
							<hr />
						</NameBox>
						{renderInfos()}
					</InfoWrapper>
				</Card>
			</Wrapper>
		</SectionWrapper>
	);
}

const Wrapper = styled.div`
	margin: 4rem 0;
`;

const Title = styled.h1`
	margin-bottom: 0.5rem;
	padding: 0.5rem;
	color: #f8f8f8;
	font-family: var(--font-family-eng-title);
	font-size: calc(2rem + 0.75vw);
	font-weight: 600;
	line-height: 2.75rem;
	text-align: right;
`;

const Card = styled.div`
	overflow: hidden;
	display: flex;
	justify-content: center;
	align-items: center;
	width: 100%;
	min-width: 750px;
	height: 100%;
	min-height: 380px;
	gap: 4rem;
	padding: 1.5rem 2rem;
	background-color: #f8f8f8;
	border-radius: 20px;
`;

const Logo = styled.div`
	overflow: hidden;
	padding: 1rem;
	background-color: #f4d6ae;
	border-radius: 50%;
	img {
		width: 100%;
		max-width: 250px;
		min-width: 120px;
	}
`;

const InfoWrapper = styled.div`
	display: flex;
	flex-direction: column;
	gap: 1.5rem;
`;

const NameBox = styled.div`
	display: flex;
	flex-direction: column;
	align-self: center;
	width: 100%;
	h1 {
		color: var(--font-color-primary);
		font-family: var(--font-family-kor-title);
		font-size: 3.5rem;
		text-align: center;
	}
	span {
		color: var(--font-color-secondary);
		font-family: var(--font-family-eng);
		font-size: 1.125rem;
		font-weight: 500;
		text-align: center;
		word-spacing: 0.5rem;
		text-transform: capitalize;
	}
	hr {
		width: 100%;
		height: 1px;
		margin-top: 1.25rem;
		background-color: #555;
		border: none;
	}
`;

const InfoBox = styled.div`
	display: flex;
	justify-content: space-between;
	gap: 1.5rem;
	h2 {
		color: var(--font-color-secondary);
		font-size: 1.25rem;
		font-weight: 700;
	}
	span {
		color: var(--font-color-primary);
		font-family: var(--font-family-eng);
		font-size: 1.125rem;
		font-weight: 500;
		line-height: normal;
		text-transform: capitalize;
	}
`;

export default AboutMe;
