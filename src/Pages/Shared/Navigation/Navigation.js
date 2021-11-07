import React from 'react';

import { Link } from 'react-router-dom';
const Navigation = () => {
	return (
		<div>
			<header className="bg-gradient-to-r from-green-100 via-green-300 to-blue-200 md:flex md:items-center md:justify-around p-4 pb-0 shadow-lg md:pb-4">
				<div className="flex items-center justify-between mb-4 md:mb-0">
					<h1 className="leading-none text-2xl text-grey-darkest">
						<Link
							to="/home"
							className="no-underline text-grey-darkest hover:text-black"
							to="/">
							<span className="font-bold text-red-900"> Tech </span>
							<span>Shop</span>
						</Link>
					</h1>
					<Link className="text-black hover:text-orange md:hidden" to="/">
						<i className="fa fa-2x fa-bars"></i>
					</Link>
				</div>

				{/* <form className="mb-4 w-full md:mb-0 md:w-1/4">
					<label className="hidden" for="search-form">
						Search
					</label>
					<input
						className="bg-grey-lightest border-2 focus:border-orange p-2 rounded-lg shadow-inner w-full"
						placeholder="Search"
						type="text"
					/>
					<button className="">Submit</button>
				</form> */}

				<nav>
					<ul className="list-reset md:flex md:items-center">
						<li className="md:ml-4">
							<Link
								className="block no-underline hover:underline py-2 text-grey-darkest hover:text-black md:border-none md:p-0"
								to="/">
								Products
							</Link>
						</li>
						<li className="md:ml-4">
							<Link
								className="border-t block no-underline hover:underline py-2 text-grey-darkest hover:text-black md:border-none md:p-0"
								to="/">
								About
							</Link>
						</li>
						<li className="md:ml-4">
							<Link
								className="border-t block no-underline hover:underline py-2 text-grey-darkest hover:text-black md:border-none md:p-0"
								to="/">
								Contact
							</Link>
						</li>
						<div className="flex ml-4">
							<button className="px-4  shadow-lg bg-gradient-to-r from-green-400 to-blue-500  py-2 rounded-lg hover:text-white">
								LogOut
							</button>
							<Link
								className="border-t block no-underline hover:underline py-2 text-grey-darkest hover:text-black  md:border-none md:p-0 ml-4"
								to="/">
								<button className="px-4  shadow-lg bg-gradient-to-r from-green-400 to-blue-500  py-2 rounded-lg hover:text-white">
									Login
								</button>
							</Link>
						</div>
					</ul>
				</nav>
			</header>
		</div>
	);
};

// grab everything we need
export default Navigation;
