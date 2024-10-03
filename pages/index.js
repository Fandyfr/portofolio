import Head from "next/head";
import Link from 'next/link';
import {
  AiFillGithub,
  AiFillInstagram,
  AiFillRedditCircle,
} from "react-icons/ai";
import { FaXTwitter } from "react-icons/fa6";
import { BsFillMoonStarsFill } from "react-icons/bs";
import { useState } from "react";
import headicon from "../public/headicon.png";
import code from "../public/code.png";
import desain from "../public/desain.png";
import project from "../public/project.png";
import dev from "../public/dev.png";
import Image from "next/image";

export default function Home() {
  const [darkMode, setDarkMode] = useState(false);

  return (
    <div className={darkMode ? "dark" : ""}>
      <Head>
        <title>FandyFr | Portofolio Page</title>
        {/* META */}
        <meta name="description" content="Dibuat dengan Hati" />
        <meta name="keywords" content="portofolio, web development, desain grafis, aplikasi mobile, proyek, kolaborasi, FandyFr, Fandy Fathurrohman"></meta>
        <meta name="author" content="Fandy Fathurrohman"></meta>
        <meta name="robots" content="index, follow"></meta>
        {/* Twitter / X */}
        <meta property="twitter:card" content="summary_large_image"></meta>
        <meta property="twitter:url" content="https://portofolio-fandyfr.vercel.app/"></meta>
        <meta property="twitter:title" content="FandyFr Portofolio"></meta>
        <meta property="twitter:description" content="Portofolio saya mencakup proyek-proyek web development, desain grafis, dan aplikasi mobile. Lihat karya terbaik saya dan hubungi saya untuk kolaborasi lebih lanjut."></meta>
        <meta property="twitter:image" content="https://portofolio-fandyfr.vercel.app/avatar.png"></meta>
        {/* Icon */}
        <link rel="icon" href="/avatar.png" />
      </Head>
      <main className="bg-white px-5 dark:bg-gray-900 md:px-10 lg:px-20">
        <section className="min-h-screen">
          <nav className="py-5 mb-10 flex justify-between dark:text-white">
            <a href="https://portofolio-fandyfr.vercel.app/">
              <h1 className="font-burtons text-xl">FandyFr 🦊</h1>
            </a>
            <ul className="flex items-center">
              <li>
                <BsFillMoonStarsFill
                  onClick={() => setDarkMode(!darkMode)}
                  className="cursor-pointer text-2xl"
                />
              </li>
              <li>
                <a
                  className="bg-gradient-to-r from-red-500 to-orange-500 text-white px-4 py-2 border-none rounded-md ml-8"
                  href="https://github.com/Fandyfr"
                >
                  My GitHub
                </a>
              </li>
            </ul>
          </nav>
          <div className="text-center p-5 py-10">
            <h2 className="text-4xl py-2 text-orange-600 font-medium dark:text-orange-400 md:text-5xl lg:text-6xl">
              Fandy Fathurrohman
            </h2>
            <h3 className="text-xl py-2 dark:text-white md:text-2xl lg:text-3xl">
              🦊 Developer and Designer 🦊
            </h3>
            <p className="text-md py-5 leading-8 text-gray-800 dark:text-gray-200 max-w-xl mx-auto md:text-lg lg:text-xl">
              Bersekolah di SMK TI BALI Global Denpasar, Jurusan RPL (Rekayasa
              Perangkat Lunak).
            </p>
            <div className="text-4xl flex justify-center gap-10 py-3 text-gray-600 dark:text-gray-400 md:gap-16 lg:gap-20">
              <a href="https://x.com/FandyFrOfficial" target="_blank">
                <FaXTwitter />
              </a>
              <a href="https://github.com/Fandyfr" target="_blank">
                <AiFillGithub />
              </a>
              <a href="https://instagram.com/fndy.fr" target="_blank">
                <AiFillInstagram />
              </a>
              <a href="https://www.reddit.com/user/FandyFafa/" target="_blank">
                <AiFillRedditCircle />
              </a>
            </div>
            <div className="mx-auto bg-gradient-to-b from-red-500 rounded-full w-60 h-60 relative overflow-hidden mt-10 md:h-80 md:w-80 lg:h-96 lg:w-96">
              <Image src={headicon} layout="fill" objectFit="cover" />
            </div>
          </div>
        </section>
        <section>
          <div>
            <h3 className="text-2xl py-1 dark:text-white md:text-3xl">
              ⛩️ Tentang saya 🦊
            </h3>
            <p className="text-md py-2 leading-8 text-gray-800 dark:text-gray-200 md:text-lg lg:text-xl">
              Sejak awal perjalanan saya sebagai desainer dan pengembang, saya
              telah melakukan pembuatan apiklasi C++, dan
              <span className="text-orange-500"> Web, </span>Saya Ingin{" "}
              <span className="text-orange-500">belajar </span>
              untuk semakin maju mengembangkan website, dan apiklasi, dan
              semakin bertambah maju inovasi untuk yang ada di dunia internet
              sekarang.
            </p>
            <p className="text-md py-2 leading-8 text-gray-800 dark:text-gray-200 md:text-lg lg:text-xl">
              Saya dalam tahap Belajar Rekayasa Perangkat Lunak di SMK TI Bali
              Global Denpasar
            </p>
          </div>
          <div className="lg:flex gap-10">
            <div className="text-center shadow-lg p-5 rounded-xl my-10 dark:bg-white flex-1 md:p-10">
              <Image src={desain} width={100} height={100} />
              <h3 className="text-lg font-medium pt-8 pb-2">Alat Desain</h3>
              <p className="py-2">
                Ini adalah beberapa alat untuk mendesain sebuah Website atau
                App.
              </p>
              <h4 className="py-4 text-orange-600">Alat Desain App or Web</h4>
              <p className="text-gray-800 py-1">Adobe XD</p>
              <p className="text-gray-800 py-1">Adobe Illustrator</p>
            </div>
            <div className="text-center shadow-lg p-5 rounded-xl my-10 dark:bg-white flex-1 md:p-10">
              <Image src={code} width={100} height={100} />
              <h3 className="text-lg font-medium pt-8 pb-2">
                Bahasa Pemograman
              </h3>
              <p className="py-2">
                Ini adalah beberapa bahasa pemograman yang saya pelajari.
              </p>
              <h4 className="py-4 text-orange-600">Bahasa Pemograman</h4>
              <p className="text-gray-800 py-1">NextJS</p>
              <p className="text-gray-800 py-1">JavaScript</p>
              <p className="text-gray-800 py-1">PHP</p>
              <p className="text-gray-800 py-1">C++</p>
            </div>
            <div className="text-center shadow-lg p-5 rounded-xl my-10 dark:bg-white flex-1 md:p-10">
              <Image src={dev} width={140} height={140} />
              <h3 className="text-lg font-medium pt-8 pb-2">APP Code</h3>
              <p className="py-2">
                Beberapa apiklasi yang saya pake untuk Coding
              </p>
              <h4 className="py-4 text-orange-600">App Coding</h4>
              <p className="text-gray-800 py-1">Visual Studio Code</p>
              <p className="text-gray-800 py-1">Visual Studio</p>
              <p className="text-gray-800 py-1">Android Studio</p>
              <p className="text-gray-800 py-1">Dev C++</p>
            </div>
          </div>
        </section>
        <section className="py-10">
          <div>
            <h3 className="text-2xl py-1 dark:text-white md:text-3xl">
              🔥 My Project 🔥
            </h3>
            <p className="text-md py-2 leading-8 text-gray-800 dark:text-gray-200 md:text-lg lg:text-xl">
              Ini adalah beberapa project saya, Mempakai apiklasi
              <span className="text-orange-500"> Visual Studio Code, </span>
              dan Mempakai bahasa pemograman{" "}
              <span className="text-orange-500">React,PHP,JavaScript, dan NextJS </span>
              Untuk menciptakan produk digital untuk keperluan bisnis dan
              konsumen.
            </p>
            <p className="text-md py-2 leading-8 text-gray-800 dark:text-gray-200 md:text-lg lg:text-xl">
              .
            </p>
          </div>
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-10 py-10">
            {/* <p className="text-md py-2 leading-8 text-gray-800 dark:text-gray-200 text-center">
              Project jelek ga ditampilkan, hanya project bagus akan ditampilkan
              disini :D
            </p> */}
            <div className="relative rounded-lg overflow-hidden shadow-lg group">
              <Image
                className="object-cover transition-all duration-300"
                width={1920}
                height={1080}
                quality={100}
                layout="responsive"
                src={project}
                alt="Project Image"
              />

              {/* Dark overlay and text on hover */}
              <div className="absolute inset-0 bg-black bg-opacity-50 backdrop-blur-sm opacity-0 group-hover:opacity-100 transition-all duration-300 flex flex-col justify-center items-center">
                <h2 className="text-[#7695FF] text-2xl font-bold mb-2 text-sm md:text-xl">Kawaii Stream</h2>
                <p className="text-white text-md md:text-sm mb-2 px-4 text-center">
                  Tonton anime terbaru dan baca manga favorit Anda secara gratis. Nikmati streaming berkualitas tinggi dan perpustakaan manga yang terus bertambah!
                </p>
                <Link href="#" target="_blank">
                  <button className="bg-white text-black font-semibold py-2 px-4 rounded-lg shadow-lg hover:bg-gray-200 transition duration-300 z-30">
                    Go to Web
                  </button>
                </Link>
              </div>

              {/* Shadow on hover */}
              <div className="absolute inset-0 shadow-lg group-hover:shadow-2xl transition-shadow duration-300"></div>
            </div>
            {/* 
            <div className="basis-1/3 flex-1">
              <Image
                className="rounded-lg object-cover"
                width={"100%"}
                height={"100%"}
                layout="responsive"
                src={web2}
              />
            </div>
            <div className="basis-1/3 flex-1">
              <Image
                className="rounded-lg object-cover"
                width={"100%"}
                height={"100%"}
                layout="responsive"
                src={web3}
              />
            </div>
            <div className="basis-1/3 flex-1">
              <Image
                className="rounded-lg object-cover"
                width={"100%"}
                height={"100%"}
                layout="responsive"
                src={web4}
              />
            </div>
            <div className="basis-1/3 flex-1">
              <Image
                className="rounded-lg object-cover"
                width={"100%"}
                height={"100%"}
                layout="responsive"
                src={web5}
              />
            </div>
            <div className="basis-1/3 flex-1">
              <Image
                className="rounded-lg object-cover"
                width={"100%"}
                height={"100%"}
                layout="responsive"
                src={web6}
              />
            </div> */}
          </div>
        </section>
      </main>
    </div>
  );
}
