import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Plus, Minus } from 'lucide-react';

const faqs = [
  {
    question: "What is your typical project timeline?",
    answer: "Project timelines vary depending on complexity. A standard corporate website typically takes 4-6 weeks, while complex web applications can take 3-6 months. We prioritize quality and thorough testing at every stage."
  },
  {
    question: "Do you offer ongoing maintenance and support?",
    answer: "Yes, we offer various support packages to ensure your digital products remain secure, up-to-date, and performant. We believe in building long-term partnerships with our clients."
  },
  {
    question: "Can you help with rebranding an existing business?",
    answer: "Absolutely. We specialize in digital identity. We can help you redefine your brand strategy, visual identity, and digital presence to better align with your current business goals."
  },
  {
    question: "What technologies do you specialize in?",
    answer: "We are experts in modern web technologies including React, Next.js, Node.js, and various cloud platforms. We choose the best tech stack based on your specific project requirements."
  },
  {
    question: "Do you work with startups or established enterprises?",
    answer: "We work with both! We love the energy of startups and the scale of enterprises. Our flexible process allows us to adapt to the unique needs and constraints of businesses at any stage."
  }
];

const FAQ = () => {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  return (
    <section id="faq" className="py-32 bg-white relative overflow-hidden">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-24">
          <motion.span 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-primary font-black uppercase tracking-[0.3em] text-xs mb-6 block"
          >
            Common Questions
          </motion.span>
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-5xl lg:text-7xl font-black text-slate-900 leading-[0.9] tracking-tighter uppercase"
          >
            Got <span className="text-primary italic font-serif font-normal lowercase">Questions?</span>
          </motion.h2>
        </div>

        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="border border-slate-100 rounded-[32px] overflow-hidden"
            >
              <button
                onClick={() => setActiveIndex(activeIndex === index ? null : index)}
                className="w-full p-8 flex items-center justify-between text-left hover:bg-slate-50 transition-colors"
              >
                <span className="text-xl font-black text-slate-900 uppercase tracking-tight">
                  {faq.question}
                </span>
                <div className={`w-10 h-10 rounded-full flex items-center justify-center transition-all duration-300 ${activeIndex === index ? 'bg-primary text-white rotate-180' : 'bg-slate-100 text-slate-900'}`}>
                  {activeIndex === index ? <Minus className="w-5 h-5" /> : <Plus className="w-5 h-5" />}
                </div>
              </button>
              
              <AnimatePresence>
                {activeIndex === index && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: 'auto', opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3, ease: 'easeInOut' }}
                  >
                    <div className="px-8 pb-8 text-slate-500 leading-relaxed font-medium">
                      {faq.answer}
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FAQ;
