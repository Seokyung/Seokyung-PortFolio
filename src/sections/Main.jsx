import styled from "styled-components";
import {
	SectionWrapperOuter,
	SectionWrapperInner,
} from "../components/section/SectionWrapper";

function Main() {
	return (
		<SectionWrapperOuter
			id="main"
			$height="calc(100vh - var(--nav-height))"
			$background="var(--color-light-green)"
		>
			<SectionWrapperInner>
				<Wrapper>
					<DevIconLeft>
						<span>{"<"}</span>
					</DevIconLeft>
					<Introduction>
						<h3>안녕하세요!</h3>
						<h1>
							꾸준히 성장하는 개발자
							<br />
							<span id="name">지서경</span>
							입니다.
						</h1>
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
		margin-top: -10vh;
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
		color: #4e544e;
		font-family: var(--font-family-kor);
		font-size: 180px;
		font-weight: 700;
		letter-spacing: -2px;
		@media (max-width: 768px) {
			font-size: 150px;
		}
	}
`;
const DevIconLeft = styled(DevIcon)`
	left: 0;
	animation-name: slideLeft;
	@media (max-width: 768px) {
		top: -50%;
	}
`;
const DevIconRight = styled(DevIcon)`
	right: 0;
	animation-name: slideRight;
	@media (max-width: 768px) {
		bottom: -50%;
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
		font-family: var(--font-family-kor-title);
		color: var(--font-color-light);
		text-align: center;
	}
	h3 {
		margin-bottom: 0.5rem;
		font-size: 1.75rem;
		letter-spacing: 1px;
	}
	h1 {
		font-size: 2.25rem;
		line-height: 2.875rem;
		letter-spacing: 0.5px;
		#name {
			display: inline-block;
			color: var(--color-dark-orange);
			font-size: 2.5rem;
			text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.4);
			margin-right: 0.25rem;
		}
	}
`;

export default Main;
