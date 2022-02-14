<template>
	<app-layout>
		<div
			class="
				max-w-5xl
				mx-auto
				grid grid-cols-1
				md:grid-cols-2
				gap-x-12
				py-12
				px-12
				mx:px-0
			"
		>
			<div class="order-2 md:order-1">
				<h1 class="text-3xl text-purple-700 uppercase font-bold">
					{{ product.name }}
				</h1>
				<div class="text-gray-500 text-xl">£ {{ selectedWeight.price }}</div>
				<div class="py-6">
					{{ product.description }}
				</div>
				<div class="pb-4">
					<div class="text-sm font-bold text-gray-600 uppercase pb-2">Weight</div>
					<div class="grid grid-cols-3 gap-4">
						<div
							v-for="weight in product.weight_variations"
							class="
								font-bold
								text-sm
								py-2
								px-4
								border-2 border-purple-500
								text-center
								cursor-pointer
							"
							:class="
								selectedWeight.name == weight.name
									? 'bg-purple-500 text-white'
									: 'text-purple-500 hover:bg-purple-500 hover:text-white'
							"
							@click="selectedWeight = weight"
						>
							{{ weight.name }}
						</div>
					</div>
				</div>
				<div class="pt-4">
					<div class="text-sm font-bold text-gray-600 uppercase pb-2">Grind</div>
					<div class="grid grid-cols-3 gap-4">
						<div
							v-for="brew in product.brew_variations"
							class="
								font-bold
								text-sm
								py-2
								px-4
								border-2 border-purple-500
								text-center
								hover:cursor-pointer
							"
							:class="
								selectedBrew == brew.name
									? 'bg-purple-500 text-white'
									: 'text-purple-500 hover:bg-purple-500 hover:text-white'
							"
							@click="selectedBrew = brew.name"
						>
							{{ brew.name }}
						</div>
					</div>
				</div>
				<button
					@click="addToBasket"
					class="
						mt-12
						bg-purple-600
						hover:bg-purple-700
						text-white text-center
						py-2
						w-full
						rounded-md
					"
				>
					Add to basket
				</button>
			</div>
			<div class="order-1 md:order-2 pb-6 md:p-0">
				<div class="rounded-md overflow-hidden">
					<img :src="product.image" />
				</div>
			</div>
		</div>
	</app-layout>
</template>

<script>
import AppLayout from "@/Layouts/AppLayout.vue";
export default {
	components: {
		AppLayout,
	},
	props: ["product"],
	data() {
		return {
			selectedWeight: this.product.weight_variations[0],
			selectedBrew: this.product.brew_variations[0].name,
			price: this.product.weight_variations[0].price,
		};
	},
	computed: {
		getBasket() {
			return this.$store.getters.getBasketCount;
		},
		getStartingPrice() {
			let arrayMerge = [
				...this.product.weight_variations,
				...this.product.brew_variations,
			];
			let prices = arrayMerge.map((officer) => officer.price);

			let startPrice = prices.reduce((acc, val) => {
				acc[0] = acc[0] === undefined || val < acc[0] ? val : acc[0];
				return acc;
			}, [])[0];
			return startPrice;
		},
	},
	methods: {
		addToBasket() {
			let productForBasket = { ...this.product };
			delete productForBasket.weight_variations;
			delete productForBasket.brew_variations;
			productForBasket.weight = this.selectedWeight.name;
			productForBasket.brew = this.selectedBrew;
			productForBasket.price = this.selectedWeight.price;
			// console.log(productForBasket);
			this.$store.dispatch("addToBasket", productForBasket);
		},
	},
};
</script>

<style>
</style>