import { FormattedMessage } from "react-intl";
import { motion } from "framer-motion";

export default function Projects() {
	return (
		<motion.div
			initial={{ opacity: 0 }}
			whileInView={{ opacity: 1 }}
			className="w-full h-[46rem] px-8 py-4 my-8 transform"
			id="projects"
		>
			<h2 className="text-3xl mb-4 ml-8">
				<FormattedMessage id="header.projects" />
			</h2>
			<p className="ml-12 my-4 w-full">Check out my projects</p>
			<div className="w-full h-[28rem] flex flex-row">
				<div className="w-1/2 h-full bg-blue-500 flex flex-col items-center">
					<div className="w-full h-max flex justify-around items-center flex-wrap space-2 px-2 py-8 bg-blue-600">
						<div className="size-40 rounded shadow bg-white p-6 flex flex-col items-center mb-8">
							<span className="text-4xl mb-6 text-center">⚡</span>
							<p className="text-md text-center">Transformers Under Control</p>
						</div>
						<div className="size-40 rounded shadow bg-white p-6 flex flex-col items-center mb-8">
							<span className="text-4xl mb-6 text-center">🗓️</span>
							<p className="text-md text-center">Attendance Tracker</p>
						</div>

						<div className="size-40 rounded shadow bg-white p-6 flex flex-col items-center mb-8">
							<span className="text-4xl mb-6 text-center">⚡</span>
							<p className="text-md text-center">Transformers Under Control</p>
						</div>
						<div className="size-40 rounded shadow bg-white p-6 flex flex-col items-center mb-8">
							<span className="text-4xl mb-6 text-center">🗓️</span>
							<p className="text-md text-center">Attendance Tracker</p>
						</div>
					</div>
				</div>
				<div className="w-1/2 flex justify-center items-center">
					<div className="size-[32rem] bg-blue-700 rounded"></div>
				</div>
			</div>
		</motion.div>
	);
}
