import Header from "./components/header/Header";
import Main from "./sections/Main";
import AboutMe from "./sections/AboutMe";
import Skills from "./sections/Skills";
import Project from "./sections/Project";
import Activity from "./sections/Activity";
import Footer from "./components/footer/Footer";
import styled from "styled-components";
import WorkExperience from "./sections/WorkExperience";

function App() {
	return (
		<AppWrapper>
			<Header />
			<div>
				<Main />
				<AboutMe />
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
