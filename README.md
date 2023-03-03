# console-override

Keeps the console clean in desired environments.

## install

```
npm i @euclidean-dev/console-override
```

## usage

Default usage:

```js
import { ConsoleOverride } from "@euclidean-dev/console-override";

ConsoleOverride.configure(); // Default behavior
```

Custom usage:

```js
ConsoleOverride.configure({
  exclude: ["error", "info", "clear"],
  enabled: process.env.isProduction, // default true
  clearOnLoad: true, // default false
  debugKey: "my-key", // disable overrides by adding my-key=true in local storage
});
```
