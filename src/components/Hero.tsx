import { useRef } from 'react';
import { ArrowRight, Code, Smartphone, Globe } from 'lucide-react';
import { motion, useScroll, useTransform } from 'motion/react';

const Hero = () => {
  const containerRef = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"]
  });

  const y1 = useTransform(scrollYProgress, [0, 1], [0, 200]);
  const y2 = useTransform(scrollYProgress, [0, 1], [0, -150]);
  const rotate = useTransform(scrollYProgress, [0, 1], [0, 10]);

  return (
    <section ref={containerRef} className="relative min-h-screen flex items-center pt-20 overflow-hidden bg-white">
      {/* Background Text - Editorial Style */}
      <motion.div 
        style={{ y: y2 }}
        className="absolute top-1/4 left-0 w-full select-none pointer-events-none opacity-[0.03] overflow-hidden whitespace-nowrap"
      >
        <span className="text-[25vw] font-black uppercase leading-none">CRAFTING DIGITAL</span>
      </motion.div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid lg:grid-cols-12 gap-12 items-center">
          <div className="lg:col-span-7">
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            >
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/5 text-primary text-xs font-bold uppercase tracking-widest mb-8 border border-primary/10">
                <span className="relative flex h-2 w-2">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-primary"></span>
                </span>
                Based in Silicon Valley
              </div>
              
              <h1 className="text-6xl lg:text-[110px] font-black text-slate-900 leading-[0.9] mb-8 tracking-tighter">
                WE BUILD <br />
                <span className="text-primary italic font-serif font-normal">DIGITAL</span> <br />
                EXPERIENCES.
              </h1>
              
              <p className="text-xl text-slate-500 mb-12 max-w-xl leading-relaxed font-medium">
                Code Crafter Web Solutions is a boutique agency specializing in high-performance web applications and bespoke digital identities.
              </p>
              
              <div className="flex flex-wrap gap-6">
                <motion.button 
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="bg-primary text-white px-10 py-5 rounded-full font-bold text-lg shadow-2xl shadow-primary/20 flex items-center gap-3 group"
                >
                  Start a Project <ArrowRight className="w-6 h-6 group-hover:translate-x-1 transition-transform" />
                </motion.button>
                <motion.button 
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="bg-white border-2 border-slate-200 text-slate-900 px-10 py-5 rounded-full font-bold text-lg hover:border-primary transition-colors"
                >
                  View Work
                </motion.button>
              </div>
            </motion.div>
          </div>

          <div className="lg:col-span-5 relative">
            <motion.div
              style={{ y: y1, rotate }}
              initial={{ opacity: 0, scale: 0.9, rotate: 5 }}
              animate={{ opacity: 1, scale: 1, rotate: 0 }}
              transition={{ 
                opacity: { duration: 1, delay: 0.2 },
                scale: { duration: 1, delay: 0.2 },
                rotate: { duration: 1, delay: 0.2 }
              }}
              className="relative aspect-[4/5] rounded-[40px] overflow-hidden shadow-2xl"
            >
              <img
                src="https://picsum.photos/seed/tech-minimal/1000/1250"
                alt="Digital Craft"
                className="w-full h-full object-cover"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-primary/40 to-transparent" />
            </motion.div>
            
            {/* Floating Stats Card */}
            <motion.div
              style={{ y: y2 }}
              className="absolute -bottom-10 -left-10 bg-white p-8 rounded-[32px] shadow-2xl border border-slate-100 hidden xl:block"
            >
              <div className="flex items-center gap-4">
                <div className="w-16 h-16 bg-primary/10 rounded-2xl flex items-center justify-center">
                  <Globe className="w-8 h-8 text-primary" />
                </div>
                <div>
                  <p className="text-4xl font-black text-slate-900 leading-none mb-1">99%</p>
                  <p className="text-sm font-bold text-slate-400 uppercase tracking-widest">Client Satisfaction</p>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};


export default Hero;
