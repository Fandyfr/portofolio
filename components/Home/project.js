"use client";
import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion as m } from "framer-motion";

import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
} from "@/components/ui/dialog";

export default function Projects() {
  const projects = [
    {
      id: 1,
      title: "KawaiiStream",
      description: "Anime streaming platform",
      image: "/project/kawaiistream.png",
      url: "https://kawaiistream.vercel.app",
    },
    // {
    //   id: 2,
    //   title: "KitsuZone",
    //   description: "Anime streaming platform with Modern UI like Crunch",
    //   image: "/project/kawaiistream.jpg",
    //   url: "#",
    // },
    {
      id: 2,
      title: "Kimajaya Nusantara",
      description: "Travel service platform",
      image: "/project/kimajaya.png",
      url: "https://kimajaya.my.id",
    },
  ];
  const [selectedProject, setSelectedProject] = useState();
  const [isOpen, setIsOpen] = useState(false);

  return (
    <section className="py-16" id="projects">
      <h3 className="text-3xl font-semibold text-center mb-10 dark:text-white">
        🔥 My Projects
      </h3>

      <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
        {projects.map((project) => (
          <m.div
            key={project.id}
            whileHover={{ scale: 1.05 }}
            transition={{ type: "spring", stiffness: 200, damping: 15 }}
            className="relative rounded-xl overflow-hidden shadow-lg group cursor-pointer border border-gray-200 dark:border-gray-800"
            onClick={() => setSelectedProject(project)}
          >
            <div className="aspect-video w-full relative">
              <Image
                src={project.image}
                alt={project.title}
                fill
                className="object-cover group-hover:scale-110 transition-transform duration-500"
              />
            </div>

            <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition duration-300 flex items-center justify-center">
              <p className="text-white text-lg font-semibold">
                {project.title}
              </p>
            </div>
          </m.div>
        ))}
      </div>

      <Dialog
        open={!!selectedProject}
        onOpenChange={() => setSelectedProject(null)}
      >
        <DialogContent>
          <DialogHeader>
            <DialogTitle>{selectedProject?.title}</DialogTitle>

            <DialogDescription>
              {selectedProject?.description}
            </DialogDescription>
          </DialogHeader>

          <Image
            src={selectedProject?.image || ""}
            alt={selectedProject?.title || ""}
            width={1200}
            height={600}
          />

          <Link href={selectedProject?.url || "#"} target="_blank">
            <button>🌐 Visit Website</button>
          </Link>
        </DialogContent>
      </Dialog>
    </section>
  );
}
