import domReady from '@roots/sage/client/dom-ready';
import App from '@scripts/components/App.vue';
import {createApp} from 'vue';

/**
 * Application entrypoint
 */
domReady(async () => {
  const app = createApp({});
  app.component('app', App)
  app.mount("#main")
});

/**
 * @see {@link https://webpack.js.org/api/hot-module-replacement/}
 */
import.meta.webpackHot?.accept(console.error);
