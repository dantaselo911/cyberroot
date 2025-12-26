
import { Course, BlogPost, PricingPlan, FAQItem } from './types';

export const COURSES: Course[] = [
  {
    id: '1',
    name: 'Fundamentos de Offensive Security',
    level: 'Iniciante',
    duration: '25h',
    shortDesc: 'O primeiro passo para se tornar um hacker ético profissional.',
    fullDesc: 'Domine o mindset ofensivo, metodologias de teste de invasão e as ferramentas essenciais do Kali Linux.',
    curriculum: ['Ética Hacker', 'Footprinting', 'Scanning de Redes', 'Exploração de Vulnerabilidades'],
    tools: ['Nmap', 'Netcat', 'Metasploit'],
    targetAudience: 'Iniciantes em TI.',
    requirements: ['Conhecimento básico de redes'],
    image: 'https://images.unsplash.com/photo-1550751827-4bd374c3f58b?auto=format&fit=crop&w=600&q=80'
  },
  {
    id: '2',
    name: 'Web Hacking Masterclass',
    level: 'Avançado',
    duration: '55h',
    shortDesc: 'Exploração avançada de aplicações web e APIs.',
    fullDesc: 'Vá muito além do OWASP Top 10. Aprenda técnicas de bypass de WAF, desserialização e injeções complexas.',
    curriculum: ['SQLi Avançado', 'XXE Injection', 'SSRF', 'Insegurança em APIs'],
    tools: ['Burp Suite Pro', 'ffuf', 'Turbo Intruder'],
    targetAudience: 'Pentesters Web.',
    requirements: ['HTML/JS Básico', 'HTTP Protocol'],
    image: 'https://images.unsplash.com/photo-1563986768609-322da13575f3?auto=format&fit=crop&w=600&q=80'
  },
  {
    id: '3',
    name: 'Active Directory Attacks',
    level: 'Intermediário',
    duration: '40h',
    shortDesc: 'Domine a infraestrutura corporativa dominante.',
    fullDesc: 'Aprenda como comprometer domínios Windows, realizar escalada de privilégios e movimentação lateral.',
    curriculum: ['Kerberoasting', 'Pass-the-Hash', 'BloodHound Analysis', 'GPO Abuse'],
    tools: ['Mimikatz', 'Impacket', 'BloodHound'],
    targetAudience: 'Red Teamers.',
    requirements: ['Windows Server Básico'],
    image: 'https://images.unsplash.com/photo-1558494949-ef010cbdcc51?auto=format&fit=crop&w=600&q=80'
  },
  {
    id: '4',
    name: 'Mobile App Pentesting',
    level: 'Intermediário',
    duration: '35h',
    shortDesc: 'Análise de segurança em apps Android e iOS.',
    fullDesc: 'Aprenda a realizar engenharia reversa em binários móveis e interceptar tráfego de apps complexos.',
    curriculum: ['Static Analysis', 'Dynamic Analysis', 'SSL Pinning Bypass', 'Frida Hooking'],
    tools: ['Frida', 'MobSF', 'JADX'],
    targetAudience: 'Analistas de segurança mobile.',
    requirements: ['Noções de Java/Swift'],
    image: 'https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?auto=format&fit=crop&w=600&q=80'
  }
];

export const TESTIMONIALS = [
  { name: 'Ricardo Santos', role: 'Security Analyst @ Google', text: 'O treinamento de AD foi o divisor de águas na minha carreira. Conteúdo 100% prático.', avatar: 'https://i.pravatar.cc/150?u=ricardo' },
  { name: 'Fernanda Lima', role: 'Bug Bounty Hunter', text: 'Graças ao curso de Web Avançado, consegui meus primeiros reports críticos na HackerOne.', avatar: 'https://i.pravatar.cc/150?u=fernanda' },
  { name: 'Marcos V.', role: 'Pentester Pleno', text: 'A CyberRoot tem a melhor didática que já vi. Os laboratórios são desafiadores.', avatar: 'https://i.pravatar.cc/150?u=marcos' }
];

export const ROADMAP_STEPS = [
  { title: 'Base Sólida', desc: 'Networking, Linux e Windows internals.' },
  { title: 'Ethical Hacking', desc: 'Metodologias e ferramentas de exploração.' },
  { title: 'Especialização', desc: 'Web, Mobile, Infra ou Cloud Security.' },
  { title: 'Certificação', desc: 'Preparação para OSCP, CEH ou PNPT.' }
];

export const BLOG_POSTS: BlogPost[] = [
  { id: '1', title: 'A Ascensão do Ransomware-as-a-Service', summary: 'Como o modelo de negócio do cibercrime está mudando o cenário global.', date: '15 Out 2024', category: 'Notícias' },
  { id: '2', title: '5 Dicas de Recon para Bug Bounty', summary: 'Melhore seu processo de enumeração e encontre mais bugs.', date: '10 Out 2024', category: 'Tutoriais' },
  { id: '3', title: 'Análise da CVE-2024-XXXX', summary: 'Um mergulho técnico na vulnerabilidade que parou o setor financeiro.', date: '05 Out 2024', category: 'Análise' }
];

export const PRICING: PricingPlan[] = [
  { name: 'Recruta', price: 'R$ 89', features: ['Acesso a 2 cursos', 'Certificados', 'Comunidade Discord'] },
  { name: 'Operador', price: 'R$ 249', features: ['Todos os cursos', 'Labs 24/7', 'Workshops Mensais', 'Suporte Prioritário'], isPopular: true },
  { name: 'Elite', price: 'R$ 599', features: ['Acesso Vitalício', 'Mentoria 1-on-1', 'Voucher de Certificação', 'Job Placement'] }
];

export const FAQS: FAQItem[] = [
  { question: 'Como funcionam os laboratórios?', answer: 'Você recebe acesso a uma VPN exclusiva onde pode atacar máquinas reais em um ambiente controlado.' },
  { question: 'O curso tem garantia?', answer: 'Sim, oferecemos 7 dias de garantia incondicional.' },
  { question: 'Recebo certificado?', answer: 'Sim, cada curso concluído gera um certificado digital com validação de carga horária.' }
];
