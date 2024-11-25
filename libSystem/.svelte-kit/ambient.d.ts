
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
<<<<<<< HEAD
	export const MANPATH: string;
	export const TERM_PROGRAM: string;
	export const NODE: string;
	export const INIT_CWD: string;
	export const TERM: string;
	export const SHELL: string;
	export const npm_config_metrics_registry: string;
	export const HOMEBREW_REPOSITORY: string;
	export const TMPDIR: string;
	export const npm_config_global_prefix: string;
	export const TERM_PROGRAM_VERSION: string;
	export const ZDOTDIR: string;
	export const ORIGINAL_XDG_CURRENT_DESKTOP: string;
	export const MallocNanoZone: string;
	export const COLOR: string;
	export const npm_config_noproxy: string;
	export const npm_config_local_prefix: string;
	export const USER: string;
	export const COMMAND_MODE: string;
	export const npm_config_globalconfig: string;
	export const SSH_AUTH_SOCK: string;
	export const __CF_USER_TEXT_ENCODING: string;
	export const npm_execpath: string;
	export const PATH: string;
	export const npm_package_json: string;
	export const _: string;
	export const npm_config_userconfig: string;
	export const npm_config_init_module: string;
	export const USER_ZDOTDIR: string;
	export const __CFBundleIdentifier: string;
	export const npm_command: string;
	export const PWD: string;
	export const npm_lifecycle_event: string;
	export const EDITOR: string;
	export const npm_package_name: string;
	export const LANG: string;
	export const npm_config_npm_version: string;
	export const VSCODE_GIT_ASKPASS_EXTRA_ARGS: string;
	export const XPC_FLAGS: string;
	export const npm_config_node_gyp: string;
	export const npm_package_version: string;
	export const XPC_SERVICE_NAME: string;
	export const VSCODE_INJECTION: string;
	export const SHLVL: string;
	export const HOME: string;
	export const VSCODE_GIT_ASKPASS_MAIN: string;
	export const HOMEBREW_PREFIX: string;
	export const npm_config_cache: string;
	export const LOGNAME: string;
	export const npm_lifecycle_script: string;
	export const VSCODE_GIT_IPC_HANDLE: string;
	export const npm_config_user_agent: string;
	export const VSCODE_GIT_ASKPASS_NODE: string;
	export const GIT_ASKPASS: string;
	export const INFOPATH: string;
	export const HOMEBREW_CELLAR: string;
	export const SQLITE_EXEMPT_PATH_FROM_VNODE_GUARDS: string;
	export const npm_node_execpath: string;
	export const npm_config_prefix: string;
	export const COLORTERM: string;
=======
	export const DISPLAY: string;
	export const VTE_VERSION: string;
	export const MAIL: string;
	export const MOTD_SHOWN: string;
	export const XDG_SESSION_TYPE: string;
	export const HG: string;
	export const LC_MEASUREMENT: string;
	export const XDG_SESSION_DESKTOP: string;
	export const GTK_MODULES: string;
	export const PWD: string;
	export const DESKTOP_SESSION: string;
	export const LC_MONETARY: string;
	export const XDG_GREETER_DATA_DIR: string;
	export const GDMSESSION: string;
	export const XDG_SESSION_PATH: string;
	export const MASON: string;
	export const DEBUGINFOD_URLS: string;
	export const XDG_SEAT_PATH: string;
	export const ANDROID_HOME: string;
	export const VIMRUNTIME: string;
	export const GTK3_MODULES: string;
	export const BROWSER: string;
	export const WINDOWID: string;
	export const USER: string;
	export const XDG_RUNTIME_DIR: string;
	export const XDG_SEAT: string;
	export const TERM: string;
	export const LC_NUMERIC: string;
	export const LC_NAME: string;
	export const XDG_SESSION_ID: string;
	export const COLORTERM: string;
	export const UBUNTU_MENUPROXY: string;
	export const LC_TELEPHONE: string;
	export const LC_ADDRESS: string;
	export const ANDROID_SDK_ROOT: string;
	export const XAUTHORITY: string;
	export const EDITOR: string;
	export const LC_PAPER: string;
	export const DBUS_SESSION_BUS_ADDRESS: string;
	export const NVIM: string;
	export const SHELL: string;
	export const HOME: string;
	export const LOGNAME: string;
	export const SHLVL: string;
	export const XDG_CURRENT_DESKTOP: string;
	export const LANG: string;
	export const NVIM_LOG_FILE: string;
	export const PATH: string;
	export const MYVIMRC: string;
	export const LC_IDENTIFICATION: string;
	export const XDG_VTNR: string;
	export const I3SOCK: string;
	export const XDG_SESSION_CLASS: string;
	export const LC_TIME: string;
>>>>>>> master
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
<<<<<<< HEAD
		MANPATH: string;
		TERM_PROGRAM: string;
		NODE: string;
		INIT_CWD: string;
		TERM: string;
		SHELL: string;
		npm_config_metrics_registry: string;
		HOMEBREW_REPOSITORY: string;
		TMPDIR: string;
		npm_config_global_prefix: string;
		TERM_PROGRAM_VERSION: string;
		ZDOTDIR: string;
		ORIGINAL_XDG_CURRENT_DESKTOP: string;
		MallocNanoZone: string;
		COLOR: string;
		npm_config_noproxy: string;
		npm_config_local_prefix: string;
		USER: string;
		COMMAND_MODE: string;
		npm_config_globalconfig: string;
		SSH_AUTH_SOCK: string;
		__CF_USER_TEXT_ENCODING: string;
		npm_execpath: string;
		PATH: string;
		npm_package_json: string;
		_: string;
		npm_config_userconfig: string;
		npm_config_init_module: string;
		USER_ZDOTDIR: string;
		__CFBundleIdentifier: string;
		npm_command: string;
		PWD: string;
		npm_lifecycle_event: string;
		EDITOR: string;
		npm_package_name: string;
		LANG: string;
		npm_config_npm_version: string;
		VSCODE_GIT_ASKPASS_EXTRA_ARGS: string;
		XPC_FLAGS: string;
		npm_config_node_gyp: string;
		npm_package_version: string;
		XPC_SERVICE_NAME: string;
		VSCODE_INJECTION: string;
		SHLVL: string;
		HOME: string;
		VSCODE_GIT_ASKPASS_MAIN: string;
		HOMEBREW_PREFIX: string;
		npm_config_cache: string;
		LOGNAME: string;
		npm_lifecycle_script: string;
		VSCODE_GIT_IPC_HANDLE: string;
		npm_config_user_agent: string;
		VSCODE_GIT_ASKPASS_NODE: string;
		GIT_ASKPASS: string;
		INFOPATH: string;
		HOMEBREW_CELLAR: string;
		SQLITE_EXEMPT_PATH_FROM_VNODE_GUARDS: string;
		npm_node_execpath: string;
		npm_config_prefix: string;
		COLORTERM: string;
=======
		DISPLAY: string;
		VTE_VERSION: string;
		MAIL: string;
		MOTD_SHOWN: string;
		XDG_SESSION_TYPE: string;
		HG: string;
		LC_MEASUREMENT: string;
		XDG_SESSION_DESKTOP: string;
		GTK_MODULES: string;
		PWD: string;
		DESKTOP_SESSION: string;
		LC_MONETARY: string;
		XDG_GREETER_DATA_DIR: string;
		GDMSESSION: string;
		XDG_SESSION_PATH: string;
		MASON: string;
		DEBUGINFOD_URLS: string;
		XDG_SEAT_PATH: string;
		ANDROID_HOME: string;
		VIMRUNTIME: string;
		GTK3_MODULES: string;
		BROWSER: string;
		WINDOWID: string;
		USER: string;
		XDG_RUNTIME_DIR: string;
		XDG_SEAT: string;
		TERM: string;
		LC_NUMERIC: string;
		LC_NAME: string;
		XDG_SESSION_ID: string;
		COLORTERM: string;
		UBUNTU_MENUPROXY: string;
		LC_TELEPHONE: string;
		LC_ADDRESS: string;
		ANDROID_SDK_ROOT: string;
		XAUTHORITY: string;
		EDITOR: string;
		LC_PAPER: string;
		DBUS_SESSION_BUS_ADDRESS: string;
		NVIM: string;
		SHELL: string;
		HOME: string;
		LOGNAME: string;
		SHLVL: string;
		XDG_CURRENT_DESKTOP: string;
		LANG: string;
		NVIM_LOG_FILE: string;
		PATH: string;
		MYVIMRC: string;
		LC_IDENTIFICATION: string;
		XDG_VTNR: string;
		I3SOCK: string;
		XDG_SESSION_CLASS: string;
		LC_TIME: string;
>>>>>>> master
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
