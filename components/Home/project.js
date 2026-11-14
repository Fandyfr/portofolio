"use client";

import { useState } from "react";
import Image from "next/image";
import { motion as m } from "framer-motion";

import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
} from "@/components/ui/dialog";

const ease = [0.22, 1, 0.36, 1];

const projects = [
  {
    id: 1,
    title: "KawaiiStream",
    description: "Anime streaming platform",
    image: "/project/kawaiistream.png",
    url: "https://kawaiistream.vercel.app",
  },
  {
    id: 2,
    title: "KitsuZone",
    description: "Anime streaming platform with Modern UI like Crunch",
    image: "/project/kitsuzone.png",
    url: "#",
  },
  {
    id: 3,
    title: "Kimajaya Nusantara",
    description: "Travel service platform",
    image: "/project/kimajaya.png",
    url: "https://kimajaya.com",
  },
  {
    id: 4,
    title: "Amatra Park",
    description: "Integrated cultural and lifestyle destination",
    image: "/project/amatra.jpg",
    url: "https://amatrapark.co.id",
  },
];

const hasUrl = (url) => Boolean(url) && url !== "#";

const hostOf = (url) => {
  try {
    return new URL(url).hostname.replace(/^www\./, "");
  } catch {
    return url;
  }
};

const Label = ({ children, className = "" }) => (
  <span
    className={`font-mono text-[11px] uppercase tracking-[0.18em] text-neutral-500 dark:text-neutral-400 ${className}`}
  >
    {children}
  </span>
);

export default function Projects() {
  const [selectedProject, setSelectedProject] = useState(null);

  return (
    <div>
      <ul className="grid gap-x-8 gap-y-14 md:grid-cols-2">
        {projects.map((project, i) => (
          <m.li
            key={project.id}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.8, ease, delay: (i % 2) * 0.1 }}
          >
            <m.button
              type="button"
              initial="rest"
              whileHover="hover"
              whileFocus="hover"
              animate="rest"
              onClick={() => setSelectedProject(project)}
              className="group block w-full text-left focus:outline-none"
              aria-label={`Open ${project.title}`}
            >
              {/* image */}
              <div className="relative aspect-[16/10] w-full overflow-hidden bg-neutral-200 dark:bg-neutral-900">
                <m.div
                  variants={{ rest: { scale: 1 }, hover: { scale: 1.04 } }}
                  transition={{ duration: 0.8, ease }}
                  className="absolute inset-0"
                >
                  <Image
                    src={project.image}
                    alt={project.title}
                    fill
                    sizes="(min-width: 768px) 50vw, 100vw"
                    className="object-cover grayscale transition-[filter] duration-700 group-hover:grayscale-0 group-focus-visible:grayscale-0"
                  />
                </m.div>

                <m.span
                  variants={{
                    rest: { opacity: 0, y: 8 },
                    hover: { opacity: 1, y: 0 },
                  }}
                  transition={{ duration: 0.35, ease }}
                  className="absolute bottom-4 right-4 rounded-full bg-white px-4 py-2 font-mono text-[11px] uppercase tracking-[0.18em] text-neutral-900"
                >
                  View project ↗
                </m.span>
              </div>

              {/* meta */}
              <div className="mt-5 flex items-baseline justify-between gap-4 border-b border-neutral-200 pb-5 dark:border-neutral-800">
                <div className="flex items-baseline gap-4">
                  <span className="font-mono text-xs text-neutral-400">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <div>
                    <h4 className="text-xl font-semibold tracking-tight transition-colors group-hover:text-orange-600 md:text-2xl">
                      {project.title}
                    </h4>
                    <p className="mt-1 max-w-sm text-sm leading-relaxed text-neutral-600 dark:text-neutral-400">
                      {project.description}
                    </p>
                  </div>
                </div>
                <m.span
                  variants={{
                    rest: { x: 0, y: 0 },
                    hover: { x: 4, y: -4 },
                  }}
                  transition={{ duration: 0.3, ease }}
                  className="shrink-0 text-neutral-400 group-hover:text-orange-600"
                >
                  ↗
                </m.span>
              </div>
            </m.button>
          </m.li>
        ))}
      </ul>

      <Dialog
        open={!!selectedProject}
        onOpenChange={(open) => {
          if (!open) setSelectedProject(null);
        }}
      >
        <DialogContent className="max-w-3xl gap-0 overflow-hidden rounded-none border border-neutral-200 bg-[#fafaf9] p-0 text-neutral-900 dark:border-neutral-800 dark:bg-[#0b0b0c] dark:text-neutral-100 sm:rounded-none">
          {selectedProject && (
            <>
              <div className="relative aspect-[16/9] w-full bg-neutral-200 dark:bg-neutral-900">
                <Image
                  src={selectedProject.image}
                  alt={selectedProject.title}
                  fill
                  sizes="(min-width: 768px) 768px, 100vw"
                  className="object-cover"
                />
              </div>

              <div className="p-6 md:p-8">
                <DialogHeader className="space-y-3 text-left">
                  <Label>Project</Label>
                  <DialogTitle className="text-3xl font-semibold tracking-[-0.03em] md:text-4xl">
                    {selectedProject.title}
                  </DialogTitle>
                  <DialogDescription className="max-w-xl text-base leading-relaxed text-neutral-600 dark:text-neutral-400">
                    {selectedProject.description}
                  </DialogDescription>
                </DialogHeader>

                {hasUrl(selectedProject.url) && (
                  <div className="mt-8 flex flex-wrap items-center justify-between gap-4 border-t border-neutral-200 pt-6 dark:border-neutral-800">
                    <Label>{hostOf(selectedProject.url)}</Label>
                    <a
                      href={selectedProject.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="group inline-flex h-11 items-center gap-2 rounded-full bg-orange-600 px-6 text-sm font-medium text-white transition-colors hover:bg-orange-700"
                    >
                      Visit website
                      <span className="transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5">
                        ↗
                      </span>
                    </a>
                  </div>
                )}
              </div>
            </>
          )}
        </DialogContent>
      </Dialog>
    </div>
  );
}
