require('./bootstrap');

import { createApp, h, setup } from 'vue';
import { createInertiaApp } from '@inertiajs/inertia-vue3';
import { InertiaProgress } from '@inertiajs/progress';
import { store } from '@/store/store.js';

const appName = window.document.getElementsByTagName('title')[0]?.innerText || 'Laravel';

createInertiaApp({
    title: (title) => `${title} - ${appName}`,
    resolve: (name) => require(`./Pages/${name}.vue`),
    setup({ el, app, props, plugin }) {

        return createApp({ 
				beforeCreate() {
					this.$store.commit('initialiseStore');
				},
				render: () => h(app, props) 
			})
            .use(plugin)
			.use(store)
            .mixin({ methods: { route } })
            .mount(el);
    },
});

InertiaProgress.init({ color: '#4B5563' });
