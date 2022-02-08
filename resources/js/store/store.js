import { createStore } from 'vuex';
import { basket } from '@/store/modules/basket.js';

export const store = createStore({
	modules: {
		basket
	}
  });

  store.subscribe((mutation, state) => {
	  const now = new Date()
	  const time = now.getTime() + 86400000
	  let currentStorage = JSON.parse(localStorage.getItem('store'));
	  let expiry = currentStorage?.expiry ? currentStorage.expiry : time;
	  
	  const item = {
		state: state,
		expiry: expiry,
	}
	if(state.basket.products.length) {
		localStorage.setItem('store', JSON.stringify(item));
	}
});
