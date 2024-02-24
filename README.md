# Usage
```typescript
export function App() {
  const updateApp = useUpdate();

  const count = useRef(0);

  function onClick() {
    count.current++;
    updateApp();
  }

  return <p onClick={onClick}>count is: {count.current}</p>;
}
```
