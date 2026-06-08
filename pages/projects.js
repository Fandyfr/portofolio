import Head from "next/head";
import Link from "next/link";

export default function ProjectsPage() {
  return (
    <>
      <Head>
        <title>Projects | FandyFr</title>
        <meta name="description" content="Selected projects by FandyFr" />
      </Head>

      <main className="min-h-screen bg-white px-6 py-16 text-gray-900 dark:bg-gray-900 dark:text-white">
        <div className="mx-auto max-w-3xl space-y-6">
          <Link href="/" className="text-sm text-orange-500 hover:underline">
            Back to home
          </Link>
          <h1 className="text-4xl font-bold">Projects</h1>
          <p className="text-lg leading-relaxed text-gray-700 dark:text-gray-300">
            Featured work and experiments will be listed here.
          </p>
        </div>
      </main>
    </>
  );
}
