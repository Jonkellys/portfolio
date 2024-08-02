import {
	Menu,
	MenuButton,
	MenuItems,
	MenuItem,
	Switch,
} from "@headlessui/react";
import { useRouter } from "next/router";
import { FormattedMessage } from "react-intl";
import { useState, useEffect } from "react";
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
			className="group inline-flex p-1 text-center size-8 items-center rounded-full bg-white transition shadow-sm "
		>
			{dark && "☀️"}
			{!dark && "🌙"}
		</Switch>
	);
}

export function LangMenu() {
	const { locale, locales } = useRouter();

	return (
		<Menu as="div">
			<MenuButton
				as="button"
				className="rounded-full size-8 p-1 text-sm bg-white shadow-sm font-bold text-gray-800"
			>
				{locale.toUpperCase()}
			</MenuButton>
			<MenuItems
				as="div"
				className="w-16 mt-4 bg-white dark:bg-gray-900 flex flex-col border border-gray-300 space-y-1 h-auto py-2 rounded-md shadow-xl text-gray-800 dark:text-gray-50"
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
