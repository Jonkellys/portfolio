import Image from "next/image";
import { Menu } from "../sections/Header";
import computer from "../../images/computer.png";

export default function Project() {
	return (
		<div className="w-screen h-screen bg-gray-50 dark:bg-gray-800 text-gray-800 dark:text-gray-50 flex flex-col">
			<Menu />
			<div className="w-full h-full mt-12 p-8 flex flex-row justify-around ">
				<div className="w-3/12 h-4/6 bg-white dark:bg-gray-600 shadow-md p-8 self-center space-y-4 rounded-md flex flex-col justify-start">
					<Image
						src={computer}
						className="size-16 self-center"
						alt="project icon"
					/>
					<h3 className="text-lg text-center mb-4 self-center">Project Name</h3>
					<p>
						<strong>Status: </strong> Finished
					</p>
					<p>
						<strong>Build by: </strong> Me
					</p>
					<p>
						<strong>Time used: </strong> 3 Months Aprox.
					</p>
					<a
						className="py-2 px-3 self-center bg-white shadow rounded w-max mt-4 dark:bg-gray-700 hover:rounded-full"
						href="http://"
						target="_blank"
						rel="noopener noreferrer"
					>
						🐱
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
							<h4 className="text-md font-semibold">Characteristics</h4>
							<ul className="ml-4">
								<li>Item 1</li>
								<li>Item 2</li>
								<li>Item 3</li>
								<li>Item 4</li>
								<li>Item 5</li>
							</ul>
						</div>
						<div className="w-1/2 h-auto m-2">
							<h4 className="text-md font-semibold">Build With</h4>
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
						<h4 className="text-md font-semibold mb-4">Screenshots</h4>
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
