<template>
	<div class="bg-purple-600 py-12 text-white w-full px-6 md:px-0">
		<div
			class="
				flex flex-col-reverse
				md:flex-row
				justify-center
				items-center
				w-full
				md:max-w-5xl
				mx-auto
			"
		>
			<div v-if="!success" class="flex justify-center flex-col items-center">
				<div class="text-center pb-4">
					<div class="text-3xl md:text-4xl font-bold">
						Subscribe to our newsletter
					</div>
					<div class="text-sm">Join today for exclusive news and offers</div>
				</div>
				<form
					action="/newsletter"
					method="post"
					@submit="submitNewsletter"
					class="flex items-center w-full mx-auto"
				>
					<input
						id="email"
						name="email"
						type="email"
						v-model="newsletter.email"
						placeholder="Email address"
						autocomplete="email"
						required
						class="
							w-full
							placeholder-white
							border-transparent
							bg-purple-500
							text-white
							rounded-md
							focus:bg-purple-500
							mr-2
							h-10
						"
					/>
					<button
						id="signup"
						name="signup"
						class="
							flex-shrink-0
							bg-purple-700
							hover:bg-purple-800
							h-10
							px-4
							rounded-md
							text-white text-sm
						"
					>
						Sign up
					</button>
				</form>
			</div>
			<div v-if="success">
				<div class="text-center pb-4">
					<div class="text-3xl md:text-4xl font-bold">Thank you!</div>
					<div class="text-sm">You have successful joined our newsletter.</div>
					<div class="text-sm">
						We promise not to spam you, and you can opt-out anytime.
					</div>
				</div>
			</div>
			<div class="block md:block w-52 md:w-72 pb-6 md:pb-0 md:pl-6">
				<svg
					viewBox="0 0 597 534"
					version="1.1"
					xmlns="http://www.w3.org/2000/svg"
					xmlns:xlink="http://www.w3.org/1999/xlink"
				>
					<title>HD</title>
					<defs>
						<polygon
							id="path-1"
							points="0.764551572 122.856883 168.634544 0.402539116 350.764552 122.856883 350.764552 313.402539 0.764551572 313.402539"
						></polygon>
						<filter
							x="-6.0%"
							y="-7.1%"
							width="112.0%"
							height="113.8%"
							filterUnits="objectBoundingBox"
							id="filter-2"
						>
							<feMorphology
								radius="2.5"
								operator="dilate"
								in="SourceAlpha"
								result="shadowSpreadOuter1"
							></feMorphology>
							<feOffset
								dx="0"
								dy="0"
								in="shadowSpreadOuter1"
								result="shadowOffsetOuter1"
							></feOffset>
							<feGaussianBlur
								stdDeviation="4.5"
								in="shadowOffsetOuter1"
								result="shadowBlurOuter1"
							></feGaussianBlur>
							<feColorMatrix
								values="0 0 0 0 0   0 0 0 0 0   0 0 0 0 0  0 0 0 0.117795291 0"
								type="matrix"
								in="shadowBlurOuter1"
							></feColorMatrix>
						</filter>
						<rect
							id="path-3"
							x="41.7645516"
							y="36.4025391"
							width="270"
							height="242"
						></rect>
						<filter
							x="-5.6%"
							y="-5.4%"
							width="108.1%"
							height="109.1%"
							filterUnits="objectBoundingBox"
							id="filter-4"
						>
							<feMorphology
								radius="0.5"
								operator="dilate"
								in="SourceAlpha"
								result="shadowSpreadOuter1"
							></feMorphology>
							<feOffset
								dx="-4"
								dy="-2"
								in="shadowSpreadOuter1"
								result="shadowOffsetOuter1"
							></feOffset>
							<feGaussianBlur
								stdDeviation="2.5"
								in="shadowOffsetOuter1"
								result="shadowBlurOuter1"
							></feGaussianBlur>
							<feColorMatrix
								values="0 0 0 0 0.058076278   0 0 0 0 0.058076278   0 0 0 0 0.058076278  0 0 0 0.108309659 0"
								type="matrix"
								in="shadowBlurOuter1"
							></feColorMatrix>
						</filter>
						<polygon
							id="path-5"
							points="0.764551572 123.402539 175.764552 228.300951 350.764552 123.402539 350.764552 313.402539 0.764551572 313.402539"
						></polygon>
						<filter
							x="-6.6%"
							y="-14.2%"
							width="113.1%"
							height="124.2%"
							filterUnits="objectBoundingBox"
							id="filter-6"
						>
							<feOffset
								dx="0"
								dy="-4"
								in="SourceAlpha"
								result="shadowOffsetOuter1"
							></feOffset>
							<feGaussianBlur
								stdDeviation="7"
								in="shadowOffsetOuter1"
								result="shadowBlurOuter1"
							></feGaussianBlur>
							<feColorMatrix
								values="0 0 0 0 0   0 0 0 0 0   0 0 0 0 0  0 0 0 0.102222363 0"
								type="matrix"
								in="shadowBlurOuter1"
							></feColorMatrix>
						</filter>
					</defs>
					<g
						id="HD"
						stroke="none"
						stroke-width="1"
						fill="none"
						fill-rule="evenodd"
						transform="translate(0.000000, 0.000000)"
					>
						<g id="Group-2" transform="translate(1.326972, -35.000000)">
							<path
								d="M168.906335,41.1872485 C429.254285,11.3524769 458.32064,131.694566 468.184399,265.093471 C478.048158,398.492376 384.823745,510.385717 329.374446,543.632534 C273.925147,576.879352 94.2164157,587.736319 55.6740702,494.174405 C17.1317248,400.612491 136.945767,372.338832 90.7646088,296.321775 C44.5834501,220.304719 -91.4416153,71.0220202 168.906335,41.1872485 Z"
								id="Rectangle"
								fill="#A854F7"
							></path>
							<path
								d="M1.13686838e-13,385.433745 L130.306001,457.341044 C277.669765,541.144313 386.798045,570.237665 457.690842,544.6211 C564.030037,506.196252 628.974281,345.689633 562.197276,267 C517.679272,214.540245 443.249672,162.786465 338.908477,111.738661 L199.808616,94.4900441 L139.80123,80.007516"
								id="Path"
								stroke="#FFFFFF"
								stroke-width="6"
								stroke-linejoin="round"
								stroke-dasharray="25,20"
							></path>
							<path
								d="M329.374446,543.632534 C273.925147,576.879352 94.2164157,587.736319 55.6740702,494.174405 C33.270958,439.790634 64.3705849,407.46534 85.2748222,375.00068 L453.971355,375.002058 C426.837893,457.119457 368.636575,520.091374 329.374446,543.632534 Z"
								id="Combined-Shape"
								fill="#A854F7"
							></path>
							<g id="Group" transform="translate(162.908477, 87.597461)">
								<g id="Rectangle">
									<use
										fill="black"
										fill-opacity="1"
										filter="url(#filter-2)"
										xlink:href="#path-1"
									></use>
									<use fill="#FFFFFF" fill-rule="evenodd" xlink:href="#path-1"></use>
								</g>
								<polygon
									id="Rectangle"
									fill="#F6F6F6"
									points="0.764551572 123.402539 175.764552 123.651921 350.764552 123.402539 350.764552 313.402539 0.764551572 313.402539"
								></polygon>
								<g id="Rectangle">
									<use
										fill="black"
										fill-opacity="1"
										filter="url(#filter-4)"
										xlink:href="#path-3"
									></use>
									<use fill="#FFFFFF" fill-rule="evenodd" xlink:href="#path-3"></use>
								</g>
								<rect
									id="Rectangle"
									fill="#F0F0F0"
									x="120.764552"
									y="82.4025391"
									width="110"
									height="6"
								></rect>
								<rect
									id="Rectangle"
									fill="#F0F0F0"
									x="100.764552"
									y="94.4025391"
									width="150"
									height="6"
								></rect>
								<rect
									id="Rectangle"
									fill="#F0F0F0"
									x="120.764552"
									y="106.402539"
									width="110"
									height="6"
								></rect>
								<rect
									id="Rectangle"
									fill="#F0F0F0"
									x="100.764552"
									y="118.402539"
									width="150"
									height="6"
								></rect>
								<rect
									id="Rectangle"
									fill="#F0F0F0"
									x="120.764552"
									y="130.402539"
									width="110"
									height="6"
								></rect>
								<rect
									id="Rectangle"
									fill="#F0F0F0"
									x="100.764552"
									y="142.402539"
									width="150"
									height="6"
								></rect>
								<rect
									id="Rectangle"
									fill="#F0F0F0"
									x="120.764552"
									y="154.402539"
									width="110"
									height="6"
								></rect>
								<rect
									id="Rectangle"
									fill="#F0F0F0"
									x="100.764552"
									y="166.402539"
									width="150"
									height="6"
								></rect>
								<g
									transform="translate(175.764552, 60.402539) scale(1, -1) translate(-175.764552, -60.402539) translate(165.764552, 51.402539)"
								>
									<rect
										id="Rectangle"
										fill="#4C3968"
										x="0"
										y="7"
										width="20"
										height="4"
									></rect>
									<polyline
										id="Path-2"
										stroke="#9334E9"
										stroke-width="4"
										points="1 6 1 2.26903998 10.5 0 20 2.26903998 20 6"
									></polyline>
									<polyline
										id="Path-2"
										stroke="#9334E9"
										stroke-width="4"
										transform="translate(10.500000, 15.000000) scale(1, -1) translate(-10.500000, -15.000000) "
										points="1 18 1 14.26904 10.5 12 20 14.26904 20 18"
									></polyline>
								</g>
								<g id="Rectangle">
									<use
										fill="black"
										fill-opacity="1"
										filter="url(#filter-6)"
										xlink:href="#path-5"
									></use>
									<use fill="#FFFFFF" fill-rule="evenodd" xlink:href="#path-5"></use>
								</g>
							</g>
							<path
								d="M116.822409,10 L70.6730282,117 L116.822409,98.6167688 L159.673028,116.730108 L116.822409,10 Z M117.497194,99.0782148 L117.497194,10.0782148"
								id="Combined-Shape"
								stroke="#FFFFFF"
								stroke-width="6"
								fill="#9334E9"
								transform="translate(115.173028, 63.500000) rotate(-64.000000) translate(-115.173028, -63.500000) "
							></path>
						</g>
					</g>
				</svg>
			</div>
		</div>
	</div>
</template>

<script>
export default {
	data() {
		return {
			newsletter: {
				email: "",
			},
			success: false,
		};
	},
	methods: {
		submitNewsletter() {
			axios.post("/newsletter", this.newsletter).then((res) => {
				this.success = true;
				this.newsletter.email = "";
			});
		},
	},
};
</script>

<style>
</style>