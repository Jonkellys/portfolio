import { useScroll, useTransform } from "framer-motion";
import { Menu } from "./sections/Header";
import Hello from "./sections/Hello";
import AboutMe from "./sections/AboutMe";
import Projects from "./sections/Projects";

export default function Home() {
	const { scrollYProgress } = useScroll();
	const translate = useTransform(scrollYProgress, [0, 1], [0, -100]);

	return (
		<div className="w-screen relative h-auto pb-8 bg-gray-50 dark:bg-gray-800 text-gray-800 dark:text-gray-50">
			<Menu />
			<Hello />
			<AboutMe />
			<Projects />
		</div>
	);
}
