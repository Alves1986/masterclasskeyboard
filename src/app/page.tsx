"use client";

import React, { useState } from 'react';
import { 
  PlayCircle, 
  CheckCircle2, 
  Music, 
  Star, 
  ShieldCheck, 
  ChevronDown, 
  ChevronUp, 
  MonitorPlay,
  Headphones,
  Award,
  ArrowRight,
  Code,
  Camera,
  Video,
  MessageCircle
} from 'lucide-react';

export default function SynthMasterLanding() {
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  const toggleFaq = (index: number) => {
    setOpenFaq(openFaq === index ? null : index);
  };

  return (
    <div className="min-h-screen bg-[#0a0a0a] text-gray-300 font-sans selection:bg-[#00ffff] selection:text-black">
      
      {/* HEADER FIXO */}
      <header className="fixed top-0 w-full z-50 bg-[#0a0a0a]/80 backdrop-blur-lg border-b border-white/10">
        <div className="max-w-6xl mx-auto px-6 h-20 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <Music className="w-8 h-8 text-[#00ffff]" />
            <span className="text-xl font-black tracking-widest text-white uppercase">Synth<span className="text-[#00ffff]">Master</span></span>
          </div>
          <button className="hidden md:flex items-center gap-2 bg-transparent border-2 border-[#00ffff] text-[#00ffff] px-6 py-2 rounded-full font-bold hover:bg-[#00ffff] hover:text-black hover:shadow-[0_0_20px_rgba(0,255,255,0.6)] transition-all duration-300">
            Acessar Agora <ArrowRight className="w-4 h-4" />
          </button>
        </div>
      </header>

      {/* HERO SECTION */}
      <section className="relative pt-40 pb-24 px-6 overflow-hidden flex flex-col items-center text-center">
        {/* Glow de Fundo */}
        <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[800px] h-[800px] bg-[#00ffff]/10 rounded-full blur-[150px] pointer-events-none"></div>
        
        <div className="max-w-4xl relative z-10">
          <div className="inline-flex items-center gap-2 border border-[#00ffff]/50 bg-[#00ffff]/10 text-[#00ffff] px-5 py-2 rounded-full text-sm font-bold tracking-widest mb-8 uppercase backdrop-blur-sm">
            <span className="relative flex h-3 w-3">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#00ffff] opacity-75"></span>
              <span className="relative inline-flex rounded-full h-3 w-3 bg-[#00ffff]"></span>
            </span>
            Vagas Abertas - Turma 2026
          </div>
          <h1 className="text-6xl md:text-8xl font-black text-white leading-tight mb-8 tracking-tighter">
            Hackeie o Teclado. <br className="hidden md:block"/>
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#00ffff] to-[#0077ff]">
              Do Zero ao Pro.
            </span>
          </h1>
          <p className="text-xl md:text-2xl text-gray-400 mb-12 max-w-3xl mx-auto leading-relaxed font-light">
            O método <span className="text-white font-semibold">direto ao ponto</span> para você se libertar das cifras, tirar músicas de ouvido e criar arranjos modernos. Sem teoria chata.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-6 justify-center">
            <button className="bg-[#00ffff] text-black px-10 py-5 rounded-full font-black text-lg hover:scale-105 hover:shadow-[0_0_40px_rgba(0,255,255,0.6)] transition-all duration-300 flex items-center justify-center gap-3">
              Quero Começar Agora <PlayCircle className="w-6 h-6" />
            </button>
            <button className="border-2 border-white/20 hover:border-[#00ffff] text-white px-10 py-5 rounded-full font-bold text-lg hover:bg-white/5 transition-all duration-300 flex items-center justify-center">
              Ver Módulos
            </button>
          </div>
        </div>

        {/* Video Placeholder */}
        <div className="max-w-5xl w-full mt-24 relative z-10">
          <div className="aspect-video bg-black rounded-3xl border-2 border-white/10 shadow-[0_0_50px_rgba(0,255,255,0.1)] overflow-hidden relative group flex items-center justify-center">
            {/* Imagem de Fundo (Placeholder) */}
            <div className="absolute inset-0 bg-gradient-to-b from-transparent to-[#00ffff]/10 z-10"></div>
            <div className="absolute inset-0 flex items-center justify-center text-gray-600 font-mono text-sm tracking-widest uppercase">
              
            </div>
            
            {/* Play Button Overlay */}
            <button className="relative z-20 bg-black/50 backdrop-blur-md border border-[#00ffff]/50 text-[#00ffff] w-24 h-24 rounded-full flex items-center justify-center group-hover:scale-110 group-hover:bg-[#00ffff] group-hover:text-black transition-all duration-300 shadow-[0_0_30px_rgba(0,255,255,0.3)]">
              <PlayCircle className="w-12 h-12 ml-1" />
            </button>
          </div>
        </div>
      </section>

      {/* DOR / SOLUÇÃO */}
      <section className="py-24 bg-black border-y border-white/5">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-20">
            <h2 className="text-4xl md:text-6xl font-black text-white mb-6 tracking-tight">Pare de travar.</h2>
            <p className="text-xl text-gray-400 font-light">Se você passa por isso, o método foi feito pra você.</p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              { title: "Refém das Cifras", desc: "Não consegue tocar uma música sem o celular na frente. Tirou o papel, a música acaba." },
              { title: "Mão Esquerda Morta", desc: "Sabe os acordes na direita, mas a mão esquerda só toca a tônica. Falta groove." },
              { title: "Ouvido Surdo", desc: "Não consegue tirar músicas de ouvido e depende de tutoriais do YouTube para aprender qualquer coisa nova." }
            ].map((item, idx) => (
              <div key={idx} className="bg-[#111] p-10 rounded-3xl border border-white/5 hover:border-[#00ffff]/30 hover:shadow-[0_0_30px_rgba(0,255,255,0.05)] transition-all duration-500 group">
                <div className="w-14 h-14 bg-red-500/10 text-red-500 rounded-2xl flex items-center justify-center mb-8 group-hover:bg-[#00ffff]/10 group-hover:text-[#00ffff] transition-colors duration-500">
                  <Code className="w-6 h-6" />
                </div>
                <h3 className="text-2xl font-bold text-white mb-4">{item.title}</h3>
                <p className="text-gray-400 leading-relaxed font-light">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* MODULOS DO CURSO */}
      <section className="py-32 px-6 relative">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-24">
            <h2 className="text-5xl md:text-7xl font-black text-white mb-8 tracking-tighter">O Mapa da Mina</h2>
            <p className="text-xl text-gray-400 font-light">Um cronograma direto ao ponto, focado na prática e resultados rápidos.</p>
          </div>

          <div className="space-y-8">
            {[
              {
                num: "Módulo 01",
                title: "A Base do Sistema",
                icon: <MonitorPlay className="w-8 h-8" />,
                desc: "Entendendo o instrumento de forma lógica. Notas, escalas essenciais e a formação rápida de acordes sem decoreba."
              },
              {
                num: "Módulo 02",
                title: "Independência & Groove",
                icon: <Music className="w-8 h-8" />,
                desc: "Destravando a mão esquerda. Exercícios práticos de rítmica, levadas de Pop, Rock, Neo Soul e uso correto do pedal."
              },
              {
                num: "Módulo 03",
                title: "Harmonia Hackeada",
                icon: <Headphones className="w-8 h-8" />,
                desc: "Campo harmônico na prática. Inversões para transições suaves e tensões (7ª, 9ª) para deixar os acordes com som 'pro'."
              },
              {
                num: "Módulo 04",
                title: "Reharm. & Improvisação",
                icon: <Award className="w-8 h-8" />,
                desc: "Tirando músicas de ouvido. Como substituir acordes clichês e criar seus próprios arranjos e solos usando pentatônicas."
              }
            ].map((mod, idx) => (
              <div key={idx} className="bg-[#111] border border-white/5 rounded-3xl p-8 md:p-10 flex flex-col md:flex-row gap-8 items-start md:items-center hover:border-[#00ffff]/40 hover:shadow-[0_0_40px_rgba(0,255,255,0.05)] transition-all duration-500 group">
                <div className="bg-black text-[#00ffff] w-20 h-20 rounded-2xl flex items-center justify-center shrink-0 border border-white/10 group-hover:scale-110 transition-transform duration-500">
                  {mod.icon}
                </div>
                <div className="flex-1">
                  <span className="text-[#00ffff] font-bold text-sm tracking-widest uppercase block mb-2">{mod.num}</span>
                  <h3 className="text-3xl font-bold text-white mb-3">{mod.title}</h3>
                  <p className="text-gray-400 text-lg font-light leading-relaxed">{mod.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* PROFESSOR / AUTORIDADE */}
      <section className="py-32 bg-black px-6 border-y border-white/5">
        <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center gap-16">
          <div className="w-full md:w-1/2 relative">
             <div className="absolute -inset-4 bg-gradient-to-r from-[#00ffff] to-transparent opacity-20 blur-2xl rounded-full"></div>
             <div className="aspect-[4/5] bg-[#111] rounded-[2rem] border border-white/10 overflow-hidden relative z-10 shadow-2xl">
               <div className="absolute inset-0 flex items-center justify-center text-gray-600 font-mono text-sm tracking-widest uppercase">
                
              </div>
            </div>
          </div>
          <div className="w-full md:w-1/2">
            <h2 className="text-5xl md:text-7xl font-black text-white mb-4 tracking-tighter">Quem sou eu?</h2>
            <h3 className="text-3xl text-[#00ffff] font-bold mb-8">Leo Silva</h3>
            <div className="space-y-6 text-gray-400 text-lg font-light leading-relaxed">
              <p>
                Aos 24 anos, já gravei com os maiores nomes da cena atual e acompanho artistas em turnês pelo país.
              </p>
              <p>
                Criei o <strong>SynthMaster</strong> porque estava cansado do ensino tradicional de música: lento, burocrático e focado em partituras antigas. Eu quero te ensinar a tocar o que você ouve no Spotify, do jeito que os profissionais tocam hoje.
              </p>
            </div>
            <ul className="mt-10 mb-10 space-y-4">
              {[
                "Produtor musical e tecladista",
                "+10M de plays em produções",
                "Focado em resultados práticos"
              ].map((item, idx) => (
                <li key={idx} className="flex items-center gap-4 text-white font-medium text-lg">
                  <CheckCircle2 className="w-6 h-6 text-[#00ffff]" /> {item}
                </li>
              ))}
            </ul>
            
            {/* Redes Sociais do Produtor */}
            <div className="flex items-center gap-6 pt-6 border-t border-white/10">
              <p className="text-gray-400 font-medium">Acompanhe meu trabalho:</p>
              <div className="flex gap-4">
                <a href="#" className="text-gray-400 hover:text-[#00ffff] transition-colors">
                  <Camera className="w-6 h-6" />
                </a>
                <a href="#" className="text-gray-400 hover:text-[#00ffff] transition-colors">
                  <Video className="w-6 h-6" />
                </a>
                <a href="#" className="text-gray-400 hover:text-[#00ffff] transition-colors">
                  <MessageCircle className="w-6 h-6" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* PROVA SOCIAL / DEPOIMENTOS */}
      <section className="py-32 px-6 relative overflow-hidden">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-24">
            <h2 className="text-5xl md:text-7xl font-black text-white mb-6 tracking-tighter">A galera que já tá no game</h2>
            <p className="text-xl text-gray-400 font-light">Evolução real de quem aplicou o método.</p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              { name: "@carlos.beats", role: "Beatmaker", text: "Eu só sabia programar no mouse. Em 2 meses com o método, já gravo as harmonias tocando ao vivo. Mudou meu workflow." },
              { name: "@ana_keys", role: "Tecladista de Banda", text: "As aulas de harmonia e voicings abriram minha mente. Meus arranjos soam 10x mais profissionais agora." },
              { name: "@beto.music", role: "Iniciante", text: "Achei que era tarde pra começar, mas a didática é muito direta. Já tô tirando os sons que eu gosto de ouvido." }
            ].map((test, idx) => (
              <div key={idx} className="bg-[#111] p-10 rounded-3xl border border-white/5 relative hover:-translate-y-2 transition-transform duration-300">
                <div className="flex gap-1 mb-6 text-[#00ffff]">
                  {[...Array(5)].map((_, i) => <Star key={i} className="w-5 h-5 fill-current" />)}
                </div>
                <p className="text-gray-300 text-lg font-light leading-relaxed mb-8">"{test.text}"</p>
                <div className="flex items-center gap-4 mt-auto">
                  <div className="w-14 h-14 bg-zinc-800 rounded-full flex items-center justify-center font-mono text-xs text-zinc-500">
                     [Foto]
                  </div>
                  <div>
                    <div className="font-bold text-white text-lg">{test.name}</div>
                    <div className="text-sm text-[#00ffff]">{test.role}</div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* OFERTA E PREÇO */}
      <section className="py-32 bg-black px-6">
        <div className="max-w-5xl mx-auto">
          <div className="bg-[#0a0a0a] border border-[#00ffff]/30 rounded-[3rem] p-10 md:p-16 text-center relative shadow-[0_0_80px_rgba(0,255,255,0.1)] overflow-hidden">
            
            {/* Background elements */}
            <div className="absolute top-0 right-0 w-64 h-64 bg-[#00ffff]/5 rounded-full blur-[80px]"></div>
            <div className="absolute bottom-0 left-0 w-64 h-64 bg-[#0077ff]/5 rounded-full blur-[80px]"></div>

            <div className="relative z-10">
              <div className="inline-block bg-[#00ffff] text-black font-black px-6 py-2 rounded-full uppercase tracking-widest text-sm mb-8">
                Oferta de Lançamento
              </div>

              <h2 className="text-4xl md:text-6xl font-black text-white mb-6 tracking-tighter">Acesso Total ao SynthMaster</h2>
              <p className="text-xl text-gray-400 mb-12 font-light">Libere todo o conteúdo, atualizações e bônus exclusivos.</p>

              <div className="grid md:grid-cols-2 gap-8 text-left max-w-3xl mx-auto mb-16">
                {['Acesso vitalício ao curso completo', 'Comunidade VIP no Discord', 'Templates e timbres exclusivos', 'Certificado de conclusão'].map((item, idx) => (
                  <div key={idx} className="flex items-center gap-4 bg-[#111] p-4 rounded-2xl border border-white/5">
                    <CheckCircle2 className="w-8 h-8 text-[#00ffff] shrink-0" />
                    <span className="text-white font-medium text-lg">{item}</span>
                  </div>
                ))}
              </div>

              <div className="mb-12">
                <span className="text-gray-500 line-through text-2xl font-light">De R$ 997,00</span>
                <div className="text-7xl md:text-8xl font-black text-white mt-2 mb-4 tracking-tighter">
                  12x <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#00ffff] to-[#0077ff]">R$ 49,90</span>
                </div>
                <span className="text-gray-400 text-lg">ou R$ 497,00 à vista</span>
              </div>

              <button className="w-full md:w-auto mx-auto bg-[#00ffff] text-black px-16 py-6 rounded-full font-black text-2xl hover:scale-105 hover:shadow-[0_0_50px_rgba(0,255,255,0.5)] transition-all duration-300 flex items-center justify-center gap-3">
                GARANTIR MINHA VAGA <ArrowRight className="w-8 h-8" />
              </button>
              <p className="mt-6 text-sm text-gray-500 flex items-center justify-center gap-2 font-mono uppercase tracking-widest">
                <ShieldCheck className="w-4 h-4" /> Pagamento 100% Seguro
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* GARANTIA */}
      <section className="py-20 px-6">
        <div className="max-w-4xl mx-auto flex flex-col md:flex-row items-center gap-10 bg-[#111] border border-white/5 rounded-3xl p-10 md:p-12">
          <div className="w-32 h-32 bg-[#00ffff]/10 rounded-full flex items-center justify-center shrink-0 border border-[#00ffff]/20">
             <ShieldCheck className="w-16 h-16 text-[#00ffff]" />
          </div>
          <div className="text-center md:text-left">
            <h3 className="text-3xl font-black text-white mb-4 tracking-tight">Risco Zero: Garantia de 15 Dias</h3>
            <p className="text-gray-400 text-lg font-light leading-relaxed">
              Test drive completo. Entre, assista às aulas, baixe o material. Se achar que o método não é para você, basta um email e devolvo 100% do seu investimento. Sem letras miúdas.
            </p>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-32 px-6 bg-[#0a0a0a] border-t border-white/5">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-4xl md:text-6xl font-black text-center text-white mb-16 tracking-tighter">Dúvidas Frequentes</h2>
          
          <div className="space-y-4">
            {[
              { q: "O acesso ao curso tem validade?", a: "Não! Nesta oferta especial o seu acesso é vitalício. Você pode assistir às aulas no seu ritmo, quantas vezes quiser." },
              { q: "Nunca toquei teclado, o curso serve para mim?", a: "Sim, o Módulo 1 foi desenhado exatamente para quem está começando do absoluto zero. Vamos construir sua base do jeito certo." },
              { q: "Preciso ter um teclado caro para começar?", a: "De forma alguma. Qualquer teclado ou controlador MIDI que você tenha acesso serve para aplicar o método." },
              { q: "Como funciona a segurança da conta?", a: "O acesso é individual. Nossa plataforma utiliza tecnologia avançada que detecta múltiplos IPs e bloqueia automaticamente contas em caso de compartilhamento indevido." }
            ].map((faq, idx) => (
              <div key={idx} className="bg-[#111] border border-white/5 rounded-2xl overflow-hidden transition-all duration-300">
                <button 
                  onClick={() => toggleFaq(idx)}
                  className="w-full px-8 py-6 text-left flex items-center justify-between font-bold text-white text-lg hover:bg-white/5 transition-colors"
                >
                  {faq.q}
                  {openFaq === idx ? <ChevronUp className="w-6 h-6 text-[#00ffff]" /> : <ChevronDown className="w-6 h-6 text-gray-500" />}
                </button>
                {openFaq === idx && (
                  <div className="px-8 pb-6 text-gray-400 font-light text-lg border-t border-white/5 pt-4 leading-relaxed">
                    {faq.a}
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="bg-black py-16 px-6 border-t border-white/5 text-center text-gray-500">
        <div className="max-w-6xl mx-auto flex flex-col items-center">
          <div className="flex items-center gap-2 mb-8 opacity-50 grayscale">
            <Music className="w-8 h-8 text-[#00ffff]" />
            <span className="text-xl font-black tracking-widest text-white uppercase">Synth<span className="text-[#00ffff]">Master</span></span>
          </div>
          <div className="flex gap-6 mb-8">
            <a href="#" className="text-gray-500 hover:text-[#00ffff] transition-colors"><Camera className="w-5 h-5" /></a>
            <a href="#" className="text-gray-500 hover:text-[#00ffff] transition-colors"><Video className="w-5 h-5" /></a>
            <a href="#" className="text-gray-500 hover:text-[#00ffff] transition-colors"><MessageCircle className="w-5 h-5" /></a>
          </div>
          <p className="mb-6 text-sm max-w-2xl font-light">
            Este site não é afiliado ao Facebook ou a qualquer entidade do Facebook. 
            Depois que você sair do Facebook, a responsabilidade não é deles e sim do nosso site.
          </p>
          <div className="flex gap-8 text-sm font-medium uppercase tracking-wider">
            <a href="#" className="hover:text-[#00ffff] transition-colors">Termos de Uso</a>
            <a href="#" className="hover:text-[#00ffff] transition-colors">Políticas de Privacidade</a>
          </div>
          <p className="mt-12 text-xs font-mono">
            © {new Date().getFullYear()} SynthMaster. Todos os direitos reservados.
          </p>
        </div>
      </footer>

    </div>
  );
}
