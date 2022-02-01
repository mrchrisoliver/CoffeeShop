<template>
	<div>
		<Head :title="title" />
		<div class="w-full bg-gray-200 text-gray-700 text-center py-4">
			This is a demo project, check out what I am doing on
			<a class="underline" href="https://github.com/mrchrisoliver/CoffeeShop"
				>Github</a
			>
		</div>
		<jet-banner />

		<div class="min-h-screen bg-gray-100">
			<nav class="py-12">
				<!-- Primary Navigation Menu -->
				<div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
					<div class="w-full grid grid-cols-12 gap-4">
						<div class="col-span-10 col-start-2 grid grid-cols-5 gap-4 mx-auto">
							<div class="hidden space-x-8 sm:-my-px sm:ml-10 sm:flex">
								<jet-nav-link :href="route('home')" :active="route().current('home')">
									Home
								</jet-nav-link>
							</div>
							<div class="hidden space-x-8 sm:-my-px sm:ml-10 sm:flex">
								<jet-nav-link
									:href="route('dashboard')"
									:active="route().current('dashboard')"
								>
									Coffee
								</jet-nav-link>
							</div>
							<!-- Logo -->
							<div class="flex justify-center items-center">
								<Link :href="route('dashboard')">
									<jet-application-mark class="block h-20 w-auto" />
								</Link>
							</div>

							<!-- Navigation Links -->
							<div class="hidden space-x-8 sm:-my-px sm:ml-10 sm:flex">
								<jet-nav-link
									:href="route('dashboard')"
									:active="route().current('dashboard')"
								>
									Brew Guides
								</jet-nav-link>
							</div>
							<div class="hidden space-x-8 sm:-my-px sm:ml-10 sm:flex"></div>
						</div>

						<!-- Acount -->
						<div class="flex items-center">
							<div class="text-purple-500 hover:text-purple-600 pr-6">
								<jet-dropdown class="min-w-5xl">
									<template #trigger>
										<svg
											xmlns="http://www.w3.org/2000/svg"
											class="h-6 w-6"
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
									</template>

									<template #content>
										<div class="px-6 py-6">
											<search />
										</div>
									</template>
								</jet-dropdown>
							</div>

							<div class="text-purple-500 hover:text-purple-600 pr-6 relative">
								<jet-dropdown class="min-w-5xl">
									<template #trigger>
										<span class="inline-flex rounded-md">
											<button
												type="button"
												class="
													inline-flex
													items-center
													px-3
													py-2
													border border-transparent
													text-sm
													leading-4
													font-medium
													text-purple-500
													hover:text-purple-700
													focus:outline-none
													transition
												"
											>
												<div
													class="
														absolute
														bg-purple-700
														text-white
														rounded-full
														text-xs
														w-5
														h-5
														flex
														items-center
														justify-center
														top-0
														-mt-1
														right-1
													"
												>
													{{ $store.getters.getBasketCount }}
												</div>
												<svg
													xmlns="http://www.w3.org/2000/svg"
													class="h-6 w-6"
													fill="none"
													viewBox="0 0 24 24"
													stroke="currentColor"
												>
													<path
														stroke-linecap="round"
														stroke-linejoin="round"
														stroke-width="2"
														d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z"
													/>
												</svg>
											</button>
										</span>
									</template>

									<template #content>
										<div class="px-6 py-6">
											<div v-if="$store.getters.getBasket.length > 0">
												<div
													v-for="item of $store.getters.getBasket"
													class="
														grid grid-cols-3
														items-center
														pt-6
														pb-6
														first:pt-0
														last:pb-0
														border-b
													"
												>
													<div class="col-span-2 flex items-center">
														<img :src="item.image" class="w-10 h-10 rounded-md" />
														<div>
															<div class="pl-2 text-xs font-bold">{{ item.name }}</div>
															<div class="pl-2 text-xs text-gray-600">£ {{ item.price }}</div>
														</div>
													</div>
													<div class="ml-4">
														<div
															class="
																w-7
																h-7
																flex
																items-center
																justify-center
																text-center text-xs
																font-bold
																bg-gray-100
																text-gray-500
																rounded-md
															"
														>
															{{ item.quantity }}
														</div>
													</div>
												</div>
												<div class="text-gray-500 pt-4 text-sm">
													<span class="font-bold">Total:</span>
													<span class="font-bold text-purple-500">
														£{{ $store.getters.getBasketTotal }}</span
													>
												</div>
											</div>
											<div v-else class="py-6">No items</div>
											<a
												href="/basket"
												class="
													bg-purple-500
													hover:bg-purple-600
													text-white
													font-bold
													text-sm
													mt-6
													py-2
													px-4
													rounded-md
													w-full
													text-center
													block
												"
												>Checkout</a
											>
										</div>
									</template>
								</jet-dropdown>
							</div>
							<div>
								<jet-nav-link
									:href="route('dashboard')"
									:active="route().current('dashboard')"
									class="text-purple-500 hover:text-purple-600"
									><svg
										xmlns="http://www.w3.org/2000/svg"
										class="h-6 w-6"
										fill="none"
										viewBox="0 0 24 24"
										stroke="currentColor"
									>
										<path
											stroke-linecap="round"
											stroke-linejoin="round"
											stroke-width="2"
											d="M5.121 17.804A13.937 13.937 0 0112 16c2.5 0 4.847.655 6.879 1.804M15 10a3 3 0 11-6 0 3 3 0 016 0zm6 2a9 9 0 11-18 0 9 9 0 0118 0z"
										/>
									</svg>
								</jet-nav-link>
							</div>
						</div>
						<!-- Hamburger -->
						<!-- <div class="-mr-2 flex items-center sm:hidden">
							<button
								@click="showingNavigationDropdown = !showingNavigationDropdown"
								class="
									inline-flex
									items-center
									justify-center
									p-2
									rounded-md
									text-gray-400
									hover:text-gray-500 hover:bg-gray-100
									focus:outline-none focus:bg-gray-100 focus:text-gray-500
									transition
								"
							>
								<svg
									class="h-6 w-6"
									stroke="currentColor"
									fill="none"
									viewBox="0 0 24 24"
								>
									<path
										:class="{
											hidden: showingNavigationDropdown,
											'inline-flex': !showingNavigationDropdown,
										}"
										stroke-linecap="round"
										stroke-linejoin="round"
										stroke-width="2"
										d="M4 6h16M4 12h16M4 18h16"
									/>
									<path
										:class="{
											hidden: !showingNavigationDropdown,
											'inline-flex': showingNavigationDropdown,
										}"
										stroke-linecap="round"
										stroke-linejoin="round"
										stroke-width="2"
										d="M6 18L18 6M6 6l12 12"
									/>
								</svg>
							</button>
						</div> -->
					</div>
				</div>

				<!-- Responsive Navigation Menu -->
				<div
					:class="{
						block: showingNavigationDropdown,
						hidden: !showingNavigationDropdown,
					}"
					class="sm:hidden"
				>
					<div class="pt-2 pb-3 space-y-1">
						<jet-responsive-nav-link
							:href="route('dashboard')"
							:active="route().current('dashboard')"
						>
							Dashboard
						</jet-responsive-nav-link>
					</div>

					<!-- Responsive Settings Options -->
				</div>
			</nav>

			<!-- Page Heading -->
			<header class="bg-white shadow" v-if="$slots.header">
				<div class="max-w-7xl mx-auto py-6 px-4 sm:px-6 lg:px-8">
					<slot name="header"></slot>
				</div>
			</header>

			<!-- Page Content -->
			<main class="">
				<slot></slot>
			</main>

			<footer>
				<div
					class="
						max-w-5xl
						mx-auto
						py-6
						px-4
						sm:px-6
						mt-12
						lg:px-8
						border-t-4 border-purple-300
						flex
						justify-center
					"
				>
					<jet-application-mark class="block h-12 w-auto" />
				</div>
			</footer>
		</div>
	</div>
</template>

<script>
import { defineComponent } from "vue";
import JetApplicationMark from "@/Jetstream/ApplicationMark.vue";
import JetBanner from "@/Jetstream/Banner.vue";
import JetDropdown from "@/Jetstream/Dropdown.vue";
import JetDropdownLink from "@/Jetstream/DropdownLink.vue";
import JetNavLink from "@/Jetstream/NavLink.vue";
import JetResponsiveNavLink from "@/Jetstream/ResponsiveNavLink.vue";
import { Head, Link } from "@inertiajs/inertia-vue3";
import Search from "../Components/Search.vue";

export default defineComponent({
	props: {
		title: String,
	},

	components: {
		Head,
		JetApplicationMark,
		JetBanner,
		JetDropdown,
		JetDropdownLink,
		JetNavLink,
		JetResponsiveNavLink,
		Link,
		Search,
	},

	data() {
		return {
			showingNavigationDropdown: false,
		};
	},

	methods: {
		switchToTeam(team) {
			this.$inertia.put(
				route("current-team.update"),
				{
					team_id: team.id,
				},
				{
					preserveState: false,
				}
			);
		},

		logout() {
			this.$inertia.post(route("logout"));
		},
	},
});
</script>
