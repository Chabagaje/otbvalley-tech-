import { useScrollReveal } from '../hooks/useScrollReveal';

const Contact = () => {
  return (
    <div className="pt-16 min-h-screen bg-[radial-gradient(ellipse_at_top_left,rgba(99,102,241,0.10),transparent_50%),linear-gradient(135deg,#060816_0%,#07111f_50%,#03060d_100%)]">
      <section className="section-padding max-width">
        <div className="glass rounded-[2.5rem] p-8 md:p-12 lg:p-16">
          <div className="grid md:grid-cols-2 gap-12 items-start">
            <div className="reveal" ref={useScrollReveal()}>
              <span className="section-tag">Get in Touch</span>
              <h1 className="mt-4 text-4xl md:text-5xl font-bold">Let's Build Together</h1>
              <p className="mt-4 text-white/60 text-lg">
                Have a project in mind? We'd love to hear from you. Reach out and let's create something remarkable.
              </p>
              <div className="mt-8 space-y-4">
                <div className="flex items-center gap-4 text-white/70">
                  <i className="fas fa-envelope text-indigo-300 text-xl w-6"></i>
                  <span>hello@otbvalley.com</span>
                </div>
                <div className="flex items-center gap-4 text-white/70">
                  <i className="fas fa-phone-alt text-indigo-300 text-xl w-6"></i>
                  <span>+234 800 000 0000</span>
                </div>
                <div className="flex items-center gap-4 text-white/70">
                  <i className="fas fa-map-marker-alt text-indigo-300 text-xl w-6"></i>
                  <span>Lagos, Nigeria</span>
                </div>
              </div>
            </div>

            <div className="glass rounded-2xl p-6 md:p-8 reveal" ref={useScrollReveal()}>
              <form className="space-y-4">
                <div>
                  <label className="block text-sm font-medium text-white/70">Your Name</label>
                  <input type="text" placeholder="John Doe" className="w-full mt-1 px-4 py-3 rounded-xl bg-white/5 border border-white/10 text-white placeholder-white/30 focus:ring-2 focus:ring-indigo-500 focus:border-transparent" />
                </div>
                <div>
                  <label className="block text-sm font-medium text-white/70">Email Address</label>
                  <input type="email" placeholder="john@example.com" className="w-full mt-1 px-4 py-3 rounded-xl bg-white/5 border border-white/10 text-white placeholder-white/30 focus:ring-2 focus:ring-indigo-500 focus:border-transparent" />
                </div>
                <div>
                  <label className="block text-sm font-medium text-white/70">Message</label>
                  <textarea rows="4" placeholder="Tell us about your project..." className="w-full mt-1 px-4 py-3 rounded-xl bg-white/5 border border-white/10 text-white placeholder-white/30 focus:ring-2 focus:ring-indigo-500 focus:border-transparent resize-none"></textarea>
                </div>
                <button type="submit" className="btn-primary w-full justify-center">Send Message <i className="fas fa-paper-plane ml-2"></i></button>
              </form>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;
