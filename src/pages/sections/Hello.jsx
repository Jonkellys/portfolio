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
			className="w-full z-10 h-auto relative transform p-8 mt-12 flex justify-center space-x-12 flex-wrap rounded-b-[70px]"
		>
			<div className="w-5/12 h-5/6 z-[1100] flex justify-center items-center">
				<div className="size-3/4 rounded-full bg-gray-300 drop-shadow-xl flex justify-center items-center">
					<Image className="ml-12 mt-8" src={image1} alt="Hi, it's me" />
				</div>
			</div>
			<div className="w-4/12 h-5/6 flex flex-col items-center justify-center self-center">
				<h1 className="text-6xl font-bold text-purple-400 dark:text-purple-300 mb-6">
					<span className="w-full flex flex-row">
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
					<FormattedMessage id="hello.hello.part-2" /> Jonkellys Maestre
				</h1>
				<p className="text-3xl ml-2">
					<FormattedMessage id="hello.description" />
				</p>
			</div>
			<div className="w-full h-1/6 mt-8 flex flex-col items-center justify-center justify-self-center">
				<div className="w-2/12 flex justify-around text-xl">
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
