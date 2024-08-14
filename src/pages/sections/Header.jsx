import { FormattedMessage } from "react-intl";
import { Tab, TabGroup, TabList, TabPanel, TabPanels } from "@headlessui/react";
import Link from "next/link";
import Hello from "./Hello";
import AboutMe from "./AboutMe";

export function Header() {
	return (
		<div className="fixed z-[1000] top-0 w-full h-14 bg-white dark:bg-gray-900 text-gray-800 dark:text-gray-50 border-b-2 border-gray-500 flex justify-around items-center text-center">
			<Link
				className="py-1 px-4 w-1/5 border-gray-500 rounded-xl hover:bg-purple-200 hover:border-2 hover:text-gray-800"
				href="#hello"
			>
				<FormattedMessage id="header.hello" />
			</Link>
			<Link
				className="py-1 px-4 w-1/5 border-gray-500 rounded-xl hover:bg-purple-200 hover:border-2 hover:text-gray-800"
				href="#who-am-i"
			>
				<FormattedMessage id="header.who-am-i" />
			</Link>
			<Link
				className="py-1 px-4 w-1/5 border-gray-500 rounded-xl hover:bg-purple-200 hover:border-2 hover:text-gray-800"
				href="#contact"
			>
				<FormattedMessage id="header.contact" />
			</Link>
			<Link
				className="py-1 px-4 w-1/5 border-gray-500 rounded-xl hover:bg-purple-200 hover:border-2 hover:text-gray-800"
				href="#projects"
			>
				<FormattedMessage id="header.projects" />
			</Link>
		</div>
	);
}

export function CircleMenu() {
	return (
		<div className="fixed z-[1000] left-full py-8 flex flex-col justify-center items-center space-y-12 w-20 h-screen">
			<div className="group/hello hover:cursor-pointer size-5 rounded-full bg-gradient-to-br from-blue-200 to-purple-500">
				<span className="group-hover/hello:opacity-100 w-max transition-opacity bg-gray-800 px-2 py-1 text-sm text-gray-100 rounded-md absolute right-16 opacity-0 mb-1">
					Home
				</span>
			</div>
			<div className="group/who hover:cursor-pointer size-5 rounded-full bg-gradient-to-br from-blue-200 to-purple-500">
				<span className="group-hover/who:opacity-100 w-max transition-opacity bg-gray-700 px-2 py-1 text-sm text-gray-100 rounded-md absolute right-16 opacity-0 mb-1">
					Who Am I
				</span>
			</div>
			<div className="group/projects hover:cursor-pointer size-5 rounded-full bg-gradient-to-br from-blue-200 to-purple-500">
				<span className="group-hover/projects:opacity-100 w-max transition-opacity bg-gray-800 px-2 py-1 text-sm text-gray-100 rounded-md absolute right-16 opacity-0 mb-1">
					Projects
				</span>
			</div>
		</div>
	);
}

export function Menu() {
	return (
		<div className="menu h-12 flex py-2 justify-start z-[1000] text-gray-600 top-0 w-full pl-10 bg-gradient-to-br from-pink-200 to-purple-200 fixed">
			<div className="w-max px-4 py-1 text-center font-bold text-md mx-2 hover:text-gray-700 hover:cursor-pointer hover:border-b-2 border-gray-700">
				Hello
			</div>
			<div className="w-max px-4 py-1 text-center font-bold text-md mx-2 hover:text-gray-700 hover:cursor-pointer hover:border-b-2 border-gray-700">
				Who Am I
			</div>
			<div className="w-max px-4 py-1 text-center font-bold text-md mx-2 hover:text-gray-700 hover:cursor-pointer hover:border-b-2 border-gray-700">
				Projects
			</div>
		</div>
	);
}
