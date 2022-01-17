<template>
	<app-layout>
		<div class="max-w-5xl mx-auto grid grid-cols-2 gap-x-12 py-12">
			<div>
				<h1 class="text-3xl text-purple-700 uppercase font-bold">
					{{ product.name }}
				</h1>
				<div class="text-gray-500 text-xl">£ {{ product.price }}</div>
				<div class="py-6">
					<p class="py-2 text-gray-500">
						Honey, she's home! And orange-you glad to see this stunning honey
						micro-lot from the Diaz Castillo Sisters once again?!
					</p>
					<p class="py-2 text-gray-500">
						Produced by Paola, Leida and Adriana, 3 sisters who have been involved in
						coffee production their whole lives. They have named this coffee 'Carmen
						Honey' as a tribute to the Virgin of Carmen, a Saint to which the sisters'
						grandparents are devoted to.
					</p>
				</div>
				<div class="pb-4">
					<div class="text-sm font-bold text-gray-600 uppercase pb-2">Weight</div>
					<div class="grid grid-cols-3 gap-4">
						<div
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
							350g
						</div>
						<div
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
							1kg
						</div>
					</div>
				</div>
				<div class="pt-4">
					<div class="text-sm font-bold text-gray-600 uppercase pb-2">Grind</div>
					<div class="grid grid-cols-3 gap-4">
						<div
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
							Wholebeans
						</div>
						<div
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
							Espresso
						</div>
						<div
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
							French Press
						</div>
						<div
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
							Paper Filter
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

				{{ getBasket }}
			</div>
			<div>
				<div class="rounded-md overflow-hidden"><img :src="product.image" /></div>
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