import Head from "next/head";
import ConfiaLandingPage from "./ConfiaLandingPage";

export default function Home() {
  return (
    <>
      <Head>
        {/* Primary Meta Tags */}
        <title>Confia! - Denúncias Anônimas e Seguras | App de Denúncia Cidadã</title>
        <meta name="title" content="Confia! - Denúncias Anônimas e Seguras | App de Denúncia Cidadã" />
        <meta
          name="description"
          content="Faça denúncias de forma 100% anônima e segura com o Confia! Aplicativo com criptografia ponta-a-ponta para combater irregularidades. Baixe grátis."
        />
        <meta name="keywords" content="denúncia anônima, app denúncia, segurança pública, irregularidades, corrupção, cidadania, blockchain denúncia" />
        <meta name="robots" content="index, follow" />
        <meta name="language" content="Portuguese" />
        <meta name="author" content="Confia!" />

        {/* Open Graph / Facebook */}
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://useconfia.com.br/" />
        <meta property="og:title" content="Confia! - Denúncias Anônimas e Seguras" />
        <meta
          property="og:description"
          content="Faça denúncias de forma 100% anônima e segura. App com criptografia ponta-a-ponta para combater irregularidades."
        />
        <meta property="og:image" content="https://useconfia.com.br/Logo.png" />
        <meta property="og:locale" content="pt_BR" />

        {/* Twitter */}
        <meta property="twitter:card" content="summary_large_image" />
        <meta property="twitter:url" content="https://useconfia.com.br/" />
        <meta property="twitter:title" content="Confia! - Denúncias Anônimas e Seguras" />
        <meta
          property="twitter:description"
          content="Faça denúncias de forma 100% anônima e segura. App com criptografia ponta-a-ponta."
        />
        <meta property="twitter:image" content="https://useconfia.com.br/Logo.png" />

        {/* Additional Meta Tags */}
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="canonical" href="https://useconfia.com.br/" />
        <meta name="theme-color" content="#8b5cf6" />

        {/* Structured Data - JSON-LD */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "SoftwareApplication",
              "name": "Confia!",
              "description": "Aplicativo para denúncias anônimas e seguras com criptografia ponta-a-ponta",
              "applicationCategory": "SecurityApplication",
              "operatingSystem": "Android, iOS",
              "offers": {
                "@type": "Offer",
                "price": "0",
                "priceCurrency": "BRL"
              },
              "aggregateRating": {
                "@type": "AggregateRating",
                "ratingValue": "4.8",
                "ratingCount": "127"
              },
              "publisher": {
                "@type": "Organization",
                "name": "Confia!",
                "url": "https://useconfia.com.br"
              }
            })
          }}
        />

        {/* FAQ Structured Data */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "FAQPage",
              "mainEntity": [
                {
                  "@type": "Question",
                  "name": "O que é o Confia?",
                  "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "Confia! é um aplicativo que permite fazer denúncias de forma 100% anônima e segura, com criptografia ponta-a-ponta para combater irregularidades em qualquer ambiente."
                  }
                },
                {
                  "@type": "Question",
                  "name": "Como garantir o anonimato das denúncias?",
                  "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "Utilizamos criptografia ponta-a-ponta e tecnologia blockchain para assegurar sigilo absoluto. Nenhuma informação pessoal é armazenada ou compartilhada."
                  }
                },
                {
                  "@type": "Question",
                  "name": "Quanto tempo leva para fazer uma denúncia?",
                  "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "O processo é otimizado para menos de 2 minutos, com interface intuitiva e fluxo simplificado para agilizar o envio da denúncia."
                  }
                },
                {
                  "@type": "Question",
                  "name": "O app é gratuito?",
                  "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "Sim, o Confia! é completamente gratuito e está disponível para Android e iOS."
                  }
                }
              ]
            })
          }}
        />
      </Head>
      <ConfiaLandingPage />
    </>
  );
}
