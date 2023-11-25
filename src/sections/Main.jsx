import styled from "styled-components";
import seokyung_logo from "../assets/img/seokyung_logo.png";
import { SectionWrapper } from "../styles/SectionWrapper";

function Main() {
	return (
		<SectionWrapper $background="#f7d794">
			<Wrapper>
				<Logo>
					<img src={seokyung_logo} alt="seokyung_logo" />
				</Logo>
				<Introduction>
					<h2>안녕하세요!</h2>
					{/* <h3>Web Frontend Developer Seokyung Jee</h3> */}
					<span>꾸준히 성장하는 개발자 지서경입니다.</span>
				</Introduction>
			</Wrapper>
		</SectionWrapper>
	);
}

const Wrapper = styled.div`
	flex: 1;
	display: flex;
	justify-content: center;
	align-items: center;
	gap: 1rem;
`;

const Logo = styled.div`
	flex: 1;
	display: flex;
	justify-content: flex-end;
	img {
		width: 200px;
	}
`;

const Introduction = styled.div`
	flex: 1;
	h2 {
		color: #fff;
		font-size: 2rem;
	}
	span {
		color: #fff;
		font-size: 1.25rem;
	}
`;

export default Main;
