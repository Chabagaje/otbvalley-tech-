import { useScrollReveal } from '../hooks/useScrollReveal';

const About = () => {
  return (
    <div className="pt-16 min-h-screen bg-[radial-gradient(ellipse_at_top_left,rgba(99,102,241,0.10),transparent_50%),linear-gradient(135deg,#060816_0%,#07111f_50%,#03060d_100%)]">
      <section className="section-padding max-width">
        <div className="glass rounded-[2.5rem] p-8 md:p-12 lg:p-16">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="reveal" ref={useScrollReveal()}>
              <span className="section-tag">About Us</span>
              <h1 className="mt-4 text-4xl md:text-5xl font-bold">Building Africa's Tech Future</h1>
              <p className="mt-4 text-white/60 text-lg">
                OTBValley is a technology innovation company committed to solving complex problems through software. We build digital products that empower businesses, streamline operations, and unlock new revenue streams.
              </p>
              <p className="mt-4 text-white/50">
                Our team brings together expertise from fintech, AI, real estate, and enterprise software to deliver solutions that are secure, scalable, and ahead of the curve.
              </p>
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
            </div>
            <div className="image-overlay reveal" ref={useScrollReveal()}>
              <img
                src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&w=800&q=80"
                alt="Team collaborating"
                className="h-80 md:h-96 w-full object-cover"
              />
              <div className="overlay"></div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;
