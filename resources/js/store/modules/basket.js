export const basket = {
    state: () => ({
        products: []
    }),
	getters: {
		getBasket( state ){
			return state.products;
		},
		getBasketCount(state) {
			return state.products.length
		}
	},
	mutations: {
		initialiseStore(state) {
			// Check if the ID exists
			if(localStorage.getItem('store')) {
				// Replace the state object with the stored item
				this.replaceState(
					Object.assign(state, JSON.parse(localStorage.getItem('store')))
				);
			}
		},
		setBasket( state, product ){
			state.products.push(product);
        },
    },
	
	actions: {
		addToBasket ({ commit, state }, product) {
			commit('setBasket', product)
		  }
	},
}