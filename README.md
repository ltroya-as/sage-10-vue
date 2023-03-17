# Sage 10 Vue

### Usage of the vue component:

```html
<!-- web/app/themes/sage-theme/resources/views/layouts/app.blade.php -->
<h3>Vue should render the component here:</h3>
<app></app>
```

```js
// Vue configuration: web/app/themes/sage-theme/resources/scripts/app.js
createApp({
  // Every vue component has to be imported here in order to be available
  // in every template.
  components: {App}
}).mount("#main");
```

### Configure and run project

- Copy .env.example to .env and add db connection details. 
```shell
cp .env.example .env
```
- Install composer dependencies
```shell
composer install
```
- Install theme dependencies:
```shell
cd web/app/themes/sage-theme
composer install 
yarn 
```
- Modify the domain at `bud.config.js` at line `3`
- Run the theme dev mode or production mode:
```shell
# Development mode
yarn dev

# Production mode:
yarn build
```
