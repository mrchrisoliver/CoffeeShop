<template>
	<div
		class="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-4 py-12 mx:px-0"
	>
		<div v-for="product of products" class="flex justify-start items-center">
			<img :src="product.image" class="w-40 rounded-md" />
			<div class="pl-4">
				<div class="font-bold">{{ product.name }}</div>
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
</template>

<script>
import AppLayout from "@/Layouts/AppLayout.vue";
export default {
	props: ["products"],
	layout: AppLayout,
};
</script>

<style>
</style>