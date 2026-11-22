import { useEffect, useState } from 'react';
import { Route, Routes } from 'react-router-dom';
import { Check } from 'lucide-react';
import { usePersistentState } from './hooks/usePersistentState.js';
import { Store } from './store.js';
import { systemTheme } from './utils.js';
import NotFound from './pages/NotFound.jsx';
import './App.css';

function App() {
  const [cart, setCart] = usePersistentState('techstore-cart', []);
  const [wishlist, setWishlist] = usePersistentState('techstore-wishlist', []);
  const [theme, setTheme] = usePersistentState('techstore-theme', systemTheme());
  const [toast, setToast] = useState('');
  const [menu, setMenu] = useState(false);
  const [searchOpen, setSearchOpen] = useState(false);
  useEffect(() => {
    if (!toast) return;
    const t = setTimeout(() => setToast(''), 2600);
    return () => clearTimeout(t);
  }, [toast]);
  const add = (id, qty = 1) => {
    setCart((c) => {
      const found = c.find((x) => x.id === id);
      return found
        ? c.map((x) => (x.id === id ? { ...x, qty: x.qty + qty } : x))
        : [...c, { id, qty }];
    });
    setToast('Added to your bag');
  };
  const change = (id, delta) =>
    setCart((c) =>
      c.map((x) => (x.id === id ? { ...x, qty: Math.max(1, x.qty + delta) } : x)),
    );
  const remove = (id) => setCart((c) => c.filter((x) => x.id !== id));
  const toggle = (id) => {
    setWishlist((w) => (w.includes(id) ? w.filter((x) => x !== id) : [...w, id]));
    setToast(wishlist.includes(id) ? 'Removed from wishlist' : 'Saved to wishlist');
  };
  const count = cart.reduce((n, x) => n + x.qty, 0);
  // Put the theme on <html data-theme="dark|light">; the Dark mode section of each .css file reacts to it.
  useEffect(() => {
    document.documentElement.dataset.theme = theme;
  }, [theme]);
  const toggleTheme = () => setTheme((t) => (t === 'dark' ? 'light' : 'dark'));

  const value = {
    cart,
    wishlist,
    add,
    change,
    remove,
    toggle,
    count,
    setCart,
    setToast,
    theme,
    toggleTheme,
  };
  return (
    <Store.Provider value={value}>
      <main>
        <Routes>
          <Route path="*" element={<NotFound />} />
        </Routes>
      </main>
      {toast && (
        <div className="toast">
          <Check size={17} />
          {toast}
        </div>
      )}
    </Store.Provider>
  );
}

export default App;
