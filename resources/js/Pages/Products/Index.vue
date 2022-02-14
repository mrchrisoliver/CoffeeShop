<template>
	<div class="max-w-5xl mx-auto">
		<div class="grid grid-cols-2 gap-12 py-12 mx:px-0">
			<div
				v-for="product of products.data"
				class="flex justify-start items-center"
			>
				<img :src="product.image" class="w-40 rounded-md" />
				<div class="pl-4">
					<div class="font-bold">{{ product.name }}</div>
					<div class="text-xs text-gray-500">{{ product.description }}</div>
					<div class="">£ {{ getStartingPrice(product) }}</div>
					<Link
						:href="'/products/' + product.slug"
						class="
							bg-purple-600
							hover:bg-purple-800
							text-white
							hover:text-white
							rounded-md
							text-xs
							font-bold
							inline-block
							py-2
							px-4
						"
					>
						Buy now
					</Link>
				</div>
			</div>
		</div>
		<pagination :links="products.links" />
	</div>
</template>

<script>
import AppLayout from "@/Layouts/AppLayout.vue";
import { Link } from "@inertiajs/inertia-vue3";
import Pagination from "../../Components/Pagination.vue";
export default {
	components: { Link, Pagination },
	props: ["products"],
	layout: AppLayout,
	methods: {
		getStartingPrice(product) {
			console.log(product);
			// return 0;
			let arrayMerge = [...product.weight_variations];
			let prices = arrayMerge.map((officer) => officer.price);

			let startPrice = prices.reduce((acc, val) => {
				acc[0] = acc[0] === undefined || val < acc[0] ? val : acc[0];
				return acc;
			}, [])[0];
			return startPrice;
		},
	},
};
</script>

<style>
</style>