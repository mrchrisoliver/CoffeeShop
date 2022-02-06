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
				<div class="text-gray-500 text-xl">£ {{ product.price }}</div>
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
								text-center text-purple-500
								border-2 border-purple-500
								hover:bg-purple-500 hover:text-white
							"
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
								text-center text-purple-500
								border-2 border-purple-500
								hover:bg-purple-500 hover:text-white
							"
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
	computed: {
		// ...mapGetters(["getActiveSong"]),
		getBasket() {
			return this.$store.getters.getBasketCount;
		},
	},
	methods: {
		addToBasket() {
			// alert("Hello");
			this.$store.dispatch("addToBasket", this.product);
		},
	},
};
</script>

<style>
</style>