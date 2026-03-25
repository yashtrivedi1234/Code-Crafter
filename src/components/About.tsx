import { CheckCircle2 } from 'lucide-react';
import { motion } from 'motion/react';

const About = () => {
  return (
    <section id="about" className="py-32 bg-slate-50 relative overflow-hidden">
      {/* Decorative Circle */}
      <div 
        data-scroll 
        data-scroll-speed="3"
        className="absolute -top-20 -left-20 w-96 h-96 bg-primary/5 rounded-full blur-3xl" 
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-24 items-center">
          <div className="relative">
            <motion.div
              data-scroll
              data-scroll-speed="1.5"
              className="relative z-10 rounded-[40px] overflow-hidden shadow-2xl aspect-[4/5]"
            >
              <img
                src="https://picsum.photos/seed/team-office/1000/1250"
                alt="Our Team"
                className="w-full h-full object-cover"
                referrerPolicy="no-referrer"
              />
            </motion.div>
            
            {/* Experience Badge */}
            <motion.div
              data-scroll
              data-scroll-speed="2.5"
              className="absolute -bottom-12 -right-12 bg-primary text-white p-10 rounded-[40px] shadow-2xl z-20"
            >
              <p className="text-6xl font-black mb-1">6+</p>
              <p className="text-sm font-bold uppercase tracking-widest opacity-80">Years of <br />Excellence</p>
            </motion.div>
          </div>

          <div 
            data-scroll 
            data-scroll-speed="0.5"
          >
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <span className="text-primary font-black uppercase tracking-[0.3em] text-xs mb-6 block">Our Story</span>
              <h2 className="text-5xl lg:text-7xl font-black text-slate-900 mb-8 leading-[0.9] tracking-tighter">
                WE ARE <br />
                <span className="text-primary">ARCHITECTS</span> <br />
                OF THE WEB.
              </h2>
              <p className="text-xl text-slate-500 mb-10 leading-relaxed font-medium">
                We don't just build websites; we craft digital ecosystems. Our approach combines technical precision with creative flair to deliver results that matter.
              </p>
              
              <div className="grid sm:grid-cols-2 gap-8 mb-12">
                {[
                  { title: 'Innovation', desc: 'Pushing boundaries with every line of code.' },
                  { title: 'Precision', desc: 'Pixel-perfect designs and robust backends.' },
                  { title: 'Strategy', desc: 'Data-driven decisions for maximum impact.' },
                  { title: 'Support', desc: 'We are your long-term digital partners.' }
                ].map((item, index) => (
                  <div key={index} className="space-y-2">
                    <div className="flex items-center gap-3">
                      <CheckCircle2 className="w-5 h-5 text-primary" />
                      <h4 className="font-bold text-slate-900 uppercase tracking-wider text-sm">{item.title}</h4>
                    </div>
                    <p className="text-slate-500 text-sm leading-relaxed">{item.desc}</p>
                  </div>
                ))}
              </div>

              <button className="group flex items-center gap-4 text-primary font-black uppercase tracking-widest text-sm">
                Learn More About Us
                <div className="w-12 h-[2px] bg-primary group-hover:w-20 transition-all duration-300" />
              </button>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};


export default About;
