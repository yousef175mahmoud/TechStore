import { Link } from 'react-router-dom';
import { Heart, Plus, Star } from 'lucide-react';
import { products } from '../data/products.js';
import { useStore } from '../store.js';
import { money, fallback, img } from '../utils.js';
import './ProductCard.css';

function ProductCard({ product, promo = false }) {
  const { wishlist, toggle, add } = useStore();
  return (
    <article className="product-card">
      <div className="product-photo">
        <Link to={'/products/' + product.id}>
          <img
            loading="lazy"
            src={product.image}
            alt={product.name}
            onError={(e) => (e.currentTarget.src = fallback)}
          />
        </Link>
        {product.tag && (
          <span className={'product-tag ' + (product.tag === 'Sale' ? 'sale-tag' : '')}>
            {product.tag}
          </span>
        )}
        <button
          className={'wish-button ' + (wishlist.includes(product.id) ? 'selected' : '')}
          aria-label={
            wishlist.includes(product.id) ? 'Remove from wishlist' : 'Add to wishlist'
          }
          onClick={() => toggle(product.id)}
        >
          <Heart
            size={18}
            fill={wishlist.includes(product.id) ? 'currentColor' : 'none'}
          />
        </button>
        {promo && (
          <button className="quick-add" onClick={() => add(product.id)}>
            Quick add <Plus size={14} />
          </button>
        )}
      </div>
      <div className="product-info">
        <div className="product-meta">
          <span>{product.brand}</span>
          <span className="rating">
            <Star size={12} fill="currentColor" /> {product.rating}
          </span>
        </div>
        <Link className="product-name" to={'/products/' + product.id}>
          {product.name}
        </Link>
        <div className="price-row">
          <strong>{money(product.price)}</strong>
          {product.oldPrice && <del>{money(product.oldPrice)}</del>}
        </div>
      </div>
    </article>
  );
}

export default ProductCard;
