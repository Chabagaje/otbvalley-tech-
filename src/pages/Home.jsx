import { Link } from 'react-router-dom';
import { useScrollReveal } from '../hooks/useScrollReveal';
import {
  products,
  industries,
  reasons,
  testimonials,
  team,
  blogPosts,
} from '../data';

const Home = () => {
  const heroRef = useScrollReveal();
  // we'll apply ref to each section individually; for simplicity we'll use the hook inside each component.

  return (
    <div className="pt-16 bg-[radial-gradient(ellipse_at_top_left,rgba(99,102,241,0.10),transparent_50%),linear-gradient(135deg,#060816_0%,#07111f_50%,#03060d_100%)]">



{/* ─── HERO ─── */}
<section className="w-full flex justify-center pt-8 sm:pt-12 lg:pt-16 px-0">
  <div className="w-full sm:w-[95%] max-w-full sm:max-w-[95%] rounded-none sm:rounded-[2.5rem] glass p-4 sm:p-6 md:p-8 lg:p-12 reveal" ref={useScrollReveal()}>
    <div className="grid md:grid-cols-2 gap-6 md:gap-10 items-center">
      {/* Left: Text Content */}
      <div className="px-2 sm:px-0">
        <span className="section-tag">Innovation Hub</span>
        <h1 className="mt-4 sm:mt-6 text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-extrabold leading-tight tracking-tight text-balance">
          Technology That Powers
          <br />
          <span className="gradient-text">Payments, Property & Digital Experiences</span>
        </h1>
        <p className="mt-3 sm:mt-4 text-sm sm:text-base md:text-lg lg:text-xl text-white/60">
          We build innovative software products that help businesses grow faster through automation, payments, AI, and digital infrastructure.
        </p>
        <div className="flex flex-wrap gap-3 sm:gap-4 pt-4 sm:pt-6">
          <a href="#products" className="btn-primary px-4 sm:px-6 md:px-8 py-2.5 sm:py-3 md:py-4 text-xs sm:text-sm md:text-base">
            Explore Products <i className="fas fa-arrow-right ml-1 sm:ml-2"></i>
          </a>
          <Link to="/contact" className="btn-outline px-4 sm:px-6 md:px-8 py-2.5 sm:py-3 md:py-4 text-xs sm:text-sm md:text-base">
            Partner With Us
          </Link>
        </div>
        <div className="flex flex-wrap gap-3 sm:gap-4 md:gap-6 text-[10px] sm:text-xs md:text-sm text-white/40 pt-4 sm:pt-6">
          <span className="flex items-center gap-1 sm:gap-2"><i className="fas fa-check-circle text-emerald-400"></i> 5+ Products</span>
          <span className="flex items-center gap-1 sm:gap-2"><i className="fas fa-check-circle text-emerald-400"></i> 6+ Industries</span>
          <span className="flex items-center gap-1 sm:gap-2"><i className="fas fa-check-circle text-emerald-400"></i> 99.9% Uptime</span>
        </div>
      </div>

      {/* Right: Hero Image with Floating Cards */}
      <div className="relative mx-auto w-full max-w-full sm:max-w-[520px] float-anim mt-4 md:mt-0 px-1 sm:px-0">
        {/* Background glow orbs */}
        <div className="absolute -left-4 top-6 hidden lg:block h-24 w-24 rounded-full bg-cyan-400/20 blur-3xl" />
        <div className="absolute bottom-8 right-0 hidden lg:block h-20 w-20 rounded-full bg-fuchsia-500/20 blur-3xl" />

        {/* Main Image Container */}
        <div className="relative overflow-hidden rounded-none sm:rounded-[1.75rem] border border-white/10 bg-slate-950/70 p-1.5 sm:p-2 md:p-3 shadow-2xl lg:rotate-[-2deg]">
          <img
            src="https://i.pinimg.com/1200x/71/2f/69/712f695a86d70768dfa6365861ac9ca9.jpg"
            alt="Confident trader"
            className="w-full h-auto rounded-5 sm:rounded-[1.25rem]"
          />

          {/* Bottom Overlay Card */}
          <div className="absolute inset-x-2 sm:inset-x-3 md:inset-x-5 bottom-2 sm:bottom-3 md:bottom-5 rounded-lg sm:rounded-xl md:rounded-2xl border border-white/10 bg-slate-950/80 p-2 sm:p-3 md:p-4 backdrop-blur-xl float-anim-delay-3">
            <div className="flex items-center justify-between gap-1 sm:gap-2 md:gap-3">
              <div>
                <p className="text-[7px] sm:text-[9px] md:text-[11px] uppercase tracking-[0.15em] sm:tracking-[0.2em] md:tracking-[0.26em] text-indigo-300">
                  Innovation at work
                </p>
                <p className="mt-0.5 sm:mt-1 text-[10px] sm:text-xs md:text-base font-semibold text-white">
                  Building Africa's future
                </p>
              </div>
              <div className="rounded-full bg-emerald-500/15 px-1.5 sm:px-2 md:px-3 py-0.5 sm:py-1 text-[8px] sm:text-[10px] md:text-sm font-medium text-emerald-300 whitespace-nowrap">
                Live +4.2%
              </div>
            </div>
          </div>
        </div>

        {/* ─── FLOATING CARDS ─── */}

        {/* Card 1: Top Left */}
        <div className="absolute -bottom-2 sm:-bottom-3 md:-bottom-4 left-1 sm:left-2 md:left-3 rounded-lg sm:rounded-xl md:rounded-2xl border border-white/10 bg-white/10 p-1.5 sm:p-2 md:p-3 backdrop-blur-xl lg:rotate-[-4deg] float-anim-delay-1">
          <p className="text-[6px] sm:text-[8px] md:text-[11px] uppercase tracking-[0.1em] sm:tracking-[0.15em] md:tracking-[0.24em] text-white/45">Active Users</p>
          <p className="mt-0.5 sm:mt-1 text-[10px] sm:text-sm md:text-lg font-semibold text-white">50K+</p>
        </div>

        {/* Card 2: Top Right */}
        <div className="absolute -right-0.5 sm:-right-1 md:-right-2 top-1 sm:top-2 md:top-4 rounded-lg sm:rounded-xl md:rounded-2xl border border-white/10 bg-slate-950/70 p-1.5 sm:p-2 md:p-3 backdrop-blur-xl lg:rotate-[4deg] float-anim-delay-2">
          <p className="text-[6px] sm:text-[8px] md:text-[11px] uppercase tracking-[0.1em] sm:tracking-[0.15em] md:tracking-[0.24em] text-white/45">Revenue</p>
          <p className="mt-0.5 sm:mt-1 text-[10px] sm:text-sm md:text-lg font-semibold text-white">$10M+</p>
          <p className="text-[6px] sm:text-[8px] md:text-sm text-emerald-400">+12.4%</p>
        </div>

        {/* Card 3: Bottom Left */}
        <div className="absolute bottom-1 sm:bottom-2 md:bottom-4 left-1 sm:left-2 md:left-3 rounded-lg sm:rounded-xl md:rounded-2xl border border-white/10 bg-white/10 p-1.5 sm:p-2 md:p-3 backdrop-blur-xl lg:rotate-[-4deg] float-anim-delay-3">
          <p className="text-[6px] sm:text-[8px] md:text-[11px] uppercase tracking-[0.1em] sm:tracking-[0.15em] md:tracking-[0.24em] text-white/45">Transactions</p>
          <p className="mt-0.5 sm:mt-1 text-[10px] sm:text-sm md:text-lg font-semibold text-white">250K</p>
        </div>

        {/* Card 4: Right Bottom */}
        <div className="absolute -right-0.5 sm:-right-1 md:-right-2 bottom-6 sm:bottom-8 md:bottom-12 rounded-lg sm:rounded-xl md:rounded-2xl border border-white/10 bg-slate-950/70 p-1.5 sm:p-2 md:p-3 backdrop-blur-xl lg:rotate-[4deg] float-anim-delay-1">
          <p className="text-[6px] sm:text-[8px] md:text-[11px] uppercase tracking-[0.1em] sm:tracking-[0.15em] md:tracking-[0.24em] text-white/45">Satisfaction</p>
          <p className="mt-0.5 sm:mt-1 text-[10px] sm:text-sm md:text-lg font-semibold text-white">4.9★</p>
        </div>
      </div>
    </div>
  </div>
</section>
      

      {/* ─── STATS ─── */}
      <section className="section-padding max-width pt-0">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6">
          {[
            { label: "Active Users", value: "50K+" },
            { label: "Revenue Generated", value: "$10M+" },
            { label: "Transactions Processed", value: "250K" },
            { label: "Client Satisfaction", value: "4.9★" },
          ].map((stat) => (
            <div key={stat.label} className="glass rounded-2xl p-6 text-center reveal glass-hover" ref={useScrollReveal()}>
              <div className="stat-number">{stat.value}</div>
              <p className="text-white/50 text-sm">{stat.label}</p>
            </div>
          ))}
        </div>
      </section>

      {/* ─── PRODUCTS ─── */}
      <section id="products" className="section-padding max-width">
        <div className="text-center max-w-3xl mx-auto mb-16 reveal" ref={useScrollReveal()}>
          <span className="section-tag">Our Products</span>
          <h2 className="mt-4 text-3xl font-bold md:text-5xl">Digital Solutions for Every Need</h2>
          <p className="mt-2 text-white/50">Explore our ecosystem of innovative products.</p>
        </div>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {products.map((p) => (
            <div key={p.name} className="glass rounded-2xl p-6 reveal glass-hover" ref={useScrollReveal()}>
              <div className={`w-14 h-14 rounded-xl bg-gradient-to-br ${p.color} flex items-center justify-center text-white text-2xl`}>
                <i className={`fas ${p.icon}`}></i>
              </div>
              <h3 className="mt-4 text-xl font-bold">{p.name}</h3>
              <p className="text-sm font-medium text-indigo-300">{p.category}</p>
              <p className="mt-2 text-sm text-white/50">{p.description}</p>
              <a href="#" className="mt-4 inline-flex items-center gap-2 text-sm font-medium text-white/70 hover:text-white transition">
                Visit Product <i className="fas fa-arrow-right text-xs"></i>
              </a>
            </div>
          ))}
        </div>
      </section>

    {/* ─── ABOUT PREVIEW (links to /about) ─── */}
<section id="about" className="w-full py-16 md:py-20">
  <div className="w-full max-w-none px-6 md:px-12 py-12 md:py-16 bg-gradient-to-b from-slate-900/95 to-slate-800/90">
    <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-12 items-center">
      <div className="reveal" ref={useScrollReveal()}>
        <span className="section-tag">About OTBValley</span>
        <h2 className="mt-4 text-3xl font-bold md:text-5xl">Building Africa's Tech Future</h2>
        <p className="mt-4 text-white/60 text-lg">We are a technology innovation company committed to solving complex problems through software.</p>
        <div className="grid grid-cols-2 gap-4 mt-6">
          <div>
            <div className="flex items-center gap-2 text-indigo-300"><i className="fas fa-bolt"></i> <span className="text-white font-medium">Vision</span></div>
            <p className="text-sm text-white/50">Africa's leading tech hub.</p>
          </div>
          <div>
            <div className="flex items-center gap-2 text-indigo-300"><i className="fas fa-rocket"></i> <span className="text-white font-medium">Mission</span></div>
            <p className="text-sm text-white/50">Transformative tech for real problems.</p>
          </div>
          <div>
            <div className="flex items-center gap-2 text-indigo-300"><i className="fas fa-microchip"></i> <span className="text-white font-medium">Innovation</span></div>
            <p className="text-sm text-white/50">Pushing boundaries with emerging tech.</p>
          </div>
          <div>
            <div className="flex items-center gap-2 text-indigo-300"><i className="fas fa-check-circle"></i> <span className="text-white font-medium">Reliability</span></div>
            <p className="text-sm text-white/50">99.9% uptime guaranteed.</p>
          </div>
          <div className="col-span-2">
            <div className="flex items-center gap-2 text-indigo-300"><i className="fas fa-lock"></i> <span className="text-white font-medium">Security</span></div>
            <p className="text-sm text-white/50">ISO‑certified protocols & data protection.</p>
          </div>
        </div>
        <Link to="/about" className="btn-primary mt-6 inline-block">Learn More <i className="fas fa-arrow-right ml-2"></i></Link>
      </div>
      <div className="image-overlay reveal" ref={useScrollReveal()}>
        <img
          src="https://i.pinimg.com/736x/3f/d8/e2/3fd8e217cf681a705cba3fb186cc39e0.jpg"
          alt="African woman working on tech"
          className="h-80 md:h-96 w-full object-cover"
        />
        <div className="overlay"></div>
      </div>
    </div>
  </div>
</section>
      {/* ─── INDUSTRIES ─── */}
      <section id="industries" className="section-padding max-width">
        <div className="text-center max-w-3xl mx-auto mb-16 reveal" ref={useScrollReveal()}>
          <span className="section-tag">Industries</span>
          <h2 className="mt-4 text-3xl font-bold md:text-5xl">Transforming Key Sectors</h2>
          <p className="mt-2 text-white/50">We deliver technology solutions across diverse industries.</p>
        </div>
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-4">
          {industries.map((i) => (
            <div key={i.name} className="glass rounded-2xl p-5 text-center reveal glass-hover" ref={useScrollReveal()}>
              <div className="text-3xl text-indigo-300"><i className={`fas ${i.icon}`}></i></div>
              <p className="mt-2 font-medium">{i.name}</p>
            </div>
          ))}
        </div>
      </section>

     {/* ─── WHY CHOOSE US ─── */}
<section id="why" className="w-full py-16 md:py-20">
  <div className="neumo w-full max-w-none px-6 md:px-12 py-12 md:py-16">
    <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-12 items-center">
      {/* Left: Text Content */}
      <div>
        <div className="text-center md:text-left max-w-3xl mx-auto md:mx-0 mb-8 reveal" ref={useScrollReveal()}>
          <span className="section-tag">Why Choose Us</span>
          <h2 className="mt-4 text-3xl font-bold md:text-5xl">Built for Scale &amp; Reliability</h2>
          <p className="mt-2 text-white/50">We combine technology, security, and innovation to deliver unmatched value.</p>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
          {reasons.map((r) => (
            <div key={r.title} className="glass rounded-2xl p-6 reveal glass-hover" ref={useScrollReveal()}>
              <div className="flex items-start gap-4">
                <div className="text-indigo-300 text-2xl"><i className={`fas ${r.icon}`}></i></div>
                <div>
                  <h4 className="font-bold">{r.title}</h4>
                  <p className="text-sm text-white/50">{r.desc}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Right: Image */}
      <div className="relative reveal" ref={useScrollReveal()}>
        <div className="image-overlay w-full">
          <img
            src="https://i.pinimg.com/1200x/1e/2d/b7/1e2db7eec1cbbb72e664d655a1403420.jpg"
            alt="Beautiful African lady smiling confidently"
            className="h-80 md:h-[500px] w-full object-cover"
          />
          <div className="overlay"></div>
        </div>
      </div>
    </div>
  </div>
</section>

      {/* ─── TESTIMONIALS ─── */}
      <section className="section-padding max-width">
        <div className="text-center max-w-3xl mx-auto mb-16 reveal" ref={useScrollReveal()}>
          <span className="section-tag">Testimonials</span>
          <h2 className="mt-4 text-3xl font-bold md:text-5xl">What Our Clients Say</h2>
          <p className="mt-2 text-white/50">Real stories from real people who trust OTBValley.</p>
        </div>
        <div className="grid md:grid-cols-3 gap-6">
          {testimonials.map((t) => (
            <div key={t.name} className="glass rounded-2xl p-6 reveal glass-hover" ref={useScrollReveal()}>
              <div className="flex items-center gap-3 mb-3">
                <img src={t.image} alt={t.name} className="w-12 h-12 rounded-full object-cover" />
                <div>
                  <p className="font-bold">{t.name}</p>
                  <p className="text-xs text-white/40">{t.meta}</p>
                </div>
              </div>
              <p className="text-sm text-white/70">“{t.quote}”</p>
              <div className="mt-2 text-yellow-400"><i className="fas fa-star"></i><i className="fas fa-star"></i><i className="fas fa-star"></i><i className="fas fa-star"></i><i className="fas fa-star"></i></div>
            </div>
          ))}
        </div>
      </section>

      {/* ─── TEAM ─── */}
      <section className="section-padding max-width pt-0">
        <div className="text-center max-w-3xl mx-auto mb-16 reveal" ref={useScrollReveal()}>
          <span className="section-tag">Leadership</span>
          <h2 className="mt-4 text-3xl font-bold md:text-5xl">The People Behind the Vision</h2>
          <p className="mt-2 text-white/50">A diverse team of experts driving innovation.</p>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {team.map((m) => (
            <div key={m.name} className="glass rounded-2xl p-6 text-center reveal glass-hover" ref={useScrollReveal()}>
              <img src={m.image} alt={m.name} className="w-24 h-24 rounded-full mx-auto object-cover" />
              <h4 className="mt-3 font-bold">{m.name}</h4>
              <p className="text-xs text-white/40">{m.role}</p>
            </div>
          ))}
        </div>
      </section>

      {/* ─── BLOG ─── */}
      <section className="section-padding max-width pt-0">
        <div className="text-center max-w-3xl mx-auto mb-16 reveal" ref={useScrollReveal()}>
          <span className="section-tag">Insights</span>
          <h2 className="mt-4 text-3xl font-bold md:text-5xl">Latest from Our Blog</h2>
          <p className="mt-2 text-white/50">Stay ahead with market updates, tips, and announcements.</p>
        </div>
        <div className="grid md:grid-cols-3 gap-6">
          {blogPosts.map((post) => (
            <div key={post.title} className="glass overflow-hidden rounded-2xl reveal glass-hover" ref={useScrollReveal()}>
              <img src={post.image} alt={post.title} className="w-full h-48 object-cover" />
              <div className="p-5">
                <h4 className="font-bold">{post.title}</h4>
                <p className="text-xs text-white/40 mt-1">{post.date}</p>
                <a href="#" className="mt-2 inline-block text-sm text-indigo-400 hover:underline">Read More →</a>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* ─── CTA ─── */}
      <section id="contact" className="section-padding max-width pb-20">
        <div className="glass rounded-[2.5rem] p-8 md:p-16 text-center reveal glass-hover relative overflow-hidden" ref={useScrollReveal()}>
          <div className="absolute inset-0 bg-gradient-to-br from-indigo-600/5 via-fuchsia-500/5 to-cyan-500/5"></div>
          <div className="relative">
            <h2 className="text-3xl font-bold md:text-5xl text-balance">Ready to Build Something Great?</h2>
            <p className="mx-auto mt-4 max-w-2xl text-lg text-white/50">Partner with us to bring your digital vision to life.</p>
            <div className="mt-8 flex flex-wrap justify-center gap-4">
              <Link to="/contact" className="btn-primary px-8 py-4 text-base">Let's Talk <i className="fas fa-arrow-right ml-2"></i></Link>
              <a href="#products" className="btn-outline px-8 py-4 text-base">Explore Products</a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
