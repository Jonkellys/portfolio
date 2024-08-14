import {
	Menu,
	MenuButton,
	MenuItems,
	MenuItem,
	Switch,
} from "@headlessui/react";
import { useRouter } from "next/router";
import { useState, useEffect } from "react";
import { FiMoon, FiSun, FiGlobe } from "react-icons/fi";
import Link from "next/link";

export function ThemeSwitch() {
	const [dark, setDark] = useState(false);
	const changeTheme = () => {
		setDark(dark === false ? true : false);
	};
	useEffect(() => {
		if (dark === true) {
			document.querySelector("html")?.classList.add("dark");
		} else {
			document.querySelector("html")?.classList.remove("dark");
		}
	}, [dark]);

	return (
		<Switch
			onClick={changeTheme}
			className="transition-color rounded-t-lg px-1 py-3 md:p-3 text-xl border-t border-l border-r border-transparent hover:border-gray-300 dark:hover:bg-gray-800 dark:hover:text-gray-50 hover:text-gray-800 hover:bg-gray-50 hover:cursor-pointer"
		>
			{dark && <FiSun />}
			{!dark && <FiMoon />}
		</Switch>
	);
}

export function LangMenu() {
	const { locale, locales } = useRouter();

	return (
		<Menu as="div">
			<MenuButton
				as="button"
				className="rounded-t-lg flex flex-row items-center transition-color px-1 md:px-3 py-2.5 border-t border-l border-r border-transparent hover:border-gray-300 text-center dark:hover:bg-gray-800 dark:hover:text-gray-50 hover:text-gray-800 hover:bg-gray-50 hover:cursor-pointer"
			>
				<FiGlobe /> <p className="ml-1">{locale.toUpperCase()}</p>
			</MenuButton>
			<MenuItems
				as="div"
				className="w-16 mt-2 bg-white dark:bg-gray-900 z-[2000] flex flex-col border border-gray-300 space-y-1 h-auto py-2 rounded-md shadow-xl text-gray-800 dark:text-gray-50"
				anchor="bottom"
			>
				<MenuItem
					as="a"
					className="w-full text-center py-1 hover:bg-gray-200 hover:text-gray-800 hover:cursor-pointer"
				>
					{[...locales].map((loc) => {
						if (loc != locale) {
							return (
								<Link key={loc} href="/" locale={loc}>
									{loc.toUpperCase()}
								</Link>
							);
						}
					})}
				</MenuItem>
			</MenuItems>
		</Menu>
	);
}
