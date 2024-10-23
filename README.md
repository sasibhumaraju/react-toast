# @sasibhumaraju/react-toast

A lightweight and customizable toast notification library for React applications. Display important information, success messages, warnings, and error alerts easily with smooth animations.

## Features

- Display various types of notifications: `info`, `success`, `warning`, `error`
- Auto-dismiss notifications after a certain duration
- Configurable toast positions: `topRight`, `topLeft`, `bottomRight`, `bottomLeft`
- Customizable themes for `light`, `dark`, and `default` looks
- Animate toast notifications when they appear and disappear
- Support for manual or automatic dismissal of toasts

## Installation

You can install the package via npm:

```bash
npm install @sasibhumaraju/react-toast
```

or yarn:

```bash
yarn add @sasibhumaraju/react-toast
```

## Usage

Import the components and start using toast notifications in your React application:

```jsx
import { ToastsContainer, Toast } from '@sasibhumaraju/react-toast';

const App = () => {

  const showToast = () => {
    Toast.success('This is a success message');
  };

  return (
    <div>
      <button onClick={showToast}>Show Success Toast</button>

      {/* ToastsContainer will handle the rendering of toasts */}
      <ToastsContainer 
        placement="topRight" 
        theme="default" 
        autoClose={true} 
        isClosable={true}
        duration={3000} 
      />
    </div>
  );
};

export default App;
```

### Customizing Toasts

You can customize your toast notifications using the available props in `ToastsContainer`:

- **`placement`**: Position of the toast container. Choose from `topRight`, `topLeft`, `bottomRight`, `bottomLeft`.
- **`theme`**: Set the theme of the toast (either `default`, `light`, or `dark`).
- **`autoClose`**: Automatically dismiss the toast after a duration. Set to `true` or `false`.
- **`isClosable`**: Show or hide the close button for manual dismissal.
- **`duration`**: Time in milliseconds before the toast auto-closes (if `autoClose` is enabled).

### Example:

```jsx
<ToastsContainer 
  placement="bottomLeft" 
  theme="dark" 
  autoClose={true} 
  isClosable={false} 
  duration={5000}
/>
```

### Toast Methods

Use the following methods to trigger different types of toasts in your app:

- **`Toast.info(message)`**: Display an info toast.
- **`Toast.success(message)`**: Display a success toast.
- **`Toast.warning(message)`**: Display a warning toast.
- **`Toast.error(message)`**: Display an error toast.

Example:

```js
Toast.info('This is an info message');
Toast.success('Data saved successfully');
Toast.warning('Please check your input');
Toast.error('An error occurred while saving data');
```

### Updating Toasts

You can also update the content or type of an existing toast using its `tid` (toast ID):

```js
Toast.update({ tid: 1, type: 'warning', message: 'This is an updated message' });
```

### Removing Toasts

- **`Toast.delete(tid)`**: Remove the toast from the list completely.

## Contributing

Feel free to open issues or pull requests to contribute to the project.

## License

This project is licensed under the MIT License.

## Author 🤵
- [@sasibhumaraju](https://www.github.com/sasibhumaraju)
