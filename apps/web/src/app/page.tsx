export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center p-8">
      <div className="max-w-2xl text-center">
        <h1 className="mb-4 text-5xl font-bold tracking-tight">
          Full-Stack Starter
        </h1>
        <p className="mb-8 text-lg text-gray-600 dark:text-gray-400">
          A production-ready monorepo with Next.js 15, NestJS, Prisma, and
          PostgreSQL. Everything you need to build modern web applications.
        </p>

        <div className="flex flex-wrap items-center justify-center gap-4">
          <a
            href="http://localhost:3001/health"
            target="_blank"
            rel="noopener noreferrer"
            className="rounded-lg border border-gray-300 px-6 py-3 text-sm font-medium transition-colors hover:border-gray-400 hover:bg-gray-50 dark:border-gray-700 dark:hover:border-gray-600 dark:hover:bg-gray-900"
          >
            API Health Check
          </a>
          <a
            href="http://localhost:3001/api/docs"
            target="_blank"
            rel="noopener noreferrer"
            className="rounded-lg bg-black px-6 py-3 text-sm font-medium text-white transition-colors hover:bg-gray-800 dark:bg-white dark:text-black dark:hover:bg-gray-200"
          >
            API Documentation
          </a>
        </div>

        <div className="mt-16 grid gap-6 sm:grid-cols-3">
          <div className="rounded-lg border border-gray-200 p-6 dark:border-gray-800">
            <h3 className="mb-2 font-semibold">Next.js 15</h3>
            <p className="text-sm text-gray-600 dark:text-gray-400">
              App Router, React 19, TypeScript, and Tailwind CSS for the
              frontend.
            </p>
          </div>
          <div className="rounded-lg border border-gray-200 p-6 dark:border-gray-800">
            <h3 className="mb-2 font-semibold">NestJS API</h3>
            <p className="text-sm text-gray-600 dark:text-gray-400">
              Modular backend with Swagger docs, health checks, and Prisma
              integration.
            </p>
          </div>
          <div className="rounded-lg border border-gray-200 p-6 dark:border-gray-800">
            <h3 className="mb-2 font-semibold">PostgreSQL</h3>
            <p className="text-sm text-gray-600 dark:text-gray-400">
              Dockerized database with Prisma ORM for type-safe data access.
            </p>
          </div>
        </div>
      </div>
    </main>
  );
}
