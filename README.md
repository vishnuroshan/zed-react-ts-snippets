# React TypeScript Snippets for Zed IDE
![Dynamic JSON Badge](https://img.shields.io/badge/dynamic/json?url=https%3A%2F%2Fgithub.com%2Fvishnuroshan%2Fzed-react-ts-snippets%2Fraw%2Fmain%2Fdownloads.json&query=%24.downloads&label=Zed%20Downloads)

A comprehensive collection of React and TypeScript snippets for the [Zed IDE](https://zed.dev) to improve your development speed and productivity.

## Features

This extension provides a comprehensive set of snippets for React and TypeScript development, including:

- React functional components with TypeScript
- React hooks (useState, useEffect, useCallback, etc.) - **Now available in both `.tsx` and `.ts` files!**
- TypeScript types, interfaces, and type guards
- Function and class declarations
- Import/export statements
- Error handling patterns
- Custom hooks and advanced patterns
- Tree-shakeable named imports (no more `React.` prefixes!)
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
or TypeScript file and press `Tab` to expand the snippet.

### File Support

- **`.tsx` files**: All snippets available (components, hooks, types, etc.)
- **`.ts` files**: React hooks and TypeScript utility snippets available
  - Perfect for custom hooks (`.hook.ts` files)
  - Ideal for separating logic from components
  - All hook snippets work without JSX syntax
Start typing the snippet prefix (e.g., `rfc`) in a TSX file and press `Tab` to expand the snippet.

## Available Snippets

| Prefix          (`.tsx` and `.ts`)    | Description                           |
| ----------------------- | ------------------------------------- |
| **React Components**    |                                       |
| `rfc`                   | React Functional Component (const)    |
| `rff`                   | React Functional Component (function) |
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
type { FC } from 'react';

interface ComponentNameProps {
  propName: type;
}

const ComponentName: FC<ComponentNameProps> = ({ propName }) => {
  return <div></div>;
};

export default ComponentName;
```

---

### useState Hook

Type `us` and press Tab:

```tsx
const [state, setState] = useState<type>(initialValue);
```

**Now works in `.ts` files too!** Perfect for custom hooks:

```typescript
// useCounter.hook.ts
import { useState } from 'react';

export function useCounter(initialValue: number) {
  const [count, setCount] = useState<number>(initialValue); // Type 'us' + Tab
  // ... rest of hook logic
}
```

---

### useEffect Hook

Type `uem` and press Tab:

```tsx

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

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## Author

Vishnu Roshan - [vishnuroshan](https://github.com/vishnuroshan)

## Repository

[https://github.com/vishnuroshan/zed-react-ts-snippets](https://github.com/vishnuroshan/zed-react-ts-snippets)
