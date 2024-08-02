import { useScroll, useTransform } from "framer-motion";
import { Menu } from "./sections/Header";
import Hello from "./sections/Hello";
import AboutMe from "./sections/AboutMe";

export default function Home() {
	const { scrollYProgress } = useScroll();
	const translate = useTransform(scrollYProgress, [0, 1], [0, -100]);

	return (
		<div className="w-screen relative h-auto bg-gradient-to-br from-gray-50 to-white bg-gray-50 dark:from-gray-700 dark:to-gray-800 text-gray-800 dark:text-gray-50">
			<div className="wavy-line w-full h-auto"></div>
			<Menu />
			<Hello />
			<AboutMe />
		</div>
	);
}
