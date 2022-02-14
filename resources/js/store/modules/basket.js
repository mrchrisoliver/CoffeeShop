export const basket = {
    state: () => ({
        products: []
    }),
	getters: {
		getBasket( state ){
			return state.products;
		},
		getBasketCount(state) {
			if(state.products.length >= 1) {
				return state.products.map(function (product) {
					if(product.variations.length > 1) {
						return product.variations.reduce(function(a, b) {
							return a.quantity + b.quantity
						});
					} else {
						return product.variations[0].quantity
					}
				}).reduce((a,b ) => a + b);
			}

			return 0;
		},
		getBasketTotal(state) {
			if(state.products.length >= 1) {
				return state.products.map(function (product) {
					if(product.variations.length > 1) {
						return product.variations.reduce(function(a, b) {
							return (parseFloat(a.totalPrice) + parseFloat(b.totalPrice)).toFixed(2)
						});
					} else {
						return product.variations[0].totalPrice
					}
				}).reduce((a,b ) => a + b);
			}

			return 0;
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
			let currentProduct = state.products.filter(function (item) {
				return item.id === product.id
			});
			

			if (currentProduct.length > 0){
				currentProduct[0].quantity += 1;
				currentProduct[0].totalPrice = (parseFloat(currentProduct[0].totalPrice) + parseFloat(currentProduct[0].price)).toFixed(2)
				console.log(currentProduct);

				let productVariation = currentProduct[0].variations.find(function (variation) {
					return variation['brew'] == product.brew && variation['weight'] == product.weight
				});
				if(productVariation) {
					productVariation.quantity += 1;
					productVariation.totalPrice = (parseFloat(productVariation.totalPrice) + parseFloat(productVariation.totalPrice)).toFixed(2)
				} else {
					product.variations = [];
					currentProduct[0].variations.push({
						quantity: 1,
					brew: product.brew,
					weight: product.weight,
					totalPrice: parseFloat(product.price).toFixed(2)
					})
				}

				
				
			} else {
				product.variations = [];
				product.variations.push({
					quantity: 1,
					brew: product.brew,
					weight: product.weight,
					totalPrice: parseFloat(product.price).toFixed(2)
				})
				product.quantity = 1;
				product.totalPrice = parseFloat(product.price).toFixed(2)
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