<template>
	<app-layout>
		<div class="p-0 md:px-12">
			<div
				class="
					w-full
					md:rounded-md
					overflow-hidden
					h-72
					md:h-96
					relative
					flex
					justify-center
					items-center
					shadow-2xl
				"
			>
				<img
					src="/images/banners/banner.jpg"
					class="object-fill md:object-none object-center absolute"
				/>
				<div class="text-4xl md:text-6xl text-white relative uppercase">
					Brew it
					<span class="bg-white bg-opacity-60 text-purple-700 rounded-md py-2 px-4"
						>your Way</span
					>
				</div>
			</div>
		</div>
		<div class="py-20 max-w-5xl mx-auto">
			<h2
				class="
					max-w-max
					mx-auto
					text-lg
					uppercase
					border-b-2 border-purple-700
					text-black
					font-semibold
					block
					text-center
					mb-2
					px-4
				"
			>
				New Arrivals
			</h2>
			<div class="grid grid-cols-2 md:grid-cols-4 gap-4">
				<div v-for="product of products" class="p-4">
					<img :src="product.image" class="rounded-md w-full" />
					<div class="pt-2 font-bold text-gray-600">{{ product.name }}</div>
					<div class="pb-4 text-gray-500 text-base">£ {{ product.price }}</div>
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
		<div class="bg-purple-600 py-20 text-white w-full px-6 md:px-0">
			<div
				class="
					flex
					justify-center
					flex-col
					items-center
					w-full
					md:max-w-5xl
					mx-auto
				"
			>
				<div class="text-center pb-4">
					<div class="text-3xl md:text-4xl font-bold">
						Subscribe to our newsletter
					</div>
					<div class="text-sm">Join today for exclusive news and offers</div>
				</div>
				<div class="flex items-center w-full md:w-1/2 mx-auto">
					<input
						type="text"
						placeholder="Email address"
						class="
							w-full
							placeholder-white
							border-transparent
							bg-purple-500
							text-white
							rounded-md
							mr-2
							h-10
						"
					/>
					<button
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
				</div>
			</div>
		</div>
	</app-layout>
</template>

<script>
import AppLayout from "../../Layouts/AppLayout.vue";
import { Link } from "@inertiajs/inertia-vue3";
import Button from "../../Jetstream/Button.vue";

export default {
	components: {
		AppLayout,
		Link,
		Button,
	},
	props: ["products"],
	computed: {
		// ...mapGetters(["getActiveSong"]),
		getActiveSong() {
			return this.$store.getters.getActiveIndex;
		},
	},
};
</script>

<style>
</style>