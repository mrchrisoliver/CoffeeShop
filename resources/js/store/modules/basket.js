export const basket = {
    state: () => ({
        products: []
    }),
	getters: {
		getBasket( state ){
			return state.products;
		},
		getBasketCount(state) {
			if(state.products.length < 1) {
				return 0;
			}
			if(state.products.length > 1) {
				return state.products.reduce(function (a, b) {
					return a.quantity + b.quantity; // returns object with property x
				});
			}
			return state.products[0].quantity;
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
			if (state.products.filter(item => item.id === product.id).length > 0) {
				let item = state.products.find(item => item['id'] === product.id);
				item.quantity += 1;

			} else {
				product.quantity = 1;
				state.products.push(product);
			}
        },
		clearBasket(state) {
			state.products = [];
		}
    },
	
	actions: {
		addToBasket ({ commit, state }, product) {
			commit('setBasket', product)
		  }
	},
}