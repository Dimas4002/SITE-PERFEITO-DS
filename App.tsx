import React, { useState, useRef } from 'react';
import { 
  MessageCircle, 
  Check, 
  Star, 
  ShieldCheck, 
  BadgeCheck, 
  Mail
} from 'lucide-react';

const WHATSAPP_LINK = "https://wa.me/5521976732283";
const CONTACT_EMAIL = "dsavision4002@gmail.com";
const PAY_ANNUAL_LINK = "https://pay.cakto.com.br/g84vomd_";
const PAY_3MONTHS_LINK = "https://pay.cakto.com.br/ppu55ft_684426";

const Logo = ({ className, grayscale = false }: { className?: string; grayscale?: boolean }) => (
  <svg 
    viewBox="0 0 100 100" 
    className={`${className} ${grayscale ? 'grayscale opacity-50' : ''}`}
    fill="none" 
    xmlns="http://www.w3.org/2000/svg"
  >
    <circle cx="50" cy="50" r="48" stroke={grayscale ? "#9ca3af" : "#2563eb"} strokeWidth="1" strokeOpacity="0.2" />
    <circle cx="50" cy="50" r="42" fill={grayscale ? "#d1d5db" : "#93c5fd"} fillOpacity="0.3" />
    <circle cx="50" cy="50" r="38" fill={grayscale ? "#9ca3af" : "#2563eb"} />
    <circle cx="50" cy="50" r="34" stroke="white" strokeWidth="4" />
    <path d="M15 50H25M12 45H18M12 55H18" stroke={grayscale ? "#4b5563" : "#2563eb"} strokeWidth="2" strokeLinecap="round" />
    <circle cx="12" cy="45" r="2" fill={grayscale ? "#4b5563" : "#2563eb"} />
    <circle cx="12" cy="55" r="2" fill={grayscale ? "#4b5563" : "#2563eb"} />
    <path d="M85 50H75M88 45H82M88 55H82" stroke={grayscale ? "#4b5563" : "#2563eb"} strokeWidth="2" strokeLinecap="round" />
    <circle cx="88" cy="45" r="2" fill={grayscale ? "#4b5563" : "#2563eb"} />
    <circle cx="88" cy="55" r="2" fill={grayscale ? "#4b5563" : "#2563eb"} />
    <path d="M40 35H55C60 35 63 38 63 43C63 48 60 51 55 51H40V35Z" fill="white" />
    <path d="M40 51H47L58 65H65L53 51H40V65H33V35H40V51Z" fill="white" />
    <rect x="40" y="35" width="7" height="30" fill="white" />
  </svg>
);

export default function App() {
  const [activeTab, setActiveTab] = useState(0);
  const scrollRef = useRef<HTMLDivElement>(null);

  const featureSlides = [
    { title: "Registra com uma mensagem", description: "Escreva \"uber 27\" e o Rotina entende, registra e categoriza na hora, sem você sair do WhatsApp.", image: "/uber.webp" },
    { title: "Alimentação sem esforço", description: "Mande \"Mac Donalds 56\" e a IA entende que é Alimentação. Simples, rápido e muito prático.", image: "/mcdonalds.webp" },
    { title: "Controle por Cartão", description: "Especifique o cartão (ex: Nubank) e o Rotina separa seus gastos para você não se perder na fatura.", image: "/nubank.webp" },
    { title: "Relatórios na palma da mão", description: "Peça quanto gastou com uma categoria no mês e receba um resumo detalhado em segundos.", image: "/relatorio.webp" },
    { title: "Alertas de Limite", description: "Receba avisos inteligentes quando atingir porcentagens do seu limite mensal. Economize de verdade.", image: "/gasolina.webp" }
  ];

  const handleScroll = () => {
    if (scrollRef.current) {
      const idx = Math.round(scrollRef.current.scrollLeft / scrollRef.current.clientWidth);
      if (idx !== activeTab) setActiveTab(idx);
    }
  };

  return (
    <main className="min-h-screen bg-white text-slate-900">
      {/* Hero */}
      <section className="pt-16 pb-20 px-4 text-center animate-hero">
        <Logo className="w-16 h-16 mb-6 mx-auto drop-shadow-lg" />
        <span className="text-slate-500 font-semibold text-xs tracking-widest uppercase mb-4 block">Rotina Automática</span>

        <h1 className="text-4xl md:text-6xl font-bold text-slate-900 mb-8 max-w-4xl mx-auto leading-tight">
          Domine seus gastos enviando <span className="text-blue-600">apenas uma mensagem.</span>
        </h1>

        <div className="max-w-xl mx-auto text-slate-600 text-lg md:text-xl font-medium space-y-4 mb-12">
          <p>O Rotina registra e organiza todos os seus gastos direto no <span className="text-blue-600 font-bold">WhatsApp</span>.</p>
          <p>Sem apps confusos ou planilhas. Controle total na palma da sua mão.</p>
        </div>

        <div className="relative mb-12 w-full max-w-[510px] mx-auto">
          <img 
            src="/mockup.webp" 
            alt="Interface do Rotina no WhatsApp" 
            fetchpriority="high"
            loading="eager"
            className="w-full h-auto drop-shadow-2xl"
          />
        </div>

        <button 
          onClick={() => document.getElementById('planos')?.scrollIntoView({ behavior: 'smooth' })}
          className="bg-blue-600 text-white px-10 py-4 rounded-full font-bold text-lg hover:bg-blue-700 transition-all shadow-lg hover:shadow-blue-200"
        >
          Quero ativar o Rotina
        </button>
      </section>

      {/* Funcionalidades */}
      <section className="bg-blue-600 py-24 px-4 text-white">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">O que o Rotina faz?</h2>
          {/* AJUSTE DE CONTRASTE ABAIXO: de text-blue-100 para text-white */}
          <p className="text-lg mb-16 text-white max-w-2xl mx-auto font-medium">Automatização inteligente direto no seu WhatsApp.</p>

          <div className="relative max-w-sm mx-auto">
            <div 
              ref={scrollRef} 
              onScroll={handleScroll}
              className="flex overflow-x-auto snap-x snap-mandatory no-scrollbar bg-white rounded-3xl shadow-2xl"
            >
              {featureSlides.map((s, i) => (
                <article key={i} className="min-w-full snap-center p-8 text-slate-900 flex flex-col items-center">
                  <h3 className="text-xl font-bold mb-6">{s.title}</h3>
                  <div className="bg-slate-50 rounded-xl mb-8 w-full aspect-video flex items-center justify-center overflow-hidden border border-slate-100">
                    <img src={s.image} alt={s.title} loading="lazy" className="max-w-full h-auto" width="300" height="180" />
                  </div>
                  <p className="text-slate-600 font-medium text-center">{s.description}</p>
                </article>
              ))}
            </div>
            <div className="flex justify-center gap-2 mt-8">
              {featureSlides.map((_, i) => (
                <div key={i} className={`h-1.5 rounded-full transition-all duration-300 ${activeTab === i ? 'bg-white w-8' : 'bg-white/30 w-1.5'}`} />
              ))}
            </div>
            {/* AJUSTE DE CONTRASTE ABAIXO: de text-blue-100 para text-white */}
            <p className="mt-6 text-white font-semibold text-[10px] uppercase tracking-widest">Arraste para conhecer</p>
          </div>
        </div>
      </section>

      {/* Como Funciona */}
      <section className="py-24 px-4 bg-slate-50 text-center">
        <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-16">Como funciona?</h2>
        <div className="grid md:grid-cols-3 gap-12 max-w-5xl mx-auto">
          {[
            { n: 1, t: "Ative seu acesso", d: "Escolha seu plano e receba o link direto." },
            { n: 2, t: "Mande um oi", d: "A nossa IA te responde e começa a organizar." },
            { n: 3, t: "Pronto!", d: "Controle seus gastos sem esforço nenhum." }
          ].map((step, i) => (
            <div key={i} className="flex flex-col items-center">
              <div className="w-14 h-14 bg-blue-600 text-white rounded-2xl flex items-center justify-center font-bold text-2xl mb-6 shadow-md">{step.n}</div>
              <h3 className="text-xl font-bold mb-3 text-slate-900">{step.t}</h3>
              <p className="text-slate-600 font-medium px-4">{step.d}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Planos */}
      <section id="planos" className="py-24 px-4 bg-white text-center border-t border-slate-50">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">Escolha seu Plano</h2>
          <p className="text-slate-500 font-medium mb-16">Organização financeira profissional pelo WhatsApp.</p>

          <div className="grid md:grid-cols-2 gap-8 items-stretch">
            
            {/* Plano 3 Meses */}
            <article className="bg-white border-2 border-blue-600 rounded-3xl p-8 md:p-10 shadow-xl shadow-blue-50 relative flex flex-col transform md:scale-105">
              <div className="absolute top-4 right-4 bg-blue-600 text-white px-3 py-1 rounded-md text-[10px] font-bold uppercase tracking-wider">
                MAIS POPULAR
              </div>
              
              <div className="text-left mb-8">
                <h3 className="text-2xl font-bold text-slate-900 mb-1">Acesso 3 meses</h3>
                <p className="text-slate-500 text-sm font-medium">Perfeito para começar sua rotina.</p>
              </div>
              
              <div className="text-left mb-8">
                <div className="flex items-baseline gap-1">
                  <span className="text-5xl font-bold text-slate-900">R$49,90</span>
                  <span className="text-slate-400 font-semibold text-sm">total</span>
                </div>
              </div>

              <ul className="text-left space-y-4 mb-10 text-slate-600 font-medium text-sm flex-grow">
                {["Acesso ilimitado à IA", "Categorias automáticas", "Relatórios via Chat", "Alertas de Limite", "Suporte VIP"].map((item, i) => (
                  <li key={i} className="flex items-center gap-3">
                    <Check size={16} className="text-blue-600" strokeWidth={3} />
                    {item}
                  </li>
                ))}
              </ul>

              <button 
                onClick={() => window.open(PAY_3MONTHS_LINK, '_blank')} 
                className="w-full bg-blue-600 text-white py-4 rounded-xl font-bold text-base hover:bg-blue-700 transition-all shadow-md active:scale-[0.98]"
              >
                Ativar 3 Meses Agora
              </button>
            </article>

            {/* Plano Anual */}
            <article className="bg-white border border-slate-200 rounded-3xl p-8 md:p-10 shadow-sm flex flex-col">
              <div className="text-left mb-8">
                <h3 className="text-2xl font-bold text-slate-900 mb-1">Acesso Anual</h3>
                <p className="text-slate-500 text-sm font-medium">Máxima economia e controle.</p>
              </div>
              
              <div className="text-left mb-8">
                <div className="flex items-baseline gap-2">
                  <span className="text-sm font-semibold text-slate-400 uppercase tracking-tighter">12x de</span>
                  <span className="text-5xl font-bold text-slate-900">R$7,33</span>
                </div>
                <p className="text-slate-700 font-semibold text-sm mt-2">
                  Ou <span className="text-blue-600">R$87,90</span> à vista no PIX
                </p>
              </div>

              <ul className="text-left space-y-4 mb-10 text-slate-600 font-medium text-sm flex-grow">
                {["Tudo do plano trimestral", "365 dias de acesso", "Melhor custo-benefício", "Acesso antecipado a funções"].map((item, i) => (
                  <li key={i} className="flex items-center gap-3">
                    <Check size={16} className="text-blue-600" strokeWidth={3} />
                    {item}
                  </li>
                ))}
              </ul>

              <button 
                onClick={() => window.open(PAY_ANNUAL_LINK, '_blank')} 
                className="w-full border-2 border-slate-200 text-slate-900 py-4 rounded-xl font-bold text-base hover:border-blue-600 hover:text-blue-600 transition-all active:scale-[0.98]"
              >
                Ativar Plano Anual
              </button>
            </article>

          </div>
        </div>

        <div className="mt-16 flex flex-col items-center gap-3">
          <ShieldCheck size={28} className="text-blue-600" />
          <p className="text-sm font-semibold text-slate-500 uppercase tracking-wide">7 dias de garantia total</p>
        </div>
      </section>

      {/* Depoimentos */}
      <section className="py-24 px-4 bg-slate-50 text-center">
        <h2 className="text-2xl md:text-3xl font-bold text-slate-900 mb-16">
          São <span className="text-blue-600">+3.000 pessoas</span> se organizando com o Rotina
        </h2>
        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {[
            { n: "Mariana Costa", r: "Autônoma", t: "O Rotina me salvou! Só mando o valor no WhatsApp e pronto. Organização total sem complicação.", a: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=80&h=80&auto=format&fit=crop" },
            { n: "Ricardo Silveira", r: "Gerente", t: "Não tenho tempo para planilhas chatas. O Rotina é prático e direto ao ponto. Uso todos os dias.", a: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?q=80&w=80&h=80&auto=format&fit=crop" },
            { n: "Felipe Almeida", r: "Designer", t: "Ele entende perfeitamente o que eu escrevo. Mando 'almoço 35' e ele já categoriza tudo.", a: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?q=80&w=80&h=80&auto=format&fit=crop" }
          ].map((dep, i) => (
            <article key={i} className="bg-white p-8 rounded-2xl border border-slate-100 flex flex-col text-left shadow-sm">
              <div className="flex text-amber-400 mb-6 gap-0.5">
                {[1,2,3,4,5].map(s => <Star key={s} size={14} fill="currentColor" />)}
              </div>
              <p className="text-slate-600 font-medium mb-10 leading-relaxed">"{dep.t}"</p>
              <div className="mt-auto flex items-center gap-4 pt-6 border-t border-slate-50">
                <img src={dep.a} alt={dep.n} loading="lazy" className="w-10 h-10 rounded-full object-cover" width="40" height="40" />
                <div>
                  <p className="font-bold text-slate-900 text-sm">{dep.n} <BadgeCheck size={14} className="inline text-blue-600 ml-1" fill="currentColor" /></p>
                  <p className="text-[11px] text-slate-500 font-semibold uppercase tracking-wider">{dep.r}</p>
                </div>
              </div>
            </article>
          ))}
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-white pt-24 pb-16 px-4 border-t border-slate-100 text-center">
        <p className="text-slate-400 font-bold text-[11px] uppercase tracking-widest mb-10">Atendimento</p>
        <div className="flex flex-col md:flex-row gap-4 mb-16 w-full justify-center">
          <a href={WHATSAPP_LINK} target="_blank" className="flex items-center justify-center gap-3 bg-[#25d366] text-white px-8 py-4 rounded-full font-bold text-base shadow-lg hover:opacity-90 transition-all">
            <MessageCircle size={22} fill="white" /> Falar no WhatsApp
          </a>
          <div className="flex items-center justify-center gap-3 bg-slate-50 border border-slate-100 px-8 py-4 rounded-full font-bold text-slate-700 text-sm">
            <Mail size={18} className="text-blue-600" /> {CONTACT_EMAIL}
          </div>
        </div>
        <div className="w-full pt-10 border-t border-slate-100 flex flex-col items-center">
          <Logo className="w-8 h-8 mb-4 opacity-30" grayscale={true} />
          <p className="text-[10px] text-slate-400 font-semibold uppercase tracking-widest">© 2025 Rotina Automática.</p>
        </div>
      </footer>
    </main>
  );
}