import { motion } from "framer-motion";
import {
  ShieldCheck,
  UserCheck,
  Users,
  Clock,
  AlertTriangle,
  Lock,
  MicOff,
  ChevronLeft,
  ChevronRight,
  Menu,
  X,
} from "lucide-react";
import { useState } from "react";

export default function ConfiaLandingPage() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const screenshots = [
    { src: "/Tela_inicial.png", alt: "Tela inicial do app" },
    { src: "/tela_de_denuncia.png", alt: "Tela de denúncia" },
    { src: "/tela_de_denuncia_enviada.png", alt: "Denúncia enviada" },
    { src: "/tela_de_lista_de_denuncias.png", alt: "Lista de denúncias" },
    { src: "/tela_de_visualizacao.png", alt: "Visualização de denúncia" },
    { src: "/tela_login_policial.png", alt: "Login policial" },
  ];

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % screenshots.length);
  };

  const prevSlide = () => {
    setCurrentSlide(
      (prev) => (prev - 1 + screenshots.length) % screenshots.length
    );
  };

  const problemas = [
    {
      icon: AlertTriangle,
      title: "Risco de Retaliação",
      description:
        "Denunciar pode expor quem fala — e muitas irregularidades ficam ocultas.",
    },
    {
      icon: Lock,
      title: "Falta de Confidencialidade",
      description:
        "Canais tradicionais nem sempre protegem a identidade do denunciante.",
    },
    {
      icon: MicOff,
      title: "Processos Burocráticos",
      description:
        "Formulários longos e lenta tramitação desestimulam a denúncia.",
    },
  ];

  const solucoes = [
    {
      icon: ShieldCheck,
      title: "Anonimato Garantido",
      description:
        "Criptografia ponta‑a‑ponta + blockchain asseguram sigilo absoluto.",
    },
    {
      icon: UserCheck,
      title: "Facilidade de Uso",
      description: "Denuncie em menos de 2 minutos com interface intuitiva.",
    },
    {
      icon: Users,
      title: "Colaboração com Autoridades",
      description: "Integração direta acelera investigações e respostas.",
    },
    {
      icon: Clock,
      title: "Rapidez na Denúncia",
      description:
        "Fluxo otimizado para que cada segundo conte na segurança da comunidade.",
    },
  ];

  const scrollTo = (id: string) => {
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: "smooth" });
    setMobileMenuOpen(false);
  };

  return (
    <div className="min-h-screen text-white font-sans bg-gradient-to-br from-[#0f0c29] via-[#302b63] to-[#8b5cf6] selection:bg-[#8b5cf6]/40">
      <header className="w-full fixed top-0 left-0 bg-black/30 backdrop-blur-md z-50 shadow-lg border-b border-white/10">
        <div className="max-w-7xl mx-auto flex items-center justify-between px-3 sm:px-4 md:px-6 py-3 sm:py-4">
          <div
            className="flex items-center cursor-pointer focus:outline-none focus:ring-2 focus:ring-[#8b5cf6] rounded-lg p-1"
            onClick={() => scrollTo("hero")}
            tabIndex={0}
            onKeyDown={(e) => e.key === "Enter" && scrollTo("hero")}
          >
            <span className="text-lg sm:text-xl md:text-2xl font-bold tracking-tight">
              Confia!
            </span>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center gap-6 xl:gap-8 text-sm">
            <a
              href="#problemas"
              onClick={(e) => {
                e.preventDefault();
                scrollTo("problemas");
              }}
              className="hover:text-[#c4b5fd] transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-[#8b5cf6] rounded px-2 py-1"
            >
              Problemas
            </a>
            <a
              href="#solucao"
              onClick={(e) => {
                e.preventDefault();
                scrollTo("solucao");
              }}
              className="hover:text-[#c4b5fd] transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-[#8b5cf6] rounded px-2 py-1"
            >
              Solução
            </a>
            <a
              href="#screenshots"
              onClick={(e) => {
                e.preventDefault();
                scrollTo("screenshots");
              }}
              className="hover:text-[#c4b5fd] transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-[#8b5cf6] rounded px-2 py-1"
            >
              App
            </a>
            <a
              href="https://calendly.com/guilhermewaizbart/30min"
              className="bg-[#8b5cf6] hover:bg-[#a78bfa] px-3 md:px-4 py-2 rounded-full transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-white text-white font-medium shadow-lg text-sm"
              target="_blank"
              rel="noopener noreferrer"
            >
              Agende uma demonstração
            </a>
          </nav>

          {/* Mobile Menu Button */}
          <button
            className="lg:hidden p-2 rounded-lg hover:bg-white/10 transition-colors focus:outline-none focus:ring-2 focus:ring-[#8b5cf6]"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Menu"
          >
            {mobileMenuOpen ? (
              <X className="w-5 h-5 sm:w-6 sm:h-6" />
            ) : (
              <Menu className="w-5 h-5 sm:w-6 sm:h-6" />
            )}
          </button>
        </div>

        {/* Mobile Navigation */}
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="lg:hidden bg-black/50 backdrop-blur-md border-t border-white/10"
          >
            <nav className="flex flex-col p-3 sm:p-4 space-y-2 sm:space-y-3">
              <a
                href="#problemas"
                onClick={(e) => {
                  e.preventDefault();
                  scrollTo("problemas");
                }}
                className="hover:text-[#c4b5fd] transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-[#8b5cf6] rounded px-3 py-2 text-sm sm:text-base"
              >
                Problemas
              </a>
              <a
                href="#solucao"
                onClick={(e) => {
                  e.preventDefault();
                  scrollTo("solucao");
                }}
                className="hover:text-[#c4b5fd] transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-[#8b5cf6] rounded px-3 py-2 text-sm sm:text-base"
              >
                Solução
              </a>
              <a
                href="#screenshots"
                onClick={(e) => {
                  e.preventDefault();
                  scrollTo("screenshots");
                }}
                className="hover:text-[#c4b5fd] transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-[#8b5cf6] rounded px-3 py-2 text-sm sm:text-base"
              >
                App
              </a>
              <a
                href="https://calendly.com/guilhermewaizbart/30min"
                className="bg-[#8b5cf6] hover:bg-[#a78bfa] px-4 py-2.5 sm:py-3 rounded-full transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-white text-white font-medium text-center text-sm sm:text-base"
                target="_blank"
                rel="noopener noreferrer"
              >
                Agende uma demonstração
              </a>
            </nav>
          </motion.div>
        )}
      </header>

      <section
        id="hero"
        className="min-h-screen flex flex-col items-center justify-center text-center px-3 sm:px-4 md:px-6 pt-20 sm:pt-24"
      >
        <motion.img
          initial={{ scale: 0.9, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.8 }}
          src="/Logo.png"
          alt="Confia! Logo"
          className="w-48 h-48 xs:w-60 xs:h-60 sm:w-72 sm:h-72 md:w-80 md:h-80 lg:w-96 lg:h-96 xl:w-[450px] xl:h-[450px] object-contain mb-6 sm:mb-8 lg:mb-12 drop-shadow-xl"
        />
        <motion.h1
          initial={{ y: 30, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.2 }}
          className="text-2xl xs:text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold mb-3 sm:mb-4 lg:mb-6 leading-tight max-w-4xl px-2"
        >
          Sua denúncia protegida.
          <br className="hidden xs:block" /> Sua voz faz a diferença.
        </motion.h1>
        <motion.p
          initial={{ y: 30, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.35 }}
          className="text-sm xs:text-base sm:text-lg md:text-xl max-w-2xl text-[#e0e0ff]/90 mb-6 sm:mb-8 lg:mb-12 leading-relaxed px-2"
        >
          Confia! é o aplicativo que garante anonimato, facilidade e velocidade
          para combater irregularidades em qualquer ambiente.
        </motion.p>
        <motion.div
          initial={{ y: 30, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.45 }}
        ></motion.div>
      </section>

      <section
        id="problemas"
        className="max-w-6xl mx-auto py-12 sm:py-16 lg:py-24 px-3 sm:px-4 md:px-6"
      >
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-xl xs:text-2xl sm:text-3xl md:text-4xl font-bold mb-6 sm:mb-8 lg:mb-12 text-center"
        >
          Por que denunciar é tão difícil?
        </motion.h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 lg:gap-8 xl:gap-10">
          {problemas.map(({ icon: Icon, title, description }, i) => (
            <motion.div
              key={title}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="p-4 sm:p-6 lg:p-8 bg-white/5 rounded-2xl backdrop-blur-sm border border-white/10 shadow-lg hover:shadow-xl hover:bg-white/10 transition-all duration-300 flex flex-col items-start gap-3 sm:gap-4"
            >
              <Icon className="w-6 h-6 sm:w-7 sm:h-7 lg:w-8 lg:h-8 text-[#f87171]" />
              <h3 className="text-base sm:text-lg lg:text-xl font-semibold">
                {title}
              </h3>
              <p className="text-xs sm:text-sm lg:text-base text-[#f1f1ff]/80 leading-relaxed">
                {description}
              </p>
            </motion.div>
          ))}
        </div>
      </section>

      <section
        id="solucao"
        className="max-w-6xl mx-auto py-12 sm:py-16 lg:py-24 px-3 sm:px-4 md:px-6"
      >
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-xl xs:text-2xl sm:text-3xl md:text-4xl font-bold mb-6 sm:mb-8 lg:mb-12 text-center"
        >
          Como o Confia! resolve
        </motion.h2>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-8 lg:gap-10">
          {solucoes.map(({ icon: Icon, title, description }, i) => (
            <motion.div
              key={title}
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="flex items-start gap-3 sm:gap-4 lg:gap-6 p-3 sm:p-4 lg:p-6 rounded-xl hover:bg-white/5 transition-all duration-300"
            >
              <div className="p-2.5 sm:p-3 lg:p-4 bg-[#8b5cf6]/20 rounded-xl shrink-0">
                <Icon className="w-4 h-4 sm:w-5 sm:h-5 lg:w-6 lg:h-6 text-[#c4b5fd]" />
              </div>
              <div className="min-w-0">
                <h3 className="text-base sm:text-lg lg:text-xl font-semibold mb-1 sm:mb-2">
                  {title}
                </h3>
                <p className="text-xs sm:text-sm lg:text-base text-[#f1f1ff]/80 leading-relaxed">
                  {description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      <section
        id="screenshots"
        className="max-w-7xl mx-auto py-12 sm:py-16 lg:py-24 px-3 sm:px-4 md:px-6"
      >
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-xl xs:text-2xl sm:text-3xl md:text-4xl font-bold mb-6 sm:mb-8 lg:mb-12 text-center"
        >
          Veja o app em ação
        </motion.h2>
        <div className="flex flex-col lg:flex-row items-center gap-6 sm:gap-8 lg:gap-12">
          <div className="relative mx-auto">
            <div className="relative w-64 xs:w-72 sm:w-80 md:w-72 lg:w-80 h-[520px] xs:h-[580px] sm:h-[640px] md:h-[580px] lg:h-[640px] bg-gradient-to-b from-gray-800 to-black rounded-[2.5rem] sm:rounded-[3rem] p-2.5 sm:p-3 lg:p-4 shadow-2xl ring-1 ring-white/10">
              <div className="w-full h-full bg-black rounded-[2rem] sm:rounded-[2.5rem] overflow-hidden relative shadow-inner">
                <div className="absolute top-0 left-1/2 transform -translate-x-1/2 w-24 xs:w-28 sm:w-32 h-4 xs:h-5 sm:h-6 bg-black rounded-b-2xl z-10"></div>

                <div className="relative w-full h-full overflow-hidden">
                  {screenshots.map((screenshot, index) => (
                    <img
                      key={index}
                      src={screenshot.src}
                      alt={screenshot.alt}
                      loading="lazy"
                      className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-300 ease-in-out ${index === currentSlide ? "opacity-100" : "opacity-0"
                        }`}
                    />
                  ))}
                </div>

                <button
                  onClick={prevSlide}
                  className="absolute left-1.5 sm:left-2 lg:left-3 top-1/2 transform -translate-y-1/2 bg-black/60 backdrop-blur-sm text-white p-1.5 sm:p-2 rounded-full hover:bg-black/80 focus:bg-black/80 transition-all duration-200 shadow-lg border border-white/20 focus:outline-none focus:ring-2 focus:ring-white"
                  aria-label="Imagem anterior"
                >
                  <ChevronLeft className="w-3 h-3 sm:w-4 sm:h-4" />
                </button>
                <button
                  onClick={nextSlide}
                  className="absolute right-1.5 sm:right-2 lg:right-3 top-1/2 transform -translate-y-1/2 bg-black/60 backdrop-blur-sm text-white p-1.5 sm:p-2 rounded-full hover:bg-black/80 focus:bg-black/80 transition-all duration-200 shadow-lg border border-white/20 focus:outline-none focus:ring-2 focus:ring-white"
                  aria-label="Próxima imagem"
                >
                  <ChevronRight className="w-3 h-3 sm:w-4 sm:h-4" />
                </button>
              </div>

              <div className="absolute bottom-0.5 sm:bottom-1 lg:bottom-2 left-1/2 transform -translate-x-1/2 w-24 xs:w-28 sm:w-32 h-0.5 sm:h-1 bg-white/30 rounded-full"></div>
            </div>

            <div className="flex justify-center mt-3 sm:mt-4 lg:mt-6 gap-1.5 sm:gap-2">
              {screenshots.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentSlide(index)}
                  className={`w-2 h-2 sm:w-2.5 sm:h-2.5 lg:w-3 lg:h-3 rounded-full transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-[#8b5cf6] ${index === currentSlide
                    ? "bg-[#8b5cf6] scale-110"
                    : "bg-white/30 hover:bg-white/50"
                    }`}
                  aria-label={`Ir para imagem ${index + 1}`}
                />
              ))}
            </div>
          </div>

          <div className="flex-1 text-center lg:text-left max-w-lg lg:max-w-none">
            <motion.h3
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="text-lg xs:text-xl sm:text-2xl font-bold mb-3 sm:mb-4 lg:mb-6"
            >
              Interface simples e intuitiva
            </motion.h3>
            <motion.p
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="text-sm xs:text-base sm:text-lg text-[#f1f1ff]/80 leading-relaxed mb-4 sm:mb-6 lg:mb-8"
            >
              Navegue pelas telas do aplicativo e veja como é fácil fazer uma
              denúncia de forma completamente anônima e segura.
            </motion.p>
            <motion.ul
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="space-y-2 sm:space-y-3 lg:space-y-4 text-xs xs:text-sm sm:text-base text-[#f1f1ff]/80"
            >
              <li className="flex items-center gap-2 sm:gap-3">
                <div className="w-1.5 h-1.5 sm:w-2 sm:h-2 bg-[#8b5cf6] rounded-full shrink-0"></div>
                Processo de denúncia em poucos passos
              </li>
              <li className="flex items-center gap-2 sm:gap-3">
                <div className="w-1.5 h-1.5 sm:w-2 sm:h-2 bg-[#8b5cf6] rounded-full shrink-0"></div>
                Confirmação imediata do envio
              </li>
              <li className="flex items-center gap-2 sm:gap-3">
                <div className="w-1.5 h-1.5 sm:w-2 sm:h-2 bg-[#8b5cf6] rounded-full shrink-0"></div>
                Acesso especial para autoridades
              </li>
            </motion.ul>
          </div>
        </div>
      </section>

      <section
        id="download"
        className="flex flex-col items-center text-center py-16 sm:py-24 lg:py-32 px-3 sm:px-4 md:px-6"
      >
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-xl xs:text-2xl sm:text-3xl md:text-4xl font-bold mb-3 sm:mb-4 lg:mb-6"
        >
          Pronto para fazer a diferença?
        </motion.h2>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1 }}
          className="text-sm xs:text-base sm:text-lg max-w-xl text-[#e0e0ff]/80 mb-6 sm:mb-8 lg:mb-10 leading-relaxed"
        >
          Baixe o Confia! e denuncie de forma rápida e sem medo — juntos podemos
          construir comunidades mais seguras.
        </motion.p>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
        >
          <a
            href="https://calendly.com/guilhermewaizbart/30min"
            className="inline-flex items-center gap-3 bg-[#8b5cf6] hover:bg-[#a78bfa] focus:bg-[#a78bfa] active:bg-[#7c3aed] transition-all duration-200 px-5 sm:px-6 lg:px-8 py-2.5 sm:py-3 lg:py-4 rounded-full shadow-2xl text-white text-sm xs:text-base sm:text-lg font-semibold focus:outline-none focus:ring-4 focus:ring-[#8b5cf6]/50 transform hover:scale-105 focus:scale-105"
            target="_blank"
            rel="noopener noreferrer"
          >
            Agende uma demonstração
          </a>
        </motion.div>
      </section>

      <footer className="py-6 sm:py-8 lg:py-10 text-center text-xs sm:text-sm text-[#f1f1ff]/60 px-3">
        © {new Date().getFullYear()} Confia! – Todos os direitos reservados.
      </footer>
    </div>
  );
}
