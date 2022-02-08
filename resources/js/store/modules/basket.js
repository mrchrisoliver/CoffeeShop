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
		},
		getBasketTotal(state) {
			if(state.products.length > 1) {
				return state.products.reduce(function (a, b) {
					return a.totalPrice + b.totalPrice; // returns object with property x
				});
			}
			return state.products[0].totalPrice;
		}
	},
	mutations: {
		initialiseStore(state) {
			const now = new Date()
			const time = now.getTime()

			if(localStorage.getItem('store')) {
				let storedState = JSON.parse(localStorage.getItem('store'));
				if(time >= storedState.expiry) {
					localStorage.removeItem('store');
				} else {
					this.replaceState(
						Object.assign(state, storedState.state)
					);
				}
			}
			
		},
		setBasket( state, product ){
			if (state.products.filter(item => item.id === product.id).length > 0) {
				let item = state.products.find(item => item['id'] === product.id);
				item.quantity += 1;
				item.totalPrice = parseFloat(item.totalPrice) + parseFloat(item.price)
			} else {
				product.quantity = 1;
				product.totalPrice = parseFloat(product.price)
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