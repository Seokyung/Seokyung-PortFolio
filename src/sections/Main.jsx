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
						{/* <h3>꾸준히 성장하는 개발자 지서경입니다.</h3> */}
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
	}
`;

const DevIcon = styled.div`
	z-index: 0;
	position: absolute;
	animation-duration: 0.8s;
	animation-timing-function: linear;
	@media (max-width: 768px) {
		animation-duration: 0.5s;
	}
	span {
		color: #4d4c49;
		font-size: 180px;
		font-family: "Elice Digital Coding";
		font-weight: 600;
		letter-spacing: -20px;
	}
`;
const DevIconLeft = styled(DevIcon)`
	left: 10%;
	/* transform: translateX(-50%); */
	animation-name: slideLeft;
`;
const DevIconRight = styled(DevIcon)`
	right: 10%;
	/* transform: translateX(50%); */
	animation-name: slideRight;
`;

const Introduction = styled.div`
	z-index: 1;
	animation: appearFromBottom 1s linear;
	h1,
	h3 {
		font-family: "VitroCore";
		color: var(--font-color-light);
		text-align: center;
	}
	h1 {
		margin-bottom: 0.45rem;
		font-size: 2.35rem;
		line-height: 2.75rem;
		letter-spacing: 1.5px;
	}
	h3 {
		font-size: 2rem;
		line-height: 2.5rem;
		letter-spacing: 0;
		#name {
			color: var(--color-dark-orange);
			font-size: inherit;
			margin-right: 0.15rem;
		}
	}
	@media (max-width: 768px) {
		flex: none;
	}
`;

export default Main;
