import styled from "styled-components";
import {
	SectionWrapperInner,
	SectionWrapperOuter,
} from "../styles/SectionWrapper";
import { skg_intro_texts } from "../assets/skg_infos";

function Introduction() {
	const renderIntroTexts = () => {
		return skg_intro_texts.map((item, idx) => {
			return (
				<li key={item.id} className={idx % 2 === 0 ? "left" : "right"}>
					<span>{item.text}</span>
				</li>
			);
		});
	};
	return (
		<SectionWrapperOuter $background="#111">
			<SectionWrapperInner>
				<Wrapper>{renderIntroTexts()}</Wrapper>
			</SectionWrapperInner>
		</SectionWrapperOuter>
	);
}

const Wrapper = styled.ul`
	display: flex;
	flex-direction: column;
	gap: 3.5rem;
	/* margin: 2rem 0; */
	padding: 1.5rem 0.5rem;
	width: 100%;
	li {
		z-index: 0;
		position: relative;
		display: flex;
		justify-content: center;
		align-items: center;
		width: fit-content;
		min-height: 70px;
		padding: 1rem 1.25rem;
		color: #111;
		font-size: 1.25rem;
		font-weight: 700;
		line-height: 2rem;
		word-break: keep-all;
		background-color: var(--bg-color-light);
		border-radius: 15px;
		/* &::before {
			content: "";
			z-index: -1;
			position: absolute;
			width: 100%;
			height: 100%;
			background-color: #888;
			border-radius: 0 15px 15px 0;
		} */
		&.left {
			align-self: flex-start;
		}
		&.right {
			align-self: flex-end;
		}
	}
`;

export default Introduction;
