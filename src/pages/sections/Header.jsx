import { FormattedMessage } from "react-intl";
import { ThemeSwitch, LangMenu } from "./OptionsMenu";
import Link from "next/link";

export function Menu() {
	return (
		<div className="menu h-12 flex py-2 justify-between z-[1000] text-gray-800 top-0 w-full pl-10 bg-gradient-to-br from-pink-200 to-purple-200 fixed">
			<div className="w-max flex justify-start">
				<Link
					href="#hello"
					className="w-max px-4 py-1 text-center font-bold text-md mx-2 rounded-full hover:text-gray-900 hover:bg-gray-50 hover:cursor-pointer hover:shadow-lg"
				>
					<FormattedMessage id="header.hello" />
				</Link>
				<Link
					href="#who-am-i"
					className="w-max px-4 py-1 text-center font-bold text-md mx-2 rounded-full hover:text-gray-900 hover:bg-gray-50 hover:cursor-pointer hover:shadow-lg"
				>
					<FormattedMessage id="header.who-am-i" />
				</Link>
				<Link
					href="#projects"
					className="w-max px-4 py-1 text-center font-bold text-md mx-2 rounded-full hover:text-gray-900 hover:bg-gray-50 hover:cursor-pointer hover:shadow-lg"
				>
					<FormattedMessage id="header.projects" />
				</Link>
			</div>
			<div className="pr-10 w-max flex justify-around items-center space-x-4">
				<LangMenu />
				<ThemeSwitch />
			</div>
		</div>
	);
}
