<template>
	<div class="max-w-5xl mx-auto">
		<div class="hidden justify-center">
			<div
				class="
					text-center text-2xl
					font-bold font-sans
					uppercase
					text-gray-700
					border-b-4 border-purple-300
					inline-block
				"
			>
				Basket
			</div>
		</div>
		<div class="flex pt-12">
			<div class="w-2/3 mr-4 bg-white p-6 rounded-md shadow-sm">
				<div v-if="$store.getters.getBasket.length > 0">
					<div
						v-for="item of $store.getters.getBasket"
						class="pt-6 pb-6 first:pt-0 last:pb-0 border-b last:border-0"
					>
						<div class="flex">
							<div>
								<img :src="item.image" class="w-28 h-28 rounded-md" />
							</div>
							<div class="ml-4 flex-1">
								<div class="flex items-center">
									<div class="mr-4">
										<div class="text-lg font-bold">{{ item.name }}</div>
									</div>
									<div
										class="
											w-7
											h-7
											flex
											items-center
											justify-center
											text-center text-xs
											font-bold
											bg-gray-200
											text-gray-500
											rounded-md
										"
									>
										{{ item.quantity }}
									</div>
									<div
										@click="$store.dispatch('removeProduct', { item })"
										class="
											pl-4
											text-xs text-gray-500
											hover:text-gray-700 hover:cursor-pointer
										"
									>
										Remove
									</div>
								</div>
								<div class="text-lg text-gray-600">£ {{ item.totalPrice }}</div>
								<div class="pt-2">
									<div
										v-for="variation of item.variations"
										class="py-3 border-b last:border-0"
									>
										<div class="flex justify-between items-center">
											<div class="text-sm text-gray-600">
												{{ variation.brew + " - " + variation.weight }}
											</div>
											<div>
												<div class="flex items-center">
													<button
														class="text-2xl"
														@click="
															$store.dispatch('decrementVariation', { item, variation })
														"
													>
														-
													</button>
													<input
														type="text"
														:disabled="true"
														v-model="variation.quantity"
														class="
															text-sm text-center
															rounded-md
															w-12
															border-0
															outline-none
															mx-2
															bg-gray-50
														"
													/>
													<button
														class="text-lg"
														@click="
															$store.dispatch('incrementVariation', { item, variation })
														"
													>
														+
													</button>
												</div>
												<div
													@click="
														$store.dispatch('removeProductVariation', { item, variation })
													"
													class="
														text-center text-xs
														pt-2
														text-gray-500
														hover:text-gray-700 hover:cursor-pointer
													"
												>
													Remove
												</div>
											</div>
										</div>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
				<div v-else class="h-full">
					<div class="flex justify-center flex-col items-center h-full">
						<div class="text-xl uppercase font-bold text-purple-500">No products</div>
						<a href="/products" class="text-sm font-bold text-gray-500"
							>Click here to browse</a
						>
					</div>
				</div>
			</div>
			<div class="w-1/3">
				<div class="bg-white shadow-sm rounded-md p-6">
					<div class="text-lg text-gray-700">Order summary</div>
					<div class="pt-4 pb-12">
						<div class="text-gray-500 text-base grid grid-cols-2 border-b py-4">
							<div class="">Basket:</div>
							<div class="text-purple-500 text-right">£ {{ getBasketTotal }}</div>
						</div>
						<div class="text-gray-500 text-base grid grid-cols-2 border-b py-4">
							<div class="">Shipping:</div>
							<div class="text-right">
								<div class="text-purple-500">£0.00</div>
								<div class="text-gray-500 text-xs">Calculated at checkout</div>
							</div>
						</div>
						<div class="text-gray-700 text-base grid grid-cols-2 py-4">
							<div class="font-bold">Total:</div>
							<div class="text-purple-500 text-right">£ {{ getBasketTotal }}</div>
						</div>
					</div>
					<div class="bg-purple-500 text-white rounded-md w-full text-center py-2">
						Checkout
					</div>
				</div>
			</div>
		</div>
		<!-- <div v-else class="py-6">No items</div> -->
	</div>
</template>

<script>
import AppLayout from "@/Layouts/AppLayout.vue";
import Button from "../../Jetstream/Button.vue";
export default {
	components: { Button },
	layout: AppLayout,
	computed: {
		getBasket() {
			return this.$store.getters.getBasket;
		},
		getBasketTotal() {
			return this.$store.getters.getBasketTotal;
		},
	},
};
</script>

<style>
</style>