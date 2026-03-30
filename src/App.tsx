import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Menu, X, ArrowRight, Layout, Globe, Star, CheckCircle, Mail, Phone, Instagram, Linkedin, Twitter, ExternalLink } from 'lucide-react';
import { PORTFOLIO_ITEMS, TESTIMONIALS, SERVICES, PROCESS_STEPS } from './constants';
import { PortfolioItem } from './types';

// --- Components ---

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Work', href: '#portfolio' },
    { name: 'About', href: '#about' },
    { name: 'Services', href: '#services' },
    { name: 'Process', href: '#process' },
    { name: 'Contact', href: '#contact' },
  ];

  return (
    <nav className={`fixed top-0 w-full z-50 transition-all duration-300 ${scrolled ? 'bg-brand-dark/80 backdrop-blur-md py-4 border-b border-white/5' : 'bg-transparent py-6'}`}>
      <div className="max-w-7xl mx-auto px-6 flex justify-between items-center">
        <a href="#" className="text-2xl font-display font-bold tracking-tighter">
          BILAL<span className="text-brand-gold">.</span>
        </a>

        {/* Desktop Nav */}
        <div className="hidden md:flex items-center space-x-8">
          {navLinks.map((link) => (
            <a key={link.name} href={link.href} className="text-sm font-medium text-gray-400 hover:text-white transition-colors">
              {link.name}
            </a>
          ))}
          <a href="#contact" className="px-5 py-2 bg-white text-brand-dark text-sm font-bold rounded-full hover:bg-brand-gold transition-colors">
            Hire Me
          </a>
        </div>

        {/* Mobile Toggle */}
        <button className="md:hidden text-white" onClick={() => setIsOpen(!isOpen)}>
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="absolute top-full left-0 w-full bg-brand-dark border-b border-white/10 p-6 md:hidden"
          >
            <div className="flex flex-col space-y-4">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  className="text-lg font-medium text-gray-400 hover:text-white"
                  onClick={() => setIsOpen(false)}
                >
                  {link.name}
                </a>
              ))}
              <a
                href="#contact"
                className="w-full py-3 bg-brand-gold text-brand-dark text-center font-bold rounded-xl"
                onClick={() => setIsOpen(false)}
              >
                Hire Me
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center pt-20 overflow-hidden">
      {/* Background Animation */}
      <div className="absolute inset-0 z-0">
        <div className="absolute top-1/4 -left-20 w-96 h-96 bg-brand-gold/10 rounded-full blur-[120px]" />
        <div className="absolute bottom-1/4 -right-20 w-96 h-96 bg-brand-neon/5 rounded-full blur-[120px]" />
      </div>

      <div className="max-w-7xl mx-auto px-6 relative z-10 grid lg:grid-cols-2 gap-12 items-center">
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <span className="inline-block px-4 py-1.5 rounded-full bg-white/5 border border-white/10 text-brand-gold text-xs font-bold uppercase tracking-widest mb-6">
            Available for Freelance Projects
          </span>
          <h1 className="text-5xl md:text-7xl font-display font-bold leading-[1.1] mb-6">
            I Design Visuals That Make Brands <span className="text-gradient-gold italic">Impossible to Ignore</span>
          </h1>
          <p className="text-lg md:text-xl text-gray-400 mb-10 max-w-xl leading-relaxed">
            Helping international brands scale through high-impact poster design and conversion-focused web experiences.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <a href="#portfolio" className="px-8 py-4 bg-white text-brand-dark font-bold rounded-full flex items-center justify-center gap-2 hover:bg-brand-gold transition-all group">
              View My Work <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
            </a>
            <a href="#contact" className="px-8 py-4 bg-white/5 border border-white/10 font-bold rounded-full flex items-center justify-center gap-2 hover:bg-white/10 transition-all">
              Hire Me
            </a>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1 }}
          className="relative hidden lg:block"
        >
          <div className="relative z-10 rounded-3xl overflow-hidden border border-white/10 shadow-2xl shadow-brand-gold/10">
            <img 
              src="https://picsum.photos/seed/bilal/800/1000" 
              alt="Bilal Ahmad Design Work" 
              className="w-full h-auto grayscale hover:grayscale-0 transition-all duration-700"
              referrerPolicy="no-referrer"
            />
          </div>
          {/* Floating elements */}
          <div className="absolute -top-6 -right-6 glass p-4 rounded-2xl animate-bounce">
            <Layout className="text-brand-gold" size={32} />
          </div>
          <div className="absolute -bottom-6 -left-6 glass p-4 rounded-2xl animate-pulse">
            <Globe className="text-brand-neon" size={32} />
          </div>
        </motion.div>
      </div>
    </section>
  );
};

const TrustStrip = () => {
  return (
    <section className="py-12 border-y border-white/5 bg-white/[0.02]">
      <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row items-center justify-between gap-8">
        <p className="text-sm font-bold text-gray-500 uppercase tracking-widest">
          100+ Designs Created <span className="mx-2">|</span> Worked with Multiple Global Clients
        </p>
        <div className="flex flex-wrap justify-center gap-8 md:gap-12 opacity-30 grayscale">
          {['LOGO 1', 'LOGO 2', 'LOGO 3', 'LOGO 4'].map((logo) => (
            <span key={logo} className="text-xl font-display font-black tracking-tighter">{logo}</span>
          ))}
        </div>
      </div>
    </section>
  );
};

const About = () => {
  const skills = ['Poster Design', 'Web Design', 'Branding', 'UI/UX Strategy'];
  const tools = ['Photoshop', 'Illustrator', 'Figma', 'After Effects'];

  return (
    <section id="about" className="py-24">
      <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-16 items-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="order-2 lg:order-1"
        >
          <h2 className="text-4xl md:text-5xl font-display font-bold mb-8">
            I don't just make things look pretty. I make them <span className="text-brand-gold">work.</span>
          </h2>
          <p className="text-lg text-gray-400 mb-8 leading-relaxed">
            Most designers focus on aesthetics. I focus on results. Whether it's a poster that needs to stop someone in their tracks or a website that needs to convert a $10k lead, I design with a strategic purpose.
          </p>
          <div className="grid grid-cols-2 gap-8">
            <div>
              <h4 className="text-brand-gold font-bold uppercase text-xs tracking-widest mb-4">Core Expertise</h4>
              <ul className="space-y-2">
                {skills.map(s => <li key={s} className="text-sm text-gray-300 flex items-center gap-2"><CheckCircle size={14} className="text-brand-neon" /> {s}</li>)}
              </ul>
            </div>
            <div>
              <h4 className="text-brand-gold font-bold uppercase text-xs tracking-widest mb-4">The Arsenal</h4>
              <ul className="space-y-2">
                {tools.map(t => <li key={t} className="text-sm text-gray-300 flex items-center gap-2"><CheckCircle size={14} className="text-brand-neon" /> {t}</li>)}
              </ul>
            </div>
          </div>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          className="order-1 lg:order-2 relative"
        >
          <div className="aspect-square rounded-3xl overflow-hidden border border-white/10">
            <img 
              src="https://picsum.photos/seed/studio/800/800" 
              alt="Design Studio" 
              className="w-full h-full object-cover opacity-60"
              referrerPolicy="no-referrer"
            />
          </div>
          <div className="absolute -bottom-8 -right-8 glass p-8 rounded-3xl hidden md:block">
            <p className="text-4xl font-display font-bold text-brand-gold">5+</p>
            <p className="text-xs font-bold text-gray-400 uppercase tracking-widest">Years Experience</p>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

const Services = () => {
  return (
    <section id="services" className="py-24 bg-white/[0.01]">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-display font-bold mb-4">Monetize Your Vision</h2>
          <p className="text-gray-400 max-w-2xl mx-auto">Strategic design services tailored for high-growth brands looking to dominate their market.</p>
        </div>
        <div className="grid md:grid-cols-2 gap-8">
          {SERVICES.map((service) => (
            <motion.div
              key={service.id}
              whileHover={{ y: -10 }}
              className="glass p-10 rounded-3xl group"
            >
              <div className="w-16 h-16 bg-brand-gold/10 rounded-2xl flex items-center justify-center mb-8 group-hover:bg-brand-gold/20 transition-colors">
                {service.icon === 'Layout' ? <Layout className="text-brand-gold" size={32} /> : <Globe className="text-brand-gold" size={32} />}
              </div>
              <h3 className="text-2xl font-display font-bold mb-4">{service.title}</h3>
              <p className="text-gray-400 mb-6 leading-relaxed">{service.description}</p>
              <div className="p-4 bg-white/5 rounded-xl mb-8">
                <p className="text-sm font-medium text-brand-neon flex items-center gap-2">
                  <Star size={14} /> {service.benefit}
                </p>
              </div>
              <a href="#contact" className="inline-flex items-center gap-2 font-bold text-sm hover:text-brand-gold transition-colors">
                Get This Service <ArrowRight size={16} />
              </a>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

const Portfolio = () => {
  const [filter, setFilter] = useState<'All' | 'Poster' | 'Web'>('All');
  const [selectedItem, setSelectedItem] = useState<PortfolioItem | null>(null);

  const filteredItems = filter === 'All' ? PORTFOLIO_ITEMS : PORTFOLIO_ITEMS.filter(item => item.category === filter);

  return (
    <section id="portfolio" className="py-24">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between items-end gap-8 mb-16">
          <div>
            <h2 className="text-4xl md:text-5xl font-display font-bold mb-4">Selected Works</h2>
            <p className="text-gray-400">A showcase of high-impact projects delivered for global clients.</p>
          </div>
          <div className="flex gap-2 bg-white/5 p-1 rounded-full border border-white/10">
            {['All', 'Poster', 'Web'].map((f) => (
              <button
                key={f}
                onClick={() => setFilter(f as any)}
                className={`px-6 py-2 rounded-full text-sm font-bold transition-all ${filter === f ? 'bg-white text-brand-dark' : 'text-gray-400 hover:text-white'}`}
              >
                {f}
              </button>
            ))}
          </div>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          <AnimatePresence mode="popLayout">
            {filteredItems.map((item) => (
              <motion.div
                layout
                key={item.id}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                whileHover={{ y: -5 }}
                className="group cursor-pointer"
                onClick={() => setSelectedItem(item)}
              >
                <div className="relative aspect-[4/5] rounded-2xl overflow-hidden mb-4 border border-white/10">
                  <img 
                    src={item.image} 
                    alt={item.title} 
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                    referrerPolicy="no-referrer"
                  />
                  <div className="absolute inset-0 bg-brand-dark/60 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                    <span className="px-6 py-3 bg-white text-brand-dark font-bold rounded-full scale-90 group-hover:scale-100 transition-transform">
                      View Project
                    </span>
                  </div>
                </div>
                <h4 className="text-lg font-bold mb-1">{item.title}</h4>
                <p className="text-sm text-gray-500 font-medium uppercase tracking-widest">{item.category} Design</p>
              </motion.div>
            ))}
          </AnimatePresence>
        </div>
      </div>

      {/* Modal */}
      <AnimatePresence>
        {selectedItem && (
          <div className="fixed inset-0 z-[100] flex items-center justify-center p-6">
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setSelectedItem(null)}
              className="absolute inset-0 bg-brand-dark/95 backdrop-blur-xl"
            />
            <motion.div
              initial={{ opacity: 0, y: 50, scale: 0.9 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: 50, scale: 0.9 }}
              className="relative w-full max-w-5xl bg-brand-gray rounded-3xl overflow-hidden border border-white/10 shadow-2xl"
            >
              <button 
                onClick={() => setSelectedItem(null)}
                className="absolute top-6 right-6 z-10 w-10 h-10 bg-white/10 rounded-full flex items-center justify-center hover:bg-white/20 transition-colors"
              >
                <X size={20} />
              </button>
              <div className="grid lg:grid-cols-2">
                <div className="h-[400px] lg:h-[600px]">
                  <img 
                    src={selectedItem.image} 
                    alt={selectedItem.title} 
                    className="w-full h-full object-cover"
                    referrerPolicy="no-referrer"
                  />
                </div>
                <div className="p-10 lg:p-16 flex flex-col justify-center">
                  <span className="text-brand-gold font-bold uppercase text-xs tracking-widest mb-4">{selectedItem.category} Design</span>
                  <h3 className="text-3xl md:text-4xl font-display font-bold mb-6">{selectedItem.title}</h3>
                  <p className="text-gray-400 mb-8 leading-relaxed">{selectedItem.description}</p>
                  
                  <div className="space-y-6 mb-10">
                    <div>
                      <h5 className="text-sm font-bold text-white mb-2 flex items-center gap-2">
                        <div className="w-1.5 h-1.5 bg-brand-gold rounded-full" /> The Goal
                      </h5>
                      <p className="text-sm text-gray-400">{selectedItem.goal}</p>
                    </div>
                    <div>
                      <h5 className="text-sm font-bold text-white mb-2 flex items-center gap-2">
                        <div className="w-1.5 h-1.5 bg-brand-neon rounded-full" /> The Result
                      </h5>
                      <p className="text-sm text-gray-400">{selectedItem.result}</p>
                    </div>
                  </div>

                  <a href="#contact" onClick={() => setSelectedItem(null)} className="px-8 py-4 bg-white text-brand-dark font-bold rounded-full text-center hover:bg-brand-gold transition-colors">
                    Start a Similar Project
                  </a>
                </div>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </section>
  );
};

const Results = () => {
  const stats = [
    { label: 'Conversion Increase', value: '40%', detail: 'Average for web projects' },
    { label: 'Engagement Growth', value: '300%', detail: 'For social poster campaigns' },
    { label: 'Client Satisfaction', value: '100%', detail: 'Based on 50+ reviews' },
  ];

  return (
    <section className="py-24 bg-brand-gold/5">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid md:grid-cols-3 gap-12 text-center">
          {stats.map((stat) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
            >
              <h3 className="text-6xl font-display font-bold text-brand-gold mb-4">{stat.value}</h3>
              <p className="text-xl font-bold mb-2">{stat.label}</p>
              <p className="text-sm text-gray-500">{stat.detail}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

const Testimonials = () => {
  return (
    <section className="py-24">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-display font-bold mb-4">Client Success Stories</h2>
          <p className="text-gray-400">Don't just take my word for it. Here's what my clients have to say.</p>
        </div>
        <div className="grid md:grid-cols-3 gap-8">
          {TESTIMONIALS.map((t) => (
            <motion.div
              key={t.id}
              whileHover={{ y: -5 }}
              className="glass p-8 rounded-3xl flex flex-col"
            >
              <div className="flex gap-1 text-brand-gold mb-6">
                {[...Array(5)].map((_, i) => <Star key={i} size={16} fill="currentColor" />)}
              </div>
              <p className="text-gray-300 italic mb-8 flex-grow">"{t.content}"</p>
              <div className="flex items-center gap-4">
                <img src={t.avatar} alt={t.name} className="w-12 h-12 rounded-full grayscale" referrerPolicy="no-referrer" />
                <div>
                  <h5 className="font-bold text-sm">{t.name}</h5>
                  <p className="text-xs text-gray-500">{t.role}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

const Process = () => {
  return (
    <section id="process" className="py-24 bg-white/[0.01]">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-display font-bold mb-4">The Success Blueprint</h2>
          <p className="text-gray-400">A streamlined process designed for speed, quality, and results.</p>
        </div>
        <div className="grid md:grid-cols-4 gap-8 relative">
          {/* Connector Line */}
          <div className="absolute top-1/4 left-0 w-full h-px bg-white/5 hidden md:block" />
          
          {PROCESS_STEPS.map((step) => (
            <motion.div
              key={step.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: step.id * 0.1 }}
              className="relative z-10"
            >
              <div className="w-12 h-12 bg-brand-dark border border-white/10 rounded-full flex items-center justify-center font-display font-bold text-brand-gold mb-6">
                0{step.id}
              </div>
              <h4 className="text-xl font-bold mb-4">{step.title}</h4>
              <p className="text-sm text-gray-400 leading-relaxed">{step.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

const Contact = () => {
  return (
    <section id="contact" className="py-24">
      <div className="max-w-7xl mx-auto px-6">
        <div className="glass rounded-[40px] overflow-hidden grid lg:grid-cols-2">
          <div className="p-10 lg:p-20 bg-brand-gold/5">
            <h2 className="text-4xl md:text-6xl font-display font-bold mb-8">Let's Build Something <span className="text-gradient-gold italic">That Stands Out</span></h2>
            <p className="text-lg text-gray-400 mb-12">Ready to take your brand to the next level? Fill out the form or reach out directly.</p>
            
            <div className="space-y-6">
              <a href="mailto:bilal@example.com" className="flex items-center gap-4 group">
                <div className="w-12 h-12 rounded-full bg-white/5 flex items-center justify-center group-hover:bg-brand-gold transition-colors">
                  <Mail size={20} />
                </div>
                <div>
                  <p className="text-xs font-bold text-gray-500 uppercase tracking-widest">Email Me</p>
                  <p className="font-bold">bilal@example.com</p>
                </div>
              </a>
              <a href="https://wa.me/1234567890" className="flex items-center gap-4 group">
                <div className="w-12 h-12 rounded-full bg-white/5 flex items-center justify-center group-hover:bg-brand-neon transition-colors">
                  <Phone size={20} />
                </div>
                <div>
                  <p className="text-xs font-bold text-gray-500 uppercase tracking-widest">WhatsApp</p>
                  <p className="font-bold">+1 (234) 567-890</p>
                </div>
              </a>
            </div>

            <div className="mt-16 flex gap-4">
              {[Twitter, Instagram, Linkedin].map((Icon, i) => (
                <a key={i} href="#" className="w-10 h-10 rounded-full border border-white/10 flex items-center justify-center hover:bg-white hover:text-brand-dark transition-all">
                  <Icon size={18} />
                </a>
              ))}
            </div>
          </div>

          <div className="p-10 lg:p-20">
            <form className="space-y-6" onSubmit={(e) => e.preventDefault()}>
              <div className="grid md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label className="text-xs font-bold text-gray-500 uppercase tracking-widest">Full Name</label>
                  <input type="text" placeholder="John Doe" className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 focus:outline-none focus:border-brand-gold transition-colors" />
                </div>
                <div className="space-y-2">
                  <label className="text-xs font-bold text-gray-500 uppercase tracking-widest">Email Address</label>
                  <input type="email" placeholder="john@example.com" className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 focus:outline-none focus:border-brand-gold transition-colors" />
                </div>
              </div>
              <div className="space-y-2">
                <label className="text-xs font-bold text-gray-500 uppercase tracking-widest">Service Needed</label>
                <select className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 focus:outline-none focus:border-brand-gold transition-colors appearance-none">
                  <option className="bg-brand-dark">Poster Design</option>
                  <option className="bg-brand-dark">Web Design</option>
                  <option className="bg-brand-dark">Full Branding</option>
                </select>
              </div>
              <div className="space-y-2">
                <label className="text-xs font-bold text-gray-500 uppercase tracking-widest">Message</label>
                <textarea rows={4} placeholder="Tell me about your project..." className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 focus:outline-none focus:border-brand-gold transition-colors resize-none"></textarea>
              </div>
              <button className="w-full py-4 bg-white text-brand-dark font-bold rounded-xl hover:bg-brand-gold transition-colors flex items-center justify-center gap-2">
                Send Message <ArrowRight size={18} />
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

const Footer = () => {
  return (
    <footer className="py-12 border-t border-white/5">
      <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-8">
        <a href="#" className="text-xl font-display font-bold tracking-tighter">
          BILAL<span className="text-brand-gold">.</span>
        </a>
        <p className="text-sm text-gray-500">
          © {new Date().getFullYear()} Bilal Ahmad. All rights reserved. Designed for high-performance.
        </p>
        <div className="flex gap-6">
          {['Privacy Policy', 'Terms of Service'].map(link => (
            <a key={link} href="#" className="text-xs font-bold text-gray-500 hover:text-white transition-colors uppercase tracking-widest">{link}</a>
          ))}
        </div>
      </div>
    </footer>
  );
};

// --- Main App ---

export default function App() {
  return (
    <div className="relative">
      <Navbar />
      <Hero />
      <TrustStrip />
      <About />
      <Services />
      <Portfolio />
      <Results />
      <Testimonials />
      <Process />
      
      {/* Strong CTA Section */}
      <section className="py-24 relative overflow-hidden">
        <div className="absolute inset-0 bg-brand-gold opacity-5" />
        <div className="max-w-4xl mx-auto px-6 text-center relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl md:text-6xl font-display font-bold mb-8">Ready to Build Something <span className="italic">Legendary?</span></h2>
            <p className="text-xl text-gray-400 mb-12">Stop settling for generic designs. Let's create a visual identity that actually grows your business.</p>
            <a href="#contact" className="inline-flex px-10 py-5 bg-white text-brand-dark font-bold rounded-full text-lg hover:bg-brand-gold transition-all hover:scale-105">
              Contact Me Now
            </a>
          </motion.div>
        </div>
      </section>

      <Contact />
      <Footer />
    </div>
  );
}
