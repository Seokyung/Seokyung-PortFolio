import styled from "styled-components";
import seokyung_logo from "../assets/img/seokyung_logo.png";
import { SectionWrapper } from "../styles/SectionWrapper";

function Main() {
	return (
		<SectionWrapper>
			<Wrapper>
				<Logo>
					<img src={seokyung_logo} alt="seokyung_logo" />
				</Logo>
				<Introduction>
					<h2>안녕하세요!</h2>
					{/* <h3>Web Frontend Developer Seokyung Jee</h3> */}
					<span>
						꾸준히 성장하는 개발자
						<br />
						<span id="name">지서경</span>입니다.
					</span>
				</Introduction>
			</Wrapper>
		</SectionWrapper>
	);
}

const Wrapper = styled.div`
	display: flex;
	justify-content: center;
	align-items: center;
	gap: 3.5rem;
	width: 100%;
	height: 100%;
	padding: 2.5rem 1.5rem;
	background-color: #f8f8f8;
	border-radius: 20px;
	@media (max-width: 768px) {
		flex-direction: column;
		gap: 3rem;
	}
`;

const Logo = styled.div`
	overflow: hidden;
	padding: 1rem;
	background-color: #f4d6ae;
	border-radius: 50%;
	box-shadow: 0 0 12px 3px rgba(0, 0, 0, 0.25);
	img {
		width: 100%;
		max-width: 250px;
	}
	@media (max-width: 768px) {
		flex: none;
	}
`;

const Introduction = styled.div`
	h2,
	span {
		font-family: "Nanum Gothic", sans-serif;
	}
	h2 {
		margin-bottom: 1.25rem;
		color: #333;
		font-size: 3rem;
		font-weight: 800;
	}
	span {
		font-size: 2rem;
		font-weight: 700;
		line-height: 2.75rem;
		#name {
			margin-right: 0.25rem;
			color: var(--primary-color);
			font-size: 2.25rem;
			font-weight: 800;
		}
	}
	@media (max-width: 768px) {
		flex: none;
	}
`;

export default Main;
