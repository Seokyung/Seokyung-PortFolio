import { useState } from "react";
import SideMenu from "./SideMenu";
import styled from "styled-components";
import seokyung_logo from "../../assets/img/seokyung_logo.png";
import { ReactComponent as MenuIcon } from "../../assets/img/menu_icon.svg";

function Header() {
	const [isSideMenuOpen, setIsSideMenuOpen] = useState(false);

	const scrollToSection = (id) => {
		const section = document.querySelector(`#${id}`);
		window.scrollTo({ top: section.offsetTop - 56, behavior: "smooth" });
	};

	const openMenu = () => {
		const sideMenuOuter = document.querySelector("#side-menu-outer");
		sideMenuOuter.style.animation = "fadeInMenu 0.3s linear";

		const sideMenuInner = document.querySelector("#side-menu-inner");
		sideMenuInner.style.animation = "openMenu 0.3s linear";

		document.body.style = "overflow: hidden";

		setIsSideMenuOpen((prev) => !prev);
	};

	return (
		<>
			<HeaderWrapper>
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
				<MenuBtn onClick={openMenu}>
					<MenuIcon />
				</MenuBtn>
			</HeaderWrapper>
			<SideMenu
				isSideMenuOpen={isSideMenuOpen}
				setIsSideMenuOpen={setIsSideMenuOpen}
				scrollToSection={scrollToSection}
			/>
		</>
	);
}

const HeaderWrapper = styled.header`
	z-index: 100;
	position: fixed;
	top: 0;
	left: 0;
	right: 0;
	display: flex;
	justify-content: space-between;
	align-items: center;
	width: 100%;
	height: var(--nav-height);
	padding: 0.5rem 1rem;
	background-color: var(--nav-bg-color);
	@media all and (max-width: 768px) {
		height: var(--nav-height-mobile);
	}
`;

const Logo = styled.a`
	display: flex;
	justify-content: center;
	align-items: center;
	gap: 0.4rem;
	img {
		width: 32px;
		height: auto;
	}
	h1 {
		flex: 1 1 auto;
		color: var(--font-color-default);
		font-size: 1.125rem;
		font-weight: 600;
		line-height: 1.5rem;
		letter-spacing: 0.5px;
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
	}
	li {
		cursor: pointer;
		text-align: center;
		color: var(--font-color-default);
		font-family: var(--font-family-eng);
		font-size: 0.9rem;
		line-height: 1rem;
		letter-spacing: -0.45px;
	}
`;

const MenuBtn = styled.button`
	display: none;
	@media all and (max-width: 768px) {
		display: flex;
		align-items: center;
		color: var(--btn-color-default);
		svg {
			width: 30px;
			height: auto;
		}
	}
`;

export default Header;
