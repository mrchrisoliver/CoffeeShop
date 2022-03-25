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
				}).reduce((a,b ) => parseFloat(a) + parseFloat(b));
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

				let productVariation = currentProduct[0].variations.find(function (variation) {
					return variation['brew'] == product.brew && variation['weight'] == product.weight
				});
				if(productVariation) {
					productVariation.quantity += 1;
					productVariation.totalPrice = (parseFloat(productVariation.totalPrice) + parseFloat(productVariation.price)).toFixed(2)
				} else {
					product.variations = [];
					currentProduct[0].variations.push({
						quantity: 1,
					brew: product.brew,
					weight: product.weight,
					price: parseFloat(product.price).toFixed(2),
					totalPrice: parseFloat(product.price).toFixed(2)
					})
				}

				
				
			} else {
				product.variations = [];
				product.variations.push({
					quantity: 1,
					brew: product.brew,
					weight: product.weight,
					price: parseFloat(product.price).toFixed(2),
					totalPrice: parseFloat(product.price).toFixed(2)
				})
				product.quantity = 1;
				product.totalPrice = parseFloat(product.price).toFixed(2)
				state.products.push(product);
			}
        },
		clearBasket(state) {
			state.products = [];
		},
		decrementVariation(state, item) {
			let product = item.item;
			let variation = item.variation;
			let variationQuantity = item.variationQuantity ?? 1;
			
			let currentProduct = state.products.filter(function (item) {
				return item.id === product.id
			});

			alert(currentProduct[0].quantity);
			alert(variationQuantity);

			currentProduct[0].quantity -= variationQuantity;
			
			alert(currentProduct[0].quantity);
			

			let productVariation = currentProduct[0].variations.find(function (currentVariation) {
				return currentVariation['brew'] == variation.brew && currentVariation['weight'] == variation.weight
			});

			productVariation.quantity -= 1;
			if(productVariation.quantity == 0) {
				this.commit("removeProductVariation", item)
			}
			productVariation.totalPrice = (parseFloat(productVariation.totalPrice) - parseFloat(productVariation.price)).toFixed(2)

		},
		incrementVariation(state, item) {
			let product = item.item;
			let variation = item.variation;

			let currentProduct = state.products.filter(function (item) {
				return item.id === product.id
			});

			currentProduct[0].quantity += 1;

			let productVariation = currentProduct[0].variations.find(function (currentVariation) {
				return currentVariation['brew'] == variation.brew && currentVariation['weight'] == variation.weight
			});

			productVariation.quantity += 1;
			productVariation.totalPrice = (parseFloat(productVariation.totalPrice) + parseFloat(productVariation.price)).toFixed(2)

		},
		removeProduct(state, item) {
			let currentProduct = item.item;

			let indexOfProduct = state.products.findIndex(product => product.id == currentProduct.id);

			state.products.splice(indexOfProduct, 1);
		},
		removeProductVariation(state, item) {
			let currentProduct = item.item;
			let currentVariation = item.variation;

			let indexOfProduct = state.products.findIndex(product => product.id == currentProduct.id);
			let product = state.products[indexOfProduct];

			let indexOfVariation = product.variations.findIndex(variation => variation.id == currentVariation.id);
			
			let variationQuantity = state.products[indexOfProduct].variations[indexOfVariation].quantity;
			if(variationQuantity > 0) {
				item.variationQuantity = variationQuantity
				this.commit("decrementVariation", item)
			}
			state.products[indexOfProduct].variations.splice(indexOfVariation, 1);

			if(state.products[indexOfProduct].variations.length == 0) {
				this.commit("removeProduct", item)
			}

		}
    },
	
	actions: {
		addToBasket ({ commit, state }, product) {
			commit('setBasket', product)
		},
		decrementVariation({commit}, item) {
			commit('decrementVariation', item);
		},
		incrementVariation({commit}, item) {
			commit('incrementVariation', item);
		},
		removeProduct({commit}, item) {
			commit('removeProduct', item);
		},
		removeProductVariation({commit}, item) {
			commit('removeProductVariation', item);
		},
	},
}