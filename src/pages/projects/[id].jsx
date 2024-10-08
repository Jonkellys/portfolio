import Image from "next/image";
import { FormattedMessage } from "react-intl";
import Menu from "../sections/Header";
import { FiGithub } from "react-icons/fi";

export default function Project() {
	return (
		<div className="w-screen h-screen bg-gray-50 dark:bg-gray-800 text-gray-800 dark:text-gray-50 flex flex-col">
			<Menu />
			<div className="w-full h-full mt-12 p-8 flex flex-row justify-around ">
				<div className="w-3/12 h-4/6 bg-white dark:bg-gray-600 shadow-md p-8 self-center space-y-4 rounded-md flex flex-col justify-start">
					<Image
						src=""
						className="size-16 self-center"
						alt="project icon"
					/>
					<h3 className="text-lg text-center mb-4 self-center">Project Name</h3>
					<p>
						<strong>
							<FormattedMessage id="project.single.status" />
						</strong>
						Finished
					</p>
					<p>
						<strong>
							<FormattedMessage id="project.single.build.by" />
						</strong>
						Me
					</p>
					<p>
						<strong>
							<FormattedMessage id="project.single.time" />
						</strong>
						3 Months Aprox.
					</p>
					<a
						className="p-3 self-center text-xl font-bold bg-gray-300 shadow rounded w-max mt-4 dark:bg-gray-700 hover:rounded-full"
						href="http://"
						target="_blank"
						rel="noopener noreferrer"
					>
						<FiGithub />
					</a>
				</div>
				<div className="w-8/12 h-[30rem] p-4 overflow-y-scroll">
					<p>
						Lorem, ipsum dolor sit amet consectetur adipisicing elit.
						Exercitationem, perspiciatis quae nesciunt nihil asperiores neque
						corporis quos? Tempore asperiores sint ab? Est ab, aliquam saepe
						aspernatur labore consequuntur quia accusamus!
					</p>
					<div className="flex flex-row my-4">
						<div className="w-1/2 h-auto m-2">
							<h4 className="text-md font-semibold">
								<FormattedMessage id="project.single.features" />
							</h4>
							<ul className="ml-4">
								<li>Item 1</li>
								<li>Item 2</li>
								<li>Item 3</li>
								<li>Item 4</li>
								<li>Item 5</li>
							</ul>
						</div>
						<div className="w-1/2 h-auto m-2">
							<h4 className="text-md font-semibold">
								<FormattedMessage id="project.single.build.with" />
							</h4>
							<ul className="ml-4">
								<li>Item 1</li>
								<li>Item 2</li>
								<li>Item 3</li>
								<li>Item 4</li>
								<li>Item 5</li>
							</ul>
						</div>
					</div>
					<div className="w-full h-36">
						<h4 className="text-md font-semibold mb-4">
							<FormattedMessage id="project.single.screenshots" />
						</h4>
						<div className="flex flex-col justify-center space-y-4 px-4 py-2">
							<div className="w-full h-96 rounded bg-blue-600"></div>
							<div className="w-full h-96 rounded bg-blue-600"></div>
							<div className="w-full h-96 rounded bg-blue-600"></div>
							<div className="w-full h-96 rounded bg-blue-600"></div>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
}
