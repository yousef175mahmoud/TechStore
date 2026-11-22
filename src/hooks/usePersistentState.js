import { useEffect, useState } from 'react';

/** State backed by localStorage, with safe fallbacks for unavailable or invalid storage. */
export function usePersistentState(key, initialValue) {
  const [value, setValue] = useState(() => {
    try {
      const saved = window.localStorage.getItem(key);
      return saved === null ? initialValue : JSON.parse(saved);
    } catch {
      return initialValue;
    }
  });

  useEffect(() => {
    try {
      window.localStorage.setItem(key, JSON.stringify(value));
    } catch {
      // Keep the in-memory store usable if browser storage is unavailable.
    }
  }, [key, value]);

  return [value, setValue];
}
