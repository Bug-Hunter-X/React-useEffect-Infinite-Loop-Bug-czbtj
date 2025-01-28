```javascript
function MyComponent() {
  const [count, setCount] = useState(0);

  useEffect(() => {
    // Correct: Set count only once on mount
    let mounted = true;
    if (mounted) {
      setCount(prevCount => prevCount + 1);
    }
    return () => { mounted = false;};
  }, []);

  return <div>Count: {count}</div>;
}
```