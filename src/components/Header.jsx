import { useEffect, useState } from 'react';
import { Link, NavLink, useLocation } from 'react-router-dom';
import { ArrowRight, Heart, Menu, Moon, Search, ShoppingBag, Sun, X } from 'lucide-react';
import { products } from '../data/products.js';
import { useStore } from '../store.js';
import { money, img } from '../utils.js';
import './Header.css';

function Header({ menu, setMenu, searchOpen, setSearchOpen }) {
  const { count, wishlist, theme, toggleTheme } = useStore();
  const [query, setQuery] = useState('');
  const location = useLocation();
  useEffect(() => {
    setMenu(false);
    setSearchOpen(false);
    setQuery('');
  }, [location.pathname]);
  const results = query.trim()
    ? products
        .filter(
          (p) =>
            p.name.toLowerCase().includes(query.toLowerCase()) ||
            p.category.toLowerCase().includes(query.toLowerCase()),
        )
        .slice(0, 5)
    : [];
  return (
    <>
      <header className="header">
        <div className="header-inner">
          <Link to="/" className="brand">
            <span className="brand-mark">
              t<span>.</span>
            </span>
            <span>
              tech<span>store</span>
            </span>
          </Link>
          <nav className={menu ? 'nav open' : 'nav'}>
            <NavLink to="/products">Shop all</NavLink>
            <NavLink to="/products?category=Laptops">Computers</NavLink>
            <NavLink to="/products?category=Smartphones">Phones</NavLink>
            <NavLink to="/products?category=Headphones">Audio</NavLink>
            <NavLink to="/about">Our story</NavLink>
          </nav>
          <div className="header-actions">
            <button
              className="icon-btn search-trigger"
              aria-label="Search"
              onClick={() => setSearchOpen(!searchOpen)}
            >
              <Search size={19} />
            </button>
            <button
              className="icon-btn"
              aria-label={
                theme === 'dark' ? 'Switch to light mode' : 'Switch to dark mode'
              }
              onClick={toggleTheme}
            >
              {theme === 'dark' ? <Sun size={19} /> : <Moon size={19} />}
            </button>
            <Link aria-label="Wishlist" className="icon-btn heart-action" to="/wishlist">
              <Heart size={19} />
              {wishlist.length > 0 && <i>{wishlist.length}</i>}
            </Link>
            <Link aria-label="Shopping bag" className="icon-btn bag-action" to="/cart">
              <ShoppingBag size={19} />
              <i>{count}</i>
            </Link>
            <button
              className="icon-btn menu-trigger"
              aria-label="Open menu"
              onClick={() => setMenu(!menu)}
            >
              {menu ? <X size={22} /> : <Menu size={22} />}
            </button>
          </div>
        </div>
        {searchOpen && (
          <div className="search-panel">
            <div className="search-box">
              <Search size={19} />
              <input
                autoFocus
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                placeholder="Search products, brands and more…"
              />
              <button className="icon-btn" onClick={() => setSearchOpen(false)}>
                <X size={19} />
              </button>
            </div>
            {query && (
              <div className="search-results">
                {results.length ? (
                  results.map((p) => (
                    <Link key={p.id} to={'/products/' + p.id}>
                      <img src={p.image} alt="" />
                      <span>
                        {p.name}
                        <small>{p.category}</small>
                      </span>
                      <b>{money(p.price)}</b>
                    </Link>
                  ))
                ) : (
                  <p>No products found. Try another search.</p>
                )}
                <Link
                  className="all-results"
                  to={'/products?search=' + encodeURIComponent(query)}
                >
                  View all results <ArrowRight size={15} />
                </Link>
              </div>
            )}
          </div>
        )}
      </header>
    </>
  );
}

export default Header;
