"use client";

import React, { useState, useTransition } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Textarea } from '@/components/ui/textarea';
import { Wand2, Lightbulb, Loader2 } from 'lucide-react';
import { enhanceProjectDescription } from '@/ai/flows/ai-content-enhancement';
import { getPortfolioSuggestions } from '@/ai/flows/portfolio-customization-suggestions';
import { Alert, AlertDescription, AlertTitle } from '@/components/ui/alert';

export function AITools() {
  const [isPending, startTransition] = useTransition();
  const [enhancedDesc, setEnhancedDesc] = useState('');
  const [suggestions, setSuggestions] = useState<string[]>([]);
  const [descriptionInput, setDescriptionInput] = useState('A full-featured e-commerce site with product catalogs, shopping cart, and a secure checkout process, built with Next.js and Stripe.');
  
  const [portfolioState, setPortfolioState] = useState({
    userDescription: "I'm a passionate developer with a knack for building beautiful and functional web applications. With a background in computer science and a love for creative problem-solving, I thrive on turning complex ideas into elegant, user-friendly realities.",
    projects: "E-commerce Platform, Task Management App, AI Data Visualizer",
    skills: "React, Next.js, TypeScript, Node.js, Python",
    stylePreferences: "Clean, modern, and professional with a single-page layout.",
  });
  
  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setPortfolioState(prevState => ({ ...prevState, [name]: value }));
  };

  const handleEnhanceDescription = () => {
    startTransition(async () => {
      setEnhancedDesc('');
      try {
        const result = await enhanceProjectDescription({ description: descriptionInput });
        if (result) {
          setEnhancedDesc(result.enhancedDescription);
        }
      } catch (error) {
        console.error("Failed to enhance description:", error);
      }
    });
  };

  const handleGetSuggestions = () => {
    startTransition(async () => {
      setSuggestions([]);
      try {
        const result = await getPortfolioSuggestions({
          ...portfolioState,
          projects: portfolioState.projects.split(',').map(s => s.trim()),
          skills: portfolioState.skills.split(',').map(s => s.trim()),
        });
        if (result) {
          setSuggestions(result.suggestions);
        }
      } catch (error) {
        console.error("Failed to get suggestions:", error);
      }
    });
  };

  return (
    <section id="ai-tools" className="container py-20 sm:py-32">
      <div className="mx-auto max-w-4xl text-center">
        <h2 className="font-headline text-3xl font-bold sm:text-4xl">AI-Powered Portfolio Assistant</h2>
        <p className="mt-4 text-lg text-foreground/80">
          Use generative AI to refine your content and get personalized suggestions to make your portfolio shine.
        </p>
      </div>

      <Tabs defaultValue="enhance" className="mt-12">
        <TabsList className="grid w-full grid-cols-2">
          <TabsTrigger value="enhance"><Wand2 className="mr-2 h-4 w-4" />Enhance Content</TabsTrigger>
          <TabsTrigger value="suggestions"><Lightbulb className="mr-2 h-4 w-4" />Get Suggestions</TabsTrigger>
        </TabsList>
        <TabsContent value="enhance" className="mt-6">
          <Card className="bg-card/50">
            <CardHeader>
              <CardTitle className="font-headline">Enhance a Project Description</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="space-y-2">
                <Label htmlFor="description">Original Description</Label>
                <Textarea
                  id="description"
                  placeholder="Enter your project description here..."
                  value={descriptionInput}
                  onChange={(e) => setDescriptionInput(e.target.value)}
                  rows={4}
                />
              </div>
              <Button onClick={handleEnhanceDescription} disabled={isPending}>
                {isPending && !enhancedDesc ? <Loader2 className="mr-2 h-4 w-4 animate-spin" /> : <Wand2 className="mr-2 h-4 w-4" />}
                Enhance with AI
              </Button>
              {isPending && !enhancedDesc && <p className="text-sm text-muted-foreground">AI is thinking...</p>}
              {enhancedDesc && (
                <Alert className="mt-4 bg-accent/80">
                  <Wand2 className="h-4 w-4" />
                  <AlertTitle className="font-headline">AI-Enhanced Description</AlertTitle>
                  <AlertDescription>
                    <p className="whitespace-pre-wrap">{enhancedDesc}</p>
                  </AlertDescription>
                </Alert>
              )}
            </CardContent>
          </Card>
        </TabsContent>
        <TabsContent value="suggestions" className="mt-6">
          <Card className="bg-card/50">
            <CardHeader>
              <CardTitle className="font-headline">Get Portfolio Suggestions</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
                <div className="space-y-2">
                  <Label htmlFor="userDescription">Your Bio</Label>
                  <Textarea id="userDescription" name="userDescription" value={portfolioState.userDescription} onChange={handleInputChange} rows={5} />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="stylePreferences">Style Preferences</Label>
                  <Textarea id="stylePreferences" name="stylePreferences" value={portfolioState.stylePreferences} onChange={handleInputChange} rows={5} />
                </div>
                <div className="space-y-2 md:col-span-2">
                  <Label htmlFor="projects">Projects (comma-separated)</Label>
                  <Input id="projects" name="projects" value={portfolioState.projects} onChange={handleInputChange} />
                </div>
                <div className="space-y-2 md:col-span-2">
                  <Label htmlFor="skills">Skills (comma-separated)</Label>
                  <Input id="skills" name="skills" value={portfolioState.skills} onChange={handleInputChange} />
                </div>
              </div>
              <Button onClick={handleGetSuggestions} disabled={isPending}>
                {isPending && suggestions.length === 0 ? <Loader2 className="mr-2 h-4 w-4 animate-spin" /> : <Lightbulb className="mr-2 h-4 w-4" />}
                Get Suggestions
              </Button>
              {isPending && suggestions.length === 0 && <p className="text-sm text-muted-foreground">AI is brainstorming...</p>}
              {suggestions.length > 0 && (
                <Alert className="mt-4 bg-accent/80">
                  <Lightbulb className="h-4 w-4" />
                  <AlertTitle className="font-headline">AI Suggestions</AlertTitle>
                  <AlertDescription>
                    <ul className="list-disc space-y-2 pl-5">
                      {suggestions.map((suggestion, index) => (
                        <li key={index}>{suggestion}</li>
                      ))}
                    </ul>
                  </AlertDescription>
                </Alert>
              )}
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </section>
  );
}
