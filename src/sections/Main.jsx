import styled from "styled-components";
import seokyung_logo from "../assets/img/seokyung_logo.png";
import { SectionWrapper } from "../styles/SectionWrapper";

function Main() {
	return (
		<SectionWrapper $background="#f7d794">
			<Logo>
				<img src={seokyung_logo} alt="seokyung_logo" />
				<h1>Main</h1>
			</Logo>
		</SectionWrapper>
	);
}

const Logo = styled.div`
	img {
		width: 200px;
	}
`;

export default Main;
