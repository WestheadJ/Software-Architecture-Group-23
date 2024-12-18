export { matchers } from './matchers.js';

export const nodes = [
	() => import('./nodes/0'),
	() => import('./nodes/1'),
	() => import('./nodes/2'),
	() => import('./nodes/3'),
	() => import('./nodes/4'),
	() => import('./nodes/5'),
	() => import('./nodes/6'),
	() => import('./nodes/7'),
	() => import('./nodes/8'),
	() => import('./nodes/9'),
	() => import('./nodes/10')
];

export const server_loads = [0];

export const dictionary = {
	"/": [2],
	"/login": [~3],
	"/profile": [4],
	"/register": [~5],
	"/search": [~6],
	"/search/authors": [~7],
	"/search/genres": [~8],
	"/search/media-type": [~9],
	"/search/search-item": [~10],
	"/profile": [~4],
	"/register": [~5]
};

export const hooks = {
	handleError: (({ error }) => { console.error(error) }),

	reroute: (() => { })
};

export { default as root } from '../root.js';