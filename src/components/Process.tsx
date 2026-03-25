import { motion } from 'motion/react';
import { Search, Lightbulb, Code, Rocket } from 'lucide-react';

const steps = [
  {
    title: 'Discovery',
    description: 'We dive deep into your business goals, target audience, and market landscape to build a solid foundation.',
    icon: Search,
    color: 'bg-blue-500',
  },
  {
    title: 'Strategy & Design',
    description: 'Crafting the blueprint and visual identity. We focus on user-centric design that converts.',
    icon: Lightbulb,
    color: 'bg-purple-500',
  },
  {
    title: 'Development',
    description: 'Bringing designs to life with clean, efficient code and robust backend systems.',
    icon: Code,
    color: 'bg-emerald-500',
  },
  {
    title: 'Launch & Beyond',
    description: 'Deploying your project and providing ongoing support to ensure long-term success.',
    icon: Rocket,
    color: 'bg-rose-500',
  },
];

const Process = () => {
  return (
    <section id="process" className="py-32 bg-slate-950 relative overflow-hidden">
      {/* Background Decorative Elements */}
      <div className="absolute top-0 left-0 w-full h-full pointer-events-none opacity-20">
        <div className="absolute top-1/4 -left-20 w-96 h-96 bg-primary/20 rounded-full blur-[120px]" />
        <div className="absolute bottom-1/4 -right-20 w-96 h-96 bg-secondary/20 rounded-full blur-[120px]" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-24">
          <motion.span 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-primary font-black uppercase tracking-[0.3em] text-xs mb-6 block"
          >
            Our Workflow
          </motion.span>
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-5xl lg:text-7xl font-black text-white leading-[0.9] tracking-tighter uppercase"
          >
            How We <span className="text-primary italic font-serif font-normal lowercase">Create</span> Magic.
          </motion.h2>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {steps.map((step, index) => (
            <motion.div
              key={step.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="relative group p-8 rounded-[32px] bg-white/5 border border-white/10 hover:bg-white/10 transition-all duration-500"
            >
              <div className="absolute -top-6 -left-6 text-8xl font-black text-white/5 group-hover:text-primary/10 transition-colors pointer-events-none">
                0{index + 1}
              </div>
              
              <div className={`w-16 h-16 rounded-2xl ${step.color} flex items-center justify-center text-white mb-8 shadow-lg group-hover:scale-110 transition-transform duration-500`}>
                <step.icon className="w-8 h-8" />
              </div>
              
              <h3 className="text-2xl font-black text-white mb-4 uppercase tracking-tight">
                {step.title}
              </h3>
              <p className="text-slate-400 leading-relaxed text-sm">
                {step.description}
              </p>
              
              {index < steps.length - 1 && (
                <div className="hidden lg:block absolute top-1/2 -right-4 w-8 h-[2px] bg-white/10 z-20" />
              )}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Process;
