import { Link } from 'react-router-dom';
import { ArrowRight, ShoppingBag } from 'lucide-react';
import { products } from '../data/products.js';
import './Empty.css';

function Empty({ title, text, button = 'Explore products', to = '/products' }) {
  return (
    <div className="empty-state">
      <span className="empty-icon">
        <ShoppingBag size={24} />
      </span>
      <h3>{title}</h3>
      <p>{text}</p>
      <Link className="btn btn-dark" to={to}>
        {button}
        <ArrowRight size={16} />
      </Link>
    </div>
  );
}

export default Empty;
