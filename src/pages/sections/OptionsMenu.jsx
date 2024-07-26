import { Menu, MenuButton, MenuItems, MenuItem } from "@headlessui/react";
import { useRouter } from "next/router";
import { FormattedMessage } from "react-intl";
import { useState, useEffect } from "react";
import Link from "next/link";

export default function OptionsMenu() {
	const [theme, setTheme] = useState("light");
	const changeTheme = () => {
		setTheme(theme === "light" ? "dark" : "light");
	};
	if (theme === "dark") {
		document.querySelector("html")?.classList.add("dark");
	} else {
		document.querySelector("html")?.classList.remove("dark");
	}
	// useEffect(() => {
	// }, [theme]);

	const { locale, locales } = useRouter();

	return (
		<Menu as="div" className="fixed top-16 right-10">
			<MenuButton
				as="button"
				className="rounded-full border-2 p-2 border-gray-500 bg-white font-bold dark:bg-gray-900 text-gray-800 dark:text-gray-50"
			>
				C
			</MenuButton>
			<MenuItems
				as="div"
				className="w-48 mt-4 bg-white dark:bg-gray-900 flex flex-col space-y-1 h-auto py-4 rounded-xl border-2 border-gray-500 text-gray-800 dark:text-gray-50"
				anchor="bottom"
			>
				<MenuItem
					as="button"
					className="w-full text-center py-2 hover:bg-gray-200 hover:text-gray-800"
				>
					<button onClick={changeTheme} className="">
						{ThemeButton(theme)}
					</button>
				</MenuItem>
				<MenuItem
					as="a"
					className="w-full text-center py-2 hover:bg-gray-200 hover:text-gray-800"
				>
					{[...locales].map((loc) => {
						if (loc != locale) {
							return (
								<Link key={loc} href="/" locale={loc}>
									<FormattedMessage id="config.lang" />
								</Link>
							);
						}
					})}
				</MenuItem>
			</MenuItems>
		</Menu>
	);
}

function ThemeButton(theme) {
	if (theme === "dark") {
		return <FormattedMessage id="config.theme.dark" />;
	} else {
		return <FormattedMessage id="config.theme.light" />;
	}
}

function LenguageButton(theme) {
	if (theme === "dark") {
		return <FormattedMessage id="config.leng.dark" />;
	} else {
		return <FormattedMessage id="config.leng.light" />;
	}
}
