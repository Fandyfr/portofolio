import Head from "next/head";
import Link from "next/link";
import Image from "next/image";
import { useState, useEffect, useRef } from "react";
import {
  motion as m,
  AnimatePresence,
  useScroll,
  useSpring,
  useTransform,
} from "framer-motion";
import { Dialog, DialogPanel, DialogTitle } from "@headlessui/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
import { BsFillMoonStarsFill, BsSunFill } from "react-icons/bs";
import {
  AiFillGithub,
  AiFillInstagram,
  AiFillRedditCircle,
} from "react-icons/ai";
import { FaXTwitter } from "react-icons/fa6";
import {
  IoPause,
  IoPlay,
  IoPlaySkipBack,
  IoPlaySkipForward,
} from "react-icons/io5";
import headicon from "../public/headicon.png";
import Projects from "@/components/Home/project";
import Footer from "@/components/shared/footer";

const INARI_GRADIENT =
  "linear-gradient(90deg,#e8461e 0%,#f58220 35%,#ffb347 50%,#f58220 65%,#e8461e 100%)";

const NAV = [
  { label: "Work", href: "#work" },
  { label: "Capabilities", href: "#capabilities" },
  { label: "Contact", href: "#contact" },
];

const SOCIALS = [
  {
    href: "https://github.com/Fandyfr",
    icon: <AiFillGithub />,
    text: "GitHub [FandyFr]",
  },
  {
    href: "https://github.com/HarukaRepo",
    icon: <AiFillGithub />,
    text: "GitHub 2 [HarukaRepo]",
  },
  {
    href: "https://x.com/FandyFrOfficial",
    icon: <FaXTwitter />,
    text: "Twitter / X",
  },
  {
    href: "https://instagram.com/fandyfr_.12",
    icon: <AiFillInstagram />,
    text: "Instagram",
  },
  {
    href: "https://www.reddit.com/user/FandyFafa/",
    icon: <AiFillRedditCircle />,
    text: "Reddit",
  },
];

const CAPABILITIES = [
  {
    no: "01",
    title: "System & UI/UX Design",
    desc: "User experience (UI/UX) design and database architecture modeling prior to development.",
    items: ["Figma", "Adobe XD", "Draw.io"],
  },
  {
    no: "02",
    title: "Code",
    desc: "Fast, secure, and maintainable web and mobile applications.",
    items: ["React", "Next.js", "Kotlin", "Flutter", "React Native"],
  },
  {
    no: "03",
    title: "Database, ORM & Cache",
    desc: "Fast, secure, and well-structured data storage with efficient query management.",
    items: ["PostgreSQL", "SQLite", "Prisma", "Redis"],
  },
  {
    no: "04",
    title: "Tooling",
    desc: "Streamlined, measurable, and repeatable development workflows.",
    items: ["VS Code", "Android Studio", "GNU nano"],
  },
];

const MARQUEE = [
  "React",
  "Next.js",
  "TypeScript",
  "JavaScript",
  "Docker",
  "ZTA/ZTNA",
  "UI / UX",
];

const FOXES = [
  { t: "8%", l: "5%", s: 120, r: -12, d: 0.35 },
  { t: "20%", l: "84%", s: 170, r: 14, d: 0.6 },
  { t: "46%", l: "10%", s: 90, r: 8, d: 0.25 },
  { t: "62%", l: "72%", s: 110, r: -18, d: 0.5 },
  { t: "80%", l: "28%", s: 140, r: 10, d: 0.4 },
  { t: "90%", l: "90%", s: 80, r: -6, d: 0.2 },
  { t: "34%", l: "46%", s: 70, r: 20, d: 0.3 },
];

const MUSIC_SLIDES = [
  {
    type: "ranking",
    title: "My Top 8 Favorite Songs",
    subtitle: "Rank 1 to 8",
    items: [
      "01. Ado - Haru ni mau",
      "02. Ado - Patient A",
      "03. Ado - Monstruo",
      "04. 攬佬SKAI ISYOURGOD - Blueprint Supreme",
      "05. 攬佬SKAI ISYOURGOD - Karma Code",
      "06. 攬佬SKAI ISYOURGOD - Hexagrams",
      "07. Naykilla - SO ASU",
      "08. Ado - FREEDOM",
    ],
    songLabel: "Ado - Haru ni Mau",
  },
  {
    type: "album",
    title: "Favorite Song",
    description:
      "A song I keep coming back to, whether I'm working, relaxing, or just wearing headphones for hours.",
    comment:
      "There's something about this song that keeps pulling me back. It's intense, emotional, and never gets old.",
    image: "/cover/ado-aiaia.jpg",
    songLabel: "Ado - AiAiA",
  },
  {
    type: "album",
    title: "Daily Album",
    description: "One of the albums I keep coming back to almost every day.",
    comment: "Understand 0%, vibing 100%, feeling rich 1000%.",
    image: "/cover/skaii.jpg",
    songLabel: "八方來財 (Stacks from All Sides)",
  },
];

const Label = ({ children, className = "" }) => (
  <span
    className={`font-mono text-[11px] uppercase tracking-[0.18em] text-neutral-500 dark:text-neutral-400 ${className}`}
  >
    {children}
  </span>
);

const UnderlineLink = ({ href, children, external = false }) => (
  <m.a
    href={href}
    {...(external ? { target: "_blank", rel: "noopener noreferrer" } : {})}
    initial="rest"
    whileHover="hover"
    animate="rest"
    className="relative inline-block text-sm"
  >
    {children}
    <m.span
      variants={{ rest: { scaleX: 0 }, hover: { scaleX: 1 } }}
      transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
      className="absolute -bottom-0.5 left-0 h-px w-full origin-left bg-orange-600"
    />
  </m.a>
);

export default function Home() {
  const rootRef = useRef(null);

  const [darkMode, setDarkMode] = useState(false);
  const [mounted, setMounted] = useState(false);

  const [isOpen, setIsOpen] = useState(false);
  const [clock, setClock] = useState("");

  const [isMusicOpen, setIsMusicOpen] = useState(false);
  const [musicSlide, setMusicSlide] = useState(0);
  const [isMusicPlaying, setIsMusicPlaying] = useState(false);
  const [musicProgress, setMusicProgress] = useState(0);
  const audioRef = useRef(null);
  const musicStopRef = useRef(null);

  const terminalEndRef = useRef(null);
  const [showTerminal, setShowTerminal] = useState(false);
  const [terminalInput, setTerminalInput] = useState("");
  const [terminalLog, setTerminalLog] = useState([
    "Welcome to Kitsune Terminal v1.0",
    "Type 'help' for commands...",
  ]);

  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001,
  });
  const foxLeft = useTransform(
    scaleX,
    (v) => `calc(${v * 100}% - ${v * 20}px)`,
  );

  useEffect(() => {
    const saved = localStorage.getItem("theme");
    if (saved === "dark") setDarkMode(true);
    setMounted(true);
  }, []);

  useEffect(() => {
    if (!mounted) return;
    document.documentElement.classList.toggle("dark", darkMode);
    localStorage.setItem("theme", darkMode ? "dark" : "light");
  }, [darkMode, mounted]);

  useEffect(() => {
    const fmt = new Intl.DateTimeFormat("en-GB", {
      hour: "2-digit",
      minute: "2-digit",
      second: "2-digit",
      hour12: false,
      timeZone: "Asia/Makassar",
    });
    const tick = () => setClock(fmt.format(new Date()));
    tick();
    const id = setInterval(tick, 1000);
    return () => clearInterval(id);
  }, []);

  useEffect(() => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      gsap.set("[data-wipe]", { scaleY: 0 });
      return;
    }

    gsap.registerPlugin(ScrollTrigger);

    const ctx = gsap.context(() => {
      gsap.from("[data-line]", {
        yPercent: 115,
        duration: 1.2,
        ease: "power4.out",
        stagger: 0.12,
        delay: 0.15,
      });

      gsap.from("[data-hero-fade]", {
        opacity: 0,
        y: 14,
        duration: 0.9,
        ease: "power3.out",
        stagger: 0.08,
        delay: 0.8,
      });

      gsap.to("[data-wipe]", {
        scaleY: 0,
        duration: 1.2,
        ease: "power4.inOut",
        delay: 0.9,
      });

      gsap.fromTo(
        "[data-shimmer]",
        { backgroundPosition: "0% 0%" },
        {
          backgroundPosition: "200% 0%",
          duration: 7,
          ease: "none",
          repeat: -1,
        },
      );

      gsap.to("[data-badge]", {
        rotation: 360,
        duration: 24,
        ease: "none",
        repeat: -1,
        transformOrigin: "50% 50%",
      });

      gsap.fromTo(
        "[data-wag]",
        { rotation: -8 },
        {
          rotation: 8,
          duration: 1.1,
          ease: "sine.inOut",
          yoyo: true,
          repeat: -1,
          transformOrigin: "50% 90%",
        },
      );

      gsap.utils.toArray("[data-fox]").forEach((el) => {
        const depth = parseFloat(el.dataset.depth || "0.3");
        gsap.to(el, {
          y: -depth * 420,
          ease: "none",
          scrollTrigger: {
            trigger: "#home",
            start: "top top",
            end: "bottom bottom",
            scrub: 0.8,
          },
        });
      });

      gsap.utils.toArray("[data-fox-float]").forEach((el) => {
        gsap.to(el, {
          y: gsap.utils.random(14, 26),
          rotation: `+=${gsap.utils.random(4, 9)}`,
          duration: gsap.utils.random(4, 7),
          ease: "sine.inOut",
          yoyo: true,
          repeat: -1,
          delay: gsap.utils.random(0, 2),
        });
      });

      gsap.utils.toArray("[data-reveal]").forEach((el) => {
        gsap.from(el, {
          opacity: 0,
          y: 36,
          duration: 1,
          ease: "power3.out",
          scrollTrigger: { trigger: el, start: "top 88%", once: true },
        });
      });

      gsap.from("[data-row]", {
        opacity: 0,
        y: 28,
        duration: 0.9,
        ease: "power3.out",
        stagger: 0.12,
        scrollTrigger: {
          trigger: "#capabilities",
          start: "top 70%",
          once: true,
        },
      });

      gsap.to("[data-parallax]", {
        yPercent: -8,
        ease: "none",
        scrollTrigger: {
          trigger: "[data-parallax-wrap]",
          start: "top bottom",
          end: "bottom top",
          scrub: true,
        },
      });

      gsap.to("[data-marquee]", {
        xPercent: -50,
        duration: 36,
        ease: "none",
        repeat: -1,
      });

      gsap.from("[data-contact-line]", {
        yPercent: 110,
        duration: 1.1,
        ease: "power4.out",
        stagger: 0.1,
        scrollTrigger: { trigger: "#contact", start: "top 70%", once: true },
      });
    }, rootRef);

    return () => ctx.revert();
  }, []);

  useEffect(() => {
    terminalEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [terminalLog]);

  const handleTerminal = (e) => {
    if (e.key !== "Enter") return;

    const rawInput = terminalInput;
    const trimmedInput = rawInput.trim();
    if (!trimmedInput) return;

    const [command, ...args] = trimmedInput.toLowerCase().split(/\s+/);
    const query = args.join(" ");
    let response = "";

    switch (command) {
      case "help":
        response = (
          <div className="grid grid-cols-2 gap-2 py-2 border-l-2 border-orange-500 pl-3 my-2">
            {[
              { cmd: "about", desc: "Identity & profile" },
              { cmd: "skills", desc: "Technical stack" },
              { cmd: "specs", desc: "System specifications" },
              { cmd: "search", desc: "Private search (SearXNG)" },
              { cmd: "clear", desc: "Clean terminal" },
              { cmd: "exit", desc: "Close session" },
            ].map((item) => (
              <div key={item.cmd} className="flex flex-col">
                <span className="text-orange-400 font-bold">➜ {item.cmd}</span>
                <span className="text-gray-500 text-xs">{item.desc}</span>
              </div>
            ))}
          </div>
        );
        break;

      case "about":
        response = (
          <div className="py-2 space-y-2">
            <div className="flex items-center gap-2 text-blue-400 font-bold">
              <span>👤</span> <span>IDENTITY PROFILE</span>
            </div>
            <p className="text-gray-300 leading-relaxed">
              <span className="text-orange-400">FandyFr</span> is a{" "}
              <span className="text-white italic">Fullstack Developer</span> &
              <span className="text-white italic">
                {" "}
                Cybersecurity Specialist
              </span>{" "}
              based in Indonesia. Focused on building secure, high-performance
              web ecosystems and custom AI models.
            </p>
            <div className="text-xs text-gray-500 italic">
              {'"Building the future with ZTNA"'}
            </div>
          </div>
        );
        break;

      case "skills":
        response = (
          <div className="py-2 space-y-3">
            <div>
              <div className="text-purple-400 text-xs font-bold mb-1 uppercase tracking-widest">
                Languages & Frameworks
              </div>
              <div className="flex flex-wrap gap-2">
                {[
                  "Next.js",
                  "TypeScript",
                  "JavaScript",
                  "Powershell",
                  "TailwindCSS",
                ].map((s) => (
                  <span
                    key={s}
                    className="px-2 py-0.5 bg-purple-500/10 border border-purple-500/30 rounded text-[10px] text-purple-300"
                  >
                    {s}
                  </span>
                ))}
              </div>
            </div>
            <div>
              <div className="text-green-400 text-xs font-bold mb-1 uppercase tracking-widest">
                Security & Tools
              </div>
              <div className="flex flex-wrap gap-2">
                {[
                  "Kali Linux",
                  "Docker",
                  "Zero Trust VPN",
                  "Git",
                  "VS Code",
                ].map((s) => (
                  <span
                    key={s}
                    className="px-2 py-0.5 bg-green-500/10 border border-green-500/30 rounded text-[10px] text-green-300"
                  >
                    {s}
                  </span>
                ))}
              </div>
            </div>
          </div>
        );
        break;

      case "search":
        if (!query) {
          response = "Usage: search <your query>";
        } else {
          response = `Redirecting to Private Searching for: ${query}...`;
          window.open(
            `https://priv.au/search?q=${encodeURIComponent(query)}`,
            "_blank",
          );
        }
        break;

      case "specs":
        response = (
          <div className="flex gap-4 items-start py-2 font-mono">
            <div className="text-orange-400 leading-tight whitespace-pre">
              {`  /\\_/\\  
 ( o.o ) 
  > ^ <  
 /     \\ 
/       \\
|       |
 \\_____/ `}
            </div>
            <div className="leading-tight">
              <div className="text-orange-500 underline font-bold">
                fandy@kitsune-terminal
              </div>
              <div className="text-gray-500">-----------------------</div>
              <div>
                <span className="text-blue-400">OS:</span> FandyOS (Base: Arch
                Linux)
              </div>
              <div>
                <span className="text-blue-400">Host:</span> ASUS G835LX
              </div>
              <div>
                <span className="text-blue-400">CPU:</span> Intel Ultra 9 275HX
                @ 2.70GHz
              </div>
              <div>
                <span className="text-blue-400">GPU:</span> NVIDIA GeForce RTX™
                5090
              </div>
              <div>
                <span className="text-blue-400">Memory:</span> 23.4GiB / 64GiB
              </div>
            </div>
          </div>
        );
        break;

      case "clear":
        setTerminalLog([]);
        setTerminalInput("");
        return;

      case "exit":
        setShowTerminal(false);
        return;

      default:
        response = `Command not found: ${rawInput}. Type 'help' for assistance.`;
    }

    setTerminalLog((prev) => [...prev, `> ${terminalInput}`, response]);
    setTerminalInput("");
  };

  const activeMusicSlide = MUSIC_SLIDES[musicSlide];

  useEffect(() => {
    if (!isMusicOpen) {
      audioRef.current?.pause();
      setIsMusicPlaying(false);
      return;
    }

    const audio = audioRef.current;
    if (!audio) return;

    if (musicStopRef.current) clearTimeout(musicStopRef.current);

    audio.src = `/song/${musicSlide + 1}.mp3`;
    audio.currentTime = 0;
    setMusicProgress(0);
    audio
      .play()
      .then(() => setIsMusicPlaying(true))
      .catch(() => {});
    musicStopRef.current = setTimeout(() => {
      audio.pause();
      setIsMusicPlaying(false);
    }, 30000);

    return () => {
      if (musicStopRef.current) clearTimeout(musicStopRef.current);
    };
  }, [isMusicOpen, musicSlide]);

  useEffect(() => {
    return () => {
      if (musicStopRef.current) clearTimeout(musicStopRef.current);
    };
  }, []);

  const toggleMusicPlayback = () => {
    const audio = audioRef.current;
    if (!audio) return;
    if (audio.paused) {
      audio
        .play()
        .then(() => setIsMusicPlaying(true))
        .catch(() => {});
    } else {
      audio.pause();
      setIsMusicPlaying(false);
    }
  };

  const seekMusic = (deltaSeconds) => {
    const audio = audioRef.current;
    if (!audio) return;
    const nextTime = Math.max(
      0,
      Math.min((audio.currentTime || 0) + deltaSeconds, 30),
    );
    audio.currentTime = nextTime;
    setMusicProgress((nextTime / 30) * 100);
  };

  return (
    <>
      <Head>
        <title>
          Fandy Fathurrohman (FandyFr) | Full Stack Developer | Portfolio
        </title>
        <meta
          name="description"
          content="Official portfolio of Fandy Fathurrohman (FandyFr), a Full Stack Developer from Indonesia specializing in Next.js, React, TypeScript, Docker, Linux, Cloudflare, UI/UX, and modern web development."
        />
        <link rel="canonical" href="https://fandyfr.my.id/" />

        <meta property="og:type" content="website" />
        <meta property="og:site_name" content="FandyFr" />
        <meta
          property="og:title"
          content="Fandy Fathurrohman (FandyFr) | Full Stack Developer"
        />
        <meta
          property="og:description"
          content="Official portfolio of Fandy Fathurrohman (FandyFr)."
        />
        <meta property="og:url" content="https://fandyfr.my.id/" />
        <meta property="og:image" content="https://fandyfr.my.id/avatar.png" />

        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Fandy Fathurrohman (FandyFr)" />
        <meta
          name="twitter:description"
          content="Official portfolio of FandyFr."
        />
        <meta name="twitter:image" content="https://fandyfr.my.id/avatar.png" />
      </Head>

      <div className={darkMode ? "dark" : ""} ref={rootRef}>
        <main
          id="home"
          className="bg-[#fafaf9] text-neutral-900 dark:bg-[#0b0b0c] dark:text-neutral-100 transition-colors duration-300 selection:bg-orange-600 selection:text-white"
        >
          <div
            aria-hidden="true"
            className="pointer-events-none fixed inset-0 z-0 overflow-hidden"
          >
            <div className="absolute inset-0 bg-[radial-gradient(60%_50%_at_92%_0%,rgba(245,130,32,0.12),transparent_70%)] dark:bg-[radial-gradient(60%_50%_at_92%_0%,rgba(245,130,32,0.14),transparent_70%)]" />

            {FOXES.map((f, i) => (
              <div
                key={i}
                data-fox
                data-depth={f.d}
                className={`absolute select-none ${i > 4 ? "hidden md:block" : ""}`}
                style={{ top: f.t, left: f.l }}
              >
                <div
                  data-fox-float
                  className="leading-none opacity-[0.07] dark:opacity-[0.1]"
                  style={{
                    fontSize: f.s,
                    transform: `rotate(${f.r}deg)`,
                  }}
                >
                  🦊
                </div>
              </div>
            ))}
          </div>

          <header className="fixed top-0 inset-x-0 z-50 border-b border-neutral-200/70 dark:border-neutral-800/70 bg-[#fafaf9]/80 dark:bg-[#0b0b0c]/80 backdrop-blur-md">
            <div className="mx-auto grid h-14 max-w-[1400px] grid-cols-[1fr_auto_1fr] items-center px-5 md:px-10">
              <Link
                href="/"
                aria-label="FandyFr, home"
                className="group flex w-fit items-center justify-self-start"
              >
                <Image
                  src="/images/logo.png"
                  alt="FandyFr"
                  width={140}
                  height={40}
                  priority
                  className="h-14 w-auto object-contain invert transition-opacity duration-300 group-hover:opacity-70 dark:invert-0"
                />
              </Link>

              <nav className="hidden md:flex items-center gap-8">
                {NAV.map((n) => (
                  <UnderlineLink key={n.href} href={n.href}>
                    {n.label}
                  </UnderlineLink>
                ))}
              </nav>

              <div className="col-start-3 flex items-center gap-3 justify-self-end">
                <button
                  onClick={() => setDarkMode(!darkMode)}
                  aria-label="Toggle theme"
                  className="grid h-9 w-9 place-items-center rounded-full border border-neutral-300 transition-colors hover:border-orange-600 hover:text-orange-600 dark:border-neutral-700"
                >
                  {darkMode ? (
                    <BsSunFill className="text-sm" />
                  ) : (
                    <BsFillMoonStarsFill className="text-sm" />
                  )}
                </button>
                <button
                  onClick={() => setIsOpen(true)}
                  className="h-9 rounded-full bg-neutral-900 px-4 text-sm font-medium text-white transition-colors hover:bg-orange-600 dark:bg-neutral-100 dark:text-neutral-900 dark:hover:bg-orange-500 dark:hover:text-white"
                >
                  Menu
                </button>
              </div>
            </div>

            <div className="pointer-events-none absolute inset-x-0 bottom-0">
              <m.div
                className="h-[2px] origin-left"
                style={{
                  scaleX,
                  backgroundImage:
                    "linear-gradient(90deg,#e8461e,#f58220,#ffb347)",
                }}
              />
            </div>
          </header>

          <Dialog open={isOpen} onClose={() => setIsOpen(false)}>
            <DialogPanel className="fixed top-20 right-5 md:right-10 z-[80] w-72 border border-neutral-200 bg-[#fafaf9] p-6 shadow-[0_24px_60px_-20px_rgba(0,0,0,0.35)] dark:border-neutral-800 dark:bg-[#0b0b0c]">
              <DialogTitle as="div" className="mb-5">
                <Label>Connect</Label>
              </DialogTitle>
              <ul className="divide-y divide-neutral-200 dark:divide-neutral-800">
                {SOCIALS.map((link) => (
                  <li key={link.text}>
                    <a
                      href={link.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="group flex items-center justify-between py-3 text-sm"
                    >
                      <span className="flex items-center gap-3">
                        <span className="text-base text-neutral-500 group-hover:text-orange-600 transition-colors">
                          {link.icon}
                        </span>
                        {link.text}
                      </span>
                      <span className="translate-x-0 text-neutral-400 transition-transform group-hover:translate-x-1">
                        ↗
                      </span>
                    </a>
                  </li>
                ))}
              </ul>
            </DialogPanel>
          </Dialog>

          <div className="relative z-10">
            <section className="mx-auto max-w-[1400px] px-5 md:px-10 pt-32 md:pt-40 pb-16 md:pb-24">
              <div className="flex items-center justify-between" data-hero-fade>
                <Label>Portfolio - {new Date().getFullYear()}</Label>
                <Label className="hidden sm:inline">
                  Bali, ID · {clock || "--:--:--"} WITA
                </Label>
              </div>

              <h1 className="mt-10 md:mt-14 text-[clamp(2.75rem,8.5vw,8rem)] font-semibold leading-[0.95] tracking-[-0.04em]">
                {["Building secure,", "high-performance", "web products."].map(
                  (line, i) => (
                    <span key={i} className="block overflow-hidden pb-[0.08em]">
                      {i === 2 ? (
                        <span data-line className="block">
                          <span
                            data-shimmer
                            className="inline-block bg-clip-text text-transparent"
                            style={{
                              backgroundImage: INARI_GRADIENT,
                              backgroundSize: "200% 100%",
                              WebkitBackgroundClip: "text",
                            }}
                          >
                            {line}
                          </span>
                        </span>
                      ) : (
                        <span data-line className="block">
                          {line}
                        </span>
                      )}
                    </span>
                  ),
                )}
              </h1>

              <div className="mt-14 md:mt-20 grid gap-10 md:grid-cols-12 md:gap-8">
                <div className="md:col-span-5 space-y-8">
                  <p
                    data-hero-fade
                    className="max-w-md text-base leading-relaxed text-neutral-600 dark:text-neutral-400 md:text-lg"
                  >
                    Fandy Fathurrohman - a developer and designer from Bali,
                    Indonesia. Building secure, high-performance web ecosystems
                    with a strong attention for visual detail.
                  </p>

                  <div
                    data-hero-fade
                    className="flex flex-wrap items-center gap-3"
                  >
                    <a
                      href="#work"
                      className="group relative inline-flex h-11 items-center gap-2 overflow-hidden rounded-full bg-orange-600 px-6 text-sm font-medium text-white transition-colors hover:bg-orange-700"
                    >
                      <span
                        aria-hidden="true"
                        className="absolute inset-y-0 left-0 w-1/3 -translate-x-full -skew-x-12 bg-white/30 transition-transform duration-700 ease-out group-hover:translate-x-[420%]"
                      />
                      <span className="relative">View selected work</span>
                      <span className="relative transition-transform group-hover:translate-y-0.5">
                        ↓
                      </span>
                    </a>
                    <a
                      href="#contact"
                      className="inline-flex h-11 items-center rounded-full border border-neutral-300 px-6 text-sm font-medium transition-colors hover:border-orange-600 hover:text-orange-600 dark:border-neutral-700"
                    >
                      Get in touch
                    </a>
                  </div>

                  <dl
                    data-hero-fade
                    className="grid grid-cols-2 gap-6 border-t border-neutral-200 pt-6 dark:border-neutral-800"
                  >
                    <div>
                      <dt>
                        <Label>Role</Label>
                      </dt>
                      <dd className="mt-1 text-sm">Developer & Designer</dd>
                    </div>
                    <div>
                      <dt>
                        <Label>Education</Label>
                      </dt>
                      <dd className="mt-1 text-sm">
                        ITB STIKOM Bali, Information Systems
                      </dd>
                    </div>
                  </dl>
                </div>

                <div className="md:col-span-6 md:col-start-7">
                  <div data-hero-fade className="relative">
                    <div
                      data-parallax-wrap
                      className="group relative aspect-[4/5] w-full overflow-hidden bg-neutral-200 dark:bg-neutral-900"
                    >
                      <div data-parallax className="absolute inset-[-8%]">
                        <Image
                          src={headicon}
                          alt="Fandy Fathurrohman"
                          fill
                          priority
                          className="object-cover grayscale transition-[filter,transform] duration-700 group-hover:grayscale-0 group-hover:scale-[1.02]"
                        />
                      </div>
                      <div className="pointer-events-none absolute inset-x-0 flex items-center justify-between p-4 font-mono text-[11px] uppercase tracking-[0.18em] text-white mix-blend-difference">
                        <span>Fandy Fathurrohman</span>
                        <span>Fig. 01</span>
                      </div>

                      <div
                        data-wipe
                        aria-hidden="true"
                        className="absolute inset-0 z-10 origin-top bg-gradient-to-b from-[#e8461e] to-[#f58220]"
                      />
                    </div>

                    <div
                      aria-hidden="true"
                      className="absolute -bottom-8 -left-4 h-28 w-28 rounded-full border border-neutral-200 bg-[#fafaf9] text-neutral-700 dark:border-neutral-800 dark:bg-[#0b0b0c] dark:text-neutral-300 md:-bottom-10 md:-left-10 md:h-32 md:w-32"
                    >
                      <svg
                        data-badge
                        viewBox="0 0 120 120"
                        className="h-full w-full"
                      >
                        <defs>
                          <path
                            id="badge-circle"
                            d="M60,60 m-46,0 a46,46 0 1,1 92,0 a46,46 0 1,1 -92,0"
                          />
                        </defs>
                        <text
                          className="fill-current font-mono uppercase"
                          style={{ fontSize: 9, letterSpacing: "0.1em" }}
                        >
                          <textPath href="#badge-circle">
                            FandyFr • Full Stack Developer • Designer •
                          </textPath>
                        </text>
                      </svg>
                      <span className="absolute inset-0 grid place-items-center text-3xl leading-none">
                        ⛩️
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </section>
            <section
              aria-hidden="true"
              className="overflow-hidden border-y border-neutral-200 py-5 dark:border-neutral-800"
            >
              <div
                data-marquee
                className="flex w-max items-center whitespace-nowrap"
              >
                {[...MARQUEE, ...MARQUEE, ...MARQUEE, ...MARQUEE].map(
                  (t, i) => (
                    <span
                      key={i}
                      className="flex items-center text-2xl font-medium tracking-tight text-neutral-400 dark:text-neutral-600 md:text-3xl"
                    >
                      {t}
                      <span className="mx-8 inline-block text-xl leading-none">
                        🦊
                      </span>
                    </span>
                  ),
                )}
              </div>
            </section>

            <section
              id="work"
              className="mx-auto max-w-[1400px] px-5 md:px-10 py-24 md:py-36"
            >
              <div
                data-reveal
                className="mb-12 flex items-end justify-between border-b border-neutral-200 pb-6 dark:border-neutral-800"
              >
                <div>
                  <Label>01 — Work</Label>
                  <h2 className="mt-3 text-3xl font-semibold tracking-[-0.03em] md:text-5xl">
                    Selected projects
                  </h2>
                </div>
                <a
                  href="https://github.com/Fandyfr"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hidden text-sm text-neutral-500 transition-colors hover:text-orange-600 sm:inline"
                >
                  All on GitHub ↗
                </a>
              </div>
              <Projects />
            </section>

            <section
              id="capabilities"
              className="mx-auto max-w-[1400px] px-5 md:px-10 pb-24 md:pb-36"
            >
              <div
                data-reveal
                className="mb-4 border-b border-neutral-200 pb-6 dark:border-neutral-800"
              >
                <Label>02 — Capabilities</Label>
                <h2 className="mt-3 text-3xl font-semibold tracking-[-0.03em] md:text-5xl">
                  Skills & tools
                </h2>
              </div>

              <ul>
                {CAPABILITIES.map((c) => (
                  <m.li
                    key={c.no}
                    data-row
                    initial="rest"
                    whileHover="hover"
                    animate="rest"
                    className="relative grid gap-4 border-b border-neutral-200 py-8 dark:border-neutral-800 md:grid-cols-12 md:items-baseline md:gap-8 md:py-10"
                  >
                    <m.span
                      variants={{ rest: { scaleY: 0 }, hover: { scaleY: 1 } }}
                      transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
                      className="absolute left-0 top-0 h-full w-[2px] origin-top bg-gradient-to-b from-[#e8461e] to-[#f58220]"
                    />
                    <span className="font-mono text-xs text-neutral-400 md:col-span-1 md:pl-4">
                      {c.no}
                    </span>
                    <m.h3
                      variants={{ rest: { x: 0 }, hover: { x: 8 } }}
                      transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
                      className="text-2xl font-semibold tracking-tight md:col-span-4 md:text-3xl"
                    >
                      {c.title}
                    </m.h3>
                    <p className="max-w-sm text-sm leading-relaxed text-neutral-600 dark:text-neutral-400 md:col-span-3">
                      {c.desc}
                    </p>
                    <ul className="flex flex-wrap gap-2 md:col-span-4 md:justify-end">
                      {c.items.map((item) => (
                        <li
                          key={item}
                          className="rounded-full border border-neutral-300 px-3 py-1 text-xs transition-colors hover:border-orange-600 hover:text-orange-600 dark:border-neutral-700"
                        >
                          {item}
                        </li>
                      ))}
                    </ul>
                  </m.li>
                ))}
              </ul>
            </section>

            <section
              id="contact"
              className="border-t border-neutral-200 dark:border-neutral-800"
            >
              <div className="relative mx-auto max-w-[1400px] px-5 md:px-10 py-24 md:py-36">
                <Label>03 — Contact</Label>
                <h2 className="mt-8 text-[clamp(2.5rem,7vw,6.5rem)] font-semibold leading-[0.98] tracking-[-0.04em]">
                  {["Have a project", "in mind? Let's talk."].map((line, i) => (
                    <span key={i} className="block overflow-hidden pb-[0.08em]">
                      <span data-contact-line className="block">
                        {line}
                      </span>
                    </span>
                  ))}
                </h2>

                <span
                  aria-hidden="true"
                  data-wag
                  className="pointer-events-none absolute right-10 top-16 hidden select-none text-[clamp(5rem,11vw,10rem)] leading-none lg:block"
                >
                  🦊
                </span>

                <div
                  data-reveal
                  className="mt-14 grid gap-3 sm:grid-cols-2 lg:grid-cols-4"
                >
                  {SOCIALS.map((s) => (
                    <m.a
                      key={s.text}
                      href={s.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      whileHover={{ y: -4 }}
                      transition={{
                        type: "spring",
                        stiffness: 300,
                        damping: 22,
                      }}
                      className="group flex items-center justify-between border border-neutral-200 bg-[#fafaf9]/70 p-5 text-sm transition-colors hover:border-orange-600 dark:border-neutral-800 dark:bg-[#0b0b0c]/70"
                    >
                      <span className="flex items-center gap-3">
                        <span className="text-lg text-neutral-500 transition-colors group-hover:text-orange-600">
                          {s.icon}
                        </span>
                        {s.text}
                      </span>
                      <span className="text-neutral-400 transition-transform group-hover:translate-x-1 group-hover:-translate-y-1">
                        ↗
                      </span>
                    </m.a>
                  ))}
                </div>
              </div>
            </section>
          </div>
        </main>

        <div className="fixed bottom-5 left-5 z-40 flex items-center gap-2 rounded-full border border-neutral-300 bg-[#fafaf9]/90 p-1.5 backdrop-blur-md dark:border-neutral-700 dark:bg-[#0b0b0c]/90">
          <button
            onClick={() => setIsMusicOpen(true)}
            aria-label="Open music preview"
            className="grid h-9 w-9 place-items-center rounded-full bg-orange-600 text-white transition-transform hover:scale-105"
          >
            ♪
          </button>
          <Label className="hidden pr-3 sm:inline">Music</Label>
        </div>

        <button
          onClick={() => setShowTerminal(true)}
          aria-label="Open terminal"
          className="fixed bottom-5 right-5 z-40 h-11 rounded-full border border-neutral-300 bg-[#fafaf9]/90 px-4 font-mono text-xs backdrop-blur-md transition-colors hover:border-orange-600 hover:text-orange-600 dark:border-neutral-700 dark:bg-[#0b0b0c]/90"
        >
          {">_"}
        </button>

        <AnimatePresence>
          {showTerminal && (
            <m.div
              key="terminal"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 z-[90] flex items-center justify-center bg-black/70 p-4 backdrop-blur-sm"
            >
              <m.div
                initial={{ y: 24, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                exit={{ y: 24, opacity: 0 }}
                transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
                className="w-full max-w-3xl overflow-hidden rounded-lg border border-white/10 bg-[#0f1117] font-mono shadow-2xl"
              >
                <div className="flex items-center justify-between border-b border-white/5 bg-[#161922] p-3">
                  <div className="ml-1 flex gap-2">
                    <div className="h-3 w-3 rounded-full bg-red-500/80" />
                    <div className="h-3 w-3 rounded-full bg-yellow-500/80" />
                    <div className="h-3 w-3 rounded-full bg-green-500/80" />
                  </div>
                  <span className="text-[10px] font-bold uppercase tracking-widest text-gray-500">
                    Kitsune Terminal — Session: {clock}
                  </span>
                  <button
                    onClick={() => setShowTerminal(false)}
                    className="px-2 text-gray-500 transition-colors hover:text-white"
                    aria-label="Close terminal"
                  >
                    ✕
                  </button>
                </div>

                <div className="no-scrollbar h-[500px] overflow-y-auto scroll-smooth p-6 text-sm">
                  {terminalLog.map((line, i) => (
                    <div key={i} className="mb-3">
                      {typeof line === "string" && line.startsWith(">") ? (
                        <div className="flex gap-2">
                          <span className="font-bold text-white">{">"}</span>
                          <span className="text-white">
                            {line.substring(1).trim()}
                          </span>
                        </div>
                      ) : (
                        <div className="text-blue-300">{line}</div>
                      )}
                    </div>
                  ))}

                  <div className="mt-2 flex items-center gap-3 text-green-400">
                    <span className="shrink-0 font-bold text-orange-500">
                      ➜
                    </span>
                    <span className="shrink-0 text-blue-400">~</span>
                    <input
                      autoFocus
                      className="w-full border-none bg-transparent p-0 text-green-400 outline-none focus:ring-0"
                      value={terminalInput}
                      onChange={(e) => setTerminalInput(e.target.value)}
                      onKeyDown={handleTerminal}
                      spellCheck="false"
                    />
                  </div>
                  <div ref={terminalEndRef} />
                </div>
              </m.div>
            </m.div>
          )}
        </AnimatePresence>

        <AnimatePresence>
          {isMusicOpen && (
            <m.div
              key="music"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 z-[90] flex items-center justify-center bg-black/70 p-4 backdrop-blur-sm"
            >
              <m.div
                initial={{ y: 24, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                exit={{ y: 24, opacity: 0 }}
                transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
                className="max-h-[92vh] w-full max-w-5xl overflow-y-auto border border-white/10 bg-[#0b0b0c] p-5 text-white shadow-2xl md:p-6"
              >
                <div className="flex items-center justify-between gap-4 border-b border-white/10 pb-4">
                  <div>
                    <p className="font-mono text-[11px] uppercase tracking-[0.25em] text-white/50">
                      FandyMusic
                    </p>
                    <h3 className="mt-1 text-2xl font-semibold tracking-tight">
                      My Song Preview
                    </h3>
                  </div>
                  <button
                    onClick={() => setIsMusicOpen(false)}
                    className="rounded-full border border-white/20 px-4 py-2 text-sm transition-colors hover:bg-white hover:text-neutral-900"
                  >
                    Close
                  </button>
                </div>

                <div className="mt-4 flex gap-2">
                  {MUSIC_SLIDES.map((_, index) => (
                    <button
                      key={index}
                      onClick={() => setMusicSlide(index)}
                      className={`h-[3px] flex-1 transition-colors ${
                        musicSlide === index
                          ? "bg-orange-600"
                          : "bg-white/15 hover:bg-white/30"
                      }`}
                      aria-label={`Show slide ${index + 1}`}
                    />
                  ))}
                </div>

                <div className="mt-6 grid gap-6 lg:grid-cols-[1.1fr_0.9fr]">
                  <div className="border border-white/10 p-5">
                    {activeMusicSlide.type === "ranking" ? (
                      <div className="space-y-5">
                        <div>
                          <p className="font-mono text-[11px] uppercase tracking-[0.2em] text-white/50">
                            Slide 1
                          </p>
                          <h4 className="mt-1 text-3xl font-semibold tracking-tight">
                            {activeMusicSlide.title}
                          </h4>
                          <p className="text-white/60">
                            {activeMusicSlide.subtitle}
                          </p>
                        </div>
                        <ol className="grid gap-px bg-white/10 sm:grid-cols-2">
                          {activeMusicSlide.items.map((item, index) => (
                            <li
                              key={item}
                              className="flex items-center justify-between bg-[#0b0b0c] px-4 py-3 text-sm"
                            >
                              <span>{item}</span>
                              <span className="font-mono text-xs text-white/40">
                                #{index + 1}
                              </span>
                            </li>
                          ))}
                        </ol>
                      </div>
                    ) : (
                      <div className="space-y-5">
                        <div>
                          <p className="font-mono text-[11px] uppercase tracking-[0.2em] text-white/50">
                            {musicSlide === 1 ? "Slide 2" : "Slide 3"}
                          </p>
                          <h4 className="mt-1 text-3xl font-semibold tracking-tight">
                            {activeMusicSlide.title}
                          </h4>
                          <p className="mt-2 leading-relaxed text-white/70">
                            {activeMusicSlide.description}
                          </p>
                        </div>
                        <div className="overflow-hidden bg-black/30">
                          <Image
                            src={activeMusicSlide.image}
                            alt={activeMusicSlide.title}
                            width={1200}
                            height={900}
                            className="h-[260px] w-full object-cover sm:h-[320px] md:h-[400px]"
                          />
                        </div>
                        <div className="border-l-2 border-orange-600 pl-4">
                          <p className="font-mono text-[11px] uppercase tracking-[0.2em] text-white/50">
                            My comment
                          </p>
                          <p className="mt-2 text-white/90">
                            {activeMusicSlide.comment}
                          </p>
                        </div>
                      </div>
                    )}
                  </div>

                  <div className="border border-white/10 p-5">
                    <div className="flex items-center justify-between">
                      <div>
                        <p className="font-mono text-[11px] uppercase tracking-[0.2em] text-white/50">
                          Preview Player
                        </p>
                        <h4 className="mt-1 text-xl font-semibold tracking-tight">
                          {activeMusicSlide.songLabel || "Playlist preview"}
                        </h4>
                      </div>
                      <span className="font-mono text-xs text-white/60">
                        {musicSlide + 1}/{MUSIC_SLIDES.length}
                      </span>
                    </div>

                    <audio
                      ref={audioRef}
                      className="hidden"
                      onTimeUpdate={() => {
                        const audio = audioRef.current;
                        if (!audio) return;
                        const current = Math.min(audio.currentTime || 0, 30);
                        setMusicProgress((current / 30) * 100);
                        if (current >= 30) {
                          audio.pause();
                          setIsMusicPlaying(false);
                        }
                      }}
                      onPlay={() => setIsMusicPlaying(true)}
                      onPause={() => setIsMusicPlaying(false)}
                    />

                    <div className="mt-6 border border-white/10 p-4">
                      <div className="flex items-center gap-3">
                        <button
                          onClick={() => seekMusic(-10)}
                          className="grid h-11 w-11 place-items-center rounded-full border border-white/15 transition-colors hover:bg-white/10"
                          aria-label="Skip back 10 seconds"
                        >
                          <IoPlaySkipBack className="text-lg" />
                        </button>
                        <button
                          onClick={toggleMusicPlayback}
                          className="grid h-14 w-14 place-items-center rounded-full bg-orange-600 text-white transition-transform hover:scale-105"
                          aria-label={
                            isMusicPlaying ? "Pause preview" : "Play preview"
                          }
                        >
                          {isMusicPlaying ? (
                            <IoPause className="text-2xl" />
                          ) : (
                            <IoPlay className="ml-0.5 text-2xl" />
                          )}
                        </button>
                        <button
                          onClick={() => seekMusic(10)}
                          className="grid h-11 w-11 place-items-center rounded-full border border-white/15 transition-colors hover:bg-white/10"
                          aria-label="Skip forward 10 seconds"
                        >
                          <IoPlaySkipForward className="text-lg" />
                        </button>
                        <div className="min-w-0 flex-1">
                          <div className="flex items-center justify-between font-mono text-[11px] text-white/50">
                            <span>0:00</span>
                            <span>0:30</span>
                          </div>
                          <input
                            type="range"
                            min="0"
                            max="100"
                            value={musicProgress}
                            onChange={(e) => {
                              const audio = audioRef.current;
                              if (!audio) return;
                              const percent = Number(e.target.value);
                              audio.currentTime = (percent / 100) * 30;
                              setMusicProgress(percent);
                            }}
                            className="mt-2 w-full accent-orange-600"
                            aria-label="Seek preview"
                          />
                        </div>
                      </div>
                      <div className="mt-4 flex items-center justify-between font-mono text-xs text-white/60">
                        <span>Preview length: 30s</span>
                        <span>
                          {Math.round((musicProgress / 100) * 30)}s / 30s
                        </span>
                      </div>
                    </div>

                    <div className="mt-4 flex gap-3">
                      <button
                        onClick={() =>
                          setMusicSlide(
                            (prev) =>
                              (prev - 1 + MUSIC_SLIDES.length) %
                              MUSIC_SLIDES.length,
                          )
                        }
                        className="flex-1 border border-white/15 px-4 py-3 text-sm font-medium transition-colors hover:bg-white/10"
                      >
                        Previous
                      </button>
                      <button
                        onClick={() =>
                          setMusicSlide(
                            (prev) => (prev + 1) % MUSIC_SLIDES.length,
                          )
                        }
                        className="flex-1 bg-white px-4 py-3 text-sm font-semibold text-neutral-900 transition-colors hover:bg-orange-600 hover:text-white"
                      >
                        Next
                      </button>
                    </div>
                  </div>
                </div>
              </m.div>
            </m.div>
          )}
        </AnimatePresence>

        <Footer />
      </div>
    </>
  );
}
