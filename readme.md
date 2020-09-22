# Inertia.js Progress

This package adds an [NProgress](https://ricostacruz.com/nprogress/) page loading indicator to your Inertia.js app.

## Installation

```bash
npm install @inertiajs/progress
yarn add @inertiajs/progress
```

Once it's been installed, initialize it in your app:

```js
import Progress from '@inertiajs/progress'

Progress.init({
  // The delay after which the progress bar will appear during navigation, in milliseconds.
  // The progress bar appears after 250ms by default.
  delay: 250,

  // Sets whether the NProgress spinner will be shown.
  // Defaults to false.
  showSpinner: false,
})
```
