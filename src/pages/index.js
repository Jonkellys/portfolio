import Menu from "./sections/Header";
import Hello from "./sections/Hello";
import AboutMe from "./sections/AboutMe";
import Projects from "./sections/Projects";

export default function Home() {
	return (
		<div className="w-screen relative h-auto pb-8 bg-gray-50 dark:bg-gray-800 text-gray-800 dark:text-gray-50">
			<Menu />
			<Hello />
			<AboutMe />
			<Projects />
		</div>
	);
}
