// import { useEffect, useState } from "react";
// import { useRouter } from "next/router";
// import { FormattedMessage, useIntl } from "react-intl";
// import Link from "next/link";
import Hello from "./sections/Hello";
import Header from "./sections/Header";
import OptionsMenu from "./sections/OptionsMenu";

export default function Home() {
	// const { locales } = useRouter();
	// const intl = useIntl();

	// const title = intl.formatMessage({
	// 	id: "page.home.head.meta.description",
	// });

	// return (
	// 	<div className="h-screen w-screen bg-pink-300 dark:bg-purple-300">
	// 		<button onClick={changeTheme}>Change Theme</button>
	// 		<br></br>
	// 		<p>{title}</p>
	// 		<h1><FormattedMessage id="page.home.title" /></h1>
	// 		<p><FormattedMessage id="page.home.description" /></p>
	// 		<br></br>
	// 		<div>
	// 		  {[...locales].sort().map((locale) => (
	// 		    <Link key={locale} href="/" locale={locale}>
	// 		      <div>{locale}</div>
	// 		    </Link>
	// 		  ))}
	// 		</div>
	// 	</div>
	// );

	return (
		<div className="w-screen h-auto bg-gray-50 dark:bg-gray-800 text-gray-800 dark:text-gray-50">
			<Header />
			<div className="w-full p-8">
				<OptionsMenu />
				<Hello />
			</div>
		</div>
	);
}
