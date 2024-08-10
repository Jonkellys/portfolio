import { FormattedMessage } from "react-intl";
import { FiGithub } from "react-icons/fi";
import { motion } from "framer-motion";
import programming from "../../images/programming-cartoon.png";
import attendance from "../../images/projects/attendances-tracker.png";
import transformers from "../../images/projects/transformers-under-control.png";
import Image from "next/image";
import Link from "next/link";

export default function Projects() {
	return (
		<motion.div
			initial={{ opacity: 0 }}
			whileInView={{ opacity: 1 }}
			className="w-full h-auto px-8 py-4 transform"
			id="projects"
		>
			<h2 className="text-3xl ml-8">
				<FormattedMessage id="header.projects" />
			</h2>
			<p className="ml-12 my-4">
				<FormattedMessage id="projects.description" />
			</p>
			<div className="w-full h-[24rem] flex flex-row">
				<div className="w-1/2 h-full flex justify-center items-center">
					<div className="w-full h-max flex flex-row justify-around items-center flex-wrap py-4">
						<Link
							href="https://github.com/Jonkellys/transformers-under-control"
							className="size-40 rounded shadow-md bg-white hover:bg-gray-100 dark:bg-gray-600 p-6 flex flex-col items-center m-4"
						>
							<Image
								src={transformers}
								alt="Transformers"
								className="mb-3 justify-self-center size-14"
							/>
							<p className="text-md text-center">Transformers Under Control</p>
						</Link>
						<Link
							href="https://github.com/Jonkellys/attendance-tracker"
							className="size-40 rounded shadow-md bg-white hover:bg-gray-100 dark:bg-gray-600 p-6 flex flex-col items-center m-4"
						>
							<Image
								src={attendance}
								alt="Attendance"
								className="mb-3 justify-self-center size-14"
							/>
							<p className="text-md text-center">Attendance Tracker</p>
						</Link>
					</div>
				</div>
				<div className="w-1/2 flex justify-center items-center">
					<Image
						src={programming}
						alt="Programming"
						className="w-[25rem] h-auto drop-shadow-xl"
					/>
				</div>
			</div>
			<a
				className="py-2 px-4 bg-gray-800 mt-6 flex flex-row items-center shadow rounded w-max text-gray-50 dark:bg-gray-600 hover:rounded-full"
				href="http://github.com/Jonkellys/"
				target="_blank"
				rel="noopener noreferrer"
			>
				<FiGithub />
				<p className="ml-2">
					<FormattedMessage id="projects.github" />
				</p>
			</a>
		</motion.div>
	);
}
