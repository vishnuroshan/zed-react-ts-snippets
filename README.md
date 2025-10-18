# React TypeScript Snippets for Zed IDE
![Dynamic JSON Badge](https://img.shields.io/badge/dynamic/json?url=https%3A%2F%2Fgithub.com%2Fvishnuroshan%2Fzed-react-ts-snippets%2Fraw%2Fmain%2Fdownloads.json&query=%24.downloads&label=Zed%20Downloads)

A comprehensive collection of React and TypeScript snippets for the [Zed IDE](https://zed.dev) to improve your development speed and productivity.

## Features

This extension provides a comprehensive set of snippets for React and TypeScript development, including:

- React functional components with TypeScript
- React hooks (useState, useEffect, useCallback, etc.)
- TypeScript types, interfaces, and type guards
- Function and class declarations
- Import/export statements
- Error handling patterns
- Custom hooks and advanced patterns
- And much more!

## Installation

### Method 1

1. Go to Extensions menu in Zed IDE
2. Search for "zed-react-ts-snippets"
3. Click "Install"

### Method 2

1. Clone this repo:

```
git clone https://github.com/vishnuroshan/zed-react-ts-snippets.git
```

2. Go to Extensions menu in Zed IDE
3. Click "Install Dev Extension"
4. Select the folder you cloned

## Usage

Start typing the snippet prefix (e.g., `rfc`) in a TSX file and press `Tab` to expand the snippet.

## Available Snippets

| Prefix                  | Description                           |
| ----------------------- | ------------------------------------- |
| **React Components**    |                                       |
| `rfc`                   | React Functional Component (const)    |
| `rff`                   | React Functional Component (function) |
| `rfc-i`                 | React Function Component with interface |
| `rfc-children`          | React Function Component with children prop |
| `rfc-ne`                | React Function Component with named export |
| `frc`                   | ForwardRef Component with props       |
| `hk`                    | Custom Hook Template                  |
| `rctx`                  | React Context with Provider and hook  |
| **React Hooks**         |                                       |
| `us`                    | useState Hook with TypeScript         |
| `uem`                   | useEffect Hook runs once at mount     |
| `uer`                   | useEffect Hook runs on every render   |
| `cleanup`               | useEffect Hook Cleanup                |
| `useMemo`               | useMemo Hook                          |
| `useCallback`           | useCallback Hook                      |
| `useRef`                | useRef Hook                           |
| `uih`                   | useImperativeHandle Hook              |
| `useLayoutEffect`       | useLayoutEffect Hook                  |
| `useDebugValue`         | useDebugValue Hook                    |
| `useContext`            | useContext Hook                       |
| `useReducer`            | useReducer Hook                       |
| **TypeScript Types**    |                                       |
| `tst`                   | New Type Alias                        |
| `tsi`                   | New Interface                         |
| `intr`                  | Interface                             |
| `typ`                   | Type                                  |
| `enum`                  | Enum                                  |
| `tsrcd`                 | Record utility type                   |
| `tgf`                   | Type Guard Function                   |
| **Functions & Classes** |                                       |
| `tsfn`                  | Function Declaration                  |
| `tsafn`                 | Arrow Function                        |
| `func`                  | Function                              |
| `tscls`                 | Class with Constructor                |
| `tsserv`                | Generic Service Class Template        |
| **Imports & Exports**   |                                       |
| `tsimprt`               | Import Statement                      |
| `tsxprt`                | Module Export                         |
| **Utilities**           |                                       |
| `tsfetch`               | Typed Fetch Function                  |
| `tstc`                  | Try/Catch block                       |

## Examples

### React Functional Component

Type `rfc` and press Tab:

```tsx
import * as React from "react";

interface ComponentNameProps {
  propName: type;
}

const ComponentName: React.FC<ComponentNameProps> = ({ propName }) => {
  return <div></div>;
};

export default ComponentName;
```

### React Function Component with Interface

Type `rfc-i` and press Tab:

```tsx
interface ComponentNameProps {
  propName: type;
}

const ComponentName = ({ propName }: ComponentNameProps): JSX.Element => {
  return (
    <div>
      
    </div>
  );
};

export default ComponentName;
```

### React Function Component with Children

Type `rfc-children` and press Tab:

```tsx
interface ComponentNameProps {
  propName: type;
  children?: React.ReactNode;
}

const ComponentName = ({ propName, children }: ComponentNameProps): JSX.Element => {
  return (
    <div>
      {children}
      
    </div>
  );
};

export default ComponentName;
```

### React Function Component with Named Export

Type `rfc-ne` and press Tab:

```tsx
interface ComponentNameProps {
  propName: type;
}

export const ComponentName = ({ propName }: ComponentNameProps): JSX.Element => {
  return (
    <div>
      
    </div>
  );
};
```

---

### useState Hook

Type `us` and press Tab:

```tsx
const [state, setState] = React.useState<type>(initialValue);
```

---

### useEffect Hook

Type `uem` and press Tab:

```tsx
React.useEffect(() => {}, []);
```

---

### TypeScript Interface

Type `tsi` and press Tab:

```tsx
interface InterfaceName {
  key: type;
}
```

---

## Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add some amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## License

This project is licensed under the GPL License - see the [LICENSE](LICENSE) file for details.

## Author

Vishnu Roshan - [vishnuroshan](https://github.com/vishnuroshan)

## Repository

[https://github.com/vishnuroshan/zed-react-ts-snippets](https://github.com/vishnuroshan/zed-react-ts-snippets)
