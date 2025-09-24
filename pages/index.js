import Head from "next/head";
import Link from "next/link";
import { useState, useEffect } from "react";
import { Transition } from "@headlessui/react";
import { motion as m } from "framer-motion";
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
import { Dialog, DialogPanel, DialogTitle } from "@headlessui/react";

export default function Home() {
  const [darkMode, setDarkMode] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
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

  return (
    <div className={darkMode ? "dark" : ""}>
      <Head>
        <title>FandyFr | Portofolio Page</title>
        <meta name="description" content="Dibuat dengan Hati" />
      </Head>

      <main className="bg-white dark:bg-gray-900 transition-colors duration-300 px-5 md:px-10 lg:px-20">
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
                  href: "https://instagram.com/fndy.fr",
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
              Rekayasa Perangkat Lunak student in SMK TI Bali Global Denpasar.
              Passionate in Web & App Development.
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

        <section className="py-16 relative">
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
      <Footer />
    </div>
  );
}
