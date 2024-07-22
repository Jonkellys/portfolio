import { useEffect, useState } from "react";

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

	return (
		<div className="h-screen w-screen bg-pink-300 dark:bg-purple-300">
			<button onClick={changeTheme}>Change Theme</button>
		</div>
	);
}
