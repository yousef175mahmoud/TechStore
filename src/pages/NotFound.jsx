import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';

function NotFound() {
  return (
    <section className="confirmation section">
      <span className="eyebrow">A WRONG TURN, MAYBE?</span>
      <h1>
        Well, this is
        <br />
        <em>a little awkward.</em>
      </h1>
      <p>We can’t find that page, but there are plenty of good things waiting.</p>
      <Link to="/" className="btn btn-dark">
        Back to home <ArrowRight size={17} />
      </Link>
    </section>
  );
}

export default NotFound;
