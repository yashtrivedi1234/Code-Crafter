import { Quote, Star } from 'lucide-react';
import { motion } from 'motion/react';

const testimonials = [
  {
    name: 'Sarah Johnson',
    role: 'CEO at TechFlow',
    content: 'Code Crafter transformed our vision into a reality. Their attention to detail and technical expertise is unmatched. Our conversion rate increased by 40% after the redesign.',
    image: 'https://i.pravatar.cc/100?img=32',
  },
  {
    name: 'Michael Chen',
    role: 'Founder of GreenLeaf',
    content: 'Working with this agency was a breeze. They understood our requirements perfectly and delivered a high-quality product ahead of schedule. Highly recommended!',
    image: 'https://i.pravatar.cc/100?img=12',
  },
  {
    name: 'Emily Davis',
    role: 'Marketing Director at Pulse',
    content: 'The UI/UX design they provided for our app was stunning. Our users love the new interface, and the feedback has been overwhelmingly positive.',
    image: 'https://i.pravatar.cc/100?img=44',
  },
];

const Testimonials = () => {
  return (
    <section className="py-32 bg-slate-50 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col lg:flex-row justify-between items-end mb-24 gap-12">
          <div className="max-w-2xl">
            <span className="text-primary font-black uppercase tracking-[0.3em] text-xs mb-6 block">Feedback</span>
            <h2 className="text-6xl lg:text-8xl font-black text-slate-900 leading-[0.8] tracking-tighter">
              CLIENT <br />
              <span className="text-primary italic font-serif font-normal">VOICES.</span>
            </h2>
          </div>
        </div>

        <div className="grid lg:grid-cols-3 gap-12 mb-24">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={testimonial.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: index * 0.1 }}
              className="bg-white p-12 rounded-[40px] shadow-sm hover:shadow-2xl transition-all duration-500 border border-slate-100"
            >
              <div className="flex gap-1 mb-8">
                {[1, 2, 3, 4, 5].map((i) => (
                  <Star key={i} className="w-4 h-4 fill-primary text-primary" />
                ))}
              </div>

              <p className="text-xl text-slate-600 italic mb-12 leading-relaxed font-medium">
                "{testimonial.content}"
              </p>

              <div className="flex items-center gap-6">
                <img
                  src={testimonial.image}
                  alt={testimonial.name}
                  className="w-16 h-16 rounded-2xl object-cover shadow-lg"
                  referrerPolicy="no-referrer"
                />
                <div>
                  <h4 className="text-lg font-black text-slate-900 uppercase tracking-tight">{testimonial.name}</h4>
                  <p className="text-xs text-slate-400 font-bold uppercase tracking-widest">{testimonial.role}</p>
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
            Read More Reviews
          </motion.button>
        </div>
      </div>
    </section>
  );
};


export default Testimonials;
