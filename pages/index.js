import Head from "next/head";
import Link from "next/link";
import { useState, useEffect, useRef } from "react";
import { Transition } from "@headlessui/react";
import { motion as m, useScroll, useSpring } from "framer-motion";
import Image from "next/image";
import headicon from "../public/headicon.png";
import code from "../public/code.png";
import desain from "../public/desain.png";
import dev from "../public/dev.png";
import Projects from "@/components/Home/project";
import Footer from "@/components/shared/footer";
import { BsFillMoonStarsFill } from "react-icons/bs";
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
import { Dialog, DialogPanel, DialogTitle } from "@headlessui/react";

export default function Home() {
  const [darkMode, setDarkMode] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
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
  const scrollToBottom = () => {
    terminalEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    scrollToBottom();
  }, [terminalLog]);

  useEffect(() => {
    if (!isMusicOpen) {
      audioRef.current?.pause();
      setIsMusicPlaying(false);
      return;
    }

    const audio = audioRef.current;
    if (!audio) return;

    if (musicStopRef.current) {
      clearTimeout(musicStopRef.current);
    }

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
      if (musicStopRef.current) {
        clearTimeout(musicStopRef.current);
      }
    };
  }, [isMusicOpen, musicSlide]);

  useEffect(() => {
    return () => {
      if (musicStopRef.current) {
        clearTimeout(musicStopRef.current);
      }
    };
  }, []);

  const handleTerminal = (e) => {
    if (e.key === "Enter") {
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
                  <span className="text-orange-400 font-bold">
                    ➜ {item.cmd}
                  </span>
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
                {'"Building the future with Zero Trust & High Fidelity Audio."'}
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
                  <span className="text-blue-400">CPU:</span> Intel Ultra 9
                  275HX @ 2.70GHz
                </div>
                <div>
                  <span className="text-blue-400">GPU:</span> NVIDIA GeForce
                  RTX™ 5090
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
    }
  };

  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001,
  });

  useEffect(() => {
    const saved = localStorage.getItem("theme");
    if (saved === "dark") {
      setDarkMode(true);
      document.documentElement.classList.add("dark");
    }
  }, []);

  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add("dark");
      localStorage.setItem("theme", "dark");
    } else {
      document.documentElement.classList.remove("dark");
      localStorage.setItem("theme", "light");
    }
  }, [darkMode]);

  const musicSlides = [
    {
      type: "ranking",
      title: "My Top 10 Favorite Songs",
      subtitle: "Rank 1 to 10",
      items: [
        "01. Ado - Haru ni mau",
        "02. Kenshi Yonezu - IRIS OUT",
        "03. Kenshi Yonezu - Jane Doe",
        "04. 攬佬SKAI ISYOURGOD - Blueprint Supreme",
        "05. 攬佬SKAI ISYOURGOD - Karma Code",
        "06. 攬佬SKAI ISYOURGOD - Hexagrams",
        "07. 1nonly - Shakira",
        "08. Ado - MIRROR",
        "09. YOASOBI - BABY",
        "10. YOASOBI - Adrena",
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

  const activeMusicSlide = musicSlides[musicSlide];

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
    <div className={darkMode ? "dark" : ""}>
      <m.div
        className="fixed top-0 left-0 right-0 h-1 bg-gradient-to-r from-orange-500 to-red-600 z-[100] origin-left"
        style={{ scaleX }}
      />
      <Head>
        <title>FandyFr | Portofolio Page</title>
        <meta name="description" content="Crafted with heart" />
      </Head>

      <main
        className="bg-white dark:bg-gray-900 transition-colors duration-300 px-5 md:px-10 lg:px-20"
        id="home"
      >
        {/* <Navbar /> */}
        <nav className="py-5 mb-10 flex justify-between items-center">
          <Link href="/" className="font-burtons text-xl">
            FandyFr 🦊
          </Link>
          <ul className="flex items-center gap-4 sm:gap-6">
            <li>
              <BsFillMoonStarsFill
                onClick={() => setDarkMode(!darkMode)}
                className="cursor-pointer text-2xl"
              />
            </li>
            <li>
              <button
                onClick={() => setIsOpen(true)}
                className="bg-gradient-to-r from-red-500 to-orange-500 text-white px-4 py-2 rounded-md hover:opacity-90 transition"
              >
                Menu
              </button>
            </li>
          </ul>
          <button
            onClick={() => setShowTerminal(true)}
            className="fixed bottom-5 right-5 bg-gray-900 text-green-400 p-3 rounded-full shadow-2xl border border-green-500/50 font-mono text-xs z-50"
          >
            {">_"}
          </button>

          {showTerminal && (
            <div className="fixed inset-0 z-[60] flex items-center justify-center p-4 bg-black/80 backdrop-blur-md">
              <m.div
                initial={{ scale: 0.9, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                className="bg-[#1a1b26] w-full max-w-3xl rounded-xl overflow-hidden border border-white/10 shadow-[0_0_50px_-12px_rgba(0,0,0,0.5)] font-mono"
              >
                {/* Header */}
                <div className="bg-[#24283b] p-3 flex justify-between items-center border-b border-white/5">
                  <div className="flex gap-2 ml-1">
                    <div className="w-3 h-3 rounded-full bg-red-500/80" />
                    <div className="w-3 h-3 rounded-full bg-yellow-500/80" />
                    <div className="w-3 h-3 rounded-full bg-green-500/80" />
                  </div>
                  <span className="text-[10px] uppercase tracking-widest text-gray-500 font-bold">
                    Kitsune Terminal — Session:{" "}
                    {new Date().toLocaleTimeString()}
                  </span>
                  <button
                    onClick={() => setShowTerminal(false)}
                    className="text-gray-500 hover:text-white transition-colors px-2"
                  >
                    ✕
                  </button>
                </div>

                {/* Area Terminal */}
                <div className="p-6 h-[500px] overflow-y-auto text-sm no-scrollbar scroll-smooth">
                  {terminalLog.map((line, i) => (
                    <div key={i} className="mb-3">
                      {/* Jika baris adalah input user (diawali >) */}
                      {typeof line === "string" && line.startsWith(">") ? (
                        <div className="flex gap-2">
                          <span className="text-white font-bold">{">"}</span>
                          <span className="text-white">
                            {line.substring(1).trim()}
                          </span>
                        </div>
                      ) : (
                        /* Jika baris adalah respon (String atau JSX) */
                        <div className="text-blue-300">{line}</div>
                      )}
                    </div>
                  ))}

                  {/* Input Area */}
                  <div className="flex gap-3 text-green-400 items-center mt-2">
                    <span className="shrink-0 text-orange-500 font-bold">
                      ➜
                    </span>
                    <span className="shrink-0 text-blue-400">~</span>
                    <input
                      autoFocus
                      className="bg-transparent outline-none w-full border-none p-0 focus:ring-0 text-green-400"
                      value={terminalInput}
                      onChange={(e) => setTerminalInput(e.target.value)}
                      onKeyDown={handleTerminal}
                      spellCheck="false"
                    />
                  </div>

                  {/* Anchor untuk Auto-Scroll */}
                  <div ref={terminalEndRef} />
                </div>
              </m.div>
            </div>
          )}
        </nav>

        <Dialog open={isOpen} onClose={() => setIsOpen(false)}>
          <DialogPanel
            className="fixed top-24 right-5 z-50 w-72 rounded-2xl shadow-xl p-6 
                     bg-white dark:bg-gray-900
                     border border-gray-200 dark:border-gray-700"
          >
            <DialogTitle className="font-bold text-lg mb-4 text-gray-900 dark:text-white">
              Quick Links
            </DialogTitle>
            <ul className="space-y-4">
              {[
                {
                  href: "https://github.com/Fandyfr",
                  icon: <AiFillGithub />,
                  text: "GitHub",
                },
                {
                  href: "https://x.com/FandyFrOfficial",
                  icon: <FaXTwitter />,
                  text: "Twitter",
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
              ].map((link, i) => (
                <li key={i}>
                  <a
                    href={link.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 text-gray-800 dark:text-gray-200 hover:text-orange-400 transition"
                  >
                    {link.icon} {link.text}
                  </a>
                </li>
              ))}
            </ul>
          </DialogPanel>
        </Dialog>

        <section className="relative min-h-screen w-full flex flex-col items-center justify-center text-center overflow-hidden">
          <m.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-4xl md:text-5xl lg:text-6xl py-2 font-bold text-orange-600">
              Fandy Fathurrohman
            </h2>
            <h3 className="text-xl md:text-2xl lg:text-3xl py-2 text-gray-800 dark:text-white">
              🦊 Developer and Designer 🦊
            </h3>
            <p className="max-w-xl mx-auto py-5 text-gray-700 md:text-lg dark:text-white">
              ITB STIKOM BALI, Information Systems major.
            </p>
          </m.div>
          <m.div
            initial={{ opacity: 0, scale: 0.6, rotate: -10 }}
            animate={{ opacity: 1, scale: 1, rotate: 0 }}
            transition={{ duration: 1, ease: "easeOut" }}
            whileHover={{
              scale: 1.05,
              rotate: 2,
              transition: { type: "spring", stiffness: 200, damping: 15 },
            }}
            className="relative mt-12 w-56 h-56 md:w-72 md:h-72 lg:w-80 lg:h-80"
          >
            <m.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.5, duration: 1 }}
              className="absolute inset-0 rounded-full bg-gradient-to-tr from-pink-400 via-orange-300 to-yellow-400 animate-spin-slow blur-xl opacity-50"
            />
            <div className="relative w-full h-full rounded-full overflow-hidden shadow-2xl">
              <Image
                src={headicon}
                alt="profile"
                fill
                className="object-cover"
              />
            </div>
            <m.div
              animate={{ scale: [1, 1.1, 1] }}
              transition={{
                repeat: Infinity,
                duration: 3,
                ease: "easeInOut",
              }}
              className="absolute inset-0 rounded-full bg-gradient-to-br from-purple-400/30 via-pink-300/20 to-transparent blur-3xl"
            />
          </m.div>
        </section>

        <section className="py-16 relative" id="skills">
          <h3 className="text-3xl font-semibold text-center mb-10 dark:text-white">
            ⚡ Skills & Tools
          </h3>

          <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3 px-6">
            {[
              { title: "Design", icon: desain, items: ["Figma", "Adobe XD"] },
              {
                title: "Languages",
                icon: code,
                items: ["NextJS", "JavaScript", "PHP", "C++"],
              },
              {
                title: "Tools",
                icon: dev,
                items: ["VS Code", "Android Studio", "Git"],
              },
            ].map((card, i) => (
              <m.div
                key={i}
                whileHover={{ scale: 1.05 }}
                className="relative rounded-2xl overflow-hidden shadow-lg p-[1px]"
              >
                <div className="rounded-2xl bg-white/20 dark:bg-gray-900/30 backdrop-blur-lg border border-white/20 dark:border-gray-700/30 p-6 h-full flex flex-col justify-center items-center text-center">
                  <Image
                    src={card.icon}
                    alt={card.title}
                    width={80}
                    height={80}
                    className="mx-auto drop-shadow-lg"
                  />

                  <h4 className="text-lg font-semibold pt-4 pb-2 text-gray-900 dark:text-white">
                    {card.title}
                  </h4>
                  <Transition
                    appear={true}
                    show={true}
                    enter="transition ease-out duration-500"
                    enterFrom="opacity-0 translate-y-2"
                    enterTo="opacity-100 translate-y-0"
                  >
                    <ul className="space-y-1">
                      {card.items.map((item, j) => (
                        <li
                          key={j}
                          className="text-sm text-gray-700 dark:text-gray-300 hover:text-orange-400 transition"
                        >
                          {item}
                        </li>
                      ))}
                    </ul>
                  </Transition>
                </div>
              </m.div>
            ))}
          </div>
        </section>

        <Projects />
      </main>
      {isMusicOpen && (
        <div className="fixed inset-0 z-[70] flex items-center justify-center p-4 bg-black/55 backdrop-blur-xl">
          <m.div
            initial={{ opacity: 0, scale: 0.92, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            className="relative w-full max-w-5xl overflow-hidden rounded-[32px] border border-white/20 bg-white/10 p-4 text-white shadow-[0_30px_120px_rgba(0,0,0,0.45)] backdrop-blur-3xl"
            style={{
              background:
                "linear-gradient(135deg, rgba(255,255,255,0.18), rgba(255,255,255,0.06))",
            }}
          >
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(255,255,255,0.22),transparent_35%),radial-gradient(circle_at_bottom_right,rgba(255,140,0,0.18),transparent_40%)]" />
            <div className="relative z-10">
              <div className="flex items-center justify-between gap-4 border-b border-white/15 pb-4">
                <div>
                  <p className="text-xs uppercase tracking-[0.35em] text-white/60">
                    FandyMusic
                  </p>
                  <h3 className="mt-1 text-2xl font-semibold">
                    My Song Preview
                  </h3>
                </div>
                <button
                  onClick={() => setIsMusicOpen(false)}
                  className="rounded-full border border-white/20 bg-white/10 px-4 py-2 text-sm text-white/90 hover:bg-white/20 transition"
                >
                  Close
                </button>
              </div>

              <div className="mt-4 flex gap-3">
                {musicSlides.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => setMusicSlide(index)}
                    className={`h-2 flex-1 rounded-full transition ${
                      musicSlide === index
                        ? "bg-white"
                        : "bg-white/20 hover:bg-white/35"
                    }`}
                    aria-label={`Show slide ${index + 1}`}
                  />
                ))}
              </div>

              <div className="mt-5 grid gap-5 lg:grid-cols-[1.1fr_0.9fr]">
                <div className="rounded-[28px] border border-white/15 bg-white/10 p-5 shadow-inner shadow-black/10 backdrop-blur-xl">
                  {activeMusicSlide.type === "ranking" ? (
                    <div className="space-y-4">
                      <div>
                        <p className="text-sm uppercase tracking-[0.3em] text-white/60">
                          Slide 1
                        </p>
                        <h4 className="mt-1 text-3xl font-bold">
                          {activeMusicSlide.title}
                        </h4>
                        <p className="text-white/70">
                          {activeMusicSlide.subtitle}
                        </p>
                      </div>
                      <ol className="grid gap-2 sm:grid-cols-2">
                        {activeMusicSlide.items.map((item, index) => (
                          <li
                            key={item}
                            className="flex items-center justify-between rounded-2xl border border-white/10 bg-black/10 px-4 py-3 text-sm"
                          >
                            <span>{item}</span>
                            <span className="text-white/50">#{index + 1}</span>
                          </li>
                        ))}
                      </ol>
                    </div>
                  ) : (
                    <div className="space-y-4">
                      <div>
                        <p className="text-sm uppercase tracking-[0.3em] text-white/60">
                          {musicSlide === 1 ? "Slide 2" : "Slide 3"}
                        </p>
                        <h4 className="mt-1 text-3xl font-bold">
                          {activeMusicSlide.title}
                        </h4>
                        <p className="mt-2 text-white/75 leading-relaxed">
                          {activeMusicSlide.description}
                        </p>
                      </div>
                      <div className="overflow-hidden rounded-[24px] border border-white/10 bg-black/20">
                        <Image
                          src={activeMusicSlide.image}
                          alt={activeMusicSlide.title}
                          width={1200}
                          height={900}
                          className="h-[280px] w-full object-cover sm:h-[340px] md:h-[420px] lg:h-[460px]"
                        />
                      </div>
                      <div className="rounded-[24px] border border-white/10 bg-white/10 p-4">
                        <p className="text-xs uppercase tracking-[0.25em] text-white/55">
                          My comment
                        </p>
                        <p className="mt-2 text-white/90">
                          {activeMusicSlide.comment}
                        </p>
                      </div>
                    </div>
                  )}
                </div>

                <div className="rounded-[28px] border border-white/15 bg-white/10 p-5 backdrop-blur-xl">
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="text-xs uppercase tracking-[0.3em] text-white/60">
                        Preview Player
                      </p>
                      <h4 className="mt-1 text-xl font-semibold">
                        {activeMusicSlide.songLabel || "Playlist preview"}
                      </h4>
                    </div>
                    <div className="rounded-full border border-white/15 bg-white/10 px-3 py-1 text-xs text-white/70">
                      {musicSlide + 1}/3
                    </div>
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
                  <div className="mt-5 rounded-[24px] border border-white/10 bg-black/20 p-4">
                    <div className="flex items-center gap-3">
                      <button
                        onClick={() => seekMusic(-10)}
                        className="grid h-11 w-11 place-items-center rounded-full border border-white/15 bg-white/10 text-white hover:bg-white/20 transition"
                        aria-label="Skip back 10 seconds"
                      >
                        <IoPlaySkipBack className="text-lg" />
                      </button>
                      <button
                        onClick={toggleMusicPlayback}
                        className="grid h-14 w-14 place-items-center rounded-full bg-white text-gray-900 hover:scale-105 transition"
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
                        className="grid h-11 w-11 place-items-center rounded-full border border-white/15 bg-white/10 text-white hover:bg-white/20 transition"
                        aria-label="Skip forward 10 seconds"
                      >
                        <IoPlaySkipForward className="text-lg" />
                      </button>
                      <div className="min-w-0 flex-1">
                        <div className="flex items-center justify-between text-xs text-white/60">
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
                            const nextTime = (percent / 100) * 30;
                            audio.currentTime = nextTime;
                            setMusicProgress(percent);
                          }}
                          className="mt-2 w-full accent-orange-400"
                          aria-label="Seek preview"
                        />
                      </div>
                    </div>
                    <div className="mt-4 flex items-center justify-between text-sm text-white/70">
                      <span>Preview length: 30 seconds</span>
                      <span>
                        {Math.round((musicProgress / 100) * 30)}s / 30s
                      </span>
                    </div>
                  </div>

                  <div className="mt-4 flex gap-3">
                    <button
                      onClick={() =>
                        setMusicSlide((prev) => (prev - 1 + 3) % 3)
                      }
                      className="flex-1 rounded-2xl border border-white/15 bg-white/10 px-4 py-3 text-sm font-medium hover:bg-white/20 transition"
                    >
                      Previous
                    </button>
                    <button
                      onClick={() => setMusicSlide((prev) => (prev + 1) % 3)}
                      className="flex-1 rounded-2xl bg-white px-4 py-3 text-sm font-semibold text-gray-900 hover:bg-white/90 transition"
                    >
                      Next
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </m.div>
        </div>
      )}
      <div className="fixed bottom-5 left-5 z-40 flex items-center gap-3 bg-white/10 backdrop-blur-md p-2 rounded-full border border-white/20">
        <button
          onClick={() => setIsMusicOpen(true)}
          className="w-10 h-10 rounded-full bg-orange-600 flex items-center justify-center text-white shadow-lg"
          aria-label="Open music preview"
        >
          ♪
        </button>
      </div>
      <Footer />
    </div>
  );
}
