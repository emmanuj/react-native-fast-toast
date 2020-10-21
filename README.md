# react-native-fast-toast

A Toast component for react-native, supports Android, IOS, Web, Windows

## Credit Where Credit is Due
This project is a fork of https://github.com/arnnis/react-native-fast-toast and https://github.com/tuanth89/react-native-fast-toast.
I've cloned the project here in order to provide better support and maintenance.

## Features

- Normal, Success, Danger and Warning toasts
- Customizable and Icon support
- Smooth animation
- Fully typed with TypeScript

## Demo

![](https://user-images.githubusercontent.com/61647712/92497391-8864e900-f20e-11ea-93d8-bacc2b856583.gif)

## Install

Open a Terminal in the project root and run:

```sh
yarn add @emmanuj/react-native-fast-toast
```

## Basic Example

```js
import React, { useEffect, useRef } from "react";
import Toast from "react-native-fast-toast";

export default function App() {
  const toast = useRef(null);

  useEffect(() => {
    toast.current.show("Task finished successfully");
  }, []);

  return (
    <>
      <RestOfYourApp />
      <Toast ref={toast} />
    </>
  );
}
```

## Global Example

If you want to have one Toast and use it everywhere on your app. do this in root component of your app (index.js or App.js)

```js
import Toast from "react-native-fast-toast";

export default function App() {
  return (
    <>
      <RestOfYourApp />
      <Toast ref={(ref) => global['toast'] = ref} />
    </>
  );
}
```

now you can call `toast.show()` everywhere on app. like alert.

Check [App.tsx](/example/src/App.tsx) in example app for typescript.

## Hook Example
Alternatively you can use hooks to call toasts, to do so, wrap `ToastProvier` to your root component (index.js or App.js)
```jsx
import { ToastProvider } from 'react-native-fast-toast';

export default function App() {
  return (
    <ToastProvider>
      <RestOfYourApp />
    </ToastProvider>
  );
}
```

Then use hook like this everywhere:
```js
import { useToast } from 'react-native-fast-toast'

const Component = () => {
  const toast = useToast()
}
```

## Type Example

```js
toast.show("Task finished successfully", { type: "success" });
```

## Icon Example

```js
toast.show("Task finished successfully", { icon: <Icon /> });
```

or

```jsx
<Toast
  ref={toast}
  icon={<Icon />}
  successIcon={<SuccessIcon />}
  dangerIcon={<DangerIcon />}
  warningIcon={<WarningIcon />}
/>
```

## Customize

```js
toast.show("Task finished successfully", {
  duration: 5000,
  style: { padding: 0 },
  textStyle: { fontSize: 20 },
});
```

You can customize default options in Toast component

```js
<Toast
  duration={5000}
  textStyle={{ fontSize: 20 }}
  successColor="green"
  dangerColor="red"
  warningColor="orange"
/>
```

## Placement

```js
<Toast
  placement="bottom | top" // default to bottom
  offset={50} // distance from bottom or top. ( default to 60 )
/>
```

## Contributing

Pull request are welcome.


## License
MIT
