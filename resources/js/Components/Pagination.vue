<template>
	<div v-if="links.length > 3">
		<div class="flex flex-wrap justify-center py-4 rounded-md bg-purple-500">
			<template v-for="(link, key) in links">
				<div
					v-if="link.url === null"
					:key="key"
					class="mr-1 px-4 py-3 text-white bg-purple-600 text-sm leading-4 rounded"
					v-html="link.label"
				/>
				<Link
					v-else
					:key="`link-${key}`"
					class="
						mr-1
						px-4
						py-3
						text-white text-sm
						leading-4
						hover:bg-purple-600
						rounded
					"
					:class="{ 'bg-purple-600 text-white': link.active }"
					:href="link.url"
					v-html="link.label"
				/>
			</template>
		</div>
	</div>
</template>

<script>
import { Link } from "@inertiajs/inertia-vue3";
export default {
	components: {
		Link,
	},
	props: {
		links: Array,
	},
};
</script>