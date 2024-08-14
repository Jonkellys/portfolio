import Image from "next/image";
import image1 from "../../images/image1.png";
import { FormattedMessage } from "react-intl";
import { motion } from "framer-motion";

export default function Hello({ translate }) {
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
				<h1 className="text-6xl font-bold text-purple-300 mb-6">
					Hello! 👋
					<br />
					I'm Jonkellys Maestre
				</h1>
				<p className="text-3xl ml-2">
					A Developer based in Venezuela looking to kickstar her career.
				</p>
			</div>
			<div className="w-full h-1/6 mt-6 flex justify-center justify-self-center">
				<div className="w-2/12 flex justify-around">
					<span>✉️</span>
					<span>🐱</span>
					<span>🏢</span>
				</div>
			</div>
		</motion.div>
	);
}
