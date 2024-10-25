import * as React from "react";

export default function Contact() {
	return (
		<div className="max-w-screen-xl mx-auto grow mt-28 my-14">
			<div className="grid grid-cols-12">
				<div className="col-span-1 lg:col-span-3"></div>
				<div className="col-span-10 lg:col-span-6">
					<h1 className="my-5 text-[32px] leading-none">Contact</h1>
					<div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
						<div className="">
							<div>
								<label htmlFor="fullname"
									   className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Full
									name
									*</label>
								<input type="text" id="fullname"
									   className="bg-gray-50 border border-gray-300 text-gray-900 text-sm  rounded focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
									   placeholder="Your name" required/>
							</div>
							<div className="mt-2">
								<label htmlFor="email"
									   className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Email
									*</label>
								<input type="email" id="email"
									   className="bg-gray-50 border border-gray-300 text-gray-900 text-sm  rounded focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
									   placeholder="Your email" required/>
							</div>
							<div className="mt-3">
								<label htmlFor="phone"
									   className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Phone
									number</label>
								<input type="tel" id="phone"
									   className="bg-gray-50 border border-gray-300 text-gray-900 text-sm  rounded focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
									   placeholder="Your phone number" pattern="[0-9]{3}-[0-9]{2}-[0-9]{3}" required/>
							</div>
						</div>
						<div className="">
							<div className="">
								<label htmlFor="message"
									   className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
									Message</label>
								<textarea id="message" rows={5}
										  className="block p-2.5 w-full text-sm text-gray-900 bg-gray-50  rounded border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
										  placeholder="Message..."></textarea>
							</div>

							<div className="g-recaptcha mt-2 w-full" data-sitekey="iqeqwdkk">
							</div>

						</div>
					</div>
					<button type="button" className="text-black mt-5 w-full  bg-[#e5c493] ring-[#e5c493]  focus:ring-4 focus:outline-none
                            font-medium rounded text-sm px-4 py-2 text-center dark:bg-blue-600 ">Submit
					</button>

					<p className="mt-20">Or send your inquiries to tqh@the20.sg</p>
					<div
						className="text-black text-2xl font-medium leading-8 tracking-[2.4px] uppercase self-center mt-12 max-md:max-w-full max-md:mt-8">
						For Market Making Service
					</div>
					<p className="justify-center text-black text-md font-medium leading-8 self-center mt-5 max-md:mt-2 max-[600px]:text-sm">
						Are you a Project or an Exchange?
					</p>
					<div className="w-full  flex justify-center">
						<iframe
							className="w-[480px] h-[480px] max-sm:w-[350px] max-sm:h-[500px] mt-10"
							src="https://docs.google.com/forms/d/e/1FAIpQLSd3lgtbeilSaE4XozpyJ-DMhdCvf0asYKMdK9b8Dtw4Vv6zdg/viewform"
							allowFullScreen
						></iframe>
					</div>
				</div>
				<div className="col-span-1 lg:col-span-3"></div>
			</div>

		</div>
		// <div className="bg-white flex flex-col">
		//   <div className="text-black text-2xl font-medium leading-8 tracking-[2.4px] uppercase self-center mt-10 max-md:max-w-full max-md:mt-8">
		//     Contact
		//   </div>
		//   <div className="self-center min-[600px]:w-[634px] max-w-full mt-8">
		//     <div className="gap-5 flex max-md:flex-col max-md:items-stretch max-md:gap-0">
		//       <div className="flex flex-col items-stretch w-6/12 max-[600px]:w-12/12 max-md:w-full max-md:ml-0">
		//         <span className="items-stretch flex grow flex-col px-5 max-[600px]:p-0 max-md:mt-5">
		//           <div className="text-zinc-950 text-lg leading-7">Full Name *</div>
		//           <input
		//             type="text"
		//             className="text-neutral-400 text-lg leading-7 whitespace-nowrap rounded border justify-center mt-1 pl-2.5 pr-16 py-2.5 border-solid border-neutral-400 items-start max-md:pr-5"
		//             placeholder="Your Name"
		//           />
		//           <div className="text-zinc-950 text-lg leading-7 mt-5">
		//             Email *
		//           </div>
		//           <input
		//             type="email"
		//             className="text-neutral-400 text-lg leading-7 whitespace-nowrap rounded border justify-center mt-1 pl-2.5 pr-16 py-2.5 border-solid border-neutral-400 items-start max-md:pr-5"
		//             placeholder="Email"
		//           />
		//           <div className="text-zinc-950 text-lg leading-7 mt-5">
		//             Phone Number *
		//           </div>
		//           <input
		//             type="tel"
		//             className="text-neutral-400 text-lg leading-7 whitespace-nowrap rounded border justify-center mt-1 pl-2.5 pr-16 py-2.5 border-solid border-neutral-400 items-start max-md:pr-5"
		//             placeholder="Phone Number"
		//           />
		//         </span>
		//       </div>
		//       <div className="flex flex-col items-stretch w-6/12 ml-5 max-md:w-full max-md:ml-0">
		//         <span className="items-center flex grow flex-col px-5 max-[600px]:p-0 max-md:mt-5">
		//           <div className="text-zinc-950 text-lg leading-7 self-stretch">
		//             Message
		//           </div>
		//           <textarea
		//             placeholder="Message..."
		//             className="text-neutral-400 text-lg leading-7 whitespace-nowrap self-stretch rounded border mt-1 pl-2.5 pr-16 pt-2.5 pb-20 border-solid border-neutral-400 items-start max-md:pr-5"
		//           ></textarea>
		//         </span>
		//       </div>
		//     </div>
		//   </div>
		//   <a
		//     href="mailto:tqh@the20.sg"
		//     className="text-black text-center text-lg  font-medium leading-7 whitespace-nowrap justify-center items-center rounded bg-orange-200 self-center min:[600px]:w-[634px] max-w-full mt-8 px-16 py-2.5 max-md:px-5 max-[600px]:text-sm max-[600px]:w-[250px]"
		//   >
		//     Submit
		//   </a>
		//   <a
		//     href="mailto:tqh@the20.sg"
		//     className="justify-center text-black text-md font-medium leading-8 self-center mt-5 max-md:mt-2 max-[600px]:text-sm"
		//   >
		//     Or send your inquiries to tqh@the20.sg
		//   </a>
		//   <div className="text-black text-2xl font-medium leading-8 tracking-[2.4px] uppercase self-center mt-12 max-md:max-w-full max-md:mt-8">
		//     For Market Making Service
		//   </div>
		//   <p className="justify-center text-black text-md font-medium leading-8 self-center mt-5 max-md:mt-2 max-[600px]:text-sm">
		//     Are you a Project or an Exchange?
		//   </p>
		//   <div className="w-full  flex justify-center">
		//     <iframe
		//       className="w-[480px] h-[480px] max-sm:w-[350px] max-sm:h-[500px] mt-10"
		//       src="https://docs.google.com/forms/d/e/1FAIpQLSd3lgtbeilSaE4XozpyJ-DMhdCvf0asYKMdK9b8Dtw4Vv6zdg/viewform"
		//       allowFullScreen
		//     ></iframe>
		//   </div>
		// </div>
	);
}
