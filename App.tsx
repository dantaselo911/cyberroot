
import React, { useState, useEffect, useRef } from 'react';
import { 
  Shield, Terminal, BookOpen, Award, Users, CheckCircle2, Menu, X, ArrowRight,
  ChevronDown, ChevronUp, Cpu, Globe, Lock, Mail, Linkedin, Github, Twitter,
  ExternalLink, Filter, Play, Zap, Monitor, Target, MessageSquare
} from 'lucide-react';
import { Course, Level } from './types';
import { COURSES, BLOG_POSTS, PRICING, FAQS, TESTIMONIALS, ROADMAP_STEPS } from './constants';

// --- Animated Terminal Component ---
const CyberTerminal: React.FC = () => {
  const [lines, setLines] = useState<string[]>(['Initializing secure connection...', 'Bypassing firewalls...', 'Access granted. Welcome, operator.']);
  const [input, setInput] = useState('');
  
  const handleCommand = (e: React.FormEvent) => {
    e.preventDefault();
    if (!input.trim()) return;
    const newLines = [...lines, `> ${input}`];
    
    if (input.toLowerCase() === 'help') {
      newLines.push('Available commands: status, scan, whoami, clear');
    } else if (input.toLowerCase() === 'status') {
      newLines.push('SYSTEM: ACTIVE', 'THREAT_LEVEL: LOW', 'COURSES_LOADED: 100%');
    } else if (input.toLowerCase() === 'clear') {
      setLines(['Terminal cleared.']);
      setInput('');
      return;
    } else {
      newLines.push(`Command not found: ${input}`);
    }
    
    setLines(newLines.slice(-8));
    setInput('');
  };

  return (
    <div className="bg-black/80 rounded-xl border border-green-500/30 font-mono text-sm overflow-hidden shadow-2xl">
      <div className="bg-slate-900 px-4 py-2 border-b border-green-500/20 flex items-center justify-between">
        <div className="flex gap-2">
          <div className="w-3 h-3 rounded-full bg-red-500"></div>
          <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
          <div className="w-3 h-3 rounded-full bg-green-500"></div>
        </div>
        <span className="text-[10px] text-slate-500 uppercase tracking-widest">root@cyberroot:~</span>
      </div>
      <div className="p-4 h-64 flex flex-col justify-end">
        <div className="space-y-1 mb-4 overflow-y-auto no-scrollbar">
          {lines.map((line, i) => (
            <div key={i} className={line.startsWith('>') ? 'text-blue-400' : 'text-green-500'}>
              {line}
            </div>
          ))}
        </div>
        <form onSubmit={handleCommand} className="flex items-center gap-2 border-t border-green-500/10 pt-2">
          <span className="text-green-500 font-bold">{">"}</span>
          <input 
            type="text" 
            value={input}
            onChange={(e) => setInput(e.target.value)}
            className="bg-transparent border-none outline-none text-white w-full"
            placeholder="Type 'help'..."
          />
          <span className="w-2 h-5 bg-green-500 cursor-blink"></span>
        </form>
      </div>
    </div>
  );
};

// --- Navbar Component ---
const Navbar: React.FC<{ onOpenMenu: () => void, isOpen: boolean }> = ({ onOpenMenu, isOpen }) => (
  <nav className="fixed top-0 left-0 right-0 z-50 bg-black/90 backdrop-blur-xl border-b border-white/5">
    <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
      <div className="flex items-center gap-3 group cursor-pointer" onClick={() => window.scrollTo({top: 0, behavior: 'smooth'})}>
        <div className="bg-green-600 p-2 rounded-lg group-hover:rotate-12 transition-transform shadow-[0_0_15px_rgba(34,197,94,0.4)]">
          <Shield className="text-black" size={24} fill="currentColor" />
        </div>
        <span className="text-2xl font-black tracking-tighter text-white uppercase italic">
          Cyber<span className="text-green-500">Root</span>
        </span>
      </div>

      <div className="hidden lg:flex items-center gap-10 font-bold text-xs uppercase tracking-widest">
        {['Cursos', 'Roadmap', 'Preços', 'Blog', 'Contato'].map((item) => (
          <a key={item} href={`#${item.toLowerCase()}`} className="text-slate-400 hover:text-green-400 transition-all hover:glow-green">
            {item}
          </a>
        ))}
        <button className="bg-green-500 hover:bg-green-400 text-black px-8 py-3 rounded-full transition-all shadow-[0_0_20px_rgba(34,197,94,0.2)] active:scale-95">
          Login Aluno
        </button>
      </div>

      <button className="lg:hidden text-white" onClick={onOpenMenu}>
        {isOpen ? <X size={28} /> : <Menu size={28} />}
      </button>
    </div>
  </nav>
);

const App: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeTab, setActiveTab] = useState<Level | 'Todos'>('Todos');
  const [selectedCourse, setSelectedCourse] = useState<Course | null>(null);
  const [faqIndex, setFaqIndex] = useState<number | null>(0);
  const [formStatus, setFormStatus] = useState<'idle' | 'success'>('idle');

  const filteredCourses = activeTab === 'Todos' ? COURSES : COURSES.filter(c => c.level === activeTab);

  return (
    <div className="min-h-screen bg-[#050505] selection:bg-green-500 selection:text-black">
      <Navbar isOpen={isMenuOpen} onOpenMenu={() => setIsMenuOpen(!isMenuOpen)} />

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="fixed inset-0 z-40 bg-black pt-24 px-8 lg:hidden animate-in slide-in-from-right duration-300">
          <div className="flex flex-col gap-8 text-2xl font-black italic uppercase">
            {['Cursos', 'Roadmap', 'Preços', 'Blog', 'Contato'].map((item) => (
              <a key={item} href={`#${item.toLowerCase()}`} onClick={() => setIsMenuOpen(false)} className="text-slate-500 hover:text-green-500">
                {item}
              </a>
            ))}
            <button className="w-full py-5 bg-green-500 text-black rounded-2xl">Acessar Plataforma</button>
          </div>
        </div>
      )}

      {/* Hero Section */}
      <section className="relative pt-40 pb-32 px-6 overflow-hidden">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-7xl h-full opacity-20 pointer-events-none">
          <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-green-500/20 rounded-full blur-[120px]"></div>
          <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-blue-500/10 rounded-full blur-[120px]"></div>
        </div>

        <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-16 items-center">
          <div className="space-y-8 text-center lg:text-left">
            <div className="inline-flex items-center gap-2 bg-green-500/10 border border-green-500/20 px-4 py-2 rounded-full text-green-500 text-[10px] font-black tracking-widest uppercase">
              <Zap size={14} className="animate-pulse" /> Inscrições Abertas: Turma 2024.4
            </div>
            <h1 className="text-5xl md:text-7xl lg:text-8xl font-black text-white leading-none tracking-tighter italic">
              TRANSFORME-SE EM UM <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-green-400 to-emerald-600 glow-green">CYBER GUERREIRO</span>
            </h1>
            <p className="text-lg md:text-xl text-slate-400 max-w-2xl leading-relaxed">
              O treinamento ofensivo mais completo do Brasil. Domine técnicas reais de invasão, red teaming e defesa cibernética com laboratórios 24/7.
            </p>
            <div className="flex flex-col sm:flex-row items-center gap-6 justify-center lg:justify-start">
              <a href="#cursos" className="px-10 py-5 bg-green-500 hover:bg-green-400 text-black font-black uppercase tracking-tighter rounded-xl transition-all shadow-[0_0_30px_rgba(34,197,94,0.3)] group">
                Explorar Arsenal <ArrowRight className="inline ml-2 group-hover:translate-x-2 transition-transform" />
              </a>
              <div className="flex items-center gap-3 text-slate-500">
                <div className="flex -space-x-3">
                  {[1,2,3].map(i => <img key={i} className="w-10 h-10 rounded-full border-2 border-black" src={`https://i.pravatar.cc/100?u=${i}`} alt="Avatar" />)}
                </div>
                <span className="text-sm font-bold">15k+ Operadores Ativos</span>
              </div>
            </div>
          </div>
          <div className="hidden lg:block">
            <CyberTerminal />
          </div>
        </div>
      </section>

      {/* Stats Bar */}
      <section className="bg-slate-900/50 border-y border-white/5 py-12">
        <div className="max-w-7xl mx-auto px-6 grid grid-cols-2 md:grid-cols-4 gap-12 text-center">
          {[
            { label: 'Cursos Ativos', val: '24+' },
            { label: 'Labs de VPN', val: '150+' },
            { label: 'Média Salarial', val: 'R$ 12k' },
            { label: 'Taxa de Sucesso', val: '98%' }
          ].map((stat, i) => (
            <div key={i}>
              <div className="text-3xl md:text-5xl font-black text-green-500 mb-2">{stat.val}</div>
              <div className="text-[10px] font-black uppercase tracking-widest text-slate-500">{stat.label}</div>
            </div>
          ))}
        </div>
      </section>

      {/* Courses Section */}
      <section id="cursos" className="py-32 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-20">
            <h2 className="text-4xl md:text-6xl font-black text-white mb-6 uppercase italic">Arsenal de Treinamento</h2>
            <div className="flex flex-wrap justify-center gap-4">
              {['Todos', 'Iniciante', 'Intermediário', 'Avançado'].map(lvl => (
                <button 
                  key={lvl}
                  onClick={() => setActiveTab(lvl as any)}
                  className={`px-8 py-2 rounded-full font-bold text-xs uppercase tracking-widest transition-all ${activeTab === lvl ? 'bg-green-500 text-black shadow-lg shadow-green-500/20' : 'bg-white/5 text-slate-400 hover:bg-white/10'}`}
                >
                  {lvl}
                </button>
              ))}
            </div>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {filteredCourses.map(course => (
              <div key={course.id} className="cyber-card rounded-2xl overflow-hidden group">
                <div className="h-48 relative overflow-hidden">
                  <img src={course.image} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" alt={course.name} />
                  <div className="absolute top-4 left-4">
                    <span className="bg-black/80 backdrop-blur-md text-[8px] font-black text-green-400 border border-green-500/30 px-3 py-1 rounded-full uppercase">
                      {course.level}
                    </span>
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold text-white mb-4 group-hover:text-green-500 transition-colors">{course.name}</h3>
                  <div className="flex items-center gap-4 text-xs text-slate-500 mb-6 font-mono">
                    <span className="flex items-center gap-1"><Monitor size={14} /> {course.duration}</span>
                    <span className="flex items-center gap-1 text-green-500"><Zap size={14} /> 100% Prático</span>
                  </div>
                  <button 
                    onClick={() => setSelectedCourse(course)}
                    className="w-full py-3 bg-slate-800 hover:bg-green-600 text-white font-black text-[10px] uppercase tracking-widest rounded-lg transition-all"
                  >
                    Briefing Completo
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Career Roadmap */}
      <section id="roadmap" className="py-32 px-6 bg-slate-950">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-20">
            <h2 className="text-4xl md:text-6xl font-black text-white mb-4 uppercase italic">Ciclo de Evolução</h2>
            <p className="text-slate-500 uppercase tracking-widest text-xs font-bold">Do Zero à Elite da Segurança Ofensiva</p>
          </div>
          <div className="space-y-12 relative before:absolute before:left-8 md:before:left-1/2 before:top-0 before:bottom-0 before:w-1 before:bg-green-500/10">
            {ROADMAP_STEPS.map((step, i) => (
              <div key={i} className={`flex flex-col md:flex-row gap-12 items-center ${i % 2 !== 0 ? 'md:flex-row-reverse' : ''}`}>
                <div className="w-full md:w-1/2 flex justify-center md:justify-end md:px-12 text-center md:text-right">
                  <div className={i % 2 !== 0 ? 'md:text-left md:items-start' : 'md:text-right md:items-end'}>
                    <h4 className="text-2xl font-black text-white mb-2">{step.title}</h4>
                    <p className="text-slate-500 max-w-sm">{step.desc}</p>
                  </div>
                </div>
                <div className="absolute left-8 md:left-1/2 -translate-x-1/2 w-12 h-12 bg-black border-4 border-green-500 rounded-full flex items-center justify-center text-green-500 font-black z-10 shadow-[0_0_15px_rgba(34,197,94,0.5)]">
                  {i + 1}
                </div>
                <div className="w-full md:w-1/2"></div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-32 px-6">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl font-black text-white mb-16 text-center uppercase italic">Relatórios de Campo</h2>
          <div className="grid md:grid-cols-3 gap-8">
            {TESTIMONIALS.map((t, i) => (
              <div key={i} className="p-8 bg-slate-900/40 rounded-3xl border border-white/5 relative">
                <div className="text-green-500 mb-6"><MessageSquare size={32} fill="currentColor" opacity={0.2} /></div>
                <p className="text-slate-300 italic mb-8 leading-relaxed">"{t.text}"</p>
                <div className="flex items-center gap-4">
                  <img src={t.avatar} className="w-12 h-12 rounded-full ring-2 ring-green-500/30" alt={t.name} />
                  <div>
                    <div className="text-white font-bold">{t.name}</div>
                    <div className="text-[10px] text-slate-500 font-black uppercase tracking-widest">{t.role}</div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing */}
      <section id="preços" className="py-32 px-6 bg-[#030303]">
        <div className="max-w-7xl mx-auto grid lg:grid-cols-3 gap-12">
          {PRICING.map((plan, i) => (
            <div key={i} className={`p-10 rounded-3xl border ${plan.isPopular ? 'bg-slate-900 border-green-500 scale-105 shadow-2xl' : 'bg-transparent border-white/10'} flex flex-col`}>
              {plan.isPopular && <span className="bg-green-500 text-black text-[10px] font-black uppercase tracking-tighter px-4 py-1.5 rounded-full w-max mb-8 animate-bounce">Recomendado</span>}
              <h3 className="text-3xl font-black text-white mb-2 italic">{plan.name}</h3>
              <div className="text-5xl font-black text-white mb-10">{plan.price}<span className="text-lg text-slate-500 font-bold">/mês</span></div>
              <ul className="space-y-5 mb-12 flex-1">
                {plan.features.map((f, j) => (
                  <li key={j} className="flex items-center gap-3 text-slate-400 text-sm font-bold">
                    <Target size={18} className="text-green-500" /> {f}
                  </li>
                ))}
              </ul>
              <button className={`w-full py-5 rounded-2xl font-black uppercase tracking-widest transition-all ${plan.isPopular ? 'bg-green-500 hover:bg-green-400 text-black' : 'bg-white/5 hover:bg-white/10 text-white'}`}>
                Ativar Plano
              </button>
            </div>
          ))}
        </div>
      </section>

      {/* Contact */}
      <section id="contato" className="py-32 px-6">
        <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-20 items-center">
          <div className="space-y-12">
            <h2 className="text-4xl md:text-6xl font-black text-white uppercase italic">Transmissão <span className="text-green-500">Direta</span></h2>
            <p className="text-slate-400 text-lg">Dúvidas sobre o arsenal ou parcerias táticas? Nossa central de operações está pronta para responder.</p>
            <div className="space-y-6">
              <div className="flex items-center gap-5 p-6 bg-slate-900/50 rounded-2xl border border-white/5">
                <div className="bg-blue-500/20 p-3 rounded-lg text-blue-400"><Mail size={24} /></div>
                <div>
                  <div className="text-slate-500 text-[10px] font-black uppercase tracking-widest">Email Encriptado</div>
                  <div className="text-white font-bold">hq@cyberroot.sh</div>
                </div>
              </div>
              <div className="flex items-center gap-5 p-6 bg-slate-900/50 rounded-2xl border border-white/5">
                <div className="bg-purple-500/20 p-3 rounded-lg text-purple-400"><Globe size={24} /></div>
                <div>
                  <div className="text-slate-500 text-[10px] font-black uppercase tracking-widest">Base de Comando</div>
                  <div className="text-white font-bold">São Paulo, Brazil / Remote Global</div>
                </div>
              </div>
            </div>
          </div>
          <div className="bg-slate-900 p-10 rounded-3xl border border-white/5 shadow-2xl">
            <form className="space-y-6" onSubmit={(e) => { e.preventDefault(); setFormStatus('success'); }}>
              <div className="grid sm:grid-cols-2 gap-6">
                <input required className="bg-black/50 border border-white/10 rounded-xl px-6 py-4 text-white focus:border-green-500 outline-none" placeholder="Codename" />
                <input required type="email" className="bg-black/50 border border-white/10 rounded-xl px-6 py-4 text-white focus:border-green-500 outline-none" placeholder="Email (secure)" />
              </div>
              <textarea rows={4} className="w-full bg-black/50 border border-white/10 rounded-xl px-6 py-4 text-white focus:border-green-500 outline-none resize-none" placeholder="Relatório da mensagem..."></textarea>
              <button className="w-full py-5 bg-green-500 hover:bg-green-400 text-black font-black uppercase tracking-widest rounded-2xl transition-all active:scale-95 shadow-[0_0_20px_rgba(34,197,94,0.3)]">
                Enviar Transmissão
              </button>
            </form>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-20 bg-black border-t border-white/5 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col md:flex-row justify-between items-center gap-10 mb-20">
             <div className="flex items-center gap-3">
              <div className="bg-green-600 p-2 rounded-lg"><Shield className="text-black" size={24} /></div>
              <span className="text-2xl font-black text-white italic">CYBER<span className="text-green-500">ROOT</span></span>
            </div>
            <div className="flex gap-8">
              {[Linkedin, Github, Twitter].map((Icon, i) => (
                <a key={i} href="#" className="text-slate-500 hover:text-green-500 transition-colors"><Icon size={24} /></a>
              ))}
            </div>
          </div>
          <div className="text-center text-slate-600 text-xs font-mono">
            &copy; 2024 CYBERROOT ACADEMY // OPERATIONAL SECURITY ENFORCED // ALL RIGHTS RESERVED
          </div>
        </div>
      </footer>

      {/* Modal Detalhes Curso */}
      {selectedCourse && (
        <div className="fixed inset-0 z-[60] flex items-center justify-center p-6 bg-black/90 backdrop-blur-md">
          <div className="bg-slate-950 w-full max-w-5xl max-h-[90vh] overflow-y-auto rounded-3xl border border-white/10 shadow-2xl no-scrollbar animate-in zoom-in-95 duration-300">
            <div className="relative h-64 md:h-[400px]">
              <img src={selectedCourse.image} className="w-full h-full object-cover opacity-50" />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/20 to-transparent"></div>
              <button onClick={() => setSelectedCourse(null)} className="absolute top-6 right-6 p-3 bg-black/50 hover:bg-red-500 text-white rounded-full transition-colors"><X /></button>
              <div className="absolute bottom-10 left-10">
                <span className="bg-green-500 text-black text-[10px] font-black px-4 py-1.5 rounded-full uppercase mb-4 inline-block">{selectedCourse.level}</span>
                <h2 className="text-4xl md:text-6xl font-black text-white italic">{selectedCourse.name}</h2>
              </div>
            </div>
            <div className="p-10 grid lg:grid-cols-3 gap-16">
              <div className="lg:col-span-2 space-y-12">
                <section>
                  <h4 className="text-green-500 text-xs font-black uppercase tracking-widest mb-6 flex items-center gap-2"><BookOpen size={16} /> Plano de Invasão</h4>
                  <p className="text-slate-300 text-lg leading-relaxed">{selectedCourse.fullDesc}</p>
                </section>
                <div className="grid sm:grid-cols-2 gap-8">
                  <div>
                    <h5 className="text-white font-bold mb-4 uppercase tracking-tighter">Grade Curricular</h5>
                    <ul className="space-y-3">
                      {selectedCourse.curriculum.map((item, i) => <li key={i} className="text-slate-400 text-sm flex items-center gap-2"><CheckCircle2 size={14} className="text-green-500" /> {item}</li>)}
                    </ul>
                  </div>
                  <div>
                    <h5 className="text-white font-bold mb-4 uppercase tracking-tighter">Tech Stack</h5>
                    <div className="flex flex-wrap gap-2">
                      {selectedCourse.tools.map((tool, i) => <span key={i} className="bg-slate-900 border border-white/5 px-3 py-1 rounded-md text-[10px] text-slate-400 font-mono">{tool}</span>)}
                    </div>
                  </div>
                </div>
              </div>
              <div className="space-y-8">
                 <div className="bg-slate-900 p-8 rounded-3xl border border-white/5 space-y-6">
                    <div>
                      <span className="block text-[10px] text-slate-500 uppercase font-black tracking-widest mb-1">Carga Horária</span>
                      <span className="text-white font-bold text-xl">{selectedCourse.duration}</span>
                    </div>
                    <div>
                      <span className="block text-[10px] text-slate-500 uppercase font-black tracking-widest mb-1">Dificuldade</span>
                      <span className="text-white font-bold text-xl">{selectedCourse.level}</span>
                    </div>
                    <button className="w-full py-5 bg-green-500 hover:bg-green-400 text-black font-black uppercase tracking-widest rounded-2xl transition-all shadow-lg shadow-green-500/20">
                      Iniciar Treinamento
                    </button>
                    <p className="text-center text-[10px] text-slate-600 font-bold uppercase">Acesso imediato após confirmação</p>
                 </div>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Toast Notificação de Sucesso Transmissão */}
      {formStatus === 'success' && (
        <div className="fixed bottom-10 right-10 bg-green-500 text-black px-8 py-4 rounded-2xl font-black uppercase tracking-widest flex items-center gap-3 animate-in slide-in-from-bottom duration-500 z-[100]">
          <CheckCircle2 size={24} /> Transmissão Recebida com Sucesso
          <button onClick={() => setFormStatus('idle')} className="ml-4 hover:scale-110 transition-transform"><X size={20}/></button>
        </div>
      )}
    </div>
  );
};

export default App;
