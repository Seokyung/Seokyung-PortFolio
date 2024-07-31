import styled from "styled-components";
import seokyung_logo from "../assets/img/seokyung_logo.png";
import { ReactComponent as MenuIcon } from "../assets/img/menu_icon.svg";

function Navigation() {
	const scrollToSection = (id) => {
		const section = document.querySelector(`#${id}`);
		window.scrollTo({ top: section.offsetTop - 60, behavior: "smooth" });
	};

	const onMenuBtnClick = () => {
		alert("menu!");
	};

	return (
		<Header>
			<Logo href="/">
				<img src={seokyung_logo} alt="seokyung_logo" />
				<h1>프론트엔드 개발자 지서경</h1>
			</Logo>
			<Nav>
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
			</Nav>
			<MenuBtn onClick={onMenuBtnClick}>
				<MenuIcon />
			</MenuBtn>
		</Header>
	);
}

const Header = styled.header`
	z-index: 2;
	position: fixed;
	top: 0;
	left: 0;
	right: 0;
	display: flex;
	justify-content: space-between;
	align-items: center;
	width: 100%;
	height: var(--nav-height);
	padding: 0.75rem 1rem;
	background-color: var(--nav-bg-color);
	@media all and (max-width: 768px) {
		height: var(--nav-height-mobile);
		padding: 0.5rem 0.75rem;
	}
`;

const Logo = styled.a`
	display: flex;
	justify-content: center;
	align-items: center;
	gap: 0.5rem;
	@media all and (max-width: 768px) {
		gap: 0.4rem;
	}
	img {
		width: 32px;
		height: auto;
		@media all and (max-width: 768px) {
			width: 28px;
		}
	}
	h1 {
		flex: 1 1 auto;
		color: var(--font-color-light);
		font-size: 1.25rem;
		font-weight: 600;
		line-height: 1.8rem;
		letter-spacing: 0.5px;
		@media all and (max-width: 768px) {
			font-size: 1.1rem;
			line-height: 1.25rem;
		}
		@media all and (max-width: 320px) {
			display: none;
		}
	}
`;

const Nav = styled.div`
	display: block;
	@media all and (max-width: 768px) {
		display: none;
	}
	ul {
		display: flex;
		flex-direction: row;
		gap: 0.75rem;
		li {
			cursor: pointer;
			text-align: center;
			color: var(--font-color-light);
			font-family: var(--font-family-eng);
			font-size: 0.9rem;
			line-height: 1rem;
			letter-spacing: -0.45px;
		}
	}
`;

const MenuBtn = styled.button`
	display: none;
	@media all and (max-width: 768px) {
		display: flex;
		align-items: center;
		width: 26px;
		color: var(--font-color-light);
	}
`;

export default Navigation;
