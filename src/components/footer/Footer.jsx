import styled from "styled-components";

function Footer() {
	return (
		<Wrapper>
			<h1>&copy;Seokyung 2023</h1>
		</Wrapper>
	);
}

const Wrapper = styled.footer`
	display: flex;
	justify-content: center;
	align-items: center;
	width: 100%;
	height: 15vh;
	background-color: #111;
	h1 {
		color: #fff;
	}
`;

export default Footer;
