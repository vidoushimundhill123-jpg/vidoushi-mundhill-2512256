/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import emailjs from '@emailjs/browser';
import { 
  Home, 
  User, 
  MapPin, 
  Mail, 
  Linkedin, 
  Code, 
  Cpu, 
  BookOpen, 
  Award, 
  Briefcase, 
  Terminal,
  ChevronRight,
  Menu,
  X,
  FileText,
  Search,
  Users,
  MessageSquare,
  Zap,
  Globe,
  Quote,
  CheckCircle2,
  ChevronDown,
  ExternalLink
} from 'lucide-react';
import aboutMeImage from './about_me.jpg';
import homePageImage from './home_page.jpg';
import resumeImage from './cv_image.jpg';
import excelBookImage from './excel_book.jpg';
import histogramImage from './histogram.jpg';
import oralPreImage from '../oral pre.jpeg';
import scavengerImage from '../scavenger.jpeg';
import businessImage from '../business.jpeg';
import interviewImage from '../interview .jpeg';
import synopsisPosterImage from './synopsis_poster.jpg';
import { 
  LineChart, 
  Line, 
  XAxis, 
  YAxis, 
  CartesianGrid, 
  Tooltip, 
  ResponsiveContainer,
  AreaChart,
  Area,
  PieChart,
  Pie,
  Cell,
  BarChart,
  Bar
} from 'recharts';

// --- Types ---
type Page = 'home' | 'aboutMe' | 'achievements' | 'projects' | 'reflection' | 'cvResume' | 'contact';

// --- Components ---

const Nav = ({ currentPage, setPage }: { currentPage: Page, setPage: (p: Page) => void }) => {
  const [isOpen, setIsOpen] = useState(false);
  
  const menuItems: { id: Page; label: string }[] = [
    { id: 'home', label: 'Home' },
    { id: 'aboutMe', label: 'About Me' },
    { id: 'cvResume', label: 'Curriculum Vitae' },
    { id: 'achievements', label: 'Academic Achievements/Skills' },
    { id: 'projects', label: 'My Projects' },
    { id: 'reflection', label: 'Reflection' },
    { id: 'contact', label: 'Contacts' },
  ];

  return (
    <nav className="fixed top-0 left-0 w-full z-50 bg-navy/90 backdrop-blur-md border-b border-navy-light h-16 flex items-center">
      <div className="max-w-[1400px] mx-auto px-6 w-full flex justify-between items-center">
        <div className="flex items-center gap-2">
          <button 
            onClick={() => setPage('home')}
            className="flex items-center gap-3 cursor-pointer hover:opacity-80 transition-opacity group"
          >
            <div className="w-10 h-10 bg-white text-navy flex items-center justify-center rounded-xl font-serif font-black text-sm tracking-tighter group-hover:bg-slate-100 transition-colors shadow-xl">
              VM
            </div>
            <span className="font-serif font-bold text-xl tracking-tighter text-white">
              Vidoushi<span className="text-navy-light">.</span>
            </span>
          </button>
        </div>
        
        {/* Desktop Nav */}
        <div className="hidden md:flex gap-4 items-center">
          <div className="flex items-center gap-2 text-xs font-serif text-slate-300">
            {menuItems.map((item, idx) => (
              <React.Fragment key={item.id}>
                <button
                  onClick={() => setPage(item.id)}
                  className={`transition-all duration-200 cursor-pointer hover:text-white capitalize flex items-center gap-1 ${
                    currentPage === item.id ? 'text-white font-bold' : 'text-slate-400'
                  }`}
                >
                  {item.label}
                  {(item.id === 'home' || item.id === 'projects') && <ChevronDown size={12} />}
                </button>
                {idx < menuItems.length - 1 && <span className="text-[8px] text-navy-light/50">●</span>}
              </React.Fragment>
            ))}
          </div>
        </div>

        {/* Mobile Menu Button */}
        <div className="md:hidden">
          <button onClick={() => setIsOpen(!isOpen)} className="p-2 text-slate-400">
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Nav */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            className="absolute top-16 left-0 w-full bg-slate-900 border-b border-slate-800 md:hidden overflow-hidden shadow-xl"
          >
            <div className="px-4 py-6 space-y-2">
              {menuItems.map((item) => (
                <button
                  key={item.id}
                  onClick={() => {
                    setPage(item.id);
                    setIsOpen(false);
                  }}
                  className={`block w-full text-left px-4 py-3 text-sm font-bold rounded-xl transition-colors ${
                    currentPage === item.id ? 'bg-blue-600/20 text-blue-400' : 'text-slate-300 hover:bg-slate-800'
                  }`}
                >
                  {item.label}
                </button>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

const HomePage = ({ setPage }: { setPage: (p: Page) => void }) => (
  <section className="min-h-screen pt-16 flex flex-col bg-navy-deep relative overflow-hidden">
    {/* Background Image Overlay */}
    <div className="absolute inset-0 z-0 text-white">
      <img 
        src={homePageImage}
        alt="Hero Background"
        className="w-full h-full object-cover opacity-40 mix-blend-overlay"
        referrerPolicy="no-referrer"
      />
      <div className="absolute inset-0 bg-gradient-to-b from-navy-deep/40 via-navy-deep/80 to-navy-deep"></div>
    </div>
    
    <div className="relative z-10 max-w-[1400px] mx-auto px-10 flex-grow flex flex-col justify-center py-20">
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center w-full mb-16">
        {/* Left Column: Text Content */}
        <div className="lg:col-span-8 flex flex-col items-center lg:items-start text-center lg:text-left">
          <div className="max-w-3xl">
            <motion.h1 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="text-[65px] leading-[72.2px] font-serif font-black text-white mb-2 text-left tracking-tighter"
            >
              Hi, I'm Vidoushi Mundhill
            </motion.h1>
            <motion.div 
              initial={{ opacity: 0, scaleX: 0 }}
              animate={{ opacity: 1, scaleX: 1 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="w-24 h-1 bg-white self-center lg:self-start mt-4 mb-10 ml-auto mr-auto lg:ml-0 origin-left"
            ></motion.div>
            
            <motion.h2 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
              className="text-2xl md:text-3xl font-serif italic text-white/80 mb-8 tracking-wide font-normal text-left"
            >
              Welcome to My E-Portfolio
            </motion.h2>
            
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.8 }}
              className="text-lg text-slate-300 leading-relaxed font-serif italic mb-12 text-center lg:text-left max-w-2xl"
            >
              Where my academic journey, skills and aspirations come together. My name is Vidoushi Mundhill and I am a Year 1 BSc (Hons) Computer Science student at the University of Mauritius. I am passionate about technology and the endless possibilities it brings. This portfolio embodies who I am, my projects, my growth and my goals. Look around, get in touch!
            </motion.p>

            {/* Snapshot Cards */}
            <motion.div 
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.9 }}
              className="grid grid-cols-1 md:grid-cols-3 gap-4 w-full mb-12"
            >
              {[
                {
                  icon: "🎓",
                  title: "Student",
                  desc: "Year 1, BSc (Hons) Computer Science — University of Mauritius"
                },
                {
                  icon: "💻",
                  title: "Developper",
                  desc: "Exploring web development, data structures, and programming"
                },
                {
                  icon: "🌟",
                  title: "Achiever",
                  desc: "Active participant in academic and co-curricular activities"
                }
              ].map((card, idx) => (
                <div 
                  key={idx} 
                  className="bg-white/5 backdrop-blur-md border border-white/10 p-6 rounded-[2rem] hover:bg-white/10 transition-all duration-300 group"
                >
                  <div className="flex items-center gap-3 mb-2">
                    <span className={`text-2xl grayscale group-hover:grayscale-0 transition-all ${
                      idx === 0 ? 'ml-[-10px] text-center' : 
                      idx === 1 ? 'ml-[-10px]' : 
                      idx === 2 ? 'mt-0 ml-[-5px] text-left' : ''
                    }`}>{card.icon}</span>
                    <h3 className="text-lg font-serif font-bold italic text-white">{card.title}</h3>
                  </div>
                  <p className="text-[11px] text-slate-300 font-serif leading-relaxed line-clamp-2">
                    {card.desc}
                  </p>
                </div>
              ))}
            </motion.div>
            
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 1 }}
              className="flex flex-row gap-4 w-full max-w-lg ml-auto mr-auto lg:ml-0"
            >
              <button 
                onClick={() => setPage('projects')}
                className="flex-1 px-8 py-3 bg-transparent border border-white text-white font-serif text-sm transition-all hover:bg-white hover:text-slate-950 whitespace-nowrap"
              >
                Explore My Work
              </button>
              <button 
                onClick={() => setPage('contact')}
                className="flex-1 px-8 py-3 bg-transparent border border-white text-white font-serif text-sm transition-all hover:bg-white hover:text-slate-950 whitespace-nowrap"
              >
                Get In Touch
              </button>
            </motion.div>
          </div>
        </div>
      </div>
    </div>
  </section>
);

const AboutPage = () => (
  <section className="py-24 bg-white min-h-screen">
    <div className="max-w-5xl mx-auto px-6">
      <div className="grid grid-cols-1 md:grid-cols-12 gap-16">
        <div className="md:col-span-7">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <h1 className="text-4xl font-extrabold text-navy mb-2">About Me</h1>
            <h2 className="text-2xl font-black text-slate-900 mb-8 border-b border-navy-light/10 pb-4 italic font-serif">My Journey</h2>
            
            <div className="space-y-6 text-slate-700 leading-relaxed text-base font-serif">
              <div className="border-l-4 border-navy pl-6 py-4 bg-navy/[0.03] rounded-r-2xl my-8 italic text-lg text-navy font-black">
                "The future belongs to those who learn more skills and combine them in creative ways."
                <cite className="text-xs uppercase font-black text-navy-light mt-3 block tracking-widest">— Robert Greene</cite>
              </div>

              <p>
                I am Vidoushi Mundhill, a Year 1 BSc (Hons) Computer Science student at the University of Mauritius, driven by a genuine passion for technology and a commitment to continuous learning. My journey into the world of computing began long before university — shaped by curiosity, determination, and a belief that technology has the power to change lives.
              </p>
              
              <p>
                Growing up, I was drawn to problem-solving and logical thinking, which naturally led me toward computer science. Throughout my secondary education, I worked diligently to build a strong academic foundation, earning results that reflect both my dedication and my desire to excel. Now, at university, I am immersing myself in core areas of computing — from programming and data structures to software development principles — all while developing the critical thinking and collaborative skills that modern technology careers demand.
              </p>

              <p>
                Beyond academics, I believe that a well-rounded individual is shaped by more than grades alone. I actively seek opportunities to grow — whether through team projects, self-directed learning, or engaging with the broader tech community. I am also proud to be fluent in multiple languages, which allows me to connect with diverse people and perspectives.
              </p>

              <p>
                My goal is to graduate as a confident, skilled computer scientist who can contribute meaningfully to the technology landscape — not just in Mauritius, but on a global stage. This e-portfolio is a living snapshot of that journey: my achievements, my projects, my reflections, and my ambitions.
              </p>

              <p className="font-black text-navy">
                I am always open to learning, collaborating, and growing. Welcome to my world.
              </p>
            </div>
          </motion.div>
        </div>

        <div className="md:col-span-5">
          <div className="sticky top-24 space-y-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="relative aspect-[9/16] md:aspect-[3/4] rounded-[3rem] overflow-hidden shadow-2xl border-8 border-white group"
            >
              <img 
                src={aboutMeImage} 
                alt="Vidoushi Mundhill" 
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-navy/40 to-transparent"></div>
            </motion.div>

            <div className="bg-white border border-navy/10 rounded-3xl p-8 shadow-sm">
              <h3 className="text-xs font-black text-navy uppercase tracking-widest mb-6 border-b border-navy/5 pb-2">A Few Things About Me</h3>
              <div className="space-y-6">
                {[
                  { label: 'Degree', value: 'BSc (Hons) Computer Science — Year 1' },
                  { label: 'University', value: 'University of Mauritius' },
                  { label: 'Languages', value: 'English, French, Creole' },
                  { label: 'Interests', value: 'Technology, Programming, Problem-Solving' }
                ].map((item) => (
                  <div key={item.label}>
                    <div className="text-[10px] uppercase font-black text-slate-400 tracking-wider mb-1">{item.label}</div>
                    <div className="text-sm font-black text-navy">{item.value}</div>
                  </div>
                ))}
              </div>
            </div>

            <div className="bg-navy text-white rounded-3xl p-8 shadow-xl shadow-navy/20">
              <h3 className="text-xs font-black text-white/50 uppercase tracking-widest mb-4">Professional Link</h3>
              <div className="flex items-center gap-3">
                <Linkedin size={20} className="text-white" />
                <a href="https://www.linkedin.com/in/vidoushi-mundhill-9090522b4" target="_blank" className="font-serif font-bold italic hover:underline break-all text-sm">vidoushi-mundhill-6b2a78364</a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
);

const AchievementsPage = () => {
  const chartData = [
    { module: 'Prog Basics', score: 75, full: 100 },
    { module: 'Maths Lab', score: 96, full: 100 },
    { module: 'Comp Maths', score: 90, full: 100 },
    { module: 'DB Systems', score: 88, full: 100 },
    { module: 'Soft Eng', score: 92, full: 100 },
  ];

  return (
    <section className="py-32 bg-white min-h-screen">
      <div className="max-w-7xl mx-auto px-6">
        <div className="mb-24 flex flex-col md:flex-row md:items-end justify-between gap-8">
          <div className="max-w-2xl">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              className="flex items-center gap-3 mb-6"
            >
              <span className="w-12 h-[1px] bg-navy"></span>
              <span className="text-xs font-black uppercase tracking-[0.4em] text-navy">Portfolio Excellence</span>
            </motion.div>
            <motion.h1 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              className="text-6xl md:text-7xl font-serif font-black text-navy mb-8 tracking-tighter leading-[0.9]"
            >
              Academic <br />Milestones<span className="text-navy-light">.</span>
            </motion.h1>
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="text-xl text-slate-500 font-serif italic leading-relaxed"
            >
              Documenting the transition from theoretical concepts to functional computational tools and collaborative engineering.
            </motion.p>
          </div>
          
          <motion.div 
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            className="flex gap-4"
          >
            <div className="bg-navy p-6 rounded-3xl border border-navy shadow-xl shadow-navy/20 flex items-center gap-4">
              <div className="text-3xl font-black text-white">1st</div>
              <div className="text-[10px] font-black uppercase text-white/50 leading-tight">Year <br />Honours</div>
            </div>
          </motion.div>
        </div>


        
        {/* Solo Work Section */}
        <div className="mb-32">
          <SectionTitle icon={User} accent="Individual Specializations" label="SOLO WORK">Academic Precision</SectionTitle>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            {[
              {
                title: "Matrix Algebra Automation",
                module: "Computational Mathematics",
                image: excelBookImage,
                desc: "Resolution of complex systems using Cramer’s Rule, Matrix Inversion, and Gaussian Elimination.",
                details: "Automated theoretical linear algebra into a functional computational tool, enhancing data structuring and algorithm design capabilities.",
                skills: ["Excel Logic", "Matrix Theory", "Data Structuring"],
                link: "https://docs.google.com/spreadsheets/d/1YYR6gKKqtM_pfzDVhiYuAskKsn-z9a9-Spm3_v5YPb0/edit?usp=drive_link",
                btnLabel: "Excel Workbook"
              },
              {
                title: "Supermarket Monte Carlo Simulation",
                module: "Python Programming",
                image: histogramImage,
                desc: "Stochastic modeling of customer flow and service efficiency using Python.",
                details: "Solidified algorithmic thinking and demonstrated capability to build predictive models from scratch using probability distributions.",
                skills: ["Python Logic", "Stochastic Modeling", "Data Viz"],
                link: "https://drive.google.com/file/d/1OrZQY9nKQVSw9kq0hE6o4k2L7YMZsROt/view?usp=drive_link",
                btnLabel: "MCS Report"
              }
            ].map((p, idx) => (
              <motion.div 
                key={idx}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.2 }}
                className="group flex flex-col"
              >
                <div className="h-[300px] overflow-hidden rounded-[3.5rem] relative mb-10 shadow-2xl shadow-navy/10 border border-navy/5">
                  <img src={p.image} alt={p.title} className="w-full h-full object-cover grayscale-[0.2] group-hover:grayscale-0 transition-all duration-700 group-hover:scale-105" />
                  <div className="absolute inset-0 bg-gradient-to-t from-navy via-navy/20 to-transparent"></div>
                  <div className="absolute bottom-10 left-10 right-10">
                    <span className="text-[10px] font-black text-navy-light uppercase tracking-[0.3em] mb-3 block">{p.module}</span>
                    <h3 className="text-3xl font-serif font-bold text-white mb-6 leading-tight max-w-sm">{p.title}</h3>
                    <a 
                      href={p.link} 
                      target="_blank" 
                      className="inline-flex items-center gap-3 px-8 py-4 bg-white text-navy rounded-2xl text-sm font-black hover:bg-navy hover:text-white transition-all shadow-xl"
                    >
                      <ExternalLink size={18} /> {p.btnLabel}
                    </a>
                  </div>
                </div>
                <div className="px-6 space-y-4">
                  <p className="text-slate-600 text-lg leading-relaxed font-serif italic">{p.desc}</p>
                  <p className="text-slate-400 text-sm leading-relaxed">{p.details}</p>
                  <div className="flex flex-wrap gap-2 pt-4">
                    {p.skills.map(s => (
                      <span key={s} className="px-4 py-1.5 bg-navy text-white text-[10px] font-black rounded-full uppercase tracking-widest">
                        {s}
                      </span>
                    ))}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Collaborative Work */}
        <div className="mb-32">
          <SectionTitle icon={Briefcase} accent="Engineering Collective" label="GROUP WORK">Relational Engineering</SectionTitle>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {[
              {
                title: "MetroGo Train System",
                module: "Database Management System",
                desc: "A mission-critical relational database handling complex interplay between train schedules, routes, and passenger transactions.",
                details: "Designed ER Diagrams and applied normalization (1NF-3NF). Wrote advanced SQL triggers for updates.",
                achievements: ["Relational Mapping", "SQL Triggers"],
                link: "https://drive.google.com/file/d/1ZxIEItBSKqTkVAOPrS1ah52DOG9opqIU/view?usp=drive_link"
              },
              {
                title: "Travel Booking System",
                module: "Software Engineering Principles",
                desc: "A structured system engineering project following the full SDLC lifecycle for a booking platform.",
                details: "Implemented UML modeling, requirements analysis, and modular testing for high stability.",
                achievements: ["UML Architecture", "Agile Workflow"],
                link: "https://drive.google.com/file/d/1miAzzEMb2zlw0awIHHELBdjfKSPoNVyw/view?usp=drive_link"
              }
            ].map((p, idx) => (
              <motion.div 
                key={idx}
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                className="bg-white rounded-[3.5rem] p-12 border border-navy/5 hover:border-navy/20 transition-all shadow-xl shadow-navy/5"
              >
                <div className="flex justify-between items-start mb-10">
                  <div className="w-16 h-16 bg-navy rounded-[2rem] flex items-center justify-center text-white shadow-xl shadow-navy/20">
                    <Zap size={28} />
                  </div>
                  <span className="text-[10px] font-black text-navy-light uppercase tracking-widest">{p.module}</span>
                </div>
                <h3 className="text-3xl font-serif font-bold text-navy mb-6">{p.title}</h3>
                <div className="space-y-6 mb-10">
                  <p className="text-slate-600 leading-relaxed font-serif italic text-lg">{p.desc}</p>
                  <p className="text-slate-400 text-sm leading-relaxed border-l-2 border-navy pl-6">{p.details}</p>
                </div>
                <div className="flex flex-wrap gap-3 mb-10">
                  {p.achievements.map(a => (
                    <span key={a} className="px-4 py-2 bg-navy/5 text-navy text-[10px] font-black rounded-xl border border-navy/5 uppercase">
                      {a}
                    </span>
                  ))}
                </div>
                <a 
                  href={p.link} 
                  target="_blank" 
                  className="flex items-center gap-3 text-navy font-black text-xs uppercase tracking-widest hover:gap-6 transition-all"
                >
                  Project Documentation <ExternalLink size={16} />
                </a>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Secondary School Foundations */}
        <div className="mb-32">
          <SectionTitle icon={Award} accent="Secondary Academic Milestones" label="FOUNDATIONS">Secondary Excellence</SectionTitle>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="bg-white rounded-[3rem] p-10 border border-navy/10 shadow-xl shadow-navy/5"
            >
              <div className="text-navy mb-6 font-black text-xs uppercase tracking-widest">Cambridge HSC</div>
              <h3 className="text-2xl font-serif font-bold text-navy mb-6">High Honors</h3>
              <div className="space-y-4">
                {[
                  { sub: "Sociology", grade: "Grade A" },
                  { sub: "Mathematics", grade: "Grade A" },
                  { sub: "Computer Science", grade: "Grade A" }
                ].map(item => (
                  <div key={item.sub} className="flex justify-between items-center pb-3 border-b border-navy/5">
                    <span className="text-sm font-bold text-slate-700">{item.sub}</span>
                    <span className="text-xs font-black text-white bg-navy px-2 py-1 rounded-md">{item.grade}</span>
                  </div>
                ))}
              </div>
            </motion.div>

            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="bg-navy rounded-[3rem] p-10 text-white shadow-2xl"
            >
              <div className="text-white/50 mb-6 font-black text-xs uppercase tracking-widest">Cambridge SC</div>
              <h3 className="text-2xl font-serif font-bold mb-6">Global Foundation</h3>
              <div className="flex flex-wrap gap-2">
                {[
                  "English", "French", "Mathematics", "Biology", 
                  "Physics", "Sociology", "Computer Science", "Literature"
                ].map(subject => (
                  <span key={subject} className="px-3 py-1.5 bg-white/10 text-white text-[10px] font-black rounded-lg uppercase tracking-tight">
                    {subject}
                  </span>
                ))}
              </div>
              <p className="mt-8 text-xs text-white/40 font-serif italic">Cumulative excellence across 8 diverse academic disciplines.</p>
            </motion.div>

            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="bg-white rounded-[3rem] p-10 border-2 border-dashed border-navy/20 flex flex-col justify-center items-center text-center shadow-sm"
            >
              <div className="w-16 h-16 bg-navy text-white rounded-full flex items-center justify-center mb-6 shadow-xl shadow-navy/30">
                < Award size={32} />
              </div>
              <h3 className="text-xl font-serif font-bold text-navy mb-2">Best Student Award</h3>
              <p className="text-slate-500 text-sm font-serif italic">Recognition for overall academic excellence and outstanding performance throughout secondary schooling.</p>
            </motion.div>
          </div>
        </div>

        {/* Global Summary */}
        <div className="mb-32">
          <div className="bg-navy rounded-[3.5rem] p-16 text-white relative overflow-hidden group">
            <div className="absolute top-0 right-0 w-64 h-64 bg-navy-light/20 blur-[100px] group-hover:bg-navy-light/30 transition-colors"></div>
            <div className="relative z-10 flex flex-col md:flex-row gap-12 items-center">
              <div className="shrink-0 text-center">
                <div className="text-8xl font-black text-white mb-2">9+</div>
                <div className="text-xs font-black uppercase text-white/50 tracking-[0.4em]">Expert Modules</div>
              </div>
              <div>
                <h3 className="text-3xl font-serif font-bold mb-6">Foundational Mastery</h3>
                <div className="grid grid-cols-2 lg:grid-cols-3 gap-x-12 gap-y-6">
                  {[
                    "Relational Logic",
                    "Stochastic Analysis",
                    "Agile Engineering",
                    "Algorithm Design",
                    "Database Integrity",
                    "Computational Math"
                  ].map(item => (
                    <div key={item} className="flex items-center gap-3">
                      <div className="w-1.5 h-1.5 bg-navy-light rounded-full"></div>
                      <span className="text-sm md:text-base font-bold text-white/70">{item}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

const ScavengerHuntDetail = () => {
  const huntPoints = [
    {
      id: 1,
      title: "Divine Beauty",
      caption: "Everyone agreed that one look at THIS and you just knew that all the beauty in the world was a gift from God",
      desc: "We often take for granted small (or not so small) things that we see everyday. The beauty of the sky, nature and everything around us that we have no power over. These are definitely gifts from God.",
      image: "regenerated_image_1777600770888.png"
    },
    {
      id: 2,
      title: "The Mascot",
      caption: "Maybe we could use THIS for our group mascot!",
      desc: "KUROMI - She represents the perfect balance between optimism and pessimism – just like us!",
      image: "regenerated_image_1777600771683.png"
    },
    {
      id: 3,
      title: "Pure Happiness",
      caption: "Amazing! THIS is the true meaning of happiness",
      desc: "Eat to live or live to eat? One look at these and we were already in a better mood. After savoring them, we were truly happy.",
      image: "regenerated_image_1777600772554.png"
    },
    {
      id: 4,
      title: "Modern Success",
      caption: "The synonym to being successful in life is THIS",
      desc: "Being successful is not solely about status, power and privileges... WE are successful because we try our best EVERYDAY to become the best version of ourselves.",
      image: "regenerated_image_1777600773446.png"
    },
    {
      id: 5,
      title: "Innocence",
      caption: "THIS is what the innocence of a child represents",
      desc: "The innocence of a child is about the ability to find joy in the simplest things. Playing in a ball pit was indeed fun, and we were also able to express ourselves exactly like how we did 15 years ago.",
      image: "regenerated_image_1777600774062.png"
    },
    {
      id: 6,
      title: "Obvious Ending",
      caption: "It was pretty obvious to the onlookers how THIS was going to end",
      desc: "It's been a few years now... Most of you have probably already watched one of the conjuring movies. Some of you have not, and you already know how it is going to end...",
      image: "regenerated_image_1777600774789.png"
    },
    {
      id: 7,
      title: "Team Dreams",
      caption: "THIS is what our team dreams of",
      desc: "We all have tons of dreams, and that is perfectly normal! But right now, we dream of travelling to and from university by car...",
      image: "regenerated_image_1777600775484.png"
    }
  ];

  return (
    <div className="space-y-32">
        {/* Cinematic Header */}
        <section className="relative h-[60vh] flex items-center justify-start overflow-hidden rounded-[4rem] group">
            <img 
                src="https://images.unsplash.com/photo-1497015289639-54688650d173?auto=format&fit=crop&q=80&w=2000" 
                className="absolute inset-0 w-full h-full object-cover grayscale-[0.8] brightness-[0.2] group-hover:scale-105 transition-transform duration-[3s]"
                alt="Cinema Background"
            />
            <div className="relative z-10 p-12 md:p-20 max-w-4xl">
                <motion.div 
                    initial={{ opacity: 0, x: -50 }}
                    animate={{ opacity: 1, x: 0 }}
                    className="text-red-600 font-black text-6xl tracking-tighter mb-4"
                >
                    CBSFLIX
                </motion.div>
                <motion.h1 
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.2 }}
                    className="text-6xl md:text-8xl font-serif font-black text-white mb-8 tracking-tighter leading-tight"
                >
                    SCAVENGER<br/>HUNT
                </motion.h1>
                <motion.div 
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.4 }}
                    className="flex flex-wrap gap-6 items-center"
                >
                    <div className="text-sm font-black uppercase tracking-[0.4em] text-white/50">Presented by The Chaos Crew</div>
                    <div className="px-3 py-1 bg-white/10 rounded border border-white/20 text-xs font-bold text-white tracking-widest uppercase">Group 6</div>
                    <div className="text-xs font-black uppercase text-red-600 tracking-widest">Year 1 · Semester 1</div>
                </motion.div>
            </div>
            <div className="absolute inset-0 bg-gradient-to-r from-navy via-navy/50 to-transparent"></div>
        </section>

        {/* Content Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-12 gap-y-24">
            {huntPoints.map((point) => (
                <motion.div 
                    key={point.id}
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "-100px" }}
                    className="group"
                >
                    <div className="relative aspect-[16/9] overflow-hidden rounded-[2.5rem] mb-8 shadow-2xl shadow-navy/10 border border-navy/5">
                        <img 
                            src={point.image} 
                            alt={point.title}
                            className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-[1.5s] contrast-125 brightness-90 saturate-50"
                        />
                        <div className="absolute inset-0 bg-navy/20 group-hover:bg-navy/0 transition-colors duration-500"></div>
                        <div className="absolute top-6 left-6 w-12 h-12 bg-white text-navy rounded-full flex items-center justify-center font-black text-xl shadow-2xl z-10">
                            {point.id}
                        </div>
                    </div>
                    <div>
                        <h3 className="text-[10px] font-black uppercase tracking-[0.4em] text-navy/40 mb-4">{point.title}</h3>
                        <p className="text-2xl font-serif font-bold text-navy mb-6 tracking-tight leading-tight group-hover:text-navy-light transition-colors">"{point.caption}"</p>
                        <p className="text-sm text-slate-500 font-serif italic leading-relaxed border-l-2 border-navy/10 pl-4">{point.desc}</p>
                    </div>
                </motion.div>
            ))}
        </div>

        {/* Reflection Section (Part B) */}
        <section className="bg-navy rounded-[4rem] p-12 md:p-24 text-white overflow-hidden relative shadow-2xl shadow-navy/30">
            <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-navy-light/20 blur-[150px] -mr-64 -mt-64 rounded-full"></div>
            
            <div className="relative z-10">
                <div className="flex items-center gap-6 mb-16">
                    <div className="w-16 h-[2px] bg-white/20"></div>
                    <span className="text-[10px] font-black uppercase tracking-[0.6em] text-white/40">The Reflection · Part B</span>
                </div>
                
                <h2 className="text-5xl md:text-7xl font-serif font-black mb-20 tracking-tighter leading-none">THE CHAOS CREW<br/><span className="text-white/20 italic">BEHIND THE SCENES</span></h2>
                
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 md:gap-24">
                    <div className="lg:col-span-7 space-y-20">
                        <motion.div
                            initial={{ opacity: 0, x: -20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                        >
                            <h4 className="text-[10px] font-black uppercase tracking-widest text-white/40 mb-6">Team Genesis & Decisions</h4>
                            <p className="text-2xl font-serif italic leading-relaxed text-white/90">
                                Everything started with the first online presentation. We were just 3 members: <span className="text-white font-bold">Marina, Vennila and Larissa</span>. 
                                We needed a fourth to complete the ensemble. That's when we met <span className="text-white font-bold underline decoration-white/20 underline-offset-8">Vidoushi</span>, 
                                who shared our vision, and the "Chaos Crew" was established.
                            </p>
                            <div className="mt-10 p-8 bg-white/5 rounded-[2.5rem] border border-white/10">
                                <p className="text-base font-serif italic text-white/70 leading-relaxed">
                                    "We each chose a role instead of being assigned one. My teammates never pressured me; they were so supportive and made sure I wouldn't feel excluded."
                                    <span className="block mt-4 text-[10px] font-black uppercase tracking-widest text-white/30">— Vidoushi Mundhill</span>
                                </p>
                            </div>
                        </motion.div>
                        
                        <motion.div 
                            initial={{ opacity: 0, x: -20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            className="bg-white rounded-[3rem] p-12 text-navy"
                        >
                            <h4 className="text-[10px] font-black uppercase tracking-widest text-navy/40 mb-8 flex items-center gap-3">
                                <Zap size={18} className="text-navy" /> Performance Insight
                            </h4>
                            <div className="flex items-center gap-10">
                                <div className="text-center">
                                    <div className="text-8xl font-black tracking-tighter">9</div>
                                    <div className="text-[10px] font-black uppercase tracking-widest text-navy/30">Team Rating</div>
                                </div>
                                <div className="h-20 w-[1px] bg-navy/10 hidden md:block"></div>
                                <p className="text-lg font-serif italic text-slate-600 leading-snug">
                                    "I would give a solid 9 out of 10. We were successful because we first defined roles, set goals, and most importantly, we communicated."
                                    <span className="block mt-2 font-black text-[10px] uppercase text-navy/40 tracking-widest">— Larissa Labonte (Team Leader)</span>
                                </p>
                            </div>
                        </motion.div>

                        <motion.div
                            initial={{ opacity: 0, x: -20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                        >
                            <h4 className="text-[10px] font-black uppercase tracking-widest text-white/40 mb-6">The Conflict Resolution</h4>
                            <div className="relative p-10 bg-red-600/10 border border-red-600/20 rounded-[3rem]">
                                <h5 className="text-xl font-bold mb-4 flex items-center gap-3">
                                    <MessageSquare size={20} className="text-red-500" /> The Birthday Shoot
                                </h5>
                                <p className="text-lg font-serif italic text-white/80 leading-relaxed">
                                    "My birthday was the day we were supposed to meet for the assignment's photo session. We didn't have much time to submit. 
                                    My teammates were worried about asking me to forget my special date, but we reached an understanding. They surprised me with a cake that day! 
                                    Disputes should be settled peacefully rather than into serious conflicts."
                                </p>
                            </div>
                        </motion.div>
                    </div>

                    <div className="lg:col-span-1 border-l border-white/5 hidden lg:block"></div>

                    <div className="lg:col-span-4 space-y-12">
                        <div>
                            <h4 className="text-[10px] font-black uppercase tracking-widest text-white/40 mb-10">Learning Outcomes</h4>
                            <div className="space-y-10">
                                {[
                                    { title: "Team Dynamics", desc: "Developing teamwork skills through active listening and respect for diverse decisions." },
                                    { title: "Communication", desc: "Exploring internal communication through chats and rehearsal before presentations." },
                                    { title: "Emotional Intelligence", desc: "Understanding ourselves and others as the key to effective communication." },
                                    { title: "Creative Output", desc: "Showcasing creativity through visual PowerPoints and structured business logic." }
                                ].map((item, i) => (
                                    <div key={i} className="group cursor-default">
                                        <div className="text-xs font-black uppercase tracking-[0.2em] mb-2 group-hover:text-white transition-colors">{item.title}</div>
                                        <div className="w-8 h-[1px] bg-white/10 mb-3 group-hover:w-16 transition-all duration-500"></div>
                                        <p className="text-[13px] font-serif italic text-white/50 leading-relaxed group-hover:text-white/80 transition-colors">{item.desc}</p>
                                    </div>
                                ))}
                            </div>
                        </div>

                        <div className="pt-12 border-t border-white/10">
                            <a 
                                href="https://drive.google.com/file/d/1YzVmRsRgFNkhPFVnnFBXtUwVhuhpf6vh/view?usp=drive_link"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="w-full inline-flex justify-center items-center py-4 bg-white text-navy rounded-2xl font-black uppercase tracking-widest text-[10px] hover:bg-slate-100 transition-all shadow-xl"
                            >
                                scavenger hunt pdf
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </section>
        
        <div className="text-center py-20">
            <div className="text-red-600 font-black text-3xl mb-4">THANK YOU</div>
            <div className="text-navy/20 font-black text-9xl tracking-[0.2em] opacity-5 select-none transform scale-150">CHAOS CREW</div>
        </div>
    </div>
  );
};

const BusinessPlanDetail = () => {
  const financialData = [
    { year: 'Year 1', revenue: 9610000, profit: 1423580 },
    { year: 'Year 2', revenue: 10500000, profit: 1891080 },
    { year: 'Year 3', revenue: 11600000, profit: 2416080 },
    { year: 'Year 4', revenue: 12900000, profit: 3016080 },
    { year: 'Year 5', revenue: 14300000, profit: 3716080 },
  ];

  const audienceData = [
    { name: 'International', value: 42 },
    { name: 'Young Adults', value: 26 },
    { name: 'Residents', value: 16 },
    { name: 'Families', value: 11 },
    { name: 'Corporate', value: 5 },
  ];

  const COLORS = ['#001f3f', '#002b55', '#2563eb', '#1d4ed8', '#0f172a'];

  return (
    <div className="space-y-32 pb-20">
      {/* Brand Hero */}
      <section className="bg-navy rounded-[4rem] p-12 md:p-24 text-white relative overflow-hidden">
        <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-white/5 blur-[120px] rounded-full -mr-32 -mt-32"></div>
        <div className="relative z-10 grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div>
            <div className="flex items-center gap-4 mb-8">
              <div className="w-16 h-16 bg-white rounded-2xl flex items-center justify-center p-3">
                <img src="regenerated_image_1777600933526.png" alt="Blue Peak Logo" className="w-full h-full object-contain" />
              </div>
              <div className="h-10 w-[1px] bg-white/20"></div>
              <span className="text-sm font-black uppercase tracking-[0.4em] text-white/50">Blue Peak Co. LTD</span>
            </div>
            <h1 className="text-6xl md:text-8xl font-serif font-black mb-8 tracking-tighter leading-none">STRATEGIC<br/>BUSINESS<br/>PLAN</h1>
            <p className="text-xl font-serif italic text-white/70 max-w-lg mb-12">"Filling the niche in Mauritius through authentic, eco-conscious marine and land adventures."</p>
            <div className="flex flex-wrap gap-4">
              {['Hiking', 'Diving', 'Snorkeling'].map(tag => (
                <span key={tag} className="px-6 py-2 bg-white/10 rounded-xl border border-white/10 text-xs font-black uppercase tracking-widest">{tag}</span>
              ))}
            </div>
          </div>
          <div className="grid grid-cols-2 gap-4">
               {[
                 { label: 'Start-up Cap', value: 'Rs 3.06M' },
                 { label: 'Forecast (Y1)', value: 'Rs 9.6M' },
                 { label: 'Target Market', value: 'Global' },
                 { label: 'Impact', value: 'High Eco' }
               ].map((stat, i) => (
                 <div key={i} className="bg-white/5 border border-white/10 p-8 rounded-[2.5rem] backdrop-blur-sm">
                   <div className="text-[10px] font-black uppercase text-white/40 tracking-widest mb-2">{stat.label}</div>
                   <div className="text-2xl font-serif font-bold">{stat.value}</div>
                 </div>
               ))}
          </div>
        </div>
      </section>

      {/* Executive Summary */}
      <section className="grid grid-cols-1 lg:grid-cols-12 gap-16">
        <div className="lg:col-span-4">
          <div className="sticky top-32">
            <h2 className="text-4xl font-serif font-black text-navy mb-6 tracking-tighter uppercase">Executive Summary</h2>
            <div className="w-20 h-1 bg-navy mb-8"></div>
            <p className="text-slate-500 font-serif italic text-lg leading-relaxed">
              Blue Peak offers premium, off-the-beaten-path experiences. Instead of standard tourist routes, we provide discovery, education, and true reconnection with nature.
            </p>
          </div>
        </div>
        <div className="lg:col-span-8 bg-navy/5 rounded-[3.5rem] p-12 border border-navy/5">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <div className="space-y-6">
              <h4 className="text-sm font-black uppercase tracking-widest text-navy">The Vision</h4>
              <p className="text-base text-slate-600 font-serif italic leading-relaxed">
                "Our diving guides are professional divers trained in marine biology, providing sunset and sunrise dives that educate as much as they thrill."
              </p>
              <div className="pt-6 border-t border-navy/10">
                <h4 className="text-sm font-black uppercase tracking-widest text-navy mb-4">Sustainability</h4>
                <p className="text-sm text-slate-500 font-serif">Plastic-free experiences and environmental awareness campaigns are integrated into every tour.</p>
              </div>
            </div>
            <div className="bg-white rounded-[2.5rem] p-8 shadow-xl shadow-navy/5">
              <h4 className="text-xs font-black uppercase tracking-widest text-navy/40 mb-6">Service Pillars</h4>
              <div className="space-y-4">
                {[
                  "Expert-Led Expeditions",
                  "Professional Photography Inc.",
                  "Eco-Friendly Operations",
                  "Bespoke Small-Group Tours"
                ].map((pillar, i) => (
                  <div key={i} className="flex items-center gap-3 p-4 bg-navy/[0.03] rounded-2xl border border-navy/5">
                    <CheckCircle2 size={16} className="text-navy" />
                    <span className="text-sm font-bold text-navy">{pillar}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Market Dashboard */}
      <section>
        <div className="text-center mb-20">
          <h2 className="text-4xl font-serif font-black text-navy mb-4 tracking-tighter uppercase">Market & Audience Analysis</h2>
          <p className="text-slate-400 font-serif italic">Identifying our 1.3M+ potential annual visitors</p>
        </div>
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 items-center">
          <div className="bg-white p-10 rounded-[3rem] border border-navy/5 shadow-xl shadow-navy/5 h-full">
            <h3 className="text-lg font-black uppercase tracking-widest text-navy mb-8">Target Segments</h3>
            <div className="space-y-6">
              {audienceData.map((item, i) => (
                <div key={i} className="flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <div className="w-3 h-3 rounded-full" style={{ backgroundColor: COLORS[i % COLORS.length] }}></div>
                    <span className="text-sm font-bold text-slate-700">{item.name}</span>
                  </div>
                  <span className="text-sm font-black text-navy">{item.value}%</span>
                </div>
              ))}
            </div>
          </div>
          
          <div className="bg-navy rounded-[3rem] p-8 h-[400px] flex items-center justify-center relative overflow-hidden">
             <div className="absolute inset-0 opacity-10">
               <Globe className="w-full h-full text-white" />
             </div>
             <div className="w-full h-full">
                <ResponsiveContainer width="100%" height="100%">
                  <PieChart>
                    <Pie
                      data={audienceData}
                      innerRadius={80}
                      outerRadius={120}
                      paddingAngle={5}
                      dataKey="value"
                    >
                      {audienceData.map((entry, index) => (
                        <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                      ))}
                    </Pie>
                    <Tooltip 
                      contentStyle={{ backgroundColor: '#001f3f', border: 'none', borderRadius: '16px', color: '#fff' }}
                      itemStyle={{ color: '#fff' }}
                    />
                  </PieChart>
                </ResponsiveContainer>
                <div className="absolute inset-0 flex flex-col items-center justify-center pointer-events-none">
                  <div className="text-4xl font-black text-white">42%</div>
                  <div className="text-[10px] font-black uppercase tracking-widest text-white/40">Int. Tourists</div>
                </div>
             </div>
          </div>

          <div className="space-y-6">
            <div className="p-8 bg-white border border-navy/10 rounded-[2.5rem]">
              <h4 className="text-xs font-black uppercase tracking-widest text-navy/40 mb-3">Gap Analysis</h4>
              <p className="text-sm text-navy font-bold leading-relaxed">Most competitors lack marine education and integrated land/sea adventures. Blue Peak bridges this gap.</p>
            </div>
            <div className="p-8 bg-navy-light text-white rounded-[2.5rem]">
              <h4 className="text-xs font-black uppercase tracking-widest text-white/40 mb-3">Pricing Strategy</h4>
              <p className="text-sm font-serif italic leading-relaxed">"Premium strategy where exclusivity and education trump mass appeal. target: adventurers seeking bespoke value."</p>
            </div>
          </div>
        </div>
      </section>

      {/* Ownership & Management */}
      <section className="bg-navy rounded-[4rem] p-12 md:p-24 text-white relative">
        <div className="mb-20 flex flex-col md:flex-row justify-between items-end gap-8">
          <div>
            <h2 className="text-4xl md:text-6xl font-serif font-black tracking-tighter uppercase mb-4">Management<br/>Structure</h2>
            <div className="text-navy-light font-black text-xs uppercase tracking-[0.4em]">Equity Split: 20% Each</div>
          </div>
          <div className="flex -space-x-4">
             {[1,2,3,4,5].map(i => (
               <div key={i} className="w-16 h-16 rounded-full border-4 border-navy bg-navy-light flex items-center justify-center font-black text-xs">
                 M{i}
               </div>
             ))}
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-6">
          {[
            { role: "CEO", name: "Vennila Ramsamy", p: "Strategy & Finance" },
            { role: "Ops Manager", name: "Vidoushi Mundhill", p: "Logistics & QC" },
            { role: "Lead Diver", name: "Marina Grassy", p: "Safety & Mentor" },
            { role: "Lead Hiking", name: "Sherwyn SubbaReddi", p: "Navigation" },
            { role: "S&M Lead", name: "Larissa Labonte", p: "Revenue & Promotion" }
          ].map((member, i) => (
            <motion.div 
              key={i}
              whileHover={{ y: -10 }}
              className="bg-white/5 border border-white/10 p-8 rounded-[2.5rem] flex flex-col items-center text-center group transition-colors hover:bg-white/10"
            >
              <div className="text-[10px] font-black text-white/30 uppercase tracking-[0.2em] mb-4">{member.role}</div>
              <div className="text-lg font-serif font-bold mb-4 leading-tight">{member.name}</div>
              <div className="mt-auto pt-6 border-t border-white/5 w-full">
                <div className="text-[10px] font-black italic text-white/40">{member.p}</div>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Financial Projections */}
      <section>
        <div className="flex flex-col md:flex-row justify-between items-end mb-20 gap-8">
          <div className="max-w-xl text-navy">
             <h2 className="text-4xl font-serif font-black mb-4 tracking-tighter uppercase leading-none">Fiscal Outlook</h2>
             <p className="text-lg font-serif italic text-slate-500">Projected growth and profitability over a 5-year timeline.</p>
          </div>
          <div className="flex gap-4">
            <div className="px-6 py-3 bg-navy text-white rounded-2xl font-black text-[10px] uppercase tracking-widest shadow-xl shadow-navy/20">Revenue</div>
            <div className="px-6 py-3 bg-navy/[0.05] text-navy border border-navy/5 rounded-2xl font-black text-[10px] uppercase tracking-widest">Net Profit</div>
          </div>
        </div>

        <div className="h-[400px] w-full">
          <ResponsiveContainer width="100%" height="100%">
            <BarChart data={financialData}>
              <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#eee" />
              <XAxis 
                dataKey="year" 
                axisLine={false} 
                tickLine={false} 
                tick={{ fill: '#94a3b8', fontSize: 10, fontWeight: 900 }}
              />
              <YAxis 
                axisLine={false} 
                tickLine={false} 
                tick={{ fill: '#94a3b8', fontSize: 10, fontWeight: 900 }}
                tickFormatter={(value) => `Rs ${value / 1000000}M`}
              />
              <Tooltip 
                cursor={{ fill: 'rgba(0, 31, 63, 0.02)' }}
                contentStyle={{ backgroundColor: '#001f3f', border: 'none', borderRadius: '16px', color: '#fff' }}
              />
              <Bar dataKey="revenue" fill="#001f3f" radius={[10, 10, 0, 0]} barSize={40} />
              <Bar dataKey="profit" fill="#1d4ed8" radius={[10, 10, 0, 0]} barSize={40} />
            </BarChart>
          </ResponsiveContainer>
        </div>

        <div className="mt-20 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
           <div className="p-8 bg-white border border-navy/10 rounded-[3rem] shadow-sm">
             <div className="text-[10px] font-black uppercase text-navy/30 tracking-widest mb-4">Initial Investment</div>
             <div className="text-3xl font-serif font-bold text-navy">Rs 3,060,000</div>
             <p className="text-xs text-slate-400 mt-2">Combined capital and bank loans</p>
           </div>
           <div className="p-8 bg-white border border-navy/10 rounded-[3rem] shadow-sm">
             <div className="text-[10px] font-black uppercase text-navy/30 tracking-widest mb-4">Breakeven Point</div>
             <div className="text-3xl font-serif font-bold text-navy">~350 Units</div>
             <p className="text-xs text-slate-400 mt-2">Monthly targets to achieve ROI</p>
           </div>
           <div className="p-8 bg-white border border-navy/10 rounded-[3rem] shadow-sm">
             <div className="text-[10px] font-black uppercase text-navy/30 tracking-widest mb-4">Monthly Installment</div>
             <div className="text-3xl font-serif font-bold text-navy">Rs 48,660</div>
             <p className="text-xs text-slate-400 mt-2">Repayment over 7 year period</p>
           </div>
           <div className="p-8 bg-navy text-white rounded-[3rem] shadow-2xl shadow-navy/20">
             <div className="text-[10px] font-black uppercase text-white/40 tracking-widest mb-4">Year 5 Valuation</div>
             <div className="text-3xl font-serif font-bold">Rs 14.3M+</div>
             <p className="text-xs text-white/30 mt-2">Projected annual revenue cap</p>
           </div>
        </div>
      </section>

      <footer className="text-center">
         <a 
           href="https://drive.google.com/file/d/1KcSkQ-6plWMkMAFLvM2Qge4Dvoe4AHpU/view?usp=drive_link"
           target="_blank"
           rel="noopener noreferrer"
           className="inline-block px-12 py-5 bg-navy text-white rounded-[2rem] font-black uppercase tracking-[0.2em] text-xs hover:bg-navy-light transition-all shadow-2xl shadow-navy/20 border border-white/10"
         >
           Export Full Business Plan (PDF)
         </a>
      </footer>
    </div>
  );
};

const OralPresentationDetail = () => {
  const combos = [
    {
      id: 1,
      title: "The Famous 'Zinger Zasar'",
      tagline: "Mauritian engineering at its peak: add zasar, fix everything.",
      desc: "A bold fusion of the classic KFC Zinger with traditional Mauritian 'Zasar' (pickles). A true testament to local culinary ingenuity.",
      image: "/regenerated_image_1777599203327.png"
    },
    {
      id: 2,
      title: "Mine Bouille Gros Pois",
      tagline: "Let's forget broth, forget stir-fry... and drown plain noodles in BEAN CURRY!",
      desc: "A street food staple in Mauritius. Simple boiled noodles transformed by the rich, hearty texture of a thick lima bean curry.",
      image: "/regenerated_image_1777599204156.png"
    },
    {
      id: 3,
      title: "Chips + Ice Cream",
      tagline: "The Crunchy Cold Chaos!",
      desc: "McFlurry + fries = relationship goals? Some combos were made to be questioned... and loved!",
      image: "/regenerated_image_1777599204937.png"
    },
    {
      id: 4,
      title: "Pineapple on Pizza",
      tagline: "The HUGE debate of the century!",
      desc: "Looks good right? But IS IT?! Why do we have no problem with tomatoes even though they are considered as fruits?",
      image: "/regenerated_image_1777599205383.png"
    }
  ];

  return (
    <div className="space-y-32 pb-20">
      {/* Playful Header */}
      <section className="relative h-[60vh] flex items-center justify-center overflow-hidden rounded-[4rem] bg-[#fdf2f8]">
        <div className="absolute inset-x-0 top-0 h-full flex">
          <div className="w-1/4 h-full bg-[#fce7f3]/50"></div>
          <div className="w-1/4 h-full bg-[#fbcfe8]/50"></div>
          <div className="w-1/4 h-full bg-[#f9a8d4]/50"></div>
          <div className="w-1/4 h-full bg-[#ec4899]/20"></div>
        </div>
        
        <div className="relative z-10 text-center px-6">
          <motion.div 
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            className="text-navy/20 font-black text-xs uppercase tracking-[0.8em] mb-8"
          >
            The Chaos Crew Presents
          </motion.div>
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-6xl md:text-8xl font-serif font-black text-navy mb-6 tracking-tighter"
          >
            'UNUSUAL'<br/>
            <span className="text-pink-600">FOOD COMBOS</span>
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3 }}
            className="text-xl font-serif italic text-navy/60"
          >
            A presentation exploring the boundaries of taste and tradition.
          </motion.p>
        </div>
      </section>

      {/* The Combos */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
        {combos.map((combo) => (
          <motion.div 
            key={combo.id}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="bg-white rounded-[3.5rem] p-10 border border-navy/5 shadow-xl shadow-navy/5 group hover:border-pink-200 transition-all"
          >
            <div className="relative aspect-video rounded-[2.5rem] overflow-hidden mb-8">
              <img 
                src={combo.image} 
                alt={combo.title} 
                className="w-full h-full object-cover grayscale-[0.2] group-hover:grayscale-0 group-hover:scale-105 transition-all duration-700"
              />
              <div className="absolute top-6 right-6 px-4 py-2 bg-white/90 backdrop-blur-md rounded-full text-[10px] font-black text-navy uppercase tracking-widest">
                Combo #{combo.id}
              </div>
            </div>
            <h3 className="text-3xl font-serif font-black text-navy mb-4">{combo.title}</h3>
            <p className="text-sm font-black text-pink-600 uppercase tracking-widest mb-6 italic">"{combo.tagline}"</p>
            <p className="text-slate-600 font-serif italic leading-relaxed">{combo.desc}</p>
          </motion.div>
        ))}
      </div>

      <section className="bg-navy rounded-[4rem] p-12 md:p-24 text-white relative overflow-hidden text-center">
        <h2 className="text-4xl font-serif font-black mb-6">THANK YOU</h2>
        <p className="text-white/60 font-serif italic mb-12">**Do not forget to try those out and let us know how it goes!</p>
        <div className="flex flex-wrap justify-center gap-4">
          {['Larissa', 'Venilla', 'Marina', 'Vidoushi'].map(name => (
            <span key={name} className="px-6 py-2 bg-white/10 rounded-full text-[10px] font-black uppercase tracking-widest border border-white/10">
              {name}
            </span>
          ))}
        </div>
      </section>
    </div>
  );
};

const SynopsisPaperDetail = () => {
  const authors = ['Larissa Labonte', 'Venilla Ramsamy', 'Marina Grassy', 'Vidoushi Mundhill'];
  
  return (
    <div className="max-w-5xl mx-auto pb-32">
      {/* Report Header / Masthead */}
      <header className="mb-20 text-center space-y-8">
        <motion.div 
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          className="inline-block px-4 py-1 border-y border-navy/20 text-[10px] font-black uppercase tracking-[0.4em] text-navy/60"
        >
          Research Report Abstract • Chaos Crew Production
        </motion.div>
        <motion.h1 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
          className="text-4xl md:text-6xl font-serif font-black text-navy tracking-tight leading-tight uppercase max-w-4xl mx-auto"
        >
          Scrolling into the Future: How Social Media is Shaping Today's Youth
        </motion.h1>
        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.2 }}
          className="flex flex-wrap justify-center gap-x-8 gap-y-4 text-[11px] font-black text-navy/40 uppercase tracking-widest"
        >
          {authors.map((a, i) => (
            <span key={i} className="flex items-center gap-2">
              <span className="w-1.5 h-1.5 bg-pink-600 rounded-full"></span>
              {a}
            </span>
          ))}
        </motion.div>
      </header>

      {/* The Report Document Container */}
      <motion.div 
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.3 }}
        className="bg-white shadow-2xl shadow-navy/5 rounded-[3rem] overflow-hidden border border-navy/5"
      >
        {/* Abstract Section */}
        <div className="p-12 md:p-20 bg-[#f8fafc] border-b border-navy/5">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-xs font-black uppercase tracking-[0.3em] text-navy/30 mb-8 italic flex items-center gap-4">
              I. Executive Summary
              <div className="h-[1px] flex-grow bg-navy/10"></div>
            </h2>
            <p className="text-xl md:text-2xl font-serif italic text-navy/70 leading-relaxed first-letter:text-6xl first-letter:font-black first-letter:mr-3 first-letter:float-left first-letter:text-navy first-letter:leading-none">
              In today’s digital era, social media has become an integral part of young people's daily lives. From Instagram to TikTok, digital connectivity has peaked, yet it has brought a dual-edged influence on behavior, mental health, and social connectivity. This report synthesizes multi-dimensional findings on the digital architecture influencing identity and the structural hazards inherent in modern platforms.
            </p>
          </div>
        </div>

        {/* Technical Sections Grid */}
        <div className="p-12 md:p-20 grid grid-cols-1 lg:grid-cols-12 gap-20">
          {/* Analysis Column */}
          <div className="lg:col-span-8 space-y-24">
            {/* Section 1 */}
            <section className="space-y-10">
              <div className="flex items-baseline gap-4">
                <span className="text-4xl font-serif font-black text-navy/10">01</span>
                <h3 className="text-3xl font-serif font-black text-navy tracking-tight uppercase">The Positive Paradigm</h3>
              </div>
              <div className="space-y-12 text-slate-600 font-serif text-lg leading-relaxed italic">
                <div className="space-y-4">
                  <h4 className="font-black text-navy not-italic text-[10px] uppercase tracking-[0.3em] flex items-center gap-3">
                    <span className="w-10 h-[1px] bg-navy/20"></span>
                    Connectivity & Communication
                  </h4>
                  <p>Staying in touch has become easier than ever. Social media platforms provide instant messaging, voice, and video calls. For many, communicating online allows them to express themselves more openly than in face-to-face settings, building a baseline of digital confidence.</p>
                </div>
                <div className="space-y-4">
                  <h4 className="font-black text-navy not-italic text-[10px] uppercase tracking-[0.3em] flex items-center gap-3">
                    <span className="w-10 h-[1px] bg-navy/20"></span>
                    The 24/7 Academic Library
                  </h4>
                  <p>Social media has evolved into a global search engine. 41% of Gen Z favor TikTok and Instagram for information seeking. Discord servers and collaborative platforms act as decentralized study hubs where notes and complex ideas are shared synchronously.</p>
                </div>
              </div>
            </section>

            {/* Section 2 */}
            <section className="space-y-10">
              <div className="flex items-baseline gap-4">
                <span className="text-4xl font-serif font-black text-pink-600/10">02</span>
                <h3 className="text-3xl font-serif font-black text-navy tracking-tight uppercase">Critical Risk Factors</h3>
              </div>
              <div className="space-y-12 text-slate-600 font-serif text-lg leading-relaxed italic">
                {/* Highlight Callout */}
                <div className="p-10 bg-pink-50/50 rounded-[3rem] border border-pink-100/50 text-pink-900 not-italic relative">
                  <Quote className="absolute top-8 right-8 text-pink-200" size={40} />
                  <p className="text-xs font-black uppercase tracking-widest text-pink-500 mb-6 flex items-center gap-2">
                    <Zap size={14} /> Mental Health Alert
                  </p>
                  <p className="text-xl font-serif italic text-pink-900/80 leading-relaxed">
                    "Adolescents spending {'>'} 3 hours daily on networking platforms show double the risk of anxiety and depression. Approximately 64% engage in frequent online comparisons."
                  </p>
                </div>
                
                <div className="space-y-4">
                  <h4 className="font-black text-navy not-italic text-[10px] uppercase tracking-[0.3em] flex items-center gap-3">
                    <span className="w-10 h-[1px] bg-navy/20"></span>
                    Dopamine Architecture
                  </h4>
                  <p>Platform mechanisms like variable reward reinforcement and infinite scrolling stimulate addictive feedback loops. This leads to blue-light exposure, delayed circadian rhythms, and a significant reduction in daytime cognitive performance.</p>
                </div>

                <div className="space-y-4">
                  <h4 className="font-black text-navy not-italic text-[10px] uppercase tracking-[0.3em] flex items-center gap-3">
                    <span className="w-10 h-[1px] bg-navy/20"></span>
                    Algorithmic Toxicity
                  </h4>
                  <p>The greatest threat is the automated delivery of dangerous content. Between 25% and 40% of hazardous content is served to minors via AI curation systems, bypassing active search intent.</p>
                </div>
              </div>
            </section>
          </div>

          {/* Technical Data Column */}
          <div className="lg:col-span-4 space-y-16">
            <div className="p-10 bg-navy text-white rounded-[3rem] shadow-2xl shadow-navy/20 relative overflow-hidden group">
              <div className="absolute top-0 right-0 w-32 h-32 bg-white/5 rounded-full -mr-16 -mt-16 group-hover:scale-150 transition-transform duration-700"></div>
              <h4 className="text-[10px] font-black uppercase tracking-[0.4em] mb-12 text-white/30 italic">Statistical Indices</h4>
              <div className="space-y-12">
                <div className="space-y-2">
                  <div className="text-5xl font-serif font-black text-pink-400">41%</div>
                  <p className="text-[10px] font-black uppercase tracking-[0.2em] text-white/40">Visual Search Preference</p>
                </div>
                <div className="space-y-2">
                  <div className="text-5xl font-serif font-black text-pink-400">200%</div>
                  <p className="text-[10px] font-black uppercase tracking-[0.2em] text-white/40">Suicide Interaction Growth</p>
                </div>
                <div className="space-y-2">
                  <div className="text-5xl font-serif font-black text-pink-400">36%</div>
                  <p className="text-[10px] font-black uppercase tracking-[0.2em] text-white/40">Self-Reported Addiction</p>
                </div>
              </div>
            </div>

            <div className="space-y-6">
               <div className="aspect-[3/4] rounded-[3rem] overflow-hidden shadow-2xl border border-navy/5 grayscale contrast-125">
                 <img src={synopsisPosterImage} alt="Research Visual" className="w-full h-full object-cover" />
               </div>
               <p className="text-[10px] font-black uppercase tracking-[0.3em] text-navy/30 text-center italic">Figure 1.1: Visual Comparison Mapping</p>
            </div>

            <div className="p-8 border border-navy/5 rounded-[2.5rem] bg-slate-50/50">
               <BookOpen className="text-navy/20 mb-6" size={24} />
               <p className="text-sm font-serif italic text-navy/60 leading-relaxed">
                 "Cyber-behavior results in asharp decline in empathy and non-verbal cues. 46% of participants report infrequent friend interaction."
               </p>
            </div>
          </div>
        </div>

        {/* Conclusion / Footer Information */}
        <div className="p-12 md:p-20 bg-[#f8fafc] border-t border-navy/5">
          <div className="max-w-3xl mx-auto text-center space-y-10">
             <div className="inline-block px-6 py-2 bg-navy/5 rounded-full text-[10px] font-black uppercase tracking-widest text-navy">
               Synthesis & Outcome
             </div>
             <p className="text-2xl font-serif italic text-navy/80 leading-relaxed uppercase tracking-tighter">
               "The structural challenge of modern social platforms is the unintentional amplification of hostility. A critical balance between digital immersion and face-to-face interaction is required to preserve the mental well-being of the next generation."
             </p>

             {/* References Section */}
             <div className="pt-16 mt-16 border-t border-navy/5 text-left">
               <h4 className="text-[10px] font-black uppercase tracking-[0.4em] text-navy/30 mb-8">Selected Bibliography & References</h4>
               <div className="space-y-6">
                 {[
                   { author: "Anderson, M., & Jiang, J.", year: "2018", title: "Teens, Social Media & Technology.", publisher: "Pew Research Center." },
                   { author: "Center for Countering Digital Hate", year: "2022", title: "Deadly by Design: How TikTok Encourages Self-Harm and Eating Disorders.", publisher: "CCDH Research Reports." },
                   { author: "UNESCO", year: "2023", title: "Technology in Education: A Tool on Whose Terms?", publisher: "Global Education Monitoring Report." },
                   { author: "Twenge, J. M.", year: "2017", title: "iGen: Why Today's Super-Connected Kids Are Growing Up Less Rebellious, More Tolerant, Less Happy.", publisher: "Atria Books." }
                 ].map((ref, i) => (
                   <div key={i} className="text-[10px] text-slate-500 font-serif leading-relaxed italic">
                     <span className="font-bold text-navy not-italic">{ref.author} ({ref.year}).</span> {ref.title} <span className="text-navy/30">{ref.publisher}</span>
                   </div>
                 ))}
               </div>
             </div>

             <div className="pt-12 border-t border-navy/5 flex flex-col md:flex-row items-center justify-between gap-8">
                <div className="text-left">
                  <p className="text-[10px] font-black uppercase tracking-[0.3em] text-navy/30 mb-2 italic">Institutional Seal</p>
                  <p className="text-xs font-black uppercase tracking-widest text-navy">The Chaos Crew Production © 2026</p>
                </div>
             </div>
          </div>
        </div>
      </motion.div>
    </div>
  );
};

const CRMInterviewDetail = ({ setPage }: { setPage: (p: Page) => void }) => {
  const assessmentCriteria = [
    { label: "Conflict Resolution", value: "High", desc: "Ability to navigate simulated customer friction with poise." },
    { label: "Technical Literacy", desc: "Understanding the role of CRM software in business scaling." },
    { label: "Cultural Fit", desc: "Evaluating professional alignment with 'Blue Peak' company values." },
    { label: "Stress Threshold", desc: "Testing adaptability under rapid-fire panel inquiries." }
  ];

  const coreSkills = [
    { 
      title: "Tactical Questioning", 
      icon: <MessageSquare size={20} />,
      desc: "Learning to pivot questions based on real-time candidate answers to probe deeper into their core competencies."
    },
    { 
      title: "Cohort Management", 
      icon: <Users size={20} />,
      desc: "The logistics of managing a 10-person simulation, balancing the flow between 5 interviewers and 5 candidates."
    },
    { 
      title: "Data-Driven Assessment", 
      icon: <FileText size={20} />,
      desc: "Moving beyond 'gut feeling' to use standardized rubrics for objective candidate scoring."
    },
    { 
      title: "High-Pressure Leadership", 
      icon: <Zap size={20} />,
      desc: "Maintaining authority and executive presence as the first point of contact on an expert panel."
    }
  ];

  return (
    <div className="max-w-6xl mx-auto pb-40">
      {/* Simulation Masthead */}
      <header className="mb-24 text-center space-y-10">
        <motion.div 
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          className="inline-flex items-center gap-3 px-6 py-2 bg-navy/5 rounded-full border border-navy/10 text-[10px] font-black uppercase tracking-[0.3em] text-navy"
        >
          <div className="w-2 h-2 bg-pink-600 rounded-full animate-pulse"></div>
          Professional Skills Simulation • Case Study 02
        </motion.div>
        <motion.h1 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-6xl md:text-9xl font-serif font-black text-navy tracking-tighter leading-[0.8] uppercase"
        >
          THE EXPERT<br/>PANEL
        </motion.h1>
        <p className="text-xl md:text-2xl font-serif italic text-slate-500 max-w-3xl mx-auto leading-relaxed">
          "A behavioral analysis of the interviewer role within a high-speed CRM recruitment simulation—examining the architecture of professional judgment."
        </p>
      </header>

      {/* Primary Interaction Grid */}
      <section className="grid grid-cols-1 lg:grid-cols-12 gap-20 mb-32 items-center">
        <div className="lg:col-span-7 space-y-12">
          <div className="space-y-6">
            <h2 className="text-xs font-black uppercase tracking-[0.4em] text-navy/30">The Role Assignment</h2>
            <h3 className="text-4xl font-serif font-black text-navy leading-tight tracking-tighter">Leading from Column One</h3>
            <p className="text-xl text-slate-600 font-serif italic leading-relaxed">
              In a complex ecosystem of 10 participants, we were bifurcated into two functional units. Positioned at the far left of the interviewer bench, my role was to initiate the professional engagement, set the candidate at ease (or test their resolve), and orchestrate the transition to my fellow evaluators.
            </p>
          </div>

          <div className="grid grid-cols-2 gap-8">
            {assessmentCriteria.map((item, idx) => (
              <div key={idx} className="p-8 bg-white border border-navy/5 rounded-[2.5rem] shadow-xl shadow-navy/5">
                <div className="text-xs font-black uppercase text-pink-600 tracking-widest mb-3">{item.label}</div>
                <p className="text-sm text-slate-500 font-serif italic leading-tight">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>

        <div className="lg:col-span-5 relative">
          <motion.div 
            whileHover={{ scale: 1.02 }}
            className="aspect-[3/4] rounded-[4rem] overflow-hidden shadow-[0_40px_80px_-20px_rgba(10,25,47,0.2)] border border-navy/5 relative"
          >
            <img 
              src={interviewImage} 
              alt="Interviewer Performance" 
              className="w-full h-full object-cover grayscale brightness-90 hover:grayscale-0 transition-all duration-700" 
            />
            <div className="absolute inset-0 bg-gradient-to-t from-navy/60 to-transparent"></div>
            <div className="absolute bottom-12 left-12">
              <div className="text-[10px] font-black uppercase tracking-widest text-white/50 mb-2 italic">Subject Identification</div>
              <div className="text-lg font-serif font-black text-white italic">Lead Interviewer (Seat 01)</div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* The Anatomy of the Process */}
      <section className="bg-navy rounded-[5rem] p-12 md:p-24 text-white relative overflow-hidden mb-32">
        <div className="absolute top-0 left-0 w-[600px] h-[600px] bg-white/5 blur-[150px] rounded-full -ml-40 -mt-40"></div>
        <div className="relative z-10 grid grid-cols-1 lg:grid-cols-2 gap-20">
          <div className="space-y-10">
            <h3 className="text-4xl font-serif font-black tracking-tighter uppercase leading-tight">Stage 01: Pre-Interview<br/>Strategic Blueprinting</h3>
            <div className="space-y-6 text-white/60 font-serif italic text-lg leading-relaxed">
              <p>
                The interview didn't begin when the candidate walked in; it started with a rigorous analysis of the Customer Relationship Management (CRM) domain. We deconstructed the 'Blue Peak' eco-tourism case study to find the exact points of friction a professional would face.
              </p>
              <div className="p-8 border border-white/10 rounded-[3rem] bg-white/5 text-sm italic">
                "Our preparation involved curating 'Behavioral Anchors'—specific expected responses that would differentiate a mediocre candidate from a stellar one."
              </div>
            </div>
          </div>
          <div className="space-y-10">
             <h3 className="text-4xl font-serif font-black tracking-tighter uppercase leading-tight">Stage 02: Execution &<br/>Cognitive Challenges</h3>
             <div className="space-y-6 text-white/60 font-serif italic text-lg leading-relaxed">
               <p>
                 During the 75-minute session, the greatest challenge was maintaining total objectivity. When faced with an underwhelming answer, the lead interviewer must remain neutral, avoiding non-verbal cues that might lead the candidate or bias the other panel members.
               </p>
               <div className="flex gap-12 pt-6">
                 <div>
                   <div className="text-3xl font-serif font-black text-pink-400">10</div>
                   <div className="text-[9px] font-black uppercase text-white/30 tracking-widest">Total Cohort</div>
                 </div>
                 <div>
                   <div className="text-3xl font-serif font-black text-pink-400">5v5</div>
                   <div className="text-[9px] font-black uppercase text-white/30 tracking-widest">Panel Dynamics</div>
                 </div>
               </div>
             </div>
          </div>
        </div>
      </section>

      {/* Skill Synthesis */}
      <section className="space-y-20">
        <div className="text-center">
          <h2 className="text-[10px] font-black uppercase tracking-[0.5em] text-navy/30 mb-4">Competency Acquisition</h2>
          <h3 className="text-5xl font-serif font-black text-navy uppercase tracking-tighter">The Professional Dividends</h3>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {coreSkills.map((skill, i) => (
            <motion.div 
              key={i} 
              whileHover={{ y: -10 }}
              className="p-10 bg-white border border-navy/5 rounded-[3.5rem] shadow-xl shadow-navy/5 relative group h-full flex flex-col"
            >
              <div className="w-12 h-12 bg-navy/5 rounded-2xl flex items-center justify-center text-navy mb-8 group-hover:bg-navy group-hover:text-white transition-all duration-500">
                {skill.icon}
              </div>
              <h4 className="text-sm font-black uppercase text-navy tracking-widest mb-4">{skill.title}</h4>
              <p className="text-xs text-slate-500 font-serif italic leading-relaxed flex-grow">
                {skill.desc}
              </p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Life Outlook / Conclusion */}
      <section className="mt-32 pt-32 border-t border-navy/5">
        <div className="max-w-4xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-20 items-center">
          <div>
            <Briefcase className="text-pink-600 mb-8" size={32} />
            <h3 className="text-3xl font-serif font-black text-navy uppercase tracking-tighter mb-6">Future Applications</h3>
            <p className="text-xl text-slate-500 font-serif italic leading-relaxed">
              This simulation has granted me a "Mental Map" of the hiring process. Understanding how an interviewer scores a candidate means I can now navigate my own future career interviews as a more strategic, self-aware, and effective interviewee. 
            </p>
          </div>
          <div className="p-12 bg-[#f8fafc] rounded-[4rem] border border-navy/5 italic text-navy/80 font-serif text-lg leading-relaxed relative">
             <Quote className="absolute top-8 left-8 text-navy/5" size={64} />
             "Evaluating human capital requires as much self-discipline as it does technical knowledge. True assessment lies in the silence between the questions."
          </div>
        </div>
      </section>
    </div>
  );
};

const SectionTitle = ({ children, icon: Icon, accent, label }: { children: React.ReactNode, icon: any, accent?: string, label?: string }) => (
  <div className="mb-20">
    <div className="flex items-center gap-4 mb-6">
      <div className="w-10 h-[1px] bg-navy"></div>
      <span className="text-xs font-black uppercase tracking-[0.4em] text-navy">{label}</span>
    </div>
    <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
      <div className="flex items-center gap-6">
        <div className="p-5 bg-navy text-white rounded-[2rem] shadow-2xl shadow-navy/20">
          <Icon size={32} />
        </div>
        <h2 className="text-5xl font-serif font-bold text-navy tracking-tight">{children}</h2>
      </div>
      <p className="text-slate-400 font-serif italic text-xl max-w-xs md:text-right">{accent}</p>
    </div>
  </div>
);

const CVPage = () => {
  const SectionTitle = ({ children, icon: Icon }: { children: React.ReactNode, icon: any }) => (
    <div className="flex items-center gap-3 mb-6 pb-2 border-b-2 border-slate-200 print:border-slate-300">
      <div className="p-2 bg-navy rounded-lg text-white print:bg-slate-800">
        <Icon size={18} />
      </div>
      <h3 className="text-xl font-serif font-bold text-navy tracking-tight print:text-slate-900">{children}</h3>
    </div>
  );

  return (
    <section className="py-24 bg-slate-50 min-h-screen print:bg-white print:py-0">
      <style>{`
        @media print {
          nav, footer, .no-print {
            display: none !important;
          }
          body {
            background-color: white;
          }
          .resume-container {
            box-shadow: none !important;
            padding: 0 !important;
            width: 100% !important;
            max-width: 100% !important;
            margin: 0 !important;
          }
          .print-bg-navy {
            background-color: #0c1a2d !important;
            -webkit-print-color-adjust: exact;
          }
          .print-text-white {
            color: white !important;
            -webkit-print-color-adjust: exact;
          }
        }
      `}</style>
      <div className="max-w-5xl mx-auto px-4 resume-container">
        {/* Resume Header / Hero */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="bg-navy rounded-[3rem] shadow-2xl overflow-hidden border border-navy/10 mb-12 print-bg-navy print:rounded-none print:shadow-none print:mb-8"
        >
          <div className="flex flex-col md:flex-row">
            <div className="md:w-1/3 relative h-[300px] md:h-auto print:hidden">
              <img 
                src={resumeImage} 
                alt="Vidoushi Mundhill" 
                className="w-full h-full object-cover grayscale-[0.2] contrast-125"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 bg-navy/20"></div>
            </div>
            <div className="md:w-2/3 p-10 md:p-16 flex flex-col justify-center text-white print-text-white print:w-full print:p-0 print:py-12 print:px-12">
              <div className="mb-8">
                <motion.h1 
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.2 }}
                  className="text-5xl font-serif font-black text-white mb-2 print:text-5xl"
                >
                  Vidoushi Mundhill
                </motion.h1>
                <div className="flex flex-wrap items-center gap-4">
                  <motion.p 
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.3 }}
                    className="text-xl text-white/70 font-serif italic print:text-white/80"
                  >
                    BSc (Hons) Computer Science Student
                  </motion.p>
                  <span className="hidden print:inline px-3 py-1 border border-white/20 rounded-full text-[10px] font-black uppercase tracking-widest text-white/50">University of Mauritius · Year 1</span>
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 text-white/80 print:gap-x-12 print:gap-y-4">
                <div className="flex items-center gap-3">
                  <Mail size={18} className="text-white/40" />
                  <span className="text-sm font-medium">vishimundhill@gmail.com</span>
                </div>
                <div className="flex items-center gap-3">
                  <Linkedin size={18} className="text-white/40" />
                  <span className="text-sm font-medium">https://www.linkedin.com/in/vidoushi-mundhill-6b2a78364</span>
                </div>
                <div className="flex items-center gap-3">
                  <MapPin size={18} className="text-white/40" />
                  <span className="text-sm font-medium">Mauritius</span>
                </div>
                <div className="flex items-center gap-3">
                  <FileText size={18} className="text-white/40" />
                  <span className="text-sm font-medium">Student ID: 2512256</span>
                </div>
              </div>

              <div className="mt-10 flex gap-4 no-print print:hidden">
                <a 
                  href="https://drive.google.com/file/d/1GCZq7TaJxPVYbBBzJoBE_cMgS-stkQbL/view?usp=drive_link"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-8 py-3 bg-white text-navy rounded-full text-sm font-black hover:bg-slate-100 transition-colors shadow-lg flex items-center gap-3 active:scale-95"
                >
                  <FileText size={18} /> View / Download PDF Resume
                </a>
              </div>
            </div>
          </div>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 print:gap-8 bg-white p-12 rounded-[3rem] shadow-xl print:shadow-none print:p-0">
          {/* Left Column: Background & Experience */}
          <div className="lg:col-span-8 space-y-12 print:space-y-8">
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
            >
              <SectionTitle icon={User}>Professional Summary</SectionTitle>
              <p className="text-slate-600 leading-relaxed text-lg font-serif italic print:text-base print:leading-normal">
                Motivated Year 1 Computer Science student at the University of Mauritius, merging technical academic rigor with real-world operational leadership. With a background in banking operations and business management, I excel at bridging the gap between complex digital systems and intuitive user solutions. I am committed to leveraging data structures, algorithms, and sociotechnical insights to build a more connected future.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
            >
              <SectionTitle icon={Briefcase}>Experience & Leadership</SectionTitle>
              <div className="space-y-10 print:space-y-6">
                {[
                  {
                    title: "Operations Manager",
                    company: "Blue Peak",
                    date: "OCT 2025 - Present",
                    desc: "Leading a 15-person cross-functional team. Successfully deployed a new CRM system and redesigned procurement workflows, achieving a 20% productivity boost and $20k in annual mission savings.",
                    highlights: ["Team Management", "Workflow Optimization", "CRM Deployment"]
                  },
                  {
                    title: "Lead Interviewer",
                    company: "CRM Role Play Simulation",
                    date: "2026 Season",
                    desc: "Conducting high-stakes behavioral evaluations for candidate screening. Specialized in analyzing adaptability and conflict-resolution tactics in professional scenarios.",
                    highlights: ["Behavioral Analysis", "Strategic Interviewing"]
                  },
                  {
                    title: "Customer Onboarding Clerk",
                    company: "Mauritius Commercial Bank (MCB)",
                    date: "July 2019 - Dec 2019",
                    desc: "Managed customer onboarding pipelines with strict adherence to KYC/CDD protocols. Ensured 100% data integrity in highly regulated financial environments.",
                    highlights: ["Compliance", "Data Integrity", "Banking Operations"]
                  }
                ].map((job, idx) => (
                  <div key={idx} className="relative pl-8 border-l-2 border-slate-200 print:pl-6">
                    <div className="absolute -left-[9px] top-1 w-4 h-4 rounded-full bg-navy border-4 border-white print:bg-slate-300"></div>
                    <div className="flex flex-col sm:flex-row sm:justify-between sm:items-start mb-2">
                      <h4 className="text-xl font-bold text-slate-900 print:text-lg">{job.title}</h4>
                      <span className="text-[10px] font-black text-slate-400 uppercase tracking-widest bg-slate-100 px-2 py-1 rounded print:bg-transparent">{job.date}</span>
                    </div>
                    <div className="text-navy font-bold text-sm mb-3 underline decoration-navy/20 underline-offset-4">{job.company}</div>
                    <p className="text-slate-600 text-sm leading-relaxed mb-4 print:mb-2">{job.desc}</p>
                    <div className="flex flex-wrap gap-2 print:hidden">
                      {job.highlights.map(h => (
                        <span key={h} className="px-3 py-1 bg-slate-50 text-slate-600 text-[10px] font-bold uppercase tracking-widest rounded-md border border-slate-200">
                          {h}
                        </span>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
            >
              <SectionTitle icon={BookOpen}>Academic Journey</SectionTitle>
              <div className="space-y-8 print:space-y-6">
                <div className="p-8 bg-slate-50 rounded-3xl border border-slate-200 shadow-sm print:p-6 print:bg-transparent">
                  <div className="flex justify-between items-start mb-4">
                    <div>
                      <h4 className="text-xl font-bold text-slate-900 print:text-lg">BSc (Hons) Computer Science</h4>
                      <p className="text-navy font-medium italic text-sm">University of Mauritius, Reduit</p>
                    </div>
                    <span className="text-xs font-bold text-slate-400">2025 - 2028</span>
                  </div>
                  <p className="text-slate-600 text-sm mb-4 leading-relaxed">Core Focus: Programming (Python, C++, Java), Data Structures, Algorithms, Sociotechnical Systems, and Database Management.</p>
                  <div className="flex flex-wrap gap-2">
                    <span className="px-3 py-1 bg-navy/5 text-navy text-[10px] font-bold uppercase tracking-widest rounded-md">Year 1</span>
                    <span className="px-5 py-1 bg-pink-50 text-pink-600 text-[10px] font-bold uppercase tracking-widest rounded-md border border-pink-100 italic">Honours Programme</span>
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 print:grid-cols-1">
                  <div className="p-6 bg-white rounded-2xl border border-slate-200">
                    <h5 className="font-bold text-slate-900 mb-2">Cambridge HSC</h5>
                    <p className="text-[11px] text-slate-500 mb-4 italic uppercase tracking-wider font-black">Grade A Distinction</p>
                    <div className="space-y-2">
                      {["Sociology", "Mathematics", "Computer Science"].map(sub => (
                        <div key={sub} className="text-xs font-medium text-slate-700 flex justify-between border-b border-slate-100 pb-1">
                          <span>{sub}</span> <span className="text-navy font-bold">Grade A</span>
                        </div>
                      ))}
                    </div>
                  </div>
                  <div className="p-6 bg-white rounded-2xl border border-slate-200">
                    <h5 className="font-bold text-slate-900 mb-2">Cambridge SC</h5>
                    <p className="text-[11px] text-slate-500 mb-4 italic uppercase tracking-wider font-black">Comprehensive Profile</p>
                    <p className="text-[11px] text-slate-600 leading-relaxed italic">8 Subjects: English, French, Mathematics, Biology, Physics, Sociology, Computer Science, Literature.</p>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>

          {/* Right Column: Skills & Languages */}
          <div className="lg:col-span-4 space-y-12 print:space-y-8">
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              className="p-10 bg-navy text-white rounded-[3rem] shadow-xl print-bg-navy print-text-white print:p-8 print:rounded-3xl"
            >
              <h3 className="text-xl font-serif font-bold mb-8 pb-4 border-b border-white/10 flex items-center gap-3">
                <Code className="text-pink-400" size={20} /> Skills Stack
              </h3>
              
              <div className="space-y-8 print:space-y-6">
                {[
                  { category: "Programming", items: ["Python", "SQL", "C++", "Java"] },
                  { category: "Leadership", items: ["Team Management", "Strategy", "Operations"] },
                  { category: "Analysis", items: ["Sociotechnical Studies", "Behavioral Dynamics"] },
                  { category: "Data & Tools", items: ["Database Design", "Git/GitHub", "CRM Systems"] }
                ].map((grp, i) => (
                  <div key={i}>
                    <h4 className="text-[10px] font-black uppercase text-white/40 tracking-widest mb-3 italic">{grp.category}</h4>
                    <div className="flex flex-wrap gap-2">
                      {grp.items.map(skill => (
                        <span key={skill} className="px-2 py-1 bg-white/10 text-white text-[10px] font-bold rounded-lg border border-white/5 print:border-white/20">
                          {skill}
                        </span>
                      ))}
                    </div>
                  </div>
                ))}
              </div>

              <div className="mt-12 pt-8 border-t border-white/10 print:mt-8">
                <h3 className="text-xl font-serif font-bold mb-6 flex items-center gap-3">
                  <Globe className="text-pink-400" size={20} /> Languages
                </h3>
                <div className="space-y-3">
                  {[
                    { name: "English", level: "Native" },
                    { name: "French", level: "Native" },
                    { name: "Creole", level: "Native" },
                    { name: "Hindi", level: "Fluent" },
                    { name: "Spanish", level: "ESL" }
                  ].map(lang => (
                    <div key={lang.name} className="flex justify-between items-center bg-white/5 p-3 rounded-xl print:bg-white/10">
                      <span className="font-bold text-xs tracking-tight text-white/90">{lang.name}</span>
                      <span className="text-[9px] text-pink-400 font-black uppercase">{lang.level}</span>
                    </div>
                  ))}
                </div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              className="p-8 border-2 border-dashed border-slate-200 rounded-[3rem] print:border-solid print:border-slate-200 print:rounded-3xl"
            >
              <h3 className="text-lg font-serif font-bold text-navy mb-6 text-center italic border-b border-navy/5 pb-2">Academic Honours</h3>
              <div className="space-y-6">
                <div className="flex gap-4 group">
                  <div className="w-12 h-12 bg-amber-50 text-amber-600 rounded-2xl flex items-center justify-center shrink-0 border border-amber-100 group-hover:bg-amber-600 group-hover:text-white transition-all">
                    <Award size={24} />
                  </div>
                  <div>
                    <div className="text-sm font-black text-navy uppercase tracking-tight">Best Student Award</div>
                    <div className="text-[11px] text-slate-500 font-serif italic italic leading-relaxed">Recognized for consistent academic excellence throughout secondary education career.</div>
                  </div>
                </div>
                <div className="flex gap-4 group">
                  <div className="w-12 h-12 bg-pink-50 text-pink-600 rounded-2xl flex items-center justify-center shrink-0 border border-pink-100 group-hover:bg-pink-600 group-hover:text-white transition-all">
                    <Code size={24} />
                  </div>
                  <div>
                    <div className="text-sm font-black text-navy uppercase tracking-tight">Technical Scholar</div>
                    <div className="text-[11px] text-slate-500 font-serif italic italic leading-relaxed">Authored peer-reviewed sociotechnical analysis on digital algorithmic influence.</div>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};

const ProjectsPage = ({ setPage }: { setPage: (page: Page) => void }) => {
  const [activeTab, setActiveTab] = useState<'all' | 'semester1' | 'semester2'>('all');
  const [subTab, setSubTab] = useState<'all' | 'oral' | 'scavenger' | 'business' | 'synopsis' | 'crm'>('all');

  const projects = [
    {
      title: "Oral Presentation",
      role: "Presenter",
      date: "Semester 1",
      semester: 1,
      category: 'oral',
      icon: <MessageSquare size={24} />,
      image: oralPreImage,
      desc: "Exploring 'Unusual Food Combinations' – a cultural and psychological analysis of Mauritian snack fusions and global culinary trends.",
      metrics: ["Cultural Analysis", "Public Speaking", "Trend Mapping"]
    },
    {
      title: "Scavenger Hunt",
      role: "Participant & Analyst",
      date: "Semester 1",
      semester: 1,
      category: 'scavenger',
      icon: <MapPin size={24} />,
      image: scavengerImage,
      desc: "A collaborative journey exploring campus-wide team dynamics and problem-solving strategies, documented through the lens of 'The Chaos Crew'.",
      metrics: ["Teamwork", "Collaborative Logic", "Peer Reflection"]
    },
    {
      title: "Strategic Business Plan",
      role: "Strategist",
      date: "Semester 1",
      semester: 1,
      category: 'business',
      icon: <Briefcase size={24} />,
      image: businessImage,
      desc: "Developing 'Blue Peak' – a comprehensive premium eco-tourism business strategy focused on sustainable adventure tourism in Mauritius.",
      metrics: ["Venture Logic", "Eco-Sustainability", "Fiscal Strategy"]
    },
    {
      title: "Synopsis Paper",
      role: "Lead Researcher",
      date: "Semester 2",
      semester: 2,
      category: 'synopsis',
      icon: <Terminal size={24} />,
      image: synopsisPosterImage,
      desc: "A socio-technical analysis of digital architectural influences on youth behavioral patterns in modern urban environments.",
      metrics: ["Social Mapping", "Tech Influences", "Urban Studies"]
    },
    {
      title: "CRM Role Play",
      role: "Lead Interviewer",
      date: "Semester 2 (2026)",
      semester: 2,
      category: 'crm',
      icon: <User size={24} />,
      image: interviewImage,
      desc: "A high-stakes business simulation analyzing candidate adaptability, strategic decision-making, and conflict-resolution tactics in professional CRM environments.",
      metrics: ["Soft Skill Assessment", "Role Dynamics", "Professional Ethics"]
    }
  ];

  const filteredProjects = projects.filter(p => {
    if (activeTab === 'all') return true;
    if (activeTab === 'semester1') {
      if (p.semester !== 1) return false;
      if (subTab === 'all') return true;
      return p.category === subTab;
    }
    if (activeTab === 'semester2') {
      if (p.semester !== 2) return false;
      if (subTab === 'all') return true;
      return p.category === subTab;
    }
    return true;
  });

  return (
    <section className="py-24 bg-white min-h-screen">
      <div className="max-w-6xl mx-auto px-4">
        <h2 className="text-4xl font-serif font-black text-navy mb-8 text-center tracking-tighter uppercase">Projects & Experience</h2>
        
        {/* Main Tabs */}
        <div className="flex flex-col items-center gap-6 mb-12">
          <div className="inline-flex bg-white p-1.5 rounded-2xl border border-navy/10 shadow-sm">
            {[
              { id: 'all', label: 'All Projects' },
              { id: 'semester1', label: 'Semester 1' },
              { id: 'semester2', label: 'Semester 2' }
            ].map((tab) => (
              <button
                key={tab.id}
                onClick={() => {
                  setActiveTab(tab.id as any);
                  setSubTab('all');
                }}
                className={`px-6 py-2.5 rounded-xl text-sm font-black transition-all duration-300 cursor-pointer ${
                  activeTab === tab.id 
                    ? 'bg-navy text-white shadow-lg' 
                    : 'text-slate-500 hover:text-navy hover:bg-navy/5'
                }`}
              >
                {tab.label}
              </button>
            ))}
          </div>

          {/* Sub-Tabs for Semester 1 */}
          <AnimatePresence>
            {activeTab === 'semester1' && (
              <motion.div
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                className="inline-flex bg-navy/5 p-1 rounded-xl border border-navy/5"
              >
                {[
                  { id: 'oral', label: 'Oral Presentation' },
                  { id: 'scavenger', label: 'Scavenger Hunt' },
                  { id: 'business', label: 'Business Plan' }
                ].map((st) => (
                  <button
                    key={st.id}
                    onClick={() => setSubTab(st.id as any)}
                    className={`px-4 py-1.5 rounded-lg text-[10px] font-black uppercase tracking-wider transition-all cursor-pointer ${
                      subTab === st.id 
                        ? 'bg-white text-navy shadow-sm' 
                        : 'text-navy/50 hover:text-navy'
                    }`}
                  >
                    {st.label}
                  </button>
                ))}
              </motion.div>
            )}

            {activeTab === 'semester2' && (
              <motion.div
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                className="inline-flex bg-navy/5 p-1 rounded-xl border border-navy/5"
              >
                {[
                  { id: 'synopsis', label: 'Synopsis Paper' },
                  { id: 'crm', label: 'CRM Role Play' }
                ].map((st) => (
                  <button
                    key={st.id}
                    onClick={() => setSubTab(st.id as any)}
                    className={`px-4 py-1.5 rounded-lg text-[10px] font-black uppercase tracking-wider transition-all cursor-pointer ${
                      subTab === st.id 
                        ? 'bg-white text-navy shadow-sm' 
                        : 'text-navy/50 hover:text-navy'
                    }`}
                  >
                    {st.label}
                  </button>
                ))}
              </motion.div>
            )}
          </AnimatePresence>
        </div>

        <div className="space-y-48">
          <AnimatePresence mode="popLayout">
            {subTab === 'scavenger' ? (
              <motion.div 
                key="scavenger-detail"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                className="col-span-full"
              >
                <ScavengerHuntDetail />
              </motion.div>
            ) : subTab === 'synopsis' ? (
              <motion.div 
                key="synopsis-detail"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                className="col-span-full"
              >
                <SynopsisPaperDetail />
              </motion.div>
            ) : subTab === 'oral' ? (
              <motion.div 
                key="oral-detail"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                className="col-span-full"
              >
                <OralPresentationDetail />
              </motion.div>
            ) : subTab === 'business' ? (
              <motion.div 
                key="business-detail"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                className="col-span-full"
              >
                <BusinessPlanDetail />
              </motion.div>
            ) : subTab === 'crm' ? (
              <motion.div 
                key="crm-detail"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                className="col-span-full"
              >
                <CRMInterviewDetail setPage={setPage} />
              </motion.div>
            ) : filteredProjects.map((project, idx) => (
              <motion.div
                key={project.title}
                layout
                initial={{ opacity: 0, y: 40 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
                className={`flex flex-col ${idx % 2 === 0 ? 'lg:flex-row' : 'lg:flex-row-reverse'} gap-16 items-center`}
              >
                {/* Visual Content */}
                <div className="w-full lg:w-1/2 relative">
                  <div className="relative aspect-[4/3] rounded-[4rem] overflow-hidden shadow-2xl shadow-navy/10 group">
                    {project.image ? (
                      <img 
                        src={project.image} 
                        alt={project.title} 
                        className="w-full h-full object-cover transition-transform duration-[2s] group-hover:scale-110"
                        referrerPolicy="no-referrer"
                      />
                    ) : (
                      <div className="w-full h-full bg-navy/5 flex items-center justify-center text-navy/5">
                        <div className="transform scale-[4] opacity-20">{project.icon}</div>
                      </div>
                    )}
                    <div className="absolute inset-0 bg-navy/10 group-hover:bg-navy/0 transition-colors duration-700"></div>
                  </div>
                  
                  {/* Floating Date/Badge */}
                  <div className={`absolute -bottom-6 ${idx % 2 === 0 ? '-right-6' : '-left-6'} bg-white px-8 py-4 rounded-3xl shadow-xl border border-navy/5 z-10`}>
                    <div className="text-[10px] font-black text-navy/30 uppercase tracking-[0.3em] mb-1">Semester {project.semester}</div>
                    <div className="text-sm font-black text-navy uppercase tracking-widest">{project.date}</div>
                  </div>
                </div>

                {/* Textual Content */}
                <div className="w-full lg:w-1/2 space-y-8">
                  <div>
                    <div className="flex items-center gap-4 mb-6">
                      <div className="w-12 h-[1px] bg-navy/20"></div>
                      <span className="text-[10px] font-black uppercase tracking-[0.5em] text-navy/40">{project.role}</span>
                    </div>
                    <h3 className="text-5xl md:text-6xl font-serif font-black text-navy mb-6 tracking-tighter leading-tight">
                      {project.title}
                    </h3>
                    <p className="text-xl text-slate-500 font-serif italic leading-relaxed max-w-xl">
                      {project.desc}
                    </p>
                  </div>

                  <div className="flex flex-wrap gap-3">
                    {project.metrics.map(m => (
                      <span key={m} className="bg-navy/[0.03] text-navy/60 text-[10px] px-4 py-2 rounded-full font-black uppercase tracking-widest border border-navy/5">
                        {m}
                      </span>
                    ))}
                  </div>

                  <div className="flex gap-4 pt-4">
                    <button 
                      className="px-10 py-5 bg-navy text-white text-[10px] font-black uppercase tracking-widest rounded-2xl hover:bg-navy-light transition-all shadow-xl shadow-navy/20 active:scale-95"
                      onClick={() => {
                        window.scrollTo({ top: 0, behavior: 'smooth' });
                        if (project.category === 'synopsis') {
                          setActiveTab('semester2');
                          setSubTab('synopsis');
                        } else if (project.category === 'crm') {
                          setActiveTab('semester2');
                          setSubTab('crm');
                        } else if (project.category === 'oral') {
                          setActiveTab('semester1');
                          setSubTab('oral');
                        } else if (project.category === 'scavenger') {
                          setActiveTab('semester1');
                          setSubTab('scavenger');
                        } else if (project.category === 'business') {
                          setActiveTab('semester1');
                          setSubTab('business');
                        } else {
                          alert("Detail view coming soon!");
                        }
                      }}
                    >
                      {project.title === 'Synopsis Paper' ? 'Read Paper' : 'View Project'}
                    </button>
                  </div>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </div>

        {filteredProjects.length === 0 && (
          <div className="text-center py-20 bg-white rounded-[3rem] border border-dashed border-navy/10">
            <p className="text-slate-400 font-serif italic">No projects added for this semester yet.</p>
          </div>
        )}
      </div>
    </section>
  );
};

const ReflectionPage = () => {
  const challenges = [
    { title: "Public Speaking & Articulation", desc: "Overcoming the initial anxiety of presenting complex business ideas to a critical audience." },
    { title: "Group Cohesion", desc: "Navigating diverse opinions within a team to reach a singular, high-quality project goal." },
    { title: "Time Optimization", desc: "Balancing technical rigor with fixed deadlines for business deliverables." }
  ];

  const skills = [
    { title: "Business Communication", desc: "Mastering the shift from technical jargon to executive-level professional language." },
    { title: "Strategic Collaboration", desc: "Learning to lead and follow effectively within a multi-disciplinary IT project team." },
    { title: "Critical Analysis", desc: "The ability to look beyond code to understand the business value and ROI of IT solutions." },
    { title: "Technical Negotiation", desc: "Advocating for technical solutions while remaining flexible to business constraints." }
  ];

  return (
    <section className="py-24 bg-white min-h-screen">
      <div className="max-w-6xl mx-auto px-6">
        <header className="mb-32">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="space-y-6"
          >
            <div className="inline-flex items-center gap-3 px-6 py-2 bg-navy/5 rounded-full text-[10px] font-black uppercase tracking-[0.3em] text-navy">
               Semester Reflection • Module 1102
            </div>
            <h1 className="text-6xl md:text-9xl font-serif font-black text-navy uppercase tracking-tighter leading-[0.85]">
              The Reflective<br/>Synthesis
            </h1>
            <p className="text-xl md:text-3xl text-slate-500 font-serif italic max-w-3xl leading-relaxed">
              "A critical evaluation of my journey through the Communication and Business Skills in IT module, examining growth, friction, and professional evolution."
            </p>
          </motion.div>
        </header>

        {/* Learning Journey */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-24 mb-40">
          <div className="space-y-8">
            <h2 className="text-xs font-black uppercase text-pink-600 tracking-[0.4em]">01. The Narrative of Growth</h2>
            <h3 className="text-4xl font-serif font-black text-navy leading-tight uppercase tracking-tighter">My Learning Journey</h3>
            <div className="space-y-6 text-xl text-slate-500 font-serif italic leading-relaxed">
              <p>
                Entering this module as a first-year IT student, my focus was predominantly technical. However, the progression from basic communication theories to complex business simulations fundamentally shifted my perspective on what it means to be a "Professional in Tech."
              </p>
              <p className="text-base text-slate-400">
                The journey was not a linear path of easy victories, but rather a series of intentional challenges designed to break down my comfort zones. From drafting my first professional email to leading high-stakes business presentations, every step refined my ability to translate technical concepts into business value.
              </p>
            </div>
          </div>
          <div className="relative border-t-2 border-navy/5 pt-12">
            <h3 className="text-xs font-black text-navy uppercase tracking-widest mb-8">Primary Lessons Learned</h3>
            <ul className="space-y-6">
              {[
                "Communication is the bridge between technical excellence and business success.",
                "Structure and clarity are more persuasive than complexity.",
                "Empathy is a strategic skill, not just a soft trait.",
                "In IT, your code is only as valuable as your ability to justify its purpose."
              ].map((lesson, idx) => (
                <li key={idx} className="flex gap-4 text-lg font-serif italic text-navy/70 group">
                  <div className="text-pink-600 font-black">0{idx + 1}</div>
                  <div className="group-hover:translate-x-2 transition-transform duration-300">{lesson}</div>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Challenges & Skills */}
        <div className="mb-40 grid grid-cols-1 lg:grid-cols-12 gap-16">
          <div className="lg:col-span-4 space-y-12">
            <h2 className="text-xs font-black uppercase text-pink-600 tracking-[0.4em]">02. Friction Points</h2>
            <h3 className="text-3xl font-serif font-black text-navy uppercase tracking-tighter">The Challenges Faced</h3>
            <div className="space-y-6">
              {challenges.map((c, i) => (
                <div key={i} className="p-8 bg-navy/[0.02] border border-navy/5 rounded-3xl">
                  <h4 className="text-sm font-black uppercase text-navy mb-2 tracking-widest">{c.title}</h4>
                  <p className="text-xs text-slate-500 font-serif italic">{c.desc}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="lg:col-span-8 bg-navy rounded-[4rem] p-12 md:p-20 text-white relative overflow-hidden">
             <div className="absolute bottom-0 right-0 w-[400px] h-[400px] bg-white/5 blur-[150px] rounded-full"></div>
             <h2 className="text-xs font-black uppercase text-white/30 tracking-[0.4em] mb-12">03. Competency Matrix</h2>
             <div className="grid grid-cols-1 md:grid-cols-2 gap-12 relative z-10">
               {skills.map((s, i) => (
                 <div key={i} className="space-y-4">
                   <div className="flex items-center gap-3">
                     <CheckCircle2 className="text-pink-400" size={20} />
                     <h4 className="text-lg font-serif font-bold italic tracking-tight">{s.title}</h4>
                   </div>
                   <p className="text-sm text-white/60 font-serif italic leading-relaxed">{s.desc}</p>
                 </div>
               ))}
             </div>
          </div>
        </div>

        {/* Future Application */}
        <div className="bg-[#f8fafc] rounded-[5rem] p-12 md:p-24 border border-navy/5">
          <div className="max-w-4xl mx-auto space-y-16">
            <div className="text-center">
              <h2 className="text-xs font-black uppercase text-pink-600 tracking-[0.4em] mb-6">04. Professional Legacy</h2>
              <h3 className="text-5xl font-serif font-black text-navy uppercase tracking-tighter">IT Life Application</h3>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-20">
              <div className="space-y-6">
                <div className="w-12 h-12 bg-white rounded-2xl flex items-center justify-center text-navy shadow-sm">
                  <Briefcase size={20} />
                </div>
                <h4 className="text-xl font-serif font-bold text-navy">Professional Horizon</h4>
                <p className="text-lg text-slate-500 font-serif italic leading-relaxed">
                  In my professional IT career, these skills will be the differentiator. Whether I am advocating for a cloud migration or presenting a security audit, the ability to frame technical risks as business opportunities will allow me to climb the corporate ladder and lead teams with clarity.
                </p>
              </div>
              <div className="space-y-6">
                <div className="w-12 h-12 bg-white rounded-2xl flex items-center justify-center text-navy shadow-sm">
                  <Zap size={20} />
                </div>
                <h4 className="text-xl font-serif font-bold text-navy">Personal Mastery</h4>
                <p className="text-lg text-slate-500 font-serif italic leading-relaxed">
                  Personally, this module has refined my emotional intelligence. Understanding human dynamics, active listening, and conflict resolution will help me build stronger, more empathetic relationships outside the workplace, making me a more effective communicator in every facet of my life.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

const ContactPage = () => (
  <section className="py-24 bg-white min-h-screen flex items-center">
    <div className="max-w-5xl mx-auto px-4 w-full">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-24">
        <div>
          <h2 className="text-5xl font-serif font-black text-navy mb-8 uppercase tracking-tighter">Let's Connect.</h2>
          <p className="text-slate-600 text-xl mb-12 leading-relaxed font-serif italic">
            I am always open to discussing technical projects, research opportunities, or innovations in the digital space.
          </p>
          <div className="space-y-8">
            <div className="flex items-center gap-6 group">
              <div className="w-14 h-14 bg-navy/5 rounded-2xl flex items-center justify-center text-navy group-hover:bg-navy group-hover:text-white transition-all duration-300">
                <Mail size={24} />
              </div>
              <div>
                <div className="text-sm text-slate-400 font-black uppercase tracking-widest mb-1">Email Me</div>
                <div className="text-lg font-black text-navy">vishimundhill@gmail.com</div>
              </div>
            </div>
            <div className="flex items-center gap-6 group">
              <div className="w-14 h-14 bg-navy/5 rounded-2xl flex items-center justify-center text-navy group-hover:bg-navy group-hover:text-white transition-all duration-300">
                <Linkedin size={24} />
              </div>
              <div>
                <div className="text-sm text-slate-400 font-black uppercase tracking-widest mb-1">LinkedIn</div>
                <a href="https://www.linkedin.com/in/vidoushi-mundhill-9090522b4" target="_blank" className="text-lg font-black text-navy hover:text-navy-light transition-colors">Vidoushi Mundhill</a>
              </div>
            </div>
          </div>
        </div>
        <div className="bg-navy p-12 rounded-[3rem] border border-navy-light/10 shadow-2xl shadow-navy/20 text-white">
          <form onSubmit = {handleSubmit} className ="space-y-6">
            <div className="space-y-2">
              <label className="text-xs font-black text-white/50 uppercase tracking-widest">Name</label>
              <input type="text" className="w-full bg-white/10 border border-white/10 rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-white/20 transition-all text-white placeholder:text-white/20" placeholder="Your Name" />
            </div>
            <div className="space-y-2">
              <label className="text-xs font-black text-white/50 uppercase tracking-widest">Email</label>
              <input type="email" className="w-full bg-white/10 border border-white/10 rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-white/20 transition-all text-white placeholder:text-white/20" placeholder="your@email.com" />
            </div>
            <div className="space-y-2">
              <label className="text-xs font-black text-white/50 uppercase tracking-widest">Message</label>
              <textarea rows={4} className="w-full bg-white/10 border border-white/10 rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-white/20 transition-all text-white placeholder:text-white/20" placeholder="Hello Vidoushi..."></textarea>
            </div>
            <button type="submit" className="w-full py-4 bg-white text-navy rounded-xl font-black uppercase tracking-widest hover:bg-slate-100 transition-colors shadow-lg">
              Send Message
            </button>
          </form>
        </div>
      </div>
    </div>
  </section>
);

export default function App() {
  const [currentPage, setCurrentPage] = useState<Page>('home');
   const handleSubmit = async (e) => {
    e.preventDefault();
const handleSubmit = (e) => {
    e.preventDefault();

    const templateParams = {
      from_name: name,    
      from_email: email,  
      message: message,   
    };

    emailjs.send(
      'service_a6wxffq',    
      'template_5sezkeu',   
      templateParams,       
      'gGKhqXSlwvWD_Uy82'   
    )
    .then((result) => {
        alert("Message Sent! I'll get back to you soon.");
        setName('');
        setEmail('');
        setMessage('');
    }, (error) => {
        alert("Oops! Something went wrong.");
    });
  }
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, [currentPage]);

  const renderPage = () => {
    switch (currentPage) {
      case 'home': return <HomePage setPage={setCurrentPage} />;
      case 'aboutMe': return <AboutPage />;
      case 'achievements': return <AchievementsPage />;
      case 'projects': return <ProjectsPage setPage={setCurrentPage} />;
      case 'reflection': return <ReflectionPage />;
      case 'cvResume': return <CVPage />;
      case 'contact': return <ContactPage />;
      default: return <HomePage setPage={setCurrentPage} />;
    }
  };

  return (
    <div className="min-h-screen bg-white font-sans text-navy selection:bg-navy/10 selection:text-navy">
      <Nav currentPage={currentPage} setPage={setCurrentPage} />
      
      <main>
        <AnimatePresence mode="wait">
          <motion.div
            key={currentPage}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.3 }}
          >
            {renderPage()}
          </motion.div>
        </AnimatePresence>
      </main>

      <footer className="py-12 bg-navy border-t border-white/5 text-white">
        <div className="max-w-7xl mx-auto px-4 text-right">
          <p className="text-white/40 text-sm font-black uppercase tracking-widest">
            © 2026 Vidoushi Mundhill · University of Mauritius · <a href="https://www.linkedin.com/in/vidoushi-mundhill-9090522b4" target="_blank" className="hover:text-white transition-colors">LinkedIn</a>
          </p>
        </div>
      </footer>
    </div>
  );
}
