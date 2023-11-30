import styled from "styled-components";
import seokyung_logo from "../assets/img/seokyung_logo.png";

function Menu() {
	return (
		<Wrapper>
			<Logo href="/">
				<img src={seokyung_logo} alt="seokyung_logo" />
				<h1>Frontend Developer Seokyung</h1>
			</Logo>
			<Navigation>
				<ul>
					<li>Main</li>
					<li>About Me</li>
					<li>Skills</li>
					<li>Projects</li>
					<li>Activities</li>
				</ul>
			</Navigation>
		</Wrapper>
	);
}

const Wrapper = styled.header`
	position: fixed;
	top: 0;
	left: 0;
	right: 0;
	display: flex;
	justify-content: space-between;
	align-items: center;
	width: 100%;
	height: 60px;
	padding: 0.75rem 1.25rem;
	background-color: #111;
`;

const Logo = styled.a`
	display: flex;
	justify-content: center;
	align-items: center;
	gap: 0.5rem;
	img {
		width: 40px;
		height: auto;
	}
	h1 {
		flex: 1 1 auto;
		color: #fff;
		font-size: 1.5rem;
		font-weight: 600;
		line-height: 1.5rem;
	}
`;

const Navigation = styled.div`
	ul {
		display: flex;
		flex-direction: row;
		gap: 0.5rem;
		li {
			color: #fff;
		}
	}
`;

export default Menu;
