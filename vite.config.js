import { defineConfig } from "vite";
import { viteSingleFile } from "vite-plugin-singlefile";

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

export default defineConfig({
	plugins: [viteSingleFile()],
	base: getBasePath(),
});

