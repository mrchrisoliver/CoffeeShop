<template>
	<div class="relative">
		<div>
			<div class="border border-gray-300 rounded-full flex">
				<input
					type="text"
					name="first-name"
					id="first-name"
					autocomplete="given-name"
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
		<div
			v-if="search.string?.length"
			class="z-50 mt-2 origin-top-left left-0 w-full min-w-max"
		>
			<div class="rounded-md p-6">
				<div v-if="results">
					<div
						v-for="(value, key, index) in results"
						:key="`${key}-${index}`"
						class="py-1"
					>
						<div v-if="key == 'products'">
							<div class="font-bold text-base pb-2">Products</div>
							<div v-for="(event, key) in value" :key="key" class="py-1">
								<a
									:href="'/events/' + event?.name + '?event=' + event.name"
									class="text-sm hover:font-bold"
									>{{ event?.name }}</a
								>
							</div>
						</div>
					</div>
				</div>
				<div v-else>
					<div class="text-center text-sm">Sorry no results</div>
				</div>
			</div>
		</div>
	</div>
</template>

<script>
import axios from "axios";
// import Icon from "@/Shared/Icon";
export default {
	// components: { Icon },
	data() {
		return {
			search: {
				string: null,
			},
			results: [],
			showSearch: true,
		};
	},
	methods: {
		performSearch() {
			axios.post("/api/search/all", this.search).then((res) => {
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