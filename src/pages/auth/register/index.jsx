import { LangMenu, ThemeSwitch } from "../../../components/OptionsMenu.jsx";

export default function RegisterPage() {
	return (
		<div className="w-screen h-screen bg-gray-50 px-8 bg-gradient-to-br from-pink-200 to-purple-200">
			<div className="flex flex-col items-start">
				<div className="h-12 flex justify-end pr-10 z-[1000] text-gray-800 top-0 w-full">
					<div className="w-max flex justify-around items-end space-x-4">
						<LangMenu />
						<ThemeSwitch />
					</div>
				</div>
				<div className="w-full flex justify-around items-center">
					<div className="w-5/12"></div>
					<div className="w-5/12">
						<div className="w-2/3 p-4 bg-white shadow-lg rounded-md">
							<h2 className="text-lg mb-2">Register</h2>
							<form action="">
								<div>
									<label htmlFor="name">Name</label>
									<input type="text" name="name" required id="" />
								</div>
								<div>
									<label htmlFor="email">Email</label>
									<input type="email" name="email" required id="" />
								</div>
								<div>
									<label htmlFor="password">Password</label>
									<input type="password" name="password" required id="" />
								</div>
								<button type="submit">Create Account</button>
							</form>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
}
