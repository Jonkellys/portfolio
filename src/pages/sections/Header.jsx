import { FormattedMessage } from "react-intl";
import { ThemeSwitch, LangMenu } from "../../components/OptionsMenu";
import Link from "next/link";

export default function Menu() {
	return (
		<div className="h-12 flex justify-between z-[1000] text-gray-800 top-0 w-screen px-2 md:px-10 bg-gradient-to-br from-purple-300 to-purple-400 fixed">
			<div className="w-max flex justify-start items-end">
				<Link
					href="/#hello"
					className="transition-color w-max px-2 md:px-6 py-2.5 border-t border-l border-r border-transparent hover:border-gray-300 text-center font-bold text-md rounded-t-lg dark:hover:bg-gray-800 dark:hover:text-gray-50 hover:text-gray-800 hover:bg-gray-50 hover:cursor-pointer"
				>
					<FormattedMessage id="header.hello" />
				</Link>
				<Link
					href="/#who-am-i"
					className="transition-color w-max px-2 md:px-6 py-2.5 border-t border-l border-r border-transparent hover:border-gray-300 text-center font-bold text-md rounded-t-lg dark:hover:bg-gray-800 dark:hover:text-gray-50 hover:text-gray-800 hover:bg-gray-50 hover:cursor-pointer"
				>
					<FormattedMessage id="header.who-am-i" />
				</Link>
				<Link
					href="/#projects"
					className="transition-color w-max px-2 md:px-6 py-2.5 border-t border-l border-r border-transparent hover:border-gray-300 text-center font-bold text-md rounded-t-lg dark:hover:bg-gray-800 dark:hover:text-gray-50 hover:text-gray-800 hover:bg-gray-50 hover:cursor-pointer"
				>
					<FormattedMessage id="header.projects" />
				</Link>
			</div>
			<div className="w-max flex justify-around items-end space-x-2 md:space-x-4">
				<LangMenu />
				<ThemeSwitch />
			</div>
		</div>
	);
}
