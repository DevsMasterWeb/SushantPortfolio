import Image from 'next/image';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Github, Linkedin } from 'lucide-react';
import { cn } from '@/lib/utils';

export function Hero() {
  return (
    <section id="about" className="container py-20 sm:py-32">
      <div className="grid grid-cols-1 items-center gap-12 lg:grid-cols-2">
        <div className="order-2 lg:order-1 animate-fade-in-up" style={{ animationFillMode: 'forwards' }}>
          <h1 className="font-headline text-4xl font-bold tracking-tight sm:text-5xl md:text-6xl">
            Sushant Subedi
          </h1>
          <p className="mt-4 text-lg font-medium text-primary">
            Aspiring Business Analyst & IT Project Coordinator
          </p>
          <p className="mt-6 max-w-prose text-base text-foreground/80">
            I'm a creative thinker, a problem solver, and an avid learner, always exploring new trends and techniques in tech and business. When I’m not working with systems and project plans, you’ll find me exploring new technologies, organizing ideas through documentation, or learning how businesses turn data into better decisions. I also enjoy improving my communication skills and staying curious about how technology can solve real-world problems.
          </p>
          <div className="mt-8 flex items-center gap-4">
            <Button size="lg" asChild>
              <Link href="#contact">Get in Touch</Link>
            </Button>
            <div className="flex items-center gap-4">
              <Link href="https://github.com/DevsMasterWeb" aria-label="GitHub" className="text-foreground/70 transition-colors hover:text-primary">
                <Github className="h-6 w-6" />
              </Link>
              <Link href="https://www.linkedin.com/in/sushant-subedi-444991323/" aria-label="LinkedIn" className="text-foreground/70 transition-colors hover:text-primary">
                <Linkedin className="h-6 w-6" />
              </Link>
            </div>
          </div>
        </div>
        <div className="order-1 flex justify-center lg:order-2 animate-fade-in-up" style={{ animationDelay: '0.2s', animationFillMode: 'forwards' }}>
          <div className="relative">
            <Image
              src="/profile.JPG"
              alt="Sushant Subedi"
              width={400}
              height={400}
              className="relative aspect-square rounded-full object-cover shadow-lg"
              priority
            />
            <div className="absolute inset-0 rounded-full ring-4 ring-primary/20 ring-offset-4 ring-offset-background"></div>
          </div>
        </div>
      </div>
    </section>
  );
}
