import Menu from "./components/Menu";
import Main from "./sections/Main";
import AboutMe from "./sections/AboutMe";
import Skills from "./sections/Skills";
import Project from "./sections/Project";
import Activity from "./sections/Activity";
import Footer from "./components/Footer";
import styled from "styled-components";
import Introduction from "./sections/Introduction";
import WorkExperience from "./sections/WorkExperience";

function App() {
	return (
		<AppWrapper>
			<Menu />
			<div>
				<Main />
				<AboutMe />
				<Introduction />
				<WorkExperience />
				<Project />
				<Activity />
				<Skills />
				<Footer />
			</div>
		</AppWrapper>
	);
}

const AppWrapper = styled.div`
	> div {
		padding-top: 60px;
	}
`;

export default App;
