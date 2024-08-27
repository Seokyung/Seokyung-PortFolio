import styled from "styled-components";
import {
	SectionWrapperInner,
	SectionWrapperOuter,
} from "../components/section/SectionWrapper";
import { skg_intro_texts } from "../assets/skg_infos";

function Introduction() {
	const renderIntroTexts = () => {
		return skg_intro_texts.map((item, idx) => {
			return idx % 2 === 0 ? (
				<TalkBubbleLeft key={item.id}>
					<span>{item.text}</span>
				</TalkBubbleLeft>
			) : (
				<TalkBubbleRight key={item.id}>
					<span>{item.text}</span>
				</TalkBubbleRight>
			);
		});
	};
	return (
		<SectionWrapperOuter $background="var(--color-light-blue)">
			<SectionWrapperInner>
				<Wrapper>{renderIntroTexts()}</Wrapper>
			</SectionWrapperInner>
		</SectionWrapperOuter>
	);
}

const Wrapper = styled.ul`
	display: flex;
	flex-direction: column;
	gap: 2.5rem;
	margin: 2rem 0;
	padding: 0 1rem;
	width: 100%;
	@media all and (max-width: 768px) {
		gap: 2rem;
		margin: 1rem 0;
		padding: 0 0.5rem;
	}
`;

const TalkBubble = styled.li`
	z-index: 0;
	position: relative;
	display: flex;
	justify-content: center;
	align-items: center;
	padding: 1rem;
	background-color: var(--bg-color-light);
	border-radius: 10px;
	@media all and (max-width: 768px) {
		max-width: 92%;
	}
	&::after {
		content: "";
		position: absolute;
		top: 50%;
		transform: translateY(-50%);
		border-top: 10px solid transparent;
		border-bottom: 10px solid transparent;
	}
	&:hover {
		box-shadow: 0 0 20px 2px rgba(47, 19, 5, 0.3);
	}
	span {
		font-family: "NPSfontRegular";
		color: var(--font-color-secondary);
		line-height: 1.25rem;
	}
`;

const TalkBubbleLeft = styled(TalkBubble)`
	align-self: flex-start;
	&::after {
		left: -10px;
		border-left: 0 solid transparent;
		border-right: 12px solid var(--bg-color-light);
	}
`;

const TalkBubbleRight = styled(TalkBubble)`
	align-self: flex-end;
	&::after {
		right: -10px;
		border-left: 12px solid var(--bg-color-light);
		border-right: 0 solid transparent;
	}
`;

export default Introduction;
