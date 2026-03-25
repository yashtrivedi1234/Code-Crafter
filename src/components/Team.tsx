import { motion } from 'motion/react';
import { Github, Twitter, Linkedin } from 'lucide-react';

const team = [
  {
    name: 'Alex Rivera',
    role: 'Founder & CEO',
    image: 'https://picsum.photos/seed/person1/400/500',
    socials: [Github, Twitter, Linkedin],
  },
  {
    name: 'Sarah Chen',
    role: 'Lead Designer',
    image: 'https://picsum.photos/seed/person2/400/500',
    socials: [Github, Twitter, Linkedin],
  },
  {
    name: 'Marcus Thorne',
    role: 'Full Stack Developer',
    image: 'https://picsum.photos/seed/person3/400/500',
    socials: [Github, Twitter, Linkedin],
  },
  {
    name: 'Elena Vance',
    role: 'SEO Specialist',
    image: 'https://picsum.photos/seed/person4/400/500',
    socials: [Github, Twitter, Linkedin],
  },
];

const Team = () => {
  return (
    <section id="team" className="py-32 bg-slate-50 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="flex flex-col lg:flex-row justify-between items-end mb-24 gap-12">
          <div className="max-w-2xl">
            <span className="text-primary font-black uppercase tracking-[0.3em] text-xs mb-6 block">Our People</span>
            <h2 className="text-6xl lg:text-8xl font-black text-slate-900 leading-[0.8] tracking-tighter">
              MEET THE <br />
              <span className="text-primary italic font-serif font-normal">EXPERTS.</span>
            </h2>
          </div>
          <p className="text-xl text-slate-500 max-w-sm leading-relaxed font-medium">
            A diverse team of passionate creators dedicated to your digital success.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {team.map((member, index) => (
            <motion.div
              key={member.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="group"
            >
              <div className="relative aspect-[4/5] rounded-[32px] overflow-hidden mb-6 shadow-xl">
                <img
                  src={member.image}
                  alt={member.name}
                  className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-700 group-hover:scale-110"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-900/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex items-end justify-center p-8">
                  <div className="flex gap-4">
                    {member.socials.map((Icon, i) => (
                      <a
                        key={i}
                        href="#"
                        className="w-10 h-10 rounded-xl bg-white/10 backdrop-blur-md flex items-center justify-center hover:bg-primary hover:text-white transition-all text-white"
                      >
                        <Icon className="w-4 h-4" />
                      </a>
                    ))}
                  </div>
                </div>
              </div>
              
              <h3 className="text-2xl font-black text-slate-900 uppercase tracking-tight mb-1">
                {member.name}
              </h3>
              <p className="text-primary font-bold uppercase tracking-widest text-xs">
                {member.role}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Team;
