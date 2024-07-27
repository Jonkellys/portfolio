import Image from "next/image";
import image1 from "../../images/image1.png";
import { FormattedMessage } from "react-intl";

export default function Hello() {
	return (
		<div
			id="hello"
			className="w-11/12 h-6/6 p-8 mt-14 flex flex-col bg-purple-400 rounded-b-2xl"
		>
			<div className="w-full h-full flex justify-center">
				<div className="w-2/3 h-full p-12">
					<h1 className="text-6xl mb-6">
						<FormattedMessage id="hello.greet" />
						<br />
						Jonkellys Maestre
					</h1>
					<p className="text-2xl">
						<FormattedMessage id="hello.description" />
					</p>
				</div>
				<div className="w-1/3 h-full flex justify-center align-end">
					<Image src={image1} alt="Hello" className="size-3/4" />
				</div>
			</div>
			<div className="justify-self-center text-center mt-14 text-xl">
				<FormattedMessage id="hello.learn-more" />
			</div>
		</div>
	);
}
