import * as React from "react";

const FeatureTable = () => {
	return (
		<div className="justify-center items-center flex flex-col px-16 py-9 max-md:px-5">
			<table className="min-[600px]:w-[960px] max-w-full">
				<thead>
				<tr className="text-black text-xl font-medium leading-8">
					<th className="py-3 pr-3 max-[600px]:text-sm">Feature</th>
					<th className="py-3 pr-3 max-[600px]:text-sm">Improvement</th>
					<th className="py-3 pr-3 max-[600px]:text-sm">Notes</th>
				</tr>

				</thead>
				<tr className="bg-zinc-300 h-[1px] border-b  my-4"/>
				<tbody>

				<TableRow
					col1="Money does not leave your account/wallet"
					col2="Safe"
					col3="Connect your wallet or any CEX account (Binance, OKX, Bybit, BingX, AmeriTD, Exness, Pepperstone, etc.)"
				/>
				<tr className="bg-zinc-300 h-[1px] border-b  my-4"/>
				<TableRow
					col1="Everything is automated"
					col2="Transparent, 24/7, precise"
					col3=""
				/>
				<tr className="bg-zinc-300 h-[1px] border-b  my-4"/>
				<TableRow
					col1="200+ indicators"
					col2="No limit to strategies"
					col3="Other tools only allow some preset strategies like Grid/DCA. We let you make strategies like a quant"
				/>
				<tr className="bg-zinc-300 h-[1px] border-b  my-4"/>
				<TableRow
					col1="Passed SOC 2 examination"
					col2="Secure"
					col3={
						<a href="http://bit.ly/SOC2_intro" target="_blank">
							http://bit.ly/SOC2_intro
						</a>
					}
				/>
				<tr className="bg-zinc-300 h-[1px] border-b  my-4"/>
				<TableRow
					col1="No code"
					col2="Coding is done at the back. Just plain English"
					col3=""
				/>
				<tr className="bg-zinc-300 h-[1px] border-b  my-4"/>
				<TableRow
					col1="No code"
					col2="Coding is done at the back. Just plain English"
					col3=""
				/>
				<tr className="bg-zinc-300 h-[1px] border-b  my-4"/>
				<TableRow
					col1="API trade, trading fee rebate"
					col2="Lower trading fee, lower latency"
					col3=""
				/>
				<tr className="bg-zinc-300 h-[1px] border-b  my-4"/>
				<TableRow
					col1="Trading advantages"
					col2="Faster & more precise action"
					col3="We look at each exchange’s full order book, and monitor every smallest price movement"
				/>
				</tbody>
			</table>
		</div>
	);
};

const TableRow = ({col1, col2, col3}: any) => {
	return (
		<>
			<tr className="text-stone-900 text-base leading-5">
				<td className="py-4 pr-3 max-[600px]:text-sm">{col1}</td>
				<td className="py-4 pr-3 text-center max-[600px]:text-sm">{col2}</td>
				<td className="py-4 pr-3 max-[600px]:text-sm">{col3}</td>
			</tr>
		</>
	);
};

export default function Product() {
	return (
		<span>
           <div className="bg-black flex flex-col justify-center ">
			<div className="">
				<div className="relative flex items-end justify-center h-[700px]  overflow-hidden md:w-full ">
					<div
						className="relative z-30 p-5 mb-24 text-2xl text-white flex flex-col items-center  bg-opacity-50 rounded-xl">
						<h1 className="text-[32px]  leading-tight text-center">Simplified automated trading without coding</h1>

						<p className="mt-5 text-2xl font-weight-[400] text-center text-[#818181] max-w-[585px] ">Our product allows traders to create complex
							trade bots from unlimited number of indicators.</p>
					</div>
					<video autoPlay loop muted
						   className="absolute z-10 w-auto min-w-full object-cover max-h-full max-w-none">
						<source src="/videos/Video_Products.mp4" type="video/mp4"/>
						Your browser does not support the video tag.
					</video>
				</div>
			</div>
		</div>

		<div className="max-w-screen-xl mx-auto my-14">
			<div className="grid grid-cols-12">
				<div className="col-span-1"></div>
				<div className="col-span-10">
					<div className="relative overflow-x-auto shadow-md sm:rounded-lg">
						<table className="w-full text-sm text-left rtl:text-right text-[#484848] dark:text-gray-400">
							<thead className="text-xs text-gray-700 dark:bg-gray-700 dark:text-gray-400">
								<tr>
									<th scope="col" className="px-6 py-3">
										Feature
									</th>
									<th scope="col" className="px-6 py-3">
										Improvement
									</th>
									<th scope="col" className="px-6 py-3">
										Notes
									</th>

								</tr>
							</thead>
							<tbody>
								<tr
									className="even:bg-white even:dark:bg-gray-900 odd:bg-gray-50 odd:dark:bg-gray-800 border-b dark:border-gray-700">
									<td className="px-6 py-4 ">
										Money does not leave your account/wallet
									</td>
									<td className="px-6 py-4">
										Sale
									</td>
									<td className="px-6 py-4">
										Connect your wallet or any CEX account (Binance, OKX, Bybit, BingX, AmeriTD, Exness,
										Pepperstone, etc.)
									</td>

								</tr>
								<tr
									className="even:bg-white even:dark:bg-gray-900 odd:bg-gray-50 odd:dark:bg-gray-800 border-b dark:border-gray-700">
									<td className="px-6 py-4 font-medium  whitespace-nowrap dark:text-white">
										Everything is automated
									</td>
									<td className="px-6 py-4">
										Transparent, 24/7, precise
									</td>
									<td className="px-6 py-4">

									</td>

								</tr>

								<tr
									className="even:bg-white even:dark:bg-gray-900 odd:bg-gray-50 odd:dark:bg-gray-800 border-b dark:border-gray-700">
									<td className="px-6 py-4 font-medium whitespace-nowrap dark:text-white">
										200+ indicators
									</td>
									<td className="px-6 py-4">
										No limit to strategies
									</td>
									<td className="px-6 py-4">
										Other tools only allow some preset strategies like Grid/DCA. We let you make
										strategies like a quant
									</td>

								</tr>

								<tr
									className="even:bg-white even:dark:bg-gray-900 odd:bg-gray-50 odd:dark:bg-gray-800 border-b dark:border-gray-700">
									<td className="px-6 py-4 font-medium  whitespace-nowrap dark:text-white">
										Passed SOC 2 examination
									</td>
									<td className="px-6 py-4">
										Secure
									</td>
									<td className="px-6 py-4">
										http://bit.ly/SOC2_intro
									</td>

								</tr>

								<tr
									className="even:bg-white even:dark:bg-gray-900 odd:bg-gray-50 odd:dark:bg-gray-800 border-b dark:border-gray-700">
									<td className="px-6 py-4 font-medium  whitespace-nowrap dark:text-white">
										No code
									</td>
									<td className="px-6 py-4">
										Coding is done at the back. Just plain English
									</td>
									<td className="px-6 py-4">

									</td>

								</tr>

								<tr
									className="even:bg-white even:dark:bg-gray-900 odd:bg-gray-50 odd:dark:bg-gray-800 border-b dark:border-gray-700">
									<td className="px-6 py-4 font-medium  whitespace-nowrap dark:text-white">
										API trade, trading fee rebate
									</td>
									<td className="px-6 py-4">
										Lower trading fee, lower latency
									</td>
									<td className="px-6 py-4">

									</td>

								</tr>
								<tr
									className="even:bg-white even:dark:bg-gray-900 odd:bg-gray-50 odd:dark:bg-gray-800 border-b dark:border-gray-700">
									<td scope="row"
										className="px-6 py-4 font-medium  whitespace-nowrap dark:text-white">
										Trading advantages
									</td>
									<td className="px-6 py-4">
										Faster & more precise action
									</td>
									<td className="px-6 py-4">
										We look at each exchange’s full order book, and monitor every smallest price
										movements
									</td>

								</tr>

							</tbody>
						</table>
					</div>
				</div>
				<div className="col-span-1"></div>
			</div>
			</div>
		</span>

	);
}
