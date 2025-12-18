
import Image from "next/image";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center p-8 bg-white dark:bg-black text-gray-900 dark:text-white">
      <div className="flex flex-col items-center gap-6">
        <Image src="/profile.JPG" alt="Sushant Subedi" width={160} height={160} className="rounded-full" />
        <h1 className="text-4xl font-bold">Sushant Subedi</h1>
        <p className="text-lg text-center max-w-xl">Aspiring Business Analyst & IT Project Coordinator

          <br />
          I'm a creative thinker, a problem solver, and an avid learner, always exploring new trends and techniques in tech and business. When I’m not working with systems and project plans, you’ll find me exploring new technologies, organizing ideas through documentation, or learning how businesses turn data into better decisions. I also enjoy improving my communication skills and staying curious about how technology can solve real-world problems.
        </p>

        <div className="flex gap-3">
          <a className="px-4 py-2 rounded bg-gray-900 text-white" href="https://github.com/DevsMasterWeb" target="_blank" rel="noopener noreferrer">GitHub</a>
          <a className="px-4 py-2 rounded border" href="https://www.linkedin.com/in/sushant-subedi-444991323/" target="_blank" rel="noopener noreferrer">LinkedIn</a>
          <a className="px-4 py-2 rounded border" href="/resume.pdf" target="_blank" rel="noopener noreferrer">Resume</a>
        </div>
      </div>
    </main>
  );
}
