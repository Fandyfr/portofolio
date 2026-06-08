import Head from "next/head";
import Link from "next/link";

export default function SkillsPage() {
  return (
    <>
      <Head>
        <title>Skills | FandyFr</title>
        <meta name="description" content="Skills and tools used by FandyFr" />
      </Head>

      <main className="min-h-screen bg-white px-6 py-16 text-gray-900 dark:bg-gray-900 dark:text-white">
        <div className="mx-auto max-w-3xl space-y-6">
          <Link href="/" className="text-sm text-orange-500 hover:underline">
            Back to home
          </Link>
          <h1 className="text-4xl font-bold">Skills</h1>
          <ul className="grid gap-3 sm:grid-cols-2 text-lg text-gray-700 dark:text-gray-300">
            <li>Next.js</li>
            <li>JavaScript</li>
            <li>PHP</li>
            <li>C++</li>
            <li>Figma</li>
            <li>Git</li>
          </ul>
        </div>
      </main>
    </>
  );
}
