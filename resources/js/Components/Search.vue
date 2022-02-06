<template>
	<div class="relative">
		<div>
			<div class="border border-gray-300 rounded-md flex items-center">
				<input
					type="text"
					name="first-name"
					id="first-name"
					autocomplete="off"
					v-if="showSearch"
					class="
						form-control
						mt-1
						block
						border-0
						outline-none
						focus:outline-none
						sm:text-sm
						px-4
						bg-transparent
					"
					v-model="search.string"
					@keypress="performSearch(value)"
					placeholder="Search"
				/>
				<div
					class="rounded-full bg-pink hover:bg-pink-dark py-2 px-3"
					@click.prevent="searchButtonAction"
				>
					<svg
						xmlns="http://www.w3.org/2000/svg"
						class="h-4 w-4"
						fill="none"
						viewBox="0 0 24 24"
						stroke="currentColor"
					>
						<path
							stroke-linecap="round"
							stroke-linejoin="round"
							stroke-width="2"
							d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
						/>
					</svg>
				</div>
			</div>
		</div>
		<!-- <div class="fixed inset-0 z-40"></div> -->
		<div v-if="search.string?.length">
			<div class="rounded-md p-4">
				<div v-if="results.products.length">
					<div
						v-for="(value, key, index) in results"
						:key="`${key}-${index}`"
						class="py-1"
					>
						<div v-for="(event, key) in value" :key="key" class="py-1">
							<Link
								:href="'/products/' + event.slug"
								class="text-sm text-gray-700 hover:font-bold"
								>{{ event?.name }}</Link
							>
						</div>
					</div>
				</div>
				<div v-else>
					<div class="text-center font-bold text-purple-500 pt-6 text-sm">
						Sorry no results
					</div>
				</div>
			</div>
		</div>
	</div>
</template>

<script>
import axios from "axios";
// import Icon from "@/Shared/Icon";
import { Link } from "@inertiajs/inertia-vue3";
export default {
	components: { Link },
	data() {
		return {
			search: {
				string: null,
			},
			results: {
				products: [],
			},
			showSearch: true,
		};
	},
	methods: {
		performSearch() {
			axios.post("/api/search/all", this.search).then((res) => {
				console.log(res);
				this.results = res.data;
			});
		},
		searchButtonAction() {
			if (this.showSearch) {
				this.performSearch();
			} else {
				this.showSearch = true;
			}
		},
	},
};
</script>

<style scoped>
.form-control:focus {
	border-color: inherit;
	-webkit-box-shadow: none;
	box-shadow: none;
}
</style>