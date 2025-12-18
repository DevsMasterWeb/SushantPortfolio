"use client";

import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { GraduationCap } from 'lucide-react';

const education = {
  degree: 'Bachelor of Science (Hons) Computer System Engineering IT',
  institution: 'ISMT College',
  duration: '2024-2027',
  details: [
    'Currently pursuing a degree with a focus on IT systems, Software Development, Networking, Planning computing projects, Business process support, Professional Practice',
    'Relevant coursework: Network Security, Web Development, Database Management, Project Management, SDLC, Digital Forensic, Professional Practice',
  ],
};

export function Education() {
  return (
    <section id="education" className="w-full bg-accent/50 py-20 sm:py-32 animate-fade-in-up" style={{ animationDelay: '0.2s', animationFillMode: 'forwards' }}>
      <div className="container">
        <div className="mx-auto max-w-4xl text-center">
          <h2 className="font-headline text-3xl font-bold sm:text-4xl">
            <GraduationCap className="mb-2 inline-block h-10 w-10 text-primary" />
            <br />
            Education
          </h2>
        </div>
        <div className="mx-auto mt-12 max-w-3xl">
          <Card className="overflow-hidden">
            <CardHeader>
              <CardTitle className="font-headline text-xl">{education.degree}</CardTitle>
              <p className="font-medium text-primary">{education.institution} | {education.duration}</p>
            </CardHeader>
            <CardContent>
              <ul className="list-disc space-y-2 pl-5 text-foreground/80">
                {education.details.map((detail, index) => (
                  <li key={index}>{detail}</li>
                ))}
              </ul>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
}
