import { defineConfig } from "vite";
import { viteSingleFile } from "vite-plugin-singlefile";
import { VitePWA } from 'vite-plugin-pwa';

// Déterminer le base path pour GitHub Pages
// Si GITHUB_REPOSITORY est défini (dans GitHub Actions), utiliser le nom du repo
// Sinon, utiliser '/' pour le développement local
const getBasePath = () => {
	if (process.env.GITHUB_REPOSITORY) {
		const repoName = process.env.GITHUB_REPOSITORY.split('/')[1];
		// Si le repo se termine par .github.io, c'est un site utilisateur, base path = '/'
		if (repoName.endsWith('.github.io')) {
			return '/';
		}
		// Sinon, base path = '/nom-du-repo/'
		return `/${repoName}/`;
	}
	return '/';
};

const basePath = getBasePath();

export default defineConfig({
	plugins: [
		// Note: vite-plugin-singlefile est désactivé car incompatible avec PWA
		// Le service worker a besoin de fichiers séparés pour fonctionner correctement
		// Si vous avez besoin de singlefile, désactivez temporairement VitePWA
		// viteSingleFile(),
		VitePWA({
			registerType: 'autoUpdate',
			includeAssets: ['favicon.ico', 'icons/*.png'],
			manifest: {
				name: 'Préparation Oral SOG',
				short_name: 'SOGTraining',
				description: 'Outil de préparation à l\'oral SOG (Sous-officier de Gendarmerie)',
				theme_color: '#0d47a1',
				background_color: '#ffffff',
				display: 'standalone',
				orientation: 'portrait',
				scope: basePath,
				start_url: basePath,
				icons: [
					{
						src: 'icons/android-chrome-192x192.png',
						sizes: '192x192',
						type: 'image/png',
						purpose: 'any maskable'
					},
					{
						src: 'icons/android-chrome-512x512.png',
						sizes: '512x512',
						type: 'image/png',
						purpose: 'any maskable'
					},
					{
						src: 'icons/apple-touch-icon.png',
						sizes: '180x180',
						type: 'image/png'
					},
					{
						src: 'icons/favicon-32x32.png',
						sizes: '32x32',
						type: 'image/png'
					},
					{
						src: 'icons/favicon-16x16.png',
						sizes: '16x16',
						type: 'image/png'
					}
				]
			},
			workbox: {
				globPatterns: ['**/*.{js,css,html,ico,png,svg,woff,woff2}'],
				runtimeCaching: [
					{
						urlPattern: /^https:\/\/fonts\.googleapis\.com\/.*/i,
						handler: 'CacheFirst',
						options: {
							cacheName: 'google-fonts-cache',
							expiration: {
								maxEntries: 10,
								maxAgeSeconds: 60 * 60 * 24 * 365 // 1 an
							},
							cacheableResponse: {
								statuses: [0, 200]
							}
						}
					},
					{
						urlPattern: /^https:\/\/fonts\.gstatic\.com\/.*/i,
						handler: 'CacheFirst',
						options: {
							cacheName: 'gstatic-fonts-cache',
							expiration: {
								maxEntries: 10,
								maxAgeSeconds: 60 * 60 * 24 * 365 // 1 an
							},
							cacheableResponse: {
								statuses: [0, 200]
							}
						}
					}
				]
			},
			devOptions: {
				enabled: true,
				type: 'module'
			}
		})
	],
	base: basePath,
});

