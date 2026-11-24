"use client";

import { motion as m } from "framer-motion";
import Link from "next/link";
import {
  AiFillGithub,
  AiFillInstagram,
  AiFillRedditCircle,
} from "react-icons/ai";
import { FaGlobe, FaXTwitter } from "react-icons/fa6";

const NAV = [
  { label: "Home", href: "/" },
  { label: "Work", href: "/#work" },
  { label: "Capabilities", href: "/#capabilities" },
  { label: "Contact", href: "/#contact" },
];

const SOCIALS = [
  {
    href: "https://github.com/Fandyfr",
    icon: <AiFillGithub />,
    label: "GitHub [FandyFr]",
  },
  {
    href: "https://github.com/HarukaRepo",
    icon: <AiFillGithub />,
    label: "GitHub 2 [HarukaRepo]",
  },
  {
    href: "https://x.com/FandyFrOfficial",
    icon: <FaXTwitter />,
    label: "Twitter / X",
  },
  {
    href: "https://instagram.com/fandyfr_.12",
    icon: <AiFillInstagram />,
    label: "Instagram",
  },
  {
    href: "https://www.reddit.com/user/FandyFafa/",
    icon: <AiFillRedditCircle />,
    label: "Reddit",
  },
  {
    href: "https://kasbu.bio/rad14",
    icon: <FaGlobe />,
    label: "Our Partner",
  },
];

const ease = [0.22, 1, 0.36, 1];

const Label = ({ children }) => (
  <span className="font-mono text-[11px] uppercase tracking-[0.18em] text-neutral-500 dark:text-neutral-400">
    {children}
  </span>
);

const FooterLink = ({ href, external = false, children }) => (
  <m.span
    initial="rest"
    whileHover="hover"
    animate="rest"
    className="relative inline-block"
  >
    <Link
      href={href}
      {...(external ? { target: "_blank", rel: "noopener noreferrer" } : {})}
      className="text-sm text-neutral-700 transition-colors hover:text-orange-600 dark:text-neutral-300 dark:hover:text-orange-500"
    >
      {children}
    </Link>
    <m.span
      variants={{ rest: { scaleX: 0 }, hover: { scaleX: 1 } }}
      transition={{ duration: 0.35, ease }}
      className="absolute -bottom-0.5 left-0 h-px w-full origin-left bg-orange-600"
    />
  </m.span>
);

export default function Footer() {
  return (
    <footer className="border-t border-neutral-200 bg-[#fafaf9] text-neutral-900 transition-colors duration-300 dark:border-neutral-800 dark:bg-[#0b0b0c] dark:text-neutral-100">
      <div className="mx-auto max-w-[1400px] px-5 md:px-10">
        {/* top */}
        <div className="grid gap-12 py-16 md:grid-cols-12 md:gap-8 md:py-20">
          <m.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.8, ease }}
            className="md:col-span-5"
          >
            <Link
              href="/"
              className="flex items-center gap-2 text-sm font-semibold tracking-tight"
            >
              <span className="inline-block h-2 w-2 rounded-full bg-orange-600" />
              FandyFr
            </Link>
            <p className="mt-6 max-w-sm text-sm leading-relaxed text-neutral-600 dark:text-neutral-400">
              Building modern, scalable, and user-friendly applications — with
              attention to security, performance, and detail.
            </p>
            <Link
              href="/#contact"
              className="group mt-8 inline-flex items-center gap-2 text-sm font-medium"
            >
              <span className="border-b border-current pb-0.5 transition-colors group-hover:text-orange-600">
                Start a conversation
              </span>
              <span className="transition-transform group-hover:translate-x-1 group-hover:text-orange-600">
                →
              </span>
            </Link>
          </m.div>

          <m.nav
            aria-label="Footer"
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.8, delay: 0.08, ease }}
            className="md:col-span-3 md:col-start-7"
          >
            <Label>Navigate</Label>
            <ul className="mt-5 space-y-3">
              {NAV.map((item) => (
                <li key={item.label}>
                  <FooterLink href={item.href}>{item.label}</FooterLink>
                </li>
              ))}
            </ul>
          </m.nav>

          <m.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.8, delay: 0.16, ease }}
            className="md:col-span-3"
          >
            <Label>Connect</Label>
            <ul className="mt-5 space-y-3">
              {SOCIALS.map((s) => (
                <li key={s.label}>
                  <FooterLink href={s.href} external>
                    {s.label} <span className="text-neutral-400">↗</span>
                  </FooterLink>
                </li>
              ))}
            </ul>
          </m.div>
        </div>

        {/* wordmark */}
        <div className="overflow-hidden border-t border-neutral-200 dark:border-neutral-800">
          <m.p
            aria-hidden="true"
            initial={{ y: "100%" }}
            whileInView={{ y: 0 }}
            viewport={{ once: true, margin: "-40px" }}
            transition={{ duration: 1.1, ease }}
            className="select-none py-6 text-center text-[clamp(3.5rem,17vw,16rem)] font-semibold leading-[0.85] tracking-[-0.06em] text-neutral-200 dark:text-neutral-900"
          >
            FandyFr
          </m.p>
        </div>

        {/* bottom bar */}
        <div className="flex flex-col items-start justify-between gap-4 border-t border-neutral-200 py-6 dark:border-neutral-800 sm:flex-row sm:items-center">
          <Label>
            © {new Date().getFullYear()} FandyFr. All rights reserved.
          </Label>
          <div className="flex items-center gap-6">
            <Label>Bali, Indonesia</Label>
            <m.a
              href="#home"
              whileHover={{ y: -2 }}
              transition={{ type: "spring", stiffness: 300, damping: 22 }}
              className="font-mono text-[11px] uppercase tracking-[0.18em] transition-colors hover:text-orange-600"
            >
              Back to top ↑
            </m.a>
          </div>
        </div>
      </div>
    </footer>
  );
}
