import { useState } from 'react';
import { ArrowRight, Check } from 'lucide-react';
import './Newsletter.css';

function Newsletter() {
  const [done, setDone] = useState(false);
  const [email, setEmail] = useState('');
  return (
    <section className="newsletter">
      <div className="newsletter-copy">
        <span className="eyebrow">THE GOOD STUFF, OCCASIONALLY</span>
        <h2>
          A little note from us
          <br />
          to your inbox.
        </h2>
        <p>
          New arrivals, thoughtful guides, and first dibs on the good things. Never noise.
        </p>
      </div>
      <form
        onSubmit={(e) => {
          e.preventDefault();
          if (email.includes('@')) setDone(true);
        }}
        className="newsletter-form"
      >
        {done ? (
          <div className="newsletter-success">
            <Check size={18} /> You’re on the list. Talk soon.
          </div>
        ) : (
          <>
            <label htmlFor="newsletter-email" className="sr-only">
              Email address
            </label>
            <div className="input-arrow">
              <input
                id="newsletter-email"
                type="email"
                required
                placeholder="Your email address"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
              <button aria-label="Subscribe">
                <ArrowRight size={19} />
              </button>
            </div>
            <small>
              By subscribing, you agree to our friendly{' '}
              <a href="mailto:hello@techstore.example">privacy policy.</a>
            </small>
          </>
        )}
      </form>
      <div className="newsletter-orb" />
    </section>
  );
}

export default Newsletter;
