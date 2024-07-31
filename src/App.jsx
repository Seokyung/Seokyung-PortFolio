import Navigation from "./components/Navigation";
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
			<Navigation />
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

const AppWrapper = styled.div``;

export default App;
