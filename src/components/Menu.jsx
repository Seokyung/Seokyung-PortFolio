import styled from "styled-components";
import seokyung_logo from "../assets/img/seokyung_logo.png";

function Menu() {
	const scrollToSection = (id) => {
		const section = document.querySelector(`#${id}`);
		window.scrollTo({ top: section.offsetTop - 60, behavior: "smooth" });
	};

	return (
		<Wrapper>
			<Logo href="/">
				<img src={seokyung_logo} alt="seokyung_logo" />
				<h1>Frontend Developer Seokyung</h1>
			</Logo>
			<Navigation>
				<ul>
					<li onClick={() => scrollToSection("main")}>Main</li>
					<li onClick={() => scrollToSection("about-me")}>About Me</li>
					<li onClick={() => scrollToSection("work-experiences")}>
						Work Experiences
					</li>
					<li onClick={() => scrollToSection("projects")}>Projects</li>
					<li onClick={() => scrollToSection("activities")}>Activities</li>
					<li onClick={() => scrollToSection("skills")}>Skills</li>
				</ul>
			</Navigation>
		</Wrapper>
	);
}

const Wrapper = styled.header`
	z-index: 2;
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
	font-family: var(--font-family-eng);
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
		gap: 0.75rem;
		li {
			cursor: pointer;
			color: #fff;
			font-size: 1rem;
			letter-spacing: -0.45px;
		}
	}
`;

export default Menu;
