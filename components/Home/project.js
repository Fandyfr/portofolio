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
  const [isOpen, setIsOpen] = useState(false);

  return (
    <section className="py-16">
      <h3 className="text-3xl font-semibold text-center mb-10 dark:text-white">
        🔥 My Projects
      </h3>

      <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
        <m.div
          whileHover={{ scale: 1.05 }}
          transition={{ type: "spring", stiffness: 200, damping: 15 }}
          className="relative rounded-xl overflow-hidden shadow-lg group cursor-pointer border border-gray-200 dark:border-gray-800"
          onClick={() => setIsOpen(true)}
        >
          <div className="aspect-video w-full relative">
            <Image
              src="/project.png"
              alt="Project"
              fill
              className="object-cover group-hover:scale-110 transition-transform duration-500"
            />
          </div>
          <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition duration-300 flex items-center justify-center">
            <p className="text-white text-lg font-semibold">View Details</p>
          </div>
        </m.div>
      </div>

      <Dialog open={isOpen} onOpenChange={setIsOpen}>
        <DialogContent className="max-w-3xl w-full rounded-2xl shadow-2xl p-6 sm:p-10 bg-white dark:bg-gray-900">
          <DialogHeader className="space-y-4">
            <DialogTitle className="text-3xl font-extrabold bg-gradient-to-r from-orange-500 to-red-500 bg-clip-text text-transparent">
              KawaiiStream
            </DialogTitle>
            <DialogDescription className="text-gray-600 dark:text-gray-300 text-base leading-relaxed">
              Platform streaming anime gratis dengan kualitas tinggi. Nikmati
              anime terbaru & manga favorit dalam satu tempat, kapan saja, di
              perangkat apapun.
            </DialogDescription>
          </DialogHeader>

          <div className="relative w-full h-auto rounded-lg overflow-hidden my-6">
            <Image
              src="/project.png"
              alt="Project Preview"
              width={1200}
              height={600}
              className="w-full h-auto object-contain"
            />
          </div>

          <div className="flex flex-col sm:flex-row gap-4 mt-6">
            <Link
              href="https://kawaiistream.vercel.app"
              target="_blank"
              className="flex-1"
            >
              <button className="w-full bg-gradient-to-r from-orange-500 to-red-500 text-white px-6 py-3 rounded-lg font-semibold text-lg hover:scale-[1.02] transition">
                🌐 Visit Website
              </button>
            </Link>
          </div>
        </DialogContent>
      </Dialog>
    </section>
  );
}
