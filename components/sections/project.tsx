import Image from 'next/image';
import Link from 'next/link';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { PlaceHolderImages } from '@/lib/placeholder-images';
import { MessageSquareQuote } from 'lucide-react';

const projects = [
  {
    id: 'project-1',
    title: 'NextGen IT Solutions – AI Application Research',
    description: 'Conducted a feasibility study and project management plan for a website development project. Applied Agile and Waterfall SDLC models to analyze risks, milestones, and deliverables. Created a detailed Work Breakdown Structure (WBS), Budget Costing and project timeline for efficient execution. Role: IT Project Manager.',
    tags: ['Project Management', 'Agile', 'Waterfall', 'Risk Analysis', 'WBS'],
    demoUrl: '#contact',
  },
  {
    id: 'project-2',
    title: 'Boundless Photography Website',
    description: 'Designed and developed a multi-page photography business website using HTML, CSS, JavaScript, PHP, and MySQL. Followed the SDLC phases (Requirement Gathering → Design → Development → Testing → Deployment) to ensure quality and functionality. Implemented responsive design and client-staff role-based features. Role: Developer / IT Project Coordinator.',
    tags: ['HTML', 'CSS', 'JavaScript', 'PHP', 'MySQL', 'SDLC'],
    demoUrl: '#contact',
  },
];

export function Projects() {
  return (
    <section id="projects" className="w-full bg-accent/50 py-20 sm:py-32 animate-fade-in-up" style={{ animationDelay: '0.2s', animationFillMode: 'forwards' }}>
      <div className="container">
        <h2 className="mb-12 text-center font-headline text-3xl font-bold sm:text-4xl">
          Projects
        </h2>
        <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
          {projects.map((project) => {
            const projectImage = PlaceHolderImages.find((p) => p.id === project.id);
            return (
              <Card key={project.id} className="group flex flex-col overflow-hidden transition-all duration-300 hover:shadow-xl hover:-translate-y-2">
                {projectImage && (
                  <div className="overflow-hidden">
                    <Image
                      src={projectImage.imageUrl}
                      alt={projectImage.description}
                      data-ai-hint={projectImage.imageHint}
                      width={600}
                      height={400}
                      className="w-full object-cover transition-transform duration-300 group-hover:scale-105"
                    />
                  </div>
                )}
                <div className="flex flex-1 flex-col justify-between bg-card p-6">
                  <div>
                    <CardTitle className="font-headline text-xl mb-2">{project.title}</CardTitle>
                    <p className="mb-4 text-foreground/80">{project.description}</p>
                    <div className="flex flex-wrap gap-2">
                      {project.tags.map((tag) => (
                        <Badge key={tag} variant="secondary">
                          {tag}
                        </Badge>
                      ))}
                    </div>
                  </div>
                  <div className="mt-6 flex items-center gap-4">
                    <Button variant="outline" asChild>
                      <Link href={project.demoUrl}>
                        <MessageSquareQuote className="mr-2 h-4 w-4" />
                        Ask for Demo Project
                      </Link>
                    </Button>
                  </div>
                </div>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
}
