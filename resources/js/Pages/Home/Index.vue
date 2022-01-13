<template>
	<app-layout>
		<div class="px-12">
			<div
				class="
					w-full
					rounded-md
					overflow-hidden
					h-96
					relative
					flex
					justify-center
					items-center
					shadow-2xl
				"
			>
				<img
					src="/images/banners/banner.jpg"
					class="object-none object-center absolute"
				/>
				<div class="text-6xl text-white relative uppercase">
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
			<div class="grid grid-cols-4 gap-4">
				<div v-for="product of products" class="p-4">
					<img :src="product.image" class="rounded-md w-full" />
					<div class="pt-2 font-bold text-gray-600">{{ product.title }}</div>
					<div class="pb-4 text-gray-500 text-base">£11.99</div>
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
		<div class="bg-purple-600 py-20 text-white w-full">
			<div class="flex justify-center items-center max-w-5xl mx-auto">
				<div class="">
					<div class="text-3xl font-bold">Subscribe to our newsletter</div>
					<div class="text-sm">Join today for exclusive news and offers</div>
				</div>
				<div class="flex items-center ml-4">
					<input
						type="text"
						placeholder="Email address"
						class="w-3/5 border-transparent rounded-md mr-2 h-10"
					/>
					<button
						class="
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
					{{ getActiveSong }}
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