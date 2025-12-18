
import Image from "next/image";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center p-8 bg-white dark:bg-black text-gray-900 dark:text-white">
      <div className="prose text-center">
        <h1 className="text-4xl font-bold">Sushant — Software Developer</h1>
        <p className="text-lg opacity-80">Hi — I'm Sushant. I build web applications with Next.js and TypeScript.</p>
        <div className="mt-6 flex gap-4 justify-center">
          <a className="px-4 py-2 rounded bg-blue-600 text-white" href="https://github.com/DevsMasterWeb" target="_blank" rel="noopener noreferrer">GitHub</a>
          <a className="px-4 py-2 rounded border" href="#" target="_blank" rel="noopener noreferrer">LinkedIn</a>
          <a className="px-4 py-2 rounded border" href="mailto:you@example.com">Email</a>
        </div>
      </div>

      <div className="mt-12">
        <Image src="/profile-placeholder.png" alt="Profile" width={160} height={160} />
      </div>
    </main>
  );
}
