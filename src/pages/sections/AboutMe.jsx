import { FormattedMessage } from "react-intl";
import { motion } from "framer-motion";

export default function AboutMe() {
	return (
		<motion.div
			initial={{ opacity: 0 }}
			whileInView={{ opacity: 1 }}
			className="w-full h-auto px-8 py-4 mt-8 transform"
			id="who-am-i"
		>
			<h2 className="text-3xl mb-4 ml-8">
				<FormattedMessage id="header.who-am-i" />
			</h2>
			<div className="w-full flex justify-center flex-col md:flex-row md:justify-around flex-wrap space-3">
				<div className="w-full md:w-1/2 h-auto p-4 text-lg">
					<div className="flex flex-row flex-wrap pl-8 md:pl-12 [&_span]:mx-1 [&_span]:text-purple-500">
						<span>
							<FormattedMessage id="about.intro.part-1" />
						</span>
						<p>
							<FormattedMessage id="about.intro.part-2" />
						</p>
						<span>
							<FormattedMessage id="about.intro.part-3" />
						</span>
						<p>
							<FormattedMessage id="about.intro.part-4" />
						</p>
						<span>100%</span>
						<p>
							<FormattedMessage id="about.intro.part-5" />
						</p>
					</div>
					<div className="ml-8 md:ml-12 mt-6 md:mt-4">
						<p>
							🎯
							<span className="font-semibold">
								<FormattedMessage id="about.goals.title" />
							</span>
						</p>
						<p className="ml-4">
							<FormattedMessage id="about.goals.one" />
							<br />
							<FormattedMessage id="about.goals.two" />
							<br />
							<FormattedMessage id="about.goals.three" />
						</p>
					</div>
				</div>
				<div className="w-full md:w-1/2 h-auto px-4 py-8 md:p-16 flex justify-center items-start">
					<InfoBox title={<FormattedMessage id="about.education.title" />}>
						<strong>
							<FormattedMessage id="about.education.career" />
						</strong>
						<p className="ml-4 text-gray-400">2018 - 2024</p>
						<p className="ml-4">
							Universidad Nacional Experimental de la Fuerza Armada Nacional
							Bolivariana (UNEFA)
						</p>
					</InfoBox>
				</div>
				<div className="w-full md:w-1/3 h-auto flex flex-col mb-8 md:mb-0 px-4 md:px-0 md:flex-row md:justify-center md:items-start">
					<InfoBox title={<FormattedMessage id="about.languages.title" />}>
						<div className="flex flex-col space-y-1 mt-1">
							<ProgressBar
								lang={<FormattedMessage id="about.languages.spanish" />}
							>
								<div className="w-5/5 rounded-full h-full bg-purple-400"></div>
							</ProgressBar>
							<ProgressBar
								lang={<FormattedMessage id="about.languages.english" />}
							>
								<div className="w-5/5 rounded-full h-full bg-purple-400"></div>
							</ProgressBar>
							<ProgressBar
								lang={<FormattedMessage id="about.languages.french" />}
							>
								<div className="w-3/5 rounded-full h-full bg-purple-400"></div>
							</ProgressBar>
							<ProgressBar
								lang={<FormattedMessage id="about.languages.portuguese" />}
							>
								<div className="w-2/5 rounded-full h-full bg-purple-400"></div>
							</ProgressBar>
						</div>
					</InfoBox>
				</div>
				<div className="w-full md:w-1/3 h-46 flex flex-col mb-8 md:mb-0 px-4 md:px-0 md:flex-row md:justify-center md:items-start">
					<InfoBox title={<FormattedMessage id="about.soft-skills.title" />}>
						<div className="size-full flex justify-around flex-wrap px-2 items-center [&_p]:m-2 [&_span]:text-purple-500 [&_span]:font-semibold">
							<p>
								<FormattedMessage id="about.soft-skills.one" />
							</p>
							<p>
								<FormattedMessage id="about.soft-skills.two" />
							</p>
							<p>
								<FormattedMessage id="about.soft-skills.three" />
							</p>
							<p>
								<FormattedMessage id="about.soft-skills.four" />
							</p>
							<p>
								<FormattedMessage id="about.soft-skills.five" />
							</p>
							<p>
								<FormattedMessage id="about.soft-skills.six" />
							</p>
						</div>
					</InfoBox>
				</div>
				<div className="w-full md:w-1/3 h-46 flex flex-col mb-8 md:mb-0 px-4 md:px-0 md:flex-row md:justify-center md:items-start">
					<InfoBox title={<FormattedMessage id="about.interests.title" />}>
						<div className="size-full flex justify-around items-center space-x-14 px-4">
							<div className="w-1/3 flex flex-col justify-center items-center text-center">
								<span className="text-4xl mb-2">📚</span>
								<p>
									<FormattedMessage id="about.interests.one" />
								</p>
							</div>
							<div className="w-1/3 flex flex-col justify-center items-center text-center">
								<span className="text-4xl mb-2">🐶</span>
								<p>
									<FormattedMessage id="about.interests.two" />
								</p>
							</div>
							<div className="w-1/3 flex flex-col justify-center items-center text-center">
								<span className="text-4xl mb-2">🎶</span>
								<p>
									<FormattedMessage id="about.interests.three" />
								</p>
							</div>
						</div>
					</InfoBox>
				</div>
				<div className="w-full h-auto my-12 p-4 rounded shadow border border-gray-800 dark:border-white flex flex-col items-center">
					<h3 className="rounded bg-purple-200 text-xl text-gray-800 px-4 py-2 w-max -mt-8 mb-4">
						<FormattedMessage id="about.hard-skills.title" />
					</h3>
					<div className="w-2/3 flex flex-row justify-around items-center text-center">
						<p>HTML</p>
						<p>CSS</p>
						<p>JavaScript</p>
						<p>PHP</p>
						<p>Python</p>
						<p>SQL</p>
						<p>Tailwind</p>
						<p>React</p>
					</div>
				</div>
			</div>
		</motion.div>
	);
}

function ProgressBar({ lang, children }) {
	return (
		<div className="w-full h-auto flex flex-row items-center">
			<h4 className="w-24">{lang}</h4>
			<div className="w-40 h-4 rounded-full p-0.5 bg-gray-200 border border-gray-800">
				{children}
			</div>
		</div>
	);
}

function InfoBox({ title, children }) {
	return (
		<div className="h-full rounded relative shadow border border-gray-800 dark:border-white px-8 pb-4 pt-10">
			<h3 className="rounded bg-purple-200 text-xl text-gray-800 px-4 py-2 w-max absolute -top-4 -left-4">
				{title}
			</h3>
			{children}
		</div>
	);
}
