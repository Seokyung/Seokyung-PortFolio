import styled from "styled-components";
import {
	SectionWrapperOuter,
	SectionWrapperInner,
} from "../styles/SectionWrapper";

function Main() {
	return (
		<SectionWrapperOuter id="main" $background="var(--color-light-green)">
			<SectionWrapperInner>
				<Wrapper>
					<DevIconLeft>
						<span>{"<"}</span>
					</DevIconLeft>
					<Introduction>
						<h1>안녕하세요!</h1>
						<h3>
							꾸준히 성장하는 개발자 <span id="name">지서경</span>입니다.
						</h3>
					</Introduction>
					<DevIconRight>
						<span>{"/>"}</span>
					</DevIconRight>
				</Wrapper>
			</SectionWrapperInner>
		</SectionWrapperOuter>
	);
}

const Wrapper = styled.div`
	position: relative;
	display: flex;
	justify-content: center;
	align-items: center;
	width: 100%;
	height: 100%;
	@media (max-width: 768px) {
		flex-direction: column;
		/* min-height: calc(100vh - var(--nav-height)); */
	}
`;

const DevIcon = styled.div`
	z-index: 0;
	position: absolute;
	animation-duration: 1s;
	animation-timing-function: linear;
	@media (max-width: 768px) {
		animation-duration: 0.5s;
	}
	span {
		color: #4d4c49;
		font-family: "Elice Digital Coding";
		font-size: 150px;
		font-weight: 600;
		letter-spacing: -20px;
		@media (max-width: 768px) {
			font-size: 110px;
			letter-spacing: -15px;
		}
	}
`;
const DevIconLeft = styled(DevIcon)`
	left: 10%;
	animation-name: slideLeft;
	@media (max-width: 768px) {
		top: -50%;
		transform: translateY(-5%);
	}
`;
const DevIconRight = styled(DevIcon)`
	right: 10%;
	animation-name: slideRight;
	@media (max-width: 768px) {
		bottom: -50%;
		transform: translateY(20%);
	}
`;

const Introduction = styled.div`
	z-index: 1;
	animation: appearFromBottom 1s linear;
	@media (max-width: 768px) {
		animation-duration: 0.5s;
	}
	h1,
	h3 {
		font-family: "VitroCore";
		color: var(--font-color-light);
		text-align: center;
	}
	h1 {
		margin-bottom: 0.3rem;
		font-size: 1.9rem;
		line-height: normal;
		letter-spacing: 1.5px;
	}
	h3 {
		font-size: 1.5rem;
		line-height: 2rem;
		letter-spacing: 0.25px;
		#name {
			color: var(--color-dark-orange);
			font-size: inherit;
			margin-right: 0.15rem;
		}
	}
`;

export default Main;
