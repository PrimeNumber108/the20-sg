import * as React from "react";
import { Navigation } from "../Navigation/Navigation";

export default function Career() {
	return (
		<div className="bg-black flex flex-col justify-center  ">
			<div className="relative h-screen flex items-center overflow-hidden">

				<video autoPlay loop muted className="absolute z-10 w-full h-full object-cover">
					<source src="/videos/video-carrer.mp4" type="video/mp4"/>
					Your browser does not support the video tag.
				</video>


				<div className="absolute inset-0 bg-black opacity-50 z-20"></div>


				<div className="relative z-30 w-full max-w-screen-xl mx-auto p-5 text-white">
					<div className="grid grid-cols-12">
						<div className="col-span-0 md:col-span-1"></div>
						<div className="col-span-12 md:col-span-10">
							<h1 className="text-[32px] leading-tight mb-8">Current Openings</h1>
							<div className="relative overflow-x-auto shadow-md sm:rounded-lg">
								<table className="w-full text-sm text-left text-white">
									<tbody>
									<tr>
										<td className="pr-4 md:pr-6  py-4">Financial Engineer</td>
										<td className="px-6 py-4">Windsor, Canada</td>
										<td className="px-6 py-4">Full Time</td>
										<td className="px-6 py-4">
											<a  href="mailto:tqh@the20.sg" type="button"
													className="text-black mt-5   bg-[#e5c493]  focus:ring-4 focus:outline-none
                                    font-medium rounded-lg text-sm px-4 py-2 text-center dark:bg-blue-600 ">Apply
											</a>
										</td>
									</tr>
									<tr>
										<td className="pr-4 md:pr-6 py-4">Crypto and Blockchain Analyst</td>
										<td className="px-6 py-4">Kingsford Waterbay, Singapore</td>
										<td className="px-6 py-4">Full Time</td>
										<td className="px-6 py-4">
											<a  href="mailto:tqh@the20.sg" type="button"
													className="text-black mt-5   bg-[#e5c493]  focus:ring-4 focus:outline-none
                                        font-medium rounded-lg text-sm px-4 py-2 text-center dark:bg-blue-600 ">Apply
											</a>
										</td>
									</tr>
									<tr className="">
										<td className="pr-4 md:pr-6 py-4 ">
											Business Development
										</td>
										<td className="px-6 py-4">
											Kingsford Waterbay, Singapore
										</td>
										<td className="px-6 py-4">
											Full Time
										</td>
										<td className="px-6 py-4">
											<a href="mailto:tqh@the20.sg"
													className="text-black mt-5   bg-[#e5c493]  focus:ring-4 focus:outline-none
                                        font-medium rounded-lg text-sm px-4 py-2 text-center dark:bg-blue-600 ">Apply
											</a>
										</td>

									</tr>

									<tr className="">
										<td className="pr-4 md:pr-6 py-4 ">
											Full-stack Developer
										</td>
										<td className="px-6 py-4">
											Kingsford Waterbay, Singapore
										</td>
										<td className="px-6 py-4">
											Full Time
										</td>
										<td className="px-6 py-4">
											<a  href="mailto:tqh@the20.sg" type="button"
													className="text-black mt-5   bg-[#e5c493]  focus:ring-4 focus:outline-none
                                        font-medium rounded-lg text-sm px-4 py-2 text-center dark:bg-blue-600 ">Apply
											</a>
										</td>

									</tr>
									<tr className="">
										<td className="pr-4 md:pr-6 py-4 ">
											Front-end Developer
										</td>
										<td className="px-6 py-4">
											Kingsford Waterbay, Singapore
										</td>
										<td className="px-6 py-4">
											Full Time
										</td>
										<td className="px-6 py-4">
											<a  href="mailto:tqh@the20.sg" type="button"
													className="text-black mt-5   bg-[#e5c493]  focus:ring-4 focus:outline-none
                                        font-medium rounded-lg text-sm px-4 py-2 text-center dark:bg-blue-600 ">Apply
											</a>
										</td>

									</tr>

									</tbody>
								</table>
							</div>
							<p className="mt-10">Email us at hr@the20.sg for inquiries</p>
						</div>
						<div className="col-span-0 md:col-span-1"></div>
					</div>
				</div>
			</div>

		</div>
	);
}

