import styled from "styled-components";
import { SectionWrapper } from "../styles/SectionWrapper";

function Main() {
	return (
		<SectionWrapper>
			<Wrapper>
				<Introduction>
					<h2>안녕하세요!</h2>
					<span>
						꾸준히 성장하는 개발자 <span id="name">지서경</span>입니다.
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
	/* background-color: var(--bg-color-light); */
	border-radius: 20px;
	@media (max-width: 768px) {
		flex-direction: column;
		gap: 3rem;
	}
`;

const Introduction = styled.div`
	h2,
	span {
		font-family: "NPSfontRegular", sans-serif;
		text-align: center;
	}
	h2 {
		color: var(--font-color-light);
		font-size: 3rem;
		font-weight: 800;
		line-height: 4rem;
	}
	span {
		color: var(--font-color-light);
		font-size: 2rem;
		font-weight: 700;
		line-height: 3rem;
		#name {
			color: var(--font-color-primary);
			font-size: 2.25rem;
			font-weight: 800;
		}
	}
	@media (max-width: 768px) {
		flex: none;
	}
`;

export default Main;
