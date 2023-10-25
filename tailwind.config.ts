import forms from '@tailwindcss/forms';
import daisyui from 'daisyui';
import type { Config } from 'tailwindcss';

/** @type {import('tailwindcss').Config}*/
const config = {
	content: ['./src/**/*.{html,js,svelte,ts}'],
	theme: {
		extend: {
			fontFamily: {
				Inter: ['Inter', 'Satoshi', 'Alpino', 'sans-serif'],
				Satoshi: ['Satoshi', 'Inter', 'Alpino', 'sans-seri'],
				Alpino: ['Alpino', 'Inter', 'Satoshi', 'sans-seri']
			}
		}
	},
	daisyui: {
		themes: [
			{
				dark: {
					primary: '#66CC8A',

					secondary: '#377CFB',

					accent: '#ff3e00',

					neutral: '#FFFFFF',

					'base-100': '#333C4D',

					info: '#3ABFF8',

					success: '#36D399',

					warning: '#FBBD23',

					error: '#F87272'
				},
				light: {
					primary: '#66CC8A',

					secondary: '#377CFB',

					accent: '#ff3e00',

					neutral: '#333C4D',

					'base-100': '#FFFFFF',

					info: '#3ABFF8',

					success: '#36D399',

					warning: '#FBBD23',

					error: '#F87272'
				}
			},
			'cupcake',
			'retro',
			'business',
			'corporate'
		]
	},
	plugins: [forms, daisyui]
} satisfies Config;

export default config;
