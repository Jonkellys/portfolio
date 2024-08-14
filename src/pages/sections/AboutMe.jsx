import { FormattedMessage } from "react-intl";
import { motion } from "framer-motion";
import cartoon from "../../images/image-cartoon.png";
import Image from "next/image";

export default function AboutMe({ translate }) {
	return (
		<motion.div
			style={{ translateY: translate }}
			className="w-full h-auto p-8 mt-8 transform"
			id="who-am-i"
		>
			<h2 className="text-3xl mb-8 ml-8">
				<FormattedMessage id="header.who-am-i" />
			</h2>
			<div className="w-full flex justify-around flex-wrap space-3 [&_div]:mb-6">
				<div className="w-2/5 p-6 rounded-md transform rotate-[-2.5deg] flex justify-center items-center bg-blue-100">
					<Image
						src={cartoon}
						alt="Cartoon Me"
						className="size-3/4 transform rotate-[2.5deg]"
					/>
				</div>
				<div className="w-2/5">
					<ol className="w-full p-4 list-disc">
						<li>
							<strong>Jonkellys Maestre</strong>
						</li>
						<li>23 años</li>
						<li>Back-end Developer</li>
						<li>Venezuela</li>
					</ol>
				</div>
				{/* <div className="w-2/5">
					<h3 className="text-xl mb-2">Education</h3>
					<ul className="ml-4">
						<li>
							<strong className="mr-3">2018 - 2024</strong>
							<p>Systems Engineering</p>
							<i>
								Universidad Nacional Experimental de la Fuerza Armada Nacional
								Bolivariana (UNEFA)
							</i>
						</li>
					</ul>
				</div>
				<div className="w-2/5">
					<h3 className="text-xl mb-2">Languages</h3>
					<ol className="ml-4">
						<li className="flex items-center">
							<p>English</p>
							<div className="w-40 h-4 rounded-full p-2 bg-white flex border border-gray-200">
								<div className="bg-purple-300 rounded-full h-5/6 self-center text-center w-[20%]">
									20%
								</div>
							</div>
						</li>
					</ol>
				</div>
				<div className="w-2/5">
					<h3 className="text-xl mb-2">Interests</h3>
				</div> */}
			</div>
		</motion.div>
	);
}

function ProgressBar({ percent }) {
	return (
		<div className="w-40 h-4 rounded-full p-2 bg-white flex border border-gray-200">
			<div
				className={`bg-purple-300 rounded-full h-5/6 self-center text-center w-8`}
			>
				{percent}
			</div>
		</div>
	);
}
