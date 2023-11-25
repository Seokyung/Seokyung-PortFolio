import styled from "styled-components";
import { SectionWrapper } from "../styles/SectionWrapper";
import { skg_info } from "../assets/skg_info";

function AboutMe() {
	const renderInfos = () => {
		return skg_info.map((item) => {
			return (
				<InfoBox key={item.id}>
					<h3>{item.title}</h3>
					<span>{item.content}</span>
				</InfoBox>
			);
		});
	};
	return (
		<SectionWrapper $background="#f8a5c2">
			<h1>AboutMe</h1>
			<Wrapper>{renderInfos()}</Wrapper>
		</SectionWrapper>
	);
}

const Wrapper = styled.div`
	display: grid;
	grid-template-columns: repeat(3, 1fr);
	gap: 0.5rem;
`;

const InfoBox = styled.div`
	padding: 0.5rem;
	background-color: #fff;
	h3 {
		text-transform: capitalize;
	}
`;

export default AboutMe;
