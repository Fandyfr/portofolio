"use client";
import { useState, useEffect } from "react";
import { BsFillMoonStarsFill } from "react-icons/bs";
import Link from "next/link";
import {
  AiFillGithub,
  AiFillInstagram,
  AiFillRedditCircle,
} from "react-icons/ai";
import { FaXTwitter } from "react-icons/fa6";
import { Dialog, DialogPanel, DialogTitle } from "@headlessui/react";

export default function Navbar() {
  const [darkMode, setDarkMode] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, [darkMode]);

  return (
    <>
      <nav className="py-5 mb-10 flex justify-between items-center dark:text-white">
        <Link href="/" className="font-burtons text-xl">
          FandyFr 🦊
        </Link>
        <ul className="flex items-center gap-4 sm:gap-6">
          <li>
            <BsFillMoonStarsFill
              onClick={() => setDarkMode(!darkMode)}
              className="cursor-pointer text-2xl hover:scale-110 transition"
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
    </>
  );
}
