import { ExternalLink } from 'lucide-react';
import { motion } from 'motion/react';

const projects = [
  {
    title: 'E-Commerce Platform',
    category: 'Web Development',
    image: 'https://picsum.photos/seed/shop/800/600',
    tags: ['React', 'Node.js', 'Tailwind'],
  },
  {
    title: 'Fitness Tracking App',
    category: 'Mobile App',
    image: 'https://picsum.photos/seed/fitness/800/600',
    tags: ['React Native', 'Firebase'],
  },
  {
    title: 'Corporate Dashboard',
    category: 'UI/UX Design',
    image: 'https://picsum.photos/seed/dashboard/800/600',
    tags: ['Figma', 'Next.js', 'D3.js'],
  },
  {
    title: 'Real Estate Portal',
    category: 'Web Development',
    image: 'https://picsum.photos/seed/house/800/600',
    tags: ['Vue.js', 'PostgreSQL'],
  },
];

const Portfolio = () => {
  return (
    <section id="portfolio" className="py-32 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col lg:flex-row justify-between items-end mb-24 gap-12">
          <div className="max-w-2xl">
            <span className="text-primary font-black uppercase tracking-[0.3em] text-xs mb-6 block">Selected Works</span>
            <h2 className="text-6xl lg:text-8xl font-black text-slate-900 leading-[0.8] tracking-tighter">
              DIGITAL <br />
              <span className="text-primary italic font-serif font-normal">SHOWCASE.</span>
            </h2>
          </div>
          <p className="text-xl text-slate-500 max-w-sm leading-relaxed font-medium">
            A collection of our most impactful digital transformations.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-24 mb-24">
          {projects.map((project, index) => (
            <motion.div
              key={project.title}
              data-scroll
              data-scroll-speed={index % 2 === 0 ? "0.5" : "1.5"}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: index * 0.1 }}
              className="group cursor-pointer"
            >
              <div className="aspect-[4/5] overflow-hidden rounded-[40px] mb-8 shadow-2xl">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-1000"
                  referrerPolicy="no-referrer"
                />
              </div>
              <div className="flex justify-between items-start">
                <div>
                  <div className="flex gap-2 mb-4">
                    {project.tags.map((tag) => (
                      <span key={tag} className="text-[10px] font-black uppercase tracking-widest text-primary bg-primary/5 px-3 py-1 rounded-full">
                        {tag}
                      </span>
                    ))}
                  </div>
                  <h3 className="text-3xl font-black text-slate-900 uppercase tracking-tight group-hover:text-primary transition-colors">
                    {project.title}
                  </h3>
                </div>
                <div className="w-12 h-12 rounded-full border border-slate-200 flex items-center justify-center group-hover:bg-primary group-hover:border-primary group-hover:text-white transition-all duration-300">
                  <ExternalLink className="w-5 h-5" />
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        <div className="text-center">
          <motion.button 
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="bg-slate-900 text-white px-12 py-6 rounded-full font-black uppercase tracking-widest text-sm shadow-2xl hover:bg-primary transition-colors"
          >
            View All Projects
          </motion.button>
        </div>
      </div>
    </section>
  );
};


export default Portfolio;
