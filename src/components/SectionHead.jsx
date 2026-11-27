import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import './SectionHead.css';

function SectionHead({ eyebrow, title, link, to }) {
  return (
    <div className="section-head">
      <div>
        <span className="eyebrow">{eyebrow}</span>
        <h2>{title}</h2>
      </div>
      <Link className="text-link section-link" to={to}>
        {link}
        <ArrowRight size={16} />
      </Link>
    </div>
  );
}

export default SectionHead;
