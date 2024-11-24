
// this file is generated — do not edit it


/// <reference types="@sveltejs/kit" />

/**
 * Environment variables [loaded by Vite](https://vitejs.dev/guide/env-and-mode.html#env-files) from `.env` files and `process.env`. Like [`$env/dynamic/private`](https://svelte.dev/docs/kit/$env-dynamic-private), this module cannot be imported into client-side code. This module only includes variables that _do not_ begin with [`config.kit.env.publicPrefix`](https://svelte.dev/docs/kit/configuration#env) _and do_ start with [`config.kit.env.privatePrefix`](https://svelte.dev/docs/kit/configuration#env) (if configured).
 * 
 * _Unlike_ [`$env/dynamic/private`](https://svelte.dev/docs/kit/$env-dynamic-private), the values exported from this module are statically injected into your bundle at build time, enabling optimisations like dead code elimination.
 * 
 * ```ts
 * import { API_KEY } from '$env/static/private';
 * ```
 * 
 * Note that all environment variables referenced in your code should be declared (for example in an `.env` file), even if they don't have a value until the app is deployed:
 * 
 * ```
 * MY_FEATURE_FLAG=""
 * ```
 * 
 * You can override `.env` values from the command line like so:
 * 
 * ```bash
 * MY_FEATURE_FLAG="enabled" npm run dev
 * ```
 */
declare module '$env/static/private' {
	export const SHELL: string;
	export const XDG_GREETER_DATA_DIR: string;
	export const GDMSESSION: string;
	export const LOGNAME: string;
	export const PATH: string;
	export const VSCODE_ESM_ENTRYPOINT: string;
	export const I3SOCK: string;
	export const VSCODE_CRASH_REPORTER_PROCESS_TYPE: string;
	export const DBUS_SESSION_BUS_ADDRESS: string;
	export const XAUTHORITY: string;
	export const ORIGINAL_XDG_CURRENT_DESKTOP: string;
	export const XDG_RUNTIME_DIR: string;
	export const MOTD_SHOWN: string;
	export const LC_TIME: string;
	export const USER: string;
	export const XDG_SESSION_TYPE: string;
	export const LANG: string;
	export const TERM: string;
	export const NO_AT_BRIDGE: string;
	export const NVIM: string;
	export const EDITOR: string;
	export const XDG_SEAT_PATH: string;
	export const HOME: string;
	export const LC_MONETARY: string;
	export const XDG_CURRENT_DESKTOP: string;
	export const MYVIMRC: string;
	export const COLORTERM: string;
	export const NVIM_LOG_FILE: string;
	export const XDG_VTNR: string;
	export const DEBUGINFOD_URLS: string;
	export const LC_TELEPHONE: string;
	export const DESKTOP_SESSION: string;
	export const SHLVL: string;
	export const LC_IDENTIFICATION: string;
	export const DISPLAY: string;
	export const VIMRUNTIME: string;
	export const VSCODE_CLI: string;
	export const XDG_SESSION_ID: string;
	export const VSCODE_IPC_HOOK: string;
	export const XDG_SESSION_CLASS: string;
	export const GTK3_MODULES: string;
	export const BROWSER: string;
	export const ELECTRON_NO_ATTACH_CONSOLE: string;
	export const LC_NUMERIC: string;
	export const VSCODE_HANDLES_UNCAUGHT_ERRORS: string;
	export const LC_PAPER: string;
	export const XDG_SESSION_DESKTOP: string;
	export const CHROME_DESKTOP: string;
	export const LC_NAME: string;
	export const GDK_BACKEND: string;
	export const VSCODE_PID: string;
	export const LC_MEASUREMENT: string;
	export const PWD: string;
	export const MAIL: string;
	export const WINDOWID: string;
	export const LC_ADDRESS: string;
	export const XDG_SESSION_PATH: string;
	export const VTE_VERSION: string;
	export const XDG_SEAT: string;
	export const VSCODE_NLS_CONFIG: string;
	export const VSCODE_CWD: string;
	export const GTK_MODULES: string;
	export const VSCODE_CODE_CACHE_PATH: string;
	export const ELECTRON_RUN_AS_NODE: string;
	export const NODE_ENV: string;
}

/**
 * Similar to [`$env/static/private`](https://svelte.dev/docs/kit/$env-static-private), except that it only includes environment variables that begin with [`config.kit.env.publicPrefix`](https://svelte.dev/docs/kit/configuration#env) (which defaults to `PUBLIC_`), and can therefore safely be exposed to client-side code.
 * 
 * Values are replaced statically at build time.
 * 
 * ```ts
 * import { PUBLIC_BASE_URL } from '$env/static/public';
 * ```
 */
declare module '$env/static/public' {
	
}

/**
 * This module provides access to runtime environment variables, as defined by the platform you're running on. For example if you're using [`adapter-node`](https://github.com/sveltejs/kit/tree/main/packages/adapter-node) (or running [`vite preview`](https://svelte.dev/docs/kit/cli)), this is equivalent to `process.env`. This module only includes variables that _do not_ begin with [`config.kit.env.publicPrefix`](https://svelte.dev/docs/kit/configuration#env) _and do_ start with [`config.kit.env.privatePrefix`](https://svelte.dev/docs/kit/configuration#env) (if configured).
 * 
 * This module cannot be imported into client-side code.
 * 
 * Dynamic environment variables cannot be used during prerendering.
 * 
 * ```ts
 * import { env } from '$env/dynamic/private';
 * console.log(env.DEPLOYMENT_SPECIFIC_VARIABLE);
 * ```
 * 
 * > In `dev`, `$env/dynamic` always includes environment variables from `.env`. In `prod`, this behavior will depend on your adapter.
 */
declare module '$env/dynamic/private' {
	export const env: {
		SHELL: string;
		XDG_GREETER_DATA_DIR: string;
		GDMSESSION: string;
		LOGNAME: string;
		PATH: string;
		VSCODE_ESM_ENTRYPOINT: string;
		I3SOCK: string;
		VSCODE_CRASH_REPORTER_PROCESS_TYPE: string;
		DBUS_SESSION_BUS_ADDRESS: string;
		XAUTHORITY: string;
		ORIGINAL_XDG_CURRENT_DESKTOP: string;
		XDG_RUNTIME_DIR: string;
		MOTD_SHOWN: string;
		LC_TIME: string;
		USER: string;
		XDG_SESSION_TYPE: string;
		LANG: string;
		TERM: string;
		NO_AT_BRIDGE: string;
		NVIM: string;
		EDITOR: string;
		XDG_SEAT_PATH: string;
		HOME: string;
		LC_MONETARY: string;
		XDG_CURRENT_DESKTOP: string;
		MYVIMRC: string;
		COLORTERM: string;
		NVIM_LOG_FILE: string;
		XDG_VTNR: string;
		DEBUGINFOD_URLS: string;
		LC_TELEPHONE: string;
		DESKTOP_SESSION: string;
		SHLVL: string;
		LC_IDENTIFICATION: string;
		DISPLAY: string;
		VIMRUNTIME: string;
		VSCODE_CLI: string;
		XDG_SESSION_ID: string;
		VSCODE_IPC_HOOK: string;
		XDG_SESSION_CLASS: string;
		GTK3_MODULES: string;
		BROWSER: string;
		ELECTRON_NO_ATTACH_CONSOLE: string;
		LC_NUMERIC: string;
		VSCODE_HANDLES_UNCAUGHT_ERRORS: string;
		LC_PAPER: string;
		XDG_SESSION_DESKTOP: string;
		CHROME_DESKTOP: string;
		LC_NAME: string;
		GDK_BACKEND: string;
		VSCODE_PID: string;
		LC_MEASUREMENT: string;
		PWD: string;
		MAIL: string;
		WINDOWID: string;
		LC_ADDRESS: string;
		XDG_SESSION_PATH: string;
		VTE_VERSION: string;
		XDG_SEAT: string;
		VSCODE_NLS_CONFIG: string;
		VSCODE_CWD: string;
		GTK_MODULES: string;
		VSCODE_CODE_CACHE_PATH: string;
		ELECTRON_RUN_AS_NODE: string;
		NODE_ENV: string;
		[key: `PUBLIC_${string}`]: undefined;
		[key: `${string}`]: string | undefined;
	}
}

/**
 * Similar to [`$env/dynamic/private`](https://svelte.dev/docs/kit/$env-dynamic-private), but only includes variables that begin with [`config.kit.env.publicPrefix`](https://svelte.dev/docs/kit/configuration#env) (which defaults to `PUBLIC_`), and can therefore safely be exposed to client-side code.
 * 
 * Note that public dynamic environment variables must all be sent from the server to the client, causing larger network requests — when possible, use `$env/static/public` instead.
 * 
 * Dynamic environment variables cannot be used during prerendering.
 * 
 * ```ts
 * import { env } from '$env/dynamic/public';
 * console.log(env.PUBLIC_DEPLOYMENT_SPECIFIC_VARIABLE);
 * ```
 */
declare module '$env/dynamic/public' {
	export const env: {
		[key: `PUBLIC_${string}`]: string | undefined;
	}
}
