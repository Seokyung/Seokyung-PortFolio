import styled from "styled-components";
import { skg_intro_texts } from "../../assets/skg_infos";

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
	return <Wrapper>{renderIntroTexts()}</Wrapper>;
}

const Wrapper = styled.ul`
	display: flex;
	flex-direction: column;
	gap: 2.5rem;
	padding: 0 1rem;
	width: 100%;
	@media all and (max-width: 768px) {
		gap: 2rem;
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
		box-shadow: 0 0 15px 5px rgba(47, 19, 5, 0.4);
	}
	span {
		font-family: "RixXladywatermelonR";
		font-size: 1.375rem;
		color: #393837;
		letter-spacing: -0.85px;
		word-spacing: 2.5px;
		line-height: 1.375rem;
		@media all and (max-width: 768px) {
			font-size: 1.125rem;
		}
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
