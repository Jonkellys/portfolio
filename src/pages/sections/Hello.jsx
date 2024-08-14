import Image from "next/image";
import image1 from "../../images/image1.png";
import { FormattedMessage } from "react-intl";
import { FiGithub, FiLinkedin, FiMail } from "react-icons/fi";
import { motion } from "framer-motion";

export default function Hello() {
	return (
		<motion.div
			id="hello"
			initial={{ opacity: 0 }}
			whileInView={{ opacity: 1 }}
			className="w-full z-10 h-auto relative transform p-8 mt-12 flex flex-col md:flex-row justify-center md:space-x-12 flex-wrap"
		>
			<div className="w-full mb-8 md:mb-0 xl:w-5/12 md:w-6/12 h-5/6 z-[1100] flex justify-center items-center">
				<div className="w-full xl:size-3/4 md:size-full rounded-full drop-shadow-xl flex justify-center items-center">
					<Image className="xl:ml-12 xl:mt-8" src={image1} alt="Hi, it's me" />
				</div>
			</div>
			<div className="w-full md:w-5/12 h-5/6 flex flex-col items-center justify-center self-center">
				<h1 className="text-6xl font-bold text-purple-400 dark:text-purple-300 mb-6">
					<span className="w-full flex flex-row justify-center md:justify-start">
						<FormattedMessage id="hello.hello.part-1" />!
						<motion.p
							animate={{ rotate: -25 }}
							transition={{
								repeat: 3,
								repeatType: "reverse",
								duration: 1,
								delay: 1,
							}}
						>
							👋
						</motion.p>
					</span>
					<div className="flex flex-wrap justify-around md:justify-start text-center md:text-justify">
					  <p className="mr-3 md:mr-0"><FormattedMessage id="hello.hello.part-2" /></p>
					  Jonkellys Maestre
					</div>
				</h1>
				<p className="text-3xl md:text-2xl xl:text-3xl ml-2 text-center md:text-left">
					<FormattedMessage id="hello.description" />
				</p>
			</div>
			<div className="w-full h-1/6 mt-8 flex flex-col items-center justify-center justify-self-center">
				<div className="w-8/12 md:w-2/12 flex justify-around md:text-xl text-2xl">
					<a
						target="_blank"
						className="rounded-full p-2 hover:bg-purple-400 dark:hover:text-gray-800"
						href="mailto:jonkellysmaestre@gmail.com"
					>
						<FiMail />
					</a>
					<a
						target="_blank"
						className="rounded-full p-2 hover:bg-purple-400 dark:hover:text-gray-800"
						href="https://github.com/Jonkellys/"
					>
						<FiGithub />
					</a>
					<a
						target="_blank"
						className="rounded-full p-2 hover:bg-purple-400 dark:hover:text-gray-800"
						href="https://www.linkedin.com/in/jonkellys-maestre-6311422b6/"
					>
						<FiLinkedin />
					</a>
				</div>
			</div>
		</motion.div>
	);
}
