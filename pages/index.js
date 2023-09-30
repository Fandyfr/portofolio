import Head from "next/head";
import {
  AiFillGithub,
  AiFillInstagram,
  AiFillTwitterCircle,
} from "react-icons/ai";
import { BsFillMoonStarsFill } from "react-icons/bs";
import { useState } from "react";
import deved from "../public/dev-ed-wave.png";
import code from "../public/code.png";
import design from "../public/design.png";
import consulting from "../public/consulting.png";
import Image from "next/image";
import web1 from "../public/web1.png";
import web2 from "../public/web2.png";
import web3 from "../public/web3.png";
import web4 from "../public/web4.png";
import web5 from "../public/web5.png";
import web6 from "../public/web6.png";

export default function Home() {
  const [darkMode, setDarkMode] = useState(false);

  return (
    <div className={darkMode ? "dark" : ""}>
      <Head>
        <title>FandyFr | Portofolio Page</title>
        <meta name="description" content="Dibuat dengan Hati" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className=" bg-white px-10 dark:bg-gray-900 md:px-20 lg:px-40">
        <section className="min-h-screen">
          <nav className="py-10 mb-12 flex justify-between dark:text-white">
            <h1 className="font-burtons text-xl">FandyFr</h1>
            <ul className="flex items-center">
              <li>
                <BsFillMoonStarsFill
                  onClick={() => setDarkMode(!darkMode)}
                  className=" cursor-pointer text-2xl"
                />
              </li>
              <li>
                <a
                  className="bg-gradient-to-r from-cyan-500 text- to-teal-500 text-white px-4 py-2 border-none rounded-md ml-8"
                  href="https://github.com/Fandyfr"
                >
                  My GitHub
                </a>
              </li>
            </ul>
          </nav>
          <div className="text-center p-10 py-10">
            <h2 className="text-5xl py-2 text-teal-600 font-medium dark:text-teal-400 md:text-6xl">
              Fandy Fathurrohman
            </h2>
            <h3 className="text-2xl py-2 dark:text-white md:text-3xl">
              Developer and Designer.
            </h3>
            <p className="text-md py-5 leading-8 text-gray-800 dark:text-gray-200 max-w-xl mx-auto md:text-xl">
              Bersekolah di SMK TI BALI Global Denpasar, Jurusan RPL.
            </p>
            <div className="text-5xl flex justify-center gap-16 py-3 text-gray-600 dark:text-gray-400">
              <AiFillTwitterCircle />
              <AiFillGithub />
              <AiFillInstagram />
            </div>
            <div className="mx-auto bg-gradient-to-b from-teal-500 rounded-full w-80 h-80 relative overflow-hidden mt-20 md:h-96 md:w-96">
              <Image src={deved} layout="fill" objectFit="cover" />
            </div>
          </div>
        </section>
        <section>
          <div>
            <h3 className="text-3xl py-1 dark:text-white ">Tentang saya </h3>
            <p className="text-md py-2 leading-8 text-gray-800 dark:text-gray-200">
              Sejak awal perjalanan saya sebagai desainer dan
              pengembang, saya telah melakukan pembuatan apiklasi, dan
              <span className="text-teal-500"> Web, </span>
              Saya Ingin <span className="text-teal-500">belajar </span>
              untuk semakin maju mengembangkan website, dan apiklasi, dan
              semakin bertambah maju inovasi untuk yang ada di dunia internet sekarang.
            </p>
            <p className="text-md py-2 leading-8 text-gray-800 dark:text-gray-200">
              Saya dalam tahap Belajar Rekayasa Perangkat Lunak di SMK TI Bali global Denpasar
            </p>
          </div>
          <div className="lg:flex gap-10">
            <div className="text-center shadow-lg p-10 rounded-xl my-10  dark:bg-white flex-1">
              <Image src={design} width={100} height={100} />
              <h3 className="text-lg font-medium pt-8 pb-2  ">
                Alat Desain
              </h3>
              <p className="py-2">
                Ini adalah beberapa alat untuk mendesain sebuah website.
              </p>
              <h4 className="py-4 text-teal-600">Alat Desain</h4>
              <p className="text-gray-800 py-1">Bootstrap Studio</p>
              <p className="text-gray-800 py-1">Figma</p>
              <p className="text-gray-800 py-1">InVision Studio</p>
              <p className="text-gray-800 py-1">Sketch</p>
            </div>
            <div className="text-center shadow-lg p-10 rounded-xl my-10 dark:bg-white flex-1">
              <Image src={code} width={100} height={100} />
              <h3 className="text-lg font-medium pt-8 pb-2 ">
                Bahasa Pemograman
              </h3>
              <p className="py-2">
              Ini adalah beberapa bahasa pemogramnan yang saya pelajari.
              </p>
              <h4 className="py-4 text-teal-600">Bahasa Pemograman</h4>
              <p className="text-gray-800 py-1">HTML5</p>
              <p className="text-gray-800 py-1">ReactJS</p>
              <p className="text-gray-800 py-1">CSS3</p>
              <p className="text-gray-800 py-1">JavaScript</p>
              <p className="text-gray-800 py-1">NextJS</p>
            </div>
            <div className="text-center shadow-lg p-10 rounded-xl my-10 dark:bg-white flex-1">
              <Image src={consulting} width={100} height={100} />
              <h3 className="text-lg font-medium pt-8 pb-2 ">APP Code</h3>
              <p className="py-2">
                Beberapa apiklasi yang saya pake untuk
                Coding
              </p>
              <h4 className="py-4 text-teal-600">App Coding</h4>
              <p className="text-gray-800 py-1">Visual Studio Code</p>
              <p className="text-gray-800 py-1">Sublime Text</p>
              <p className="text-gray-800 py-1">Dev C++</p>
              <p className="text-gray-800 py-1">PyCharms</p>
            </div>
          </div>
        </section>
        <section className="py-10">
          <div>
            <h3 className="text-3xl py-1 dark:text-white ">Projek</h3>
            <p className="text-md py-2 leading-8 text-gray-800 dark:text-gray-200">
              Ini adalah beberapa project saya, Mempakai apiklasi
              <span className="text-teal-500"> Visual Studio Code, </span>
              dan Mempakai bahasa pemograman <span className="text-teal-500">HTML5,CSS3,ReactJS, </span>
              Untuk menciptakan produk digital untuk keperluan bisnis dan konsumen.
            </p>
            <p className="text-md py-2 leading-8 text-gray-800 dark:text-gray-200">
              .
            </p>
          </div>
          <div className="flex flex-col gap-10 py-10 lg:flex-row lg:flex-wrap">
            <div className="basis-1/3 flex-1 ">
              <Image
                className="rounded-lg object-cover"
                width={"100%"}
                height={"100%"}
                layout="responsive"
                src={web1}
              />
            </div>
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
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}
