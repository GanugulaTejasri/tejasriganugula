import React, { useState, useEffect } from 'react';
import { 
  Github, 
  Linkedin, 
  Mail, 
  Phone, 
  ExternalLink, 
  Code2, 
  Database, 
  BrainCircuit, 
  Cloud, 
  Terminal, 
  Award, 
  BookOpen,
  ChevronRight,
  Download,
  MapPin
} from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';

const projects = [
  {
    title: "AI-Emotion Detection System",
    description: "A real-time system to detect human feelings (happy, sad, angry, fear) through text, image, and webcam using OpenCV and Deep Learning.",
    tech: ["Python", "OpenCV", "TensorFlow", "Deep Learning"],
    category: "AI/ML",
    link: "#"
  },
  {
    title: "AI-Driven Recommendation System",
    description: "A movie recommendation engine using AI/DL models with a Streamlit interface. Predicts user feelings based on watch history and visualizes data with interactive charts.",
    tech: ["Python", "Streamlit", "Scikit-learn", "Pandas"],
    category: "AI/ML",
    link: "#"
  },
  {
    title: "Student Performance Predictor",
    description: "Python-based regression analysis tool designed to predict academic performance based on various student metrics.",
    tech: ["Python", "Scikit-learn", "Regression Analysis"],
    category: "Data Science",
    link: "#"
  },
  {
    title: "Telegram Mini App",
    description: "A chat and game integration system built using the MERN stack with blockchain support for interactive modules.",
    tech: ["React", "Node.js", "MongoDB", "Blockchain"],
    category: "Web Dev",
    link: "#"
  },
  {
    title: "Interactive Educational Platform",
    description: "A responsive web platform featuring video lessons, tests, and an AI chatbot to support student communication and online learning.",
    tech: ["HTML", "CSS", "JavaScript", "AI Chatbot"],
    category: "Web Dev",
    link: "#"
  }
];

const skills = {
  programming: ["Python", "SQL", "JavaScript", "Java", "C"],
  web: ["React.js", "Streamlit", "HTML", "CSS", "Firebase", "Bootstrap"],
  ml_ai: ["Scikit-learn", "TensorFlow", "OpenCV", "Pandas", "NumPy"],
  cloud: ["AWS EC2", "AWS Lambda", "AWS S3"],
  tools: ["Git", "GitHub", "MongoDB", "VS Code", "Tableau", "Power BI"]
};

const experience = [
  {
    role: "Data Science & ML Intern",
    company: "GeeksForGeeks",
    period: "Internship",
    description: "Performed data preprocessing and applied ML techniques to improve prediction accuracy."
  },
  {
    role: "Machine Learning Intern",
    company: "Internship Studio",
    period: "Internship",
    description: "Developed and evaluated Decision Tree and SVM models using Scikit-learn."
  },
  {
    role: "Data Analyst Intern",
    company: "Internship Studio",
    period: "Internship",
    description: "Analyzed datasets using Excel, SQL, and Python to generate insights and build dashboards."
  },
  {
    role: "Full Stack Python",
    company: "Excelr",
    period: "Internship",
    description: "Gained hands-on experience in building end-to-end applications using Python and web technologies."
  },
  {
    role: "Cloud Computing Trainee",
    company: "Telant Trek",
    period: "3 Months",
    description: "Deployed applications with AWS (EC2, S3), worked with serverless architecture (Lambda), and applied cloud security best practices."
  }
];

export default function App() {
  const [activeTab, setActiveTab] = useState('All');
  const categories = ['All', 'AI/ML', 'Web Dev', 'Data Science'];

  const filteredProjects = activeTab === 'All' 
    ? projects 
    : projects.filter(p => p.category === activeTab);

  return (
    <div className="min-h-screen font-sans selection:bg-emerald-100 selection:text-emerald-900">
      {/* Navigation */}
      <nav className="fixed top-0 w-full z-50 glass border-b border-zinc-200/50">
        <div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
          <span className="font-serif italic text-xl font-bold tracking-tight">TG.</span>
          <div className="hidden md:flex gap-8 text-sm font-medium text-zinc-600">
            <a href="#about" className="hover:text-emerald-600 transition-colors">About</a>
            <a href="#skills" className="hover:text-emerald-600 transition-colors">Skills</a>
            <a href="#experience" className="hover:text-emerald-600 transition-colors">Experience</a>
            <a href="#projects" className="hover:text-emerald-600 transition-colors">Projects</a>
            <a href="#contact" className="hover:text-emerald-600 transition-colors">Contact</a>
          </div>
          <a 
            href="mailto:tejasriganugula@gmail.com"
            className="bg-zinc-900 text-white px-5 py-2 rounded-full text-sm font-medium hover:bg-emerald-600 transition-all"
          >
            Hire Me
          </a>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="pt-32 pb-20 px-6 md:px-12 lg:px-24 max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-50 text-emerald-700 text-xs font-bold uppercase tracking-wider mb-6">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
              </span>
              Available for Internships
            </div>
            <h1 className="text-6xl md:text-7xl font-serif font-bold leading-tight mb-6">
              Tejasri <br />
              <span className="text-gradient italic">Ganugula</span>
            </h1>
            <p className="text-xl text-zinc-600 max-w-lg mb-8 leading-relaxed">
              AI & Data Science undergraduate specializing in building intelligent systems, 
              responsive web platforms, and cloud-based solutions.
            </p>
            <div className="flex flex-wrap gap-4">
              <div className="flex gap-4">
                <a 
                  href="https://linkedin.com/in/tejasri-ganugula-98801a274" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="p-3 rounded-xl border border-zinc-200 hover:border-emerald-500 hover:text-emerald-600 transition-all"
                >
                  <Linkedin size={20} />
                </a>
                <a 
                  href="https://github.com/GanugulaTejasri" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="p-3 rounded-xl border border-zinc-200 hover:border-emerald-500 hover:text-emerald-600 transition-all"
                >
                  <Github size={20} />
                </a>
                <a 
                  href="mailto:tejasriganugula@gmail.com"
                  className="p-3 rounded-xl border border-zinc-200 hover:border-emerald-500 hover:text-emerald-600 transition-all"
                >
                  <Mail size={20} />
                </a>
              </div>
              <button className="flex items-center gap-2 px-6 py-3 bg-zinc-900 text-white rounded-xl font-medium hover:bg-emerald-600 transition-all">
                <Download size={18} />
                Download Resume
              </button>
            </div>
          </motion.div>
          <motion.div 
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8 }}
            className="relative hidden lg:block"
          >
            <div className="aspect-square rounded-3xl overflow-hidden shadow-2xl">
              <img 
                src="https://res.cloudinary.com/dpgznywjo/image/upload/v1771749197/WhatsApp_Image_2026-02-22_at_2.01.33_PM_nfmvcs.jpg" 
                alt="Tejasri Ganugula" 
                className="w-full h-full object-cover "
                referrerPolicy="no-referrer"
              />
            </div>
            {/* Floating Stats */}
          </motion.div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="section-padding bg-zinc-100/50">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-3 gap-12">
            <div className="md:col-span-1">
              <h2 className="text-xs font-bold uppercase tracking-[0.2em] text-emerald-600 mb-4">About Me</h2>
              <h3 className="text-4xl font-serif font-bold leading-tight">Crafting intelligent digital experiences.</h3>
            </div>
            <div className="md:col-span-2 space-y-6 text-zinc-600 leading-relaxed text-lg">
              <p>
                I'm a passionate web developer and python developer with a love for creating accessible, 
                perfect digital experiences. My journey in development started with curiosity and evolved 
                into a career focused on building interfaces that users love.
              </p>
              <p>
                Currently pursuing my B.Tech in Artificial Intelligence and Data Science at VKR, VNB & AGK College 
                of Engineering (2022-2026). I specialize in building intelligent systems using Python, React, 
                and modern data science tools.
              </p>
              <div className="grid grid-cols-2 gap-8 pt-6">
                <div>
                  <p className="text-zinc-900 font-bold text-2xl">77%</p>
                  <p className="text-sm">B.Tech Aggregate</p>
                </div>
                <div>
                  <p className="text-zinc-900 font-bold text-2xl">5+</p>
                  <p className="text-sm">Internships Completed</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="section-padding">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-xs font-bold uppercase tracking-[0.2em] text-emerald-600 mb-4">Technical Stack</h2>
            <h3 className="text-4xl font-serif font-bold">My Expertise</h3>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            <SkillCard 
              icon={<Terminal className="text-emerald-600" />} 
              title="Programming" 
              skills={skills.programming} 
            />
            <SkillCard 
              icon={<Code2 className="text-blue-600" />} 
              title="Web Development" 
              skills={skills.web} 
            />
            <SkillCard 
              icon={<BrainCircuit className="text-purple-600" />} 
              title="ML & AI" 
              skills={skills.ml_ai} 
            />
            <SkillCard 
              icon={<Cloud className="text-sky-600" />} 
              title="Cloud Computing" 
              skills={skills.cloud} 
            />
            <SkillCard 
              icon={<Database className="text-orange-600" />} 
              title="Tools & Data" 
              skills={skills.tools} 
            />
            <div className="p-8 rounded-3xl bg-zinc-900 text-white flex flex-col justify-between">
              <div>
                <h4 className="text-xl font-bold mb-4">Soft Skills</h4>
                <div className="flex flex-wrap gap-2">
                  {["Canva", "Basic Photoshop", "Problem Solving", "Teamwork"].map(s => (
                    <span key={s} className="px-3 py-1 rounded-full bg-white/10 text-xs font-medium">{s}</span>
                  ))}
                </div>
              </div>
              <p className="text-zinc-400 text-sm mt-6">Always learning and adapting to new technologies.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Experience Section */}
      <section id="experience" className="section-padding bg-zinc-900 text-white">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-6">
            <div>
              <h2 className="text-xs font-bold uppercase tracking-[0.2em] text-emerald-400 mb-4">Journey</h2>
              <h3 className="text-4xl font-serif font-bold">Professional Experience</h3>
            </div>
            <div className="flex items-center gap-2 text-zinc-400 text-sm">
              <MapPin size={16} />
              <span>Andhra Pradesh, India</span>
            </div>
          </div>
          <div className="space-y-12">
            {experience.map((exp, index) => (
              <motion.div 
                key={index}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                className="grid md:grid-cols-4 gap-8 border-b border-zinc-800 pb-12 last:border-0"
              >
                <div className="md:col-span-1">
                  <p className="text-emerald-400 font-mono text-sm">{exp.period}</p>
                </div>
                <div className="md:col-span-3">
                  <h4 className="text-2xl font-bold mb-2">{exp.role}</h4>
                  <p className="text-zinc-400 font-medium mb-4">{exp.company}</p>
                  <p className="text-zinc-500 max-w-2xl leading-relaxed">{exp.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="section-padding">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col md:flex-row justify-between items-center mb-16 gap-8">
            <div>
              <h2 className="text-xs font-bold uppercase tracking-[0.2em] text-emerald-600 mb-4">Portfolio</h2>
              <h3 className="text-4xl font-serif font-bold">Featured Projects</h3>
            </div>
            <div className="flex gap-2 p-1 bg-zinc-100 rounded-full">
              {categories.map(cat => (
                <button
                  key={cat}
                  onClick={() => setActiveTab(cat)}
                  className={`px-6 py-2 rounded-full text-sm font-medium transition-all ${
                    activeTab === cat ? 'bg-white shadow-sm text-emerald-600' : 'text-zinc-500 hover:text-zinc-800'
                  }`}
                >
                  {cat}
                </button>
              ))}
            </div>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <AnimatePresence mode="popLayout">
              {filteredProjects.map((project, index) => (
                <motion.div
                  layout
                  key={project.title}
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.9 }}
                  transition={{ duration: 0.4 }}
                  className="group p-8 rounded-3xl border border-zinc-200 hover:border-emerald-500 hover:shadow-2xl hover:shadow-emerald-500/10 transition-all bg-white flex flex-col h-full"
                >
                  <div className="flex justify-between items-start mb-6">
                    <div className="p-3 rounded-xl bg-zinc-50 text-zinc-900 group-hover:bg-emerald-500 group-hover:text-white transition-colors">
                      {project.category === 'AI/ML' ? <BrainCircuit size={24} /> : <Code2 size={24} />}
                    </div>
                    <a href={project.link} className="text-zinc-400 hover:text-emerald-600">
                      <ExternalLink size={20} />
                    </a>
                  </div>
                  <h4 className="text-xl font-bold mb-3">{project.title}</h4>
                  <p className="text-zinc-500 text-sm mb-6 flex-grow leading-relaxed">
                    {project.description}
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {project.tech.map(t => (
                      <span key={t} className="px-3 py-1 rounded-full bg-zinc-100 text-[10px] font-bold uppercase tracking-wider text-zinc-600">
                        {t}
                      </span>
                    ))}
                  </div>
                </motion.div>
              ))}
            </AnimatePresence>
          </div>
        </div>
      </section>

      {/* Education & Certs */}
      <section className="section-padding bg-zinc-50">
        <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-16">
          <div>
            <h2 className="text-xs font-bold uppercase tracking-[0.2em] text-emerald-600 mb-8">Education</h2>
            <div className="space-y-8">
              <div className="relative pl-8 border-l border-zinc-200">
                <div className="absolute left-[-5px] top-0 w-[9px] h-[9px] rounded-full bg-emerald-500"></div>
                <p className="text-sm font-mono text-zinc-500 mb-1">2022 — 2026</p>
                <h4 className="text-lg font-bold">B.Tech in Artificial Intelligence & Data Science</h4>
                <p className="text-zinc-600">VKR, VNB & AGK College of Engineering</p>
                <p className="text-emerald-600 font-bold mt-1">Aggregate: 77%</p>
              </div>
              <div className="relative pl-8 border-l border-zinc-200">
                <div className="absolute left-[-5px] top-0 w-[9px] h-[9px] rounded-full bg-zinc-300"></div>
                <p className="text-sm font-mono text-zinc-500 mb-1">2020 — 2022</p>
                <h4 className="text-lg font-bold">Intermediate (MPC)</h4>
                <p className="text-zinc-600">Narayana Junior College</p>
                <p className="text-zinc-900 font-bold mt-1">Percentage: 88.2%</p>
              </div>
            </div>
          </div>
          <div>
            <h2 className="text-xs font-bold uppercase tracking-[0.2em] text-emerald-600 mb-8">Certifications</h2>
            <div className="grid gap-4">
              {[
                { title: "Full Stack with Python", issuer: "Excelr", year: "2024" },
                { title: "TCS iON Career Edge", issuer: "Young Professional", year: "2024" },
                { title: "React & Power BI Bootcamp", issuer: "Let'sUpgrade", year: "2025" }
              ].map((cert, i) => (
                <div key={i} className="flex items-center gap-4 p-4 rounded-2xl bg-white border border-zinc-200">
                  <div className="p-2 rounded-lg bg-emerald-50 text-emerald-600">
                    <BookOpen size={20} />
                  </div>
                  <div>
                    <h4 className="font-bold text-sm">{cert.title}</h4>
                    <p className="text-xs text-zinc-500">{cert.issuer} • {cert.year}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="section-padding">
        <div className="max-w-7xl mx-auto">
          <div className="bg-zinc-900 rounded-[3rem] p-12 md:p-20 text-center text-white relative overflow-hidden">
            <div className="absolute top-0 left-0 w-full h-full opacity-10 pointer-events-none">
              <div className="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] bg-emerald-500 blur-[120px] rounded-full"></div>
              <div className="absolute bottom-[-10%] right-[-10%] w-[40%] h-[40%] bg-blue-500 blur-[120px] rounded-full"></div>
            </div>
            
            <h2 className="text-emerald-400 font-mono text-sm mb-6 uppercase tracking-widest">Get in touch</h2>
            <h3 className="text-4xl md:text-6xl font-serif font-bold mb-8">Let's build something <br /> amazing together.</h3>
            
            <div className="flex flex-col md:flex-row justify-center items-center gap-8 mb-12">
              <a href="mailto:tejasriganugula@gmail.com" className="flex items-center gap-3 text-xl hover:text-emerald-400 transition-colors">
                <Mail />
                tejasriganugula@gmail.com
              </a>
              <a href="tel:+919494969706" className="flex items-center gap-3 text-xl hover:text-emerald-400 transition-colors">
                <Phone />
                +91 9494969706
              </a>
            </div>

            <div className="flex justify-center gap-6">
              <a href="https://linkedin.com/in/tejasri-ganugula-98801a274" target="_blank" rel="noopener noreferrer" className="w-12 h-12 rounded-full border border-white/20 flex items-center justify-center hover:bg-white hover:text-zinc-900 transition-all">
                <Linkedin size={20} />
              </a>
              <a href="https://github.com/GanugulaTejasri" target="_blank" rel="noopener noreferrer" className="w-12 h-12 rounded-full border border-white/20 flex items-center justify-center hover:bg-white hover:text-zinc-900 transition-all">
                <Github size={20} />
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 border-t border-zinc-200 text-center text-zinc-500 text-sm">
        <p>© {new Date().getFullYear()} Tejasri Ganugula. Built with React & Tailwind CSS.</p>
      </footer>
    </div>
  );
}

function SkillCard({ icon, title, skills }: { icon: React.ReactNode, title: string, skills: string[] }) {
  return (
    <div className="p-8 rounded-3xl border border-zinc-200 bg-white hover:border-zinc-300 transition-all">
      <div className="mb-6">{icon}</div>
      <h4 className="text-xl font-bold mb-4">{title}</h4>
      <div className="flex flex-wrap gap-2">
        {skills.map(skill => (
          <span key={skill} className="px-3 py-1 rounded-full bg-zinc-50 text-xs font-medium text-zinc-600 border border-zinc-100">
            {skill}
          </span>
        ))}
      </div>
    </div>
  );
}
