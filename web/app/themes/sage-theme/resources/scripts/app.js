import domReady from '@roots/sage/client/dom-ready';
import App from './components/App.vue'
import {createApp} from 'vue';
import Vue from 'vue';

/**
 * Application entrypoint
 */
domReady(async () => {
  // ...
});

createApp({
  // Every vue component has to be imported here in order to be available
  // in every template.
  components: {App}
}).mount("#main");

/**
 * @see {@link https://webpack.js.org/api/hot-module-replacement/}
 */
import.meta.webpackHot?.accept(console.error);
