import Menu from "./components/Menu";
import Main from "./sections/Main";
import AboutMe from "./sections/AboutMe";
import Skills from "./sections/Skills";
import Project from "./sections/Project";
import Activity from "./sections/Activity";
import Footer from "./components/Footer";
import styled from "styled-components";

function App() {
	return (
		<AppWrapper>
			<Menu />
			<div>
				<Main />
				<AboutMe />
				<Skills />
				<Project />
				<Activity />
				<Footer />
			</div>
		</AppWrapper>
	);
}

const AppWrapper = styled.div`
	> div {
		padding-top: 10vh;
	}
`;

export default App;
