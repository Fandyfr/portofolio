"use client";

import { motion as m } from "framer-motion";
import Link from "next/link";
import {
  AiFillGithub,
  AiFillInstagram,
  AiFillRedditCircle,
} from "react-icons/ai";
import { FaXTwitter } from "react-icons/fa6";

export default function Footer() {
  const socials = [
    {
      href: "https://github.com/Fandyfr",
      icon: <AiFillGithub />,
      label: "GitHub",
    },
    {
      href: "https://x.com/FandyFrOfficial",
      icon: <FaXTwitter />,
      label: "Twitter",
    },
    {
      href: "https://instagram.com/fndy.fr",
      icon: <AiFillInstagram />,
      label: "Instagram",
    },
    {
      href: "https://www.reddit.com/user/FandyFafa/",
      icon: <AiFillRedditCircle />,
      label: "Reddit",
    },
  ];

  return (
    <footer className="relative overflow-hidden">
      {/* Background gradient animation */}
      <div className="absolute inset-0 bg-[length:400%_400%] bg-gradient-to-r from-orange-500 via-pink-500 via-red-500 via-purple-500 to-yellow-500 blur-3xl opacity-30 dark:opacity-50 animate-aurora" />
      <div className="relative z-10 max-w-7xl mx-auto px-6 py-16 grid gap-10 md:grid-cols-3">
        {/* Brand */}
        <m.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="space-y-4"
        >
          <h2 className="text-2xl font-bold bg-gradient-to-r from-orange-500 to-red-500 bg-clip-text text-transparent">
            FandyFr 🦊
          </h2>
          <p className="text-gray-600 dark:text-white text-sm leading-relaxed">
            Building modern, scalable, and user-friendly applications with
            passion and creativity. 🚀
          </p>
        </m.div>

        <m.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9 }}
          className="space-y-4"
        >
          <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
            Quick Links
          </h3>
          <ul className="space-y-2 text-sm">
            {["Home", "Projects", "About", "Contact"].map((item, i) => (
              <li key={i}>
                <Link
                  href={`/${item.toLowerCase()}`}
                  className="text-gray-600 dark:text-gray-400 hover:text-orange-500 dark:hover:text-orange-400 transition"
                >
                  {item}
                </Link>
              </li>
            ))}
          </ul>
        </m.div>

        <m.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="space-y-4"
        >
          <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
            Connect
          </h3>
          <div className="flex gap-4">
            {socials.map((s, i) => (
              <Link
                key={i}
                href={s.href}
                target="_blank"
                className="text-2xl text-gray-600 dark:text-gray-400 hover:text-orange-500 dark:hover:text-orange-400 hover:scale-110 transition-transform"
              >
                {s.icon}
              </Link>
            ))}
          </div>
        </m.div>
      </div>

      {/* Bottom bar */}
      <div className="relative z-10 border-t border-gray-200 dark:border-none py-6 text-center text-sm text-gray-500 dark:text-gray-400">
        © {new Date().getFullYear()} FandyFr. All rights reserved.
      </div>
    </footer>
  );
}
