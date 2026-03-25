import { useRef, useEffect } from 'react';
import { Users, Briefcase, Award, Coffee } from 'lucide-react';
import { motion, useMotionValue, useSpring, useTransform, useInView } from 'motion/react';

const Counter = ({ value, suffix = "" }: { value: number; suffix?: string }) => {
  const ref = useRef<HTMLSpanElement>(null);
  const motionValue = useMotionValue(0);
  const springValue = useSpring(motionValue, {
    damping: 30,
    stiffness: 100,
  });
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  useEffect(() => {
    if (isInView) {
      motionValue.set(value);
    }
  }, [isInView, value, motionValue]);

  const displayValue = useTransform(springValue, (latest) => Math.round(latest).toLocaleString());

  return (
    <span ref={ref} className="flex items-baseline">
      <motion.span>{displayValue}</motion.span>
      {suffix && <span className="text-primary ml-1">{suffix}</span>}
    </span>
  );
};

const stats = [
  { label: 'Projects Completed', value: 450, suffix: '+', icon: Briefcase },
  { label: 'Happy Clients', value: 320, suffix: '+', icon: Users },
  { label: 'Awards Won', value: 15, suffix: '+', icon: Award },
  { label: 'Cups of Coffee', value: 12, suffix: 'k+', icon: Coffee },
];

const Stats = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
        ease: [0.16, 1, 0.3, 1],
      },
    },
  };

  return (
    <section className="py-32 bg-slate-950 relative overflow-hidden">
      {/* Dot Grid Background */}
      <div className="absolute inset-0 opacity-[0.05] pointer-events-none" 
           style={{ backgroundImage: 'radial-gradient(circle, #08536b 1px, transparent 1px)', backgroundSize: '40px 40px' }} 
      />

      {/* Atmospheric Background */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <motion.div 
          animate={{ 
            scale: [1, 1.2, 1],
            opacity: [0.1, 0.2, 0.1],
          }}
          transition={{ duration: 10, repeat: Infinity, ease: "linear" }}
          className="absolute top-1/4 left-1/4 w-[500px] h-[500px] bg-primary/20 rounded-full blur-[120px]" 
        />
        <motion.div 
          animate={{ 
            scale: [1.2, 1, 1.2],
            opacity: [0.1, 0.2, 0.1],
          }}
          transition={{ duration: 12, repeat: Infinity, ease: "linear" }}
          className="absolute bottom-1/4 right-1/4 w-[400px] h-[400px] bg-secondary/20 rounded-full blur-[100px]" 
        />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div 
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="grid grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-24"
        >
          {stats.map((stat) => (
            <motion.div
              key={stat.label}
              variants={itemVariants}
              className="relative group"
            >
              <div className="mb-8 relative">
                {/* Subtle Glow behind number */}
                <div className="absolute -inset-4 bg-primary/5 rounded-full blur-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                
                <h3 className="text-6xl lg:text-8xl font-black text-white tracking-tighter relative z-10">
                  <Counter value={stat.value} suffix={stat.suffix} />
                </h3>
              </div>
              
              <div className="flex items-center gap-4 relative z-10">
                <div className="w-8 h-[2px] bg-primary group-hover:w-16 transition-all duration-500 ease-out" />
                <p className="text-slate-400 font-black uppercase tracking-[0.2em] text-[10px] group-hover:text-white transition-colors duration-300">
                  {stat.label}
                </p>
              </div>

              {/* Decorative Icon in background */}
              <stat.icon className="absolute -top-12 -right-8 w-32 h-32 text-white/[0.02] group-hover:text-primary/[0.05] transition-colors duration-500 pointer-events-none" />
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};


export default Stats;
