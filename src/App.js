import Menu from "./components/Menu";
import Main from "./sections/Main";
import AboutMe from "./sections/AboutMe";
import Skills from "./sections/Skills";
import Project from "./sections/Project";
import Activity from "./sections/Activity";
import Footer from "./components/Footer";

function App() {
	return (
		<div>
			<Menu />
			<Main />
			<AboutMe />
			<Skills />
			<Project />
			<Activity />
			<Footer />
		</div>
	);
}

export default App;
