import styled from "styled-components";

function Footer() {
	return (
		<Wrapper>
			<span>
				&copy;2024 Developed & Designed by{" "}
				<span className="bold">Seokyung Jee</span>
			</span>
		</Wrapper>
	);
}

const Wrapper = styled.footer`
	display: flex;
	justify-content: center;
	align-items: center;
	width: 100%;
	height: 120px;
	padding: 1rem;
	span {
		color: var(--font-color-light);
		font-family: var(--font-family-kor);
		font-size: 0.875rem;
		font-weight: 300;
		letter-spacing: -0.35px;
		word-spacing: 1px;
		line-height: 1.125rem;
		text-align: center;
		.bold {
			font-weight: 500;
		}
	}
`;

export default Footer;
