import { Globe, Smartphone, Search, Palette, Database, ShieldCheck, ArrowRight } from 'lucide-react';
import { motion } from 'motion/react';

const services = [
  {
    title: 'Web Development',
    description: 'Custom websites and web applications built with modern frameworks for speed and scalability.',
    icon: Globe,
    color: 'bg-blue-500',
  },
  {
    title: 'App Development',
    description: 'Native and cross-platform mobile applications that provide seamless user experiences.',
    icon: Smartphone,
    color: 'bg-emerald-500',
  },
  {
    title: 'SEO Optimization',
    description: 'Strategic search engine optimization to boost your visibility and drive organic traffic.',
    icon: Search,
    color: 'bg-amber-500',
  },
  {
    title: 'UI/UX Design',
    description: 'User-centered design that focuses on aesthetics, usability, and conversion optimization.',
    icon: Palette,
    color: 'bg-purple-500',
  },
  {
    title: 'Backend Solutions',
    description: 'Robust server-side architecture and database management for complex business needs.',
    icon: Database,
    color: 'bg-rose-500',
  },
  {
    title: 'Cyber Security',
    description: 'Comprehensive security audits and implementation to protect your digital assets.',
    icon: ShieldCheck,
    color: 'bg-indigo-500',
  },
];

const Services = () => {
  return (
    <section id="services" className="py-32 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col lg:flex-row justify-between items-end mb-24 gap-12">
          <div className="max-w-2xl">
            <span className="text-primary font-black uppercase tracking-[0.3em] text-xs mb-6 block">Expertise</span>
            <h2 className="text-6xl lg:text-8xl font-black text-slate-900 leading-[0.8] tracking-tighter">
              OUR <br />
              <span className="text-primary italic font-serif font-normal">CAPABILITIES.</span>
            </h2>
          </div>
          <p className="text-xl text-slate-500 max-w-sm leading-relaxed font-medium">
            We provide end-to-end digital solutions that scale with your business.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 border border-slate-100 overflow-hidden rounded-[40px]">
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              whileHover={{ y: -10 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="group p-12 bg-white hover:bg-primary transition-all duration-500 cursor-pointer border-b border-slate-100 lg:border-r last:border-r-0"
            >
              <div className="flex justify-between items-start mb-12">
                <motion.div 
                  whileHover={{ rotate: 15, scale: 1.1 }}
                  className={`w-16 h-16 rounded-2xl ${service.color} flex items-center justify-center text-white shadow-lg group-hover:bg-white group-hover:text-primary transition-all duration-500`}
                >
                  <service.icon className="w-8 h-8" />
                </motion.div>
                <span className="text-4xl font-black text-slate-100 group-hover:text-white/20 transition-colors">
                  0{index + 1}
                </span>
              </div>
              
              <h3 className="text-2xl font-black text-slate-900 mb-4 uppercase tracking-tight group-hover:text-white transition-colors">
                {service.title}
              </h3>
              <p className="text-slate-500 leading-relaxed group-hover:text-white/80 transition-colors">
                {service.description}
              </p>
              
              <div className="mt-12 flex items-center gap-4 text-primary font-black uppercase tracking-widest text-xs group-hover:text-white transition-colors">
                Explore Service
                <ArrowRight className="w-4 h-4 group-hover:translate-x-2 transition-transform" />
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};


export default Services;
