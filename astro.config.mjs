// @ts-check
import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';

export default defineConfig({
    site: 'https://trifonov.me/',
	integrations: [
		starlight({
			title: 'SmartHome',
			defaultLocale: 'ru',
			locales: {
				en: { label: 'English', lang: 'en' },
				ru: { label: 'Русский', lang: 'ru' },
				es: { label: 'Español', lang: 'es' },
				fr: { label: 'Français', lang: 'fr' },
			},
			sidebar: [
				{
					label: 'Документация',
					autogenerate: { directory: '' },
				},
			],
		}),
	],
});
