'use server';

/**
 * @fileOverview Enhances project descriptions using AI to make them more engaging and professional.
 *
 * - enhanceProjectDescription - A function that takes a project description and enhances it.
 * - EnhanceProjectDescriptionInput - The input type for the enhanceProjectDescription function.
 * - EnhanceProjectDescriptionOutput - The return type for the enhanceProjectDescription function.
 */

import {ai} from '@/ai/genkit';
import {z} from 'genkit';

const EnhanceProjectDescriptionInputSchema = z.object({
  description: z.string().describe('The original description of the project.'),
});
export type EnhanceProjectDescriptionInput = z.infer<typeof EnhanceProjectDescriptionInputSchema>;

const EnhanceProjectDescriptionOutputSchema = z.object({
  enhancedDescription: z.string().describe('The enhanced, more engaging description of the project.'),
});
export type EnhanceProjectDescriptionOutput = z.infer<typeof EnhanceProjectDescriptionOutputSchema>;

export async function enhanceProjectDescription(input: EnhanceProjectDescriptionInput): Promise<EnhanceProjectDescriptionOutput> {
  return enhanceProjectDescriptionFlow(input);
}

const prompt = ai.definePrompt({
  name: 'enhanceProjectDescriptionPrompt',
  input: {schema: EnhanceProjectDescriptionInputSchema},
  output: {schema: EnhanceProjectDescriptionOutputSchema},
  prompt: `You are an expert copywriter specializing in creating engaging and professional project descriptions for personal websites.

  Please enhance the following project description to make it more appealing to potential employers or clients. Focus on highlighting the key achievements, technologies used, and the overall impact of the project.

  Original Description: {{{description}}}

  Enhanced Description:`,config: {
    safetySettings: [
      {
        category: 'HARM_CATEGORY_DANGEROUS_CONTENT',
        threshold: 'BLOCK_ONLY_HIGH',
      },
      {
        category: 'HARM_CATEGORY_HARASSMENT',
        threshold: 'BLOCK_MEDIUM_AND_ABOVE',
      },
      {
        category: 'HARM_CATEGORY_SEXUALLY_EXPLICIT',
        threshold: 'BLOCK_LOW_AND_ABOVE',
      },
    ],
  },
});

const enhanceProjectDescriptionFlow = ai.defineFlow(
  {
    name: 'enhanceProjectDescriptionFlow',
    inputSchema: EnhanceProjectDescriptionInputSchema,
    outputSchema: EnhanceProjectDescriptionOutputSchema,
  },
  async input => {
    const {output} = await prompt(input);
    return output!;
  }
);
