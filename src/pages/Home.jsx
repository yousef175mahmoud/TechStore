import { useState } from 'react';
import { Link } from 'react-router-dom';
import {
  ArrowDownRight,
  ArrowRight,
  ArrowUpRight,
  Heart,
  ShieldCheck,
  Sparkles,
  Truck,
} from 'lucide-react';
import { categories, products } from '../data/products.js';
import { fallback, img, FREE_SHIPPING_MIN } from '../utils.js';
import ProductGrid from '../components/ProductGrid.jsx';
import Newsletter from '../components/Newsletter.jsx';
import SectionHead from '../components/SectionHead.jsx';
import './Home.css';

function Home() {
  const [slide, setSlide] = useState(0);
  const heroItems = [products[0], products[4], products[8]];
  const hero = heroItems[slide];
  const feature = products.filter((p) =>
    ['macbook-pro-14', 'iphone-16-pro', 'sony-wh1000xm5', 'steam-deck-oled'].includes(
      p.id,
    ),
  );
  const best = products.filter((p) => p.tag === 'Bestseller');
  const categoriesDisplay = [
    ['Laptops', 'photo-1496181133206-80ce9b88a853', '01'],
    ['Smartphones', 'photo-1511707171634-5f897ff02aa9', '02'],
    ['Headphones', 'photo-1546435770-a3e426bf472b', '03'],
    ['Gaming', 'photo-1606144042614-b2417e99c4e3', '04'],
  ];
  return (
    <>
      <section className="hero">
        <div className="hero-copy">
          <div className="hero-kicker">
            <span className="live-dot" /> GOOD TECH. GOOD FEELING.
          </div>
          <h1>
            Make room for
            <br />
            <em>what matters.</em>
          </h1>
          <p>
            Thoughtful tech for the work you love, the people you love, and the little
            moments in between.
          </p>
          <div className="hero-buttons">
            <Link className="btn btn-light" to="/products">
              Find your thing <ArrowRight size={17} />
            </Link>
            <Link className="hero-text-link" to="/about">
              A little about us <ArrowUpRight size={15} />
            </Link>
          </div>
          <div className="hero-bottom">
            <div className="hero-dots">
              {heroItems.map((_, i) => (
                <button
                  key={i}
                  className={slide === i ? 'active' : ''}
                  onClick={() => setSlide(i)}
                  aria-label={'Show slide ' + (i + 1)}
                />
              ))}
            </div>
            <div className="hero-count">
              0{slide + 1}
              <span>/</span>0{heroItems.length}
            </div>
          </div>
        </div>
        <div className="hero-visual">
          <div className="hero-blob" />
          <img
            key={hero.id}
            src={hero.image}
            alt={hero.name}
            className="hero-img"
            onError={(e) => (e.currentTarget.src = fallback)}
          />
          <span className="hero-product-label">
            IN THE SPOTLIGHT <span>— {hero.category.toUpperCase()}</span>
          </span>
          <Link to={'/products/' + hero.id} className="hero-product-chip">
            <span>
              <small>MEET YOUR NEW FAVORITE</small>
              <b>{hero.name}</b>
            </span>
            <span className="chip-arrow">
              <ArrowUpRight size={19} />
            </span>
          </Link>
          <div className="hero-stamp">
            <span>
              GOOD
              <br />
              CHOICES
            </span>
            <span className="stamp-star">✳</span>
          </div>
        </div>
      </section>
      <section className="promise-strip">
        <div>
          <Truck size={18} />
          <span>Free shipping over ${FREE_SHIPPING_MIN}</span>
        </div>
        <i />
        <div>
          <ShieldCheck size={18} />
          <span>Thoughtfully tested</span>
        </div>
        <i />
        <div>
          <Heart size={18} />
          <span>Here for you, always</span>
        </div>
        <i />
        <div>
          <Sparkles size={18} />
          <span>Easy 30-day returns</span>
        </div>
      </section>
      <section className="section home-categories">
        <SectionHead
          eyebrow="FIND YOUR KIND OF THING"
          title={
            <>
              Good things, <em>by category.</em>
            </>
          }
          link="Explore everything"
          to="/products"
        />
        <div className="category-grid">
          {categoriesDisplay.map(([name, image, n]) => (
            <Link key={name} to={'/products?category=' + name} className="category-tile">
              <img src={img(image, 650)} alt="" />
              <span className="category-shade" />
              <span className="category-number">{n} / 04</span>
              <span className="category-label">
                {name}
                <ArrowUpRight size={18} />
              </span>
            </Link>
          ))}
        </div>
      </section>
      <section className="section featured-section">
        <SectionHead
          eyebrow="THE GOOD STUFF"
          title={
            <>
              A few of our <em>favorites.</em>
            </>
          }
          link="Shop all products"
          to="/products"
        />
        <ProductGrid items={feature} promo />
      </section>
      <section className="editorial">
        <div className="editorial-image">
          <img
            src={img('photo-1498050108023-c5249f4df085', 1000)}
            alt="A calm, considered workspace"
          />
          <span className="editorial-caption">MADE FOR MAKING THINGS</span>
        </div>
        <div className="editorial-copy">
          <span className="eyebrow">A LITTLE LESS, A LOT BETTER</span>
          <h2>
            Good tech should
            <br />
            feel <em>like you.</em>
          </h2>
          <p>
            Not more stuff for the sake of stuff. Just the right thing, from people who
            care. We handpick every product we carry so you can spend less time comparing
            and more time doing.
          </p>
          <Link className="btn btn-dark" to="/about">
            Get to know us <ArrowUpRight size={16} />
          </Link>
          <span className="editorial-scribble">✳ picked with care</span>
        </div>
      </section>
      <section className="section bestseller-section">
        <SectionHead
          eyebrow="LOVED FOR A REASON"
          title={
            <>
              The ones you <em>keep coming back to.</em>
            </>
          }
          link="See all bestsellers"
          to="/products?sort=popular"
        />
        <ProductGrid items={best} promo />
      </section>
      <section className="offer-banner">
        <div>
          <span className="eyebrow">A VERY GOOD FIRST IMPRESSION</span>
          <h2>
            Your next favorite,
            <br />
            <em>a little closer.</em>
          </h2>
          <p>A rotating collection of thoughtful finds, picked especially for you.</p>
          <Link to="/products" className="btn btn-light">
            Find something good <ArrowRight size={17} />
          </Link>
        </div>
        <div className="offer-graphic">
          <span>
            GOOD
            <br />
            THINGS
            <br />
            <i>inside</i>
          </span>
          <span className="offer-star">✳</span>
        </div>
        <span className="offer-fine">Thoughtfully chosen, always.</span>
      </section>
      <section className="section trust-section">
        <div className="trust-heading">
          <span className="eyebrow">WHAT WE BELIEVE</span>
          <h2>
            Small choices.
            <br />
            <em>Good ripples.</em>
          </h2>
          <Link to="/about" className="text-link">
            Our values <ArrowUpRight size={15} />
          </Link>
        </div>
        <div className="trust-item">
          <span className="trust-icon">
            <Heart size={19} />
          </span>
          <h3>Good for your day.</h3>
          <p>Useful, considered tech that earns a place in your everyday.</p>
        </div>
        <div className="trust-item">
          <span className="trust-icon">
            <Sparkles size={19} />
          </span>
          <h3>Picked with care.</h3>
          <p>Every product has a reason to be here. We make sure of it.</p>
        </div>
        <div className="trust-item">
          <span className="trust-icon">
            <ArrowDownRight size={19} />
          </span>
          <h3>Less is more.</h3>
          <p>Fewer choices, better ones. That’s a choice we can feel good about.</p>
        </div>
      </section>
      <Newsletter />
    </>
  );
}

export default Home;
