import { Link } from 'react-router-dom';
import { ChevronRight } from 'lucide-react';
import './Breadcrumb.css';

function Breadcrumb({ items = [] }) {
  return (
    <div className="breadcrumb">
      <Link to="/">Home</Link>
      {items.map((x, i) => (
        <span key={i}>
          <ChevronRight size={14} />
          {x.to ? <Link to={x.to}>{x.label}</Link> : <span>{x.label}</span>}
        </span>
      ))}
    </div>
  );
}

export default Breadcrumb;
