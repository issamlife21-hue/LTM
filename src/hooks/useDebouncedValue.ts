import * as React from "react";

// Returns a debounced copy of `value`. The input field stays instant; only
// the debounced value (used to drive filtering/search) lags by `delay` ms.
export function useDebouncedValue<T>(value: T, delay = 150): T {
  const [debounced, setDebounced] = React.useState(value);
  React.useEffect(() => {
    const id = setTimeout(() => setDebounced(value), delay);
    return () => clearTimeout(id);
  }, [value, delay]);
  return debounced;
}
