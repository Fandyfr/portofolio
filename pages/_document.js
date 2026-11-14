import { Html, Head, Main, NextScript } from "next/document";

const SITE_URL = "https://fandyfr.my.id";
const structuredData = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "WebSite",
      "@id": `${SITE_URL}/#website`,
      url: SITE_URL,
      name: "FandyFr",
      alternateName: ["Fandy Fathurrohman", "FandyFr Portfolio"],
      inLanguage: "en",
      publisher: { "@id": `${SITE_URL}/#person` },
    },
    {
      "@type": "Person",
      "@id": `${SITE_URL}/#person`,
      name: "Fandy Fathurrohman",
      alternateName: ["FandyFr", "Fandy Fr"],
      url: SITE_URL,
      image: `${SITE_URL}/avatar.png`,
      jobTitle: "Full Stack Developer",
      description:
        "Full stack developer and designer from Indonesia, building web applications with Next.js, TypeScript, and Docker.",
      nationality: { "@type": "Country", name: "Indonesia" },
      alumniOf: {
        "@type": "CollegeOrUniversity",
        name: "ITB STIKOM Bali",
      },
      knowsAbout: [
        "Next.js",
        "React",
        "TypeScript",
        "Docker",
        "Linux",
        "Cloudflare",
        "UI/UX design",
        "Audio engineering",
        "Dolby Atmos mixing",
      ],
      sameAs: [
        "https://github.com/Fandyfr",
        "https://x.com/FandyFrOfficial",
        "https://instagram.com/fndy.fr",
        "https://instagram.com/fandyfr_.12",
        "https://www.reddit.com/user/FandyFafa/",
      ],
      mainEntityOfPage: { "@id": `${SITE_URL}/#website` },
    },
  ],
};

const themeScript = `try{if(localStorage.getItem("theme")==="dark"){document.documentElement.classList.add("dark")}}catch(e){}`;

export default function Document() {
  return (
    <Html lang="en" suppressHydrationWarning>
      <Head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="anonymous"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600&family=JetBrains+Mono:wght@400;500&display=swap"
          rel="stylesheet"
        />

        {/* Tema */}
        <script dangerouslySetInnerHTML={{ __html: themeScript }} />
        <meta name="color-scheme" content="light dark" />
        <meta
          name="theme-color"
          content="#fafaf9"
          media="(prefers-color-scheme: light)"
        />
        <meta
          name="theme-color"
          content="#0b0b0c"
          media="(prefers-color-scheme: dark)"
        />
        <meta name="application-name" content="FandyFr" />
        <meta name="apple-mobile-web-app-title" content="FandyFr" />
        <meta name="format-detection" content="telephone=no" />
        <meta name="author" content="Fandy Fathurrohman" />
        <meta name="creator" content="Fandy Fathurrohman" />
        <meta
          name="robots"
          content="index, follow, max-snippet:-1, max-image-preview:large, max-video-preview:-1"
        />
        <meta
          name="googlebot"
          content="index, follow, max-snippet:-1, max-image-preview:large, max-video-preview:-1"
        />
        <meta name="geo.region" content="ID" />
        <meta name="geo.placename" content="Bali, Indonesia" />
        <meta name="language" content="English" />
        <link rel="icon" href="/favicon.ico" sizes="any" />
        <link rel="apple-touch-icon" href="/apple-touch-icon.png" />
        <link rel="sitemap" type="application/xml" href="/sitemap.xml" />
        <link
          rel="alternate"
          type="text/plain"
          href="/llms.txt"
          title="llms.txt"
        />
        <link rel="me" href="https://github.com/Fandyfr" />
        <link rel="me" href="https://x.com/FandyFrOfficial" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
        />
      </Head>
      <body className="font-sans antialiased">
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
