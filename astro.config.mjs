// @ts-check
import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';

export default defineConfig({
    site: 'https://trifonov.me/',
	integrations: [
		starlight({
			title: 'SmartHome',
			defaultLocale: 'en',
			locales: {
				en: { label: 'English' },
				ru: { label: 'Русский' },
				es: { label: 'Español' },
				fr: { label: 'Français' },
			},
			sidebar: [
				{
					label: 'Hardware',
					autogenerate: { directory: 'hardware' },
				},
			],
		}),
	],
});
