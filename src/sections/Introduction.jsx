import styled from "styled-components";
import { SectionWrapper } from "../styles/SectionWrapper";

const skg_intro_texts = [
	{
		id: 1,
		text: "편안하게 움직이는 반응형 웹을 좋아합니다.",
	},
	{
		id: 2,
		text: "사용자가 접근하기 쉬운 직관적인 UX/UI를 고민합니다.",
	},
	{
		id: 3,
		text: "반복적이고 이해하기 어려운 코드를 사용하기 쉽고 가독성 좋은 코드로 바꾸는 것을 좋아합니다.",
	},
	{
		id: 4,
		text: "성장하는 개발자가 되기 위해 꾸준히 공부하고 노력합니다.",
	},
	{
		id: 5,
		text: "개인 프로젝트를 진행하여 서비스 개발부터 디자인, 배포까지 해 본 경험이 있습니다.",
	},
	{
		id: 6,
		text: "길고양이 한마리 입양해 둘이서 오순도순 사는게 꿈입니다.",
	},
];

function Introduction() {
	const renderIntroTexts = () => {
		return skg_intro_texts.map((item) => {
			return (
				<li key={item.id}>
					<span>{item.text}</span>
				</li>
			);
		});
	};
	return (
		<SectionWrapper $background="#63cdda">
			<h1>Introduction</h1>
			<Wrapper>{renderIntroTexts()}</Wrapper>
		</SectionWrapper>
	);
}

const Wrapper = styled.ul`
	li {
		margin: 0.5rem 0;
	}
`;

export default Introduction;
