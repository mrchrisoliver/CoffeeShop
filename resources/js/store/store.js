import { createStore } from 'vuex';
import { basket } from '@/store/modules/basket.js';

export const store = createStore({
	modules: {
		basket
	}
  });

  store.subscribe((mutation, state) => {
	// Store the state object as a JSON string
	localStorage.setItem('store', JSON.stringify(state));
});
