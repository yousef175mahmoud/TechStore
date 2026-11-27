import ProductCard from './ProductCard.jsx';
import Empty from './Empty.jsx';
import './ProductGrid.css';

function ProductGrid({ items, promo = false }) {
  if (!items.length)
    return <Empty title="Nothing here yet" text="Try another category or search." />;
  return (
    <div className="product-grid">
      {items.map((p) => (
        <ProductCard key={p.id} product={p} promo={promo} />
      ))}
    </div>
  );
}

export default ProductGrid;
