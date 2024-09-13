import styled from "styled-components";
import { ReactComponent as CloseIcon } from "../../assets/svg/close_icon.svg";

function SideMenu({ isSideMenuOpen, setIsSideMenuOpen, scrollToSection }) {
	const onSectionClick = (id) => {
		scrollToSection(id);
		closeMenu();
	};

	const closeMenu = () => {
		const sideMenuOuter = document.querySelector("#side-menu-outer");
		sideMenuOuter.style.animation = "fadeOutMenu 0.3s linear";

		const sideMenuInner = document.querySelector("#side-menu-inner");
		sideMenuInner.style.animation = "closeMenu 0.3s linear";

		const timeout = setTimeout(() => {
			setIsSideMenuOpen(false);
			document.body.style = "overflow: auto";
		}, 290);
		return () => {
			if (timeout !== undefined) {
				clearTimeout(timeout);
			}
		};
	};

	return (
		<SideMenuOuter id="side-menu-outer" $isSideMenuOpen={isSideMenuOpen}>
			<SideMenuInner id="side-menu-inner" $isSideMenuOpen={isSideMenuOpen}>
				<SideMenuHeader>
					<h2>프론트엔드 개발자 지서경</h2>
					<button onClick={closeMenu}>
						<CloseIcon />
					</button>
				</SideMenuHeader>
				<HorizonLine />
				<Nav>
					<ul>
						<li onClick={() => onSectionClick("main")}>Main</li>
						<li onClick={() => onSectionClick("about-me")}>About Me</li>
						<li onClick={() => onSectionClick("work-experiences")}>
							Work Experiences
						</li>
						<li onClick={() => onSectionClick("projects")}>Projects</li>
						<li onClick={() => onSectionClick("activities")}>Activities</li>
						<li onClick={() => onSectionClick("skills")}>Skills</li>
					</ul>
				</Nav>
			</SideMenuInner>
		</SideMenuOuter>
	);
}

const SideMenuOuter = styled.div`
	z-index: 100;
	position: fixed;
	top: 0;
	left: 0;
	right: 0;
	display: ${(props) => (props.$isSideMenuOpen ? "block" : "none")};
	width: 100%;
	height: 100%;
	background-color: rgba(0, 0, 0, 0.5);
`;

const SideMenuInner = styled.div`
	position: fixed;
	top: 0;
	right: 0;
	right: 0;
	display: ${(props) => (props.$isSideMenuOpen ? "block" : "none")};
	width: 60%;
	height: 100%;
	padding: 1.25rem 1.5rem;
	background-color: var(--nav-bg-color);
	@media all and (max-width: 480px) {
		width: 80%;
	}
`;

const SideMenuHeader = styled.div`
	display: flex;
	justify-content: space-between;
	align-items: center;
	h2 {
		color: var(--font-color-light);
		font-size: 1.125rem;
		font-weight: 600;
		line-height: 1.25rem;
		letter-spacing: 0.15px;
	}
	button {
		display: flex;
		align-items: center;
		color: var(--font-color-light);
		svg {
			width: 30px;
			height: auto;
		}
	}
`;

const HorizonLine = styled.hr`
	width: 100%;
	height: 1px;
	background-color: rgb(248, 248, 248, 0.5);
	opacity: 0.25;
`;

const Nav = styled.div`
	margin: 1.75rem 0;
	ul {
		display: flex;
		flex-direction: column;
		gap: 1.25rem;
	}
	li {
		cursor: pointer;
		width: fit-content;
		color: var(--font-color-light);
		font-family: var(--font-family-eng);
		font-size: 0.9rem;
		line-height: 1.2rem;
		letter-spacing: -0.45px;
	}
`;

export default SideMenu;
