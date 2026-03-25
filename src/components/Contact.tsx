import { Mail, Phone, MapPin, Send } from 'lucide-react';
import { motion } from 'motion/react';

const Contact = () => {
  return (
    <section id="contact" className="py-32 bg-white relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-24 items-center">
          <div 
            data-scroll 
            data-scroll-speed="0.5"
          >
            <span className="text-primary font-black uppercase tracking-[0.3em] text-xs mb-6 block">Get in Touch</span>
            <h2 className="text-6xl lg:text-8xl font-black text-slate-900 leading-[0.8] tracking-tighter mb-12">
              LET'S <br />
              <span className="text-primary italic font-serif font-normal">CONNECT.</span>
            </h2>
            
            <div className="space-y-12">
              {[
                { icon: Mail, label: 'Email', value: 'hello@codecrafter.com' },
                { icon: Phone, label: 'Phone', value: '+1 (555) 000-0000' },
                { icon: MapPin, label: 'Office', value: '123 Tech Avenue, CA' }
              ].map((item, i) => (
                <div key={i} className="flex items-center gap-8 group cursor-pointer">
                  <div className="w-16 h-16 rounded-2xl bg-slate-50 flex items-center justify-center group-hover:bg-primary group-hover:text-white transition-all duration-500">
                    <item.icon className="w-6 h-6" />
                  </div>
                  <div>
                    <p className="text-[10px] font-black uppercase tracking-[0.2em] text-slate-400 mb-1">{item.label}</p>
                    <p className="text-xl font-black text-slate-900 group-hover:text-primary transition-colors">{item.value}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="bg-slate-50 p-12 lg:p-16 rounded-[40px] shadow-sm border border-slate-100"
          >
            <form className="space-y-8">
              <div className="grid sm:grid-cols-2 gap-8">
                <div className="space-y-3">
                  <label className="text-[10px] font-black uppercase tracking-[0.2em] text-slate-400">Full Name</label>
                  <input
                    type="text"
                    className="w-full bg-white border-b-2 border-slate-200 px-0 py-4 text-slate-900 focus:outline-none focus:border-primary transition-colors font-bold"
                  />
                </div>
                <div className="space-y-3">
                  <label className="text-[10px] font-black uppercase tracking-[0.2em] text-slate-400">Email</label>
                  <input
                    type="email"
                    className="w-full bg-white border-b-2 border-slate-200 px-0 py-4 text-slate-900 focus:outline-none focus:border-primary transition-colors font-bold"
                  />
                </div>
              </div>
              <div className="space-y-3">
                <label className="text-[10px] font-black uppercase tracking-[0.2em] text-slate-400">Message</label>
                <textarea
                  rows={4}
                  className="w-full bg-white border-b-2 border-slate-200 px-0 py-4 text-slate-900 focus:outline-none focus:border-primary transition-colors font-bold resize-none"
                />
              </div>
              <button className="w-full bg-primary text-white font-black uppercase tracking-widest py-6 rounded-full shadow-2xl shadow-primary/20 hover:scale-[1.02] active:scale-[0.98] transition-all flex items-center justify-center gap-4">
                Send Message <Send className="w-5 h-5" />
              </button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
};


export default Contact;
