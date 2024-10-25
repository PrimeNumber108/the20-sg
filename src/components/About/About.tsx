import * as React from "react";
import { Navigation } from "../Navigation/Navigation";

;


function About() {
	return (
		<div>
			<div className="mt-16">
				<figure className="relative  transition-all ">

					<img loading={"lazy"} className="w-full h-5/6" src="/images/background/bg-about.png" alt="image description"/>

					<figcaption className="absolute px-auto flex justify-center text-lg text-white bottom-10 w-full">
						<p className="uppercase text-center w-96 md:w-[800px] text-lg md:text-3xl">Developing countries
							are behind
							developed countries hundreds of years in economics AND FINANCE And the gap is widening.</p>
					</figcaption>
				</figure>
			</div>

			<section>
				<div className="max-w-screen-xl mx-auto">
					<div className="grid grid-cols-12 gap-4">
						<div className="col-span-1"></div>
						<div className="col-span-10 border-x py-20 lg:py-28">
							<div className="grid grid-cols-10 gap-4   ">

								<div className="col-span-12 lg:col-span-6 flex items-center ">
									<p className=" text-base md:text-xl lg:text-2xl font-[400]">They lag behind at
										start, and lag further as the industry moves on. While spending, savings and
										investing are just fundamental literacy in developed countries, developing
										countries’ notion of those elements are just vaguely unclear, uncut and untrue
										nature, filled with low public/images awareness and scamy acts.</p>
								</div>
								<div className="col-span-12 lg:col-span-4 flex gap-5 justify-center lg:justify-end  ">
									<div className="">
										<img className="mb-10" src="/images/about/img-1.png" loading={"lazy"} alt=""/>
										<img src="/images/about/img-2.png" alt=""/>
									</div>
									<div className="mt-16">
										<img className="mb-10" src="/images/about/img-3.png" loading={"lazy"} alt=""/>
										<img src="/images/about/img-4.png" loading={"lazy"} alt=""/>
									</div>
								</div>

							</div>
							<div className="grid grid-cols-10 mt-28 gap-4 ">

								<div className="col-span-3 ">
									<div className="w-full h-6  bg-[#E5C493]"></div>
								</div>
								<div className="col-span-7 ">
									<p className="text-right text-base md:text-xl lg:text-2xl font-[400]">Due to such
										uncertainty,
										while
										having world-top rate of
										idle funds, much of
										these countries’
										population simply do not invest, or use an investment management service. This
										leads to
										suboptimal use of fund nationwide, and cash inflow is not where needed.</p>
								</div>

							</div>
							<div className="grid grid-cols-10 mt-8">
								<div className="col-span-12 lg:col-span-4">
									<h1 className="text-3xl lg:text-[54px] text-center lg:text-left py-5 lg:py-0 leading-none font-bold">We
										aim to change this.</h1>
								</div>
								<div className="col-span-12 lg:col-span-6">
									<img className="w-full" src="/images/about/img-5.png" alt=""/>
								</div>
							</div>
						</div>

						<div className="col-span-1"></div>
					</div>
				</div>
			</section>
			<div className="mouse md:block hidden fixed asolute bottom-0 right-28 z-50">
				<img className="mouse" src="/images/background/mouse.svg" alt=""/>
			</div>
		</div>
	);
}

export default About;