import { useEffect, useState, useContext } from "react";
import { useRouter } from "next/router";
import { FormattedMessage, useIntl } from "react-intl";
import Link from "next/link";

export default function Home() {
	const [theme, setTheme] = useState("light");
	const changeTheme = () => {
		setTheme(theme === "light" ? "dark" : "light");
	};
	useEffect(() => {
		if (theme === "dark") {
			document.querySelector("html")?.classList.add("dark");
		} else {
			document.querySelector("html")?.classList.remove("dark");
		}
	}, [theme]);

	const { locales } = useRouter();
	const intl = useIntl();
	
	const title = intl.formatMessage({
		id: "page.home.head.meta.description",
	});

	return (
		<div className="h-screen w-screen bg-pink-300 dark:bg-purple-300">
			<button onClick={changeTheme}>Change Theme</button>
			<br></br>
			<p>{title}</p>
			<h1><FormattedMessage id="page.home.title" /></h1>
			<p><FormattedMessage id="page.home.description" /></p>
			<br></br>
			<div>
			  {[...locales].sort().map((locale) => (
			    <Link key={locale} href="/" locale={locale}>
			      <div>{locale}</div>
			    </Link>
			  ))}
			</div>
		</div>
	);
}
