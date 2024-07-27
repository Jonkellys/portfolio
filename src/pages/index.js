import Hello from "./sections/Hello";
import Header from "./sections/Header";
import OptionsMenu from "./sections/OptionsMenu";

export default function Home() {
	return (
		<div className="w-screen h-auto bg-gray-50 dark:bg-gray-800 text-gray-800 dark:text-gray-50">
			<Header />
			<div className="w-full px-8 pb-8 flex flex-col items-center">
				<OptionsMenu />
				<Hello />
			</div>
		</div>
	);
}
