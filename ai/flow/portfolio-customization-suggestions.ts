'use server';

/**
 * @fileOverview Provides AI-driven suggestions for portfolio customization based on best practices.
 *
 * - getPortfolioSuggestions - A function that generates portfolio improvement suggestions.
 * - PortfolioSuggestionsInput - The input type for the getPortfolioSuggestions function.
 * - PortfolioSuggestionsOutput - The return type for the getPortfolioSuggestions function.
 */

import {ai} from '@/ai/genkit';
import {z} from 'genkit';

const PortfolioSuggestionsInputSchema = z.object({
  userDescription: z.string().describe('A detailed description of the user, their skills, and career goals.'),
  projects: z.array(z.string()).describe('A list of project descriptions to be included in the portfolio.'),
  skills: z.array(z.string()).describe('A list of skills the user wants to showcase.'),
  stylePreferences: z.string().describe('The user specified style preferences.'),
});
export type PortfolioSuggestionsInput = z.infer<typeof PortfolioSuggestionsInputSchema>;

const PortfolioSuggestionsOutputSchema = z.object({
  suggestions: z
    .array(z.string())
    .describe('A list of suggestions to improve the portfolio presentation, organization, and content.'),
});
export type PortfolioSuggestionsOutput = z.infer<typeof PortfolioSuggestionsOutputSchema>;

export async function getPortfolioSuggestions(
  input: PortfolioSuggestionsInput
): Promise<PortfolioSuggestionsOutput> {
  return portfolioSuggestionsFlow(input);
}

const prompt = ai.definePrompt({
  name: 'portfolioSuggestionsPrompt',
  input: {schema: PortfolioSuggestionsInputSchema},
  output: {schema: PortfolioSuggestionsOutputSchema},
  prompt: `You are a portfolio design expert. Analyze the following information about a user's portfolio and provide specific, actionable suggestions to improve its presentation, organization, and content.

User Description: {{{userDescription}}}
Projects: {{#each projects}}{{{this}}}\n{{/each}}
Skills: {{#each skills}}{{{this}}}\n{{/each}}
Style Preferences: {{{stylePreferences}}}

Consider best practices for portfolio design, including visual appeal, user experience, and effective communication of skills and experience. Focus on how to organize and present the content to create a compelling and effective portfolio.

Suggestions (bullet points):`,
});

const portfolioSuggestionsFlow = ai.defineFlow(
  {
    name: 'portfolioSuggestionsFlow',
    inputSchema: PortfolioSuggestionsInputSchema,
    outputSchema: PortfolioSuggestionsOutputSchema,
  },
  async input => {
    const {output} = await prompt(input);
    return output!;
  }
);
