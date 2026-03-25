import { Code2, Facebook, Twitter, Instagram, Linkedin, Github } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-slate-950 text-white pt-32 pb-12 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-12 gap-16 mb-24">
          <div className="lg:col-span-5">
            <div className="flex items-center gap-2 mb-8">
              <div className="p-1.5 bg-primary rounded-lg">
                <Code2 className="w-6 h-6 text-white" />
              </div>
              <div className="flex flex-col leading-none">
                <span className="text-2xl font-black tracking-tighter text-primary uppercase">
                  Code<span className="text-white">Crafter</span>
                </span>
                <span className="text-[10px] font-bold tracking-[0.2em] text-slate-500 uppercase">
                  Web Solutions
                </span>
              </div>
            </div>
            <p className="text-xl text-slate-400 mb-12 leading-relaxed max-w-sm">
              We craft high-performance digital experiences that empower businesses to lead in their industry.
            </p>
            <div className="flex gap-4">
              {[Facebook, Twitter, Instagram, Linkedin, Github].map((Icon, i) => (
                <a
                  key={i}
                  href="#"
                  className="w-12 h-12 rounded-2xl bg-white/5 flex items-center justify-center hover:bg-primary hover:text-white transition-all duration-300 text-slate-400"
                >
                  <Icon className="w-5 h-5" />
                </a>
              ))}
            </div>
          </div>

          <div className="lg:col-span-2">
            <h4 className="text-[10px] font-black uppercase tracking-[0.2em] text-slate-500 mb-8">Company</h4>
            <ul className="space-y-4">
              {['Home', 'About Us', 'Services', 'Portfolio', 'Contact'].map((item) => (
                <li key={item}>
                  <a href="#" className="text-lg font-bold text-slate-400 hover:text-white transition-colors">
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div className="lg:col-span-2">
            <h4 className="text-[10px] font-black uppercase tracking-[0.2em] text-slate-500 mb-8">Services</h4>
            <ul className="space-y-4">
              {['Web Apps', 'Mobile Apps', 'SEO', 'UI/UX', 'Security'].map((item) => (
                <li key={item}>
                  <a href="#" className="text-lg font-bold text-slate-400 hover:text-white transition-colors">
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div className="lg:col-span-3">
            <h4 className="text-[10px] font-black uppercase tracking-[0.2em] text-slate-500 mb-8">Newsletter</h4>
            <p className="text-slate-400 mb-8 font-medium">Join our community for the latest digital insights.</p>
            <form className="space-y-4">
              <input
                type="email"
                placeholder="Email Address"
                className="w-full bg-white/5 border border-white/10 rounded-2xl px-6 py-4 text-white placeholder:text-slate-600 focus:outline-none focus:border-primary transition-colors font-bold"
              />
              <button className="w-full bg-primary text-white font-black uppercase tracking-widest py-4 rounded-2xl transition-all">
                Subscribe
              </button>
            </form>
          </div>
        </div>

        <div className="pt-12 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-8 text-slate-600 text-[10px] font-black uppercase tracking-[0.2em]">
          <p>© 2026 Code Crafter Web Solutions. Built with Precision.</p>
          <div className="flex gap-12">
            <a href="#" className="hover:text-white transition-colors">Privacy</a>
            <a href="#" className="hover:text-white transition-colors">Terms</a>
          </div>
        </div>
      </div>
    </footer>
  );
};


export default Footer;
