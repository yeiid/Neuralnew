import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';

const news = defineCollection({
	loader: glob({ pattern: "**/*.{md,mdx}", base: "./src/content/news" }),
	schema: z.object({
		title: z.string(),
		description: z.string(),
		pubDate: z.coerce.date(),
		updatedDate: z.coerce.date().optional(),
		heroImage: z.string().optional(),
		category: z.string(),
		author: z.string().default('NeuralNews Team'),
		tags: z.array(z.string()).default([]),
		readingTime: z.string().optional(),
	}),
});

export const collections = { news };
