"use client";

import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Briefcase, ListChecks, Database, Activity, Wrench } from 'lucide-react';

const skillCategories = [
  {
    title: 'Business Analysis',
    icon: <Briefcase className="h-8 w-8 text-primary" />,
    skills: ['Requirements Gathering', 'Process Modeling', 'Use Case Writing', 'Gap Analysis', 'Feasibility Studies'],
  },
  {
    title: 'IT Project Management',
    icon: <ListChecks className="h-8 w-8 text-primary" />,
    skills: ['Agile & Waterfall', 'Project Planning', 'Risk Management', 'Scope & Cost Control', 'SDLC', 'Prototyping'],
  },
  {
    title: 'Technical & Analytical',
    icon: <Database className="h-8 w-8 text-primary" />,
    skills: ['SQL & Databases', 'Data Analysis', 'System Design', 'SDLC'],
  },
  {
    title: 'Professional Skills',
    icon: <Activity className="h-8 w-8 text-primary" />,
    skills: ['Stakeholder Communication', 'Problem-Solving', 'Reporting', 'Team Collaboration', 'Documentation'],
  },
  {
    title: 'Tools',
    icon: <Wrench className="h-8 w-8 text-primary" />,
    skills: ['Jira', 'Trello', 'MS Word', 'MS Powerpoint', 'MS Excel', 'Notion'],
  },
];

export function Skills() {
  return (
    <section id="skills" className="container py-20 sm:py-32 animate-fade-in-up" style={{ animationDelay: '0.2s', animationFillMode: 'forwards' }}>
      <h2 className="mb-12 text-center font-headline text-3xl font-bold sm:text-4xl">
        My Professional Skillset
      </h2>
      <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {skillCategories.map((category, index) => (
          <Card key={category.title} className={`transform bg-card/50 transition-all duration-300 hover:scale-105 hover:shadow-xl ${index === 4 ? 'lg:col-start-2' : ''}`}>
            <CardHeader className="flex flex-row items-center gap-4 pb-4">
              {category.icon}
              <CardTitle className="font-headline text-2xl">{category.title}</CardTitle>
            </CardHeader>
            <CardContent>
              <ul className="flex flex-wrap gap-2">
                {category.skills.map((skill) => (
                  <li key={skill} className="rounded-full bg-accent px-3 py-1 text-sm font-medium text-accent-foreground">
                    {skill}
                  </li>
                ))}
              </ul>
            </CardContent>
          </Card>
        ))}
      </div>
    </section>
  );
}
