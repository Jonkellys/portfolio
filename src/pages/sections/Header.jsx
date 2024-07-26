import { FormattedMessage } from "react-intl";
import Link from "next/link";

export default function Header() {
	return (
		<div className="fixed top-0 w-full h-14 bg-white dark:bg-gray-900 text-gray-800 dark:text-gray-50 border-b-2 border-gray-500 flex justify-around items-center text-center">
			<Link
				className="py-1 px-4 w-1/5 border-gray-500 rounded-xl hover:bg-purple-200 hover:border-2 hover:text-gray-800"
				href="#hello"
			>
				<FormattedMessage id="header.hello" />
			</Link>
			<Link
				className="py-1 px-4 w-1/5 border-gray-500 rounded-xl hover:bg-purple-200 hover:border-2 hover:text-gray-800"
				href="#about-me"
			>
				<FormattedMessage id="header.about-me" />
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
