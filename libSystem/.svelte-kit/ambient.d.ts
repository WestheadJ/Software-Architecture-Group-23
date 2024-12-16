
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
	export const TMUX_PANE: string;
	export const LC_MEASUREMENT: string;
	export const EDITOR: string;
	export const XAUTHORITY: string;
	export const SHELL: string;
	export const MAIL: string;
	export const VTE_VERSION: string;
	export const NVIM: string;
	export const HOME: string;
	export const XDG_VTNR: string;
	export const I3SOCK: string;
	export const XDG_SEAT: string;
	export const HG: string;
	export const TMUX: string;
	export const XDG_GREETER_DATA_DIR: string;
	export const NVIM_LOG_FILE: string;
	export const TERM_PROGRAM: string;
	export const GDMSESSION: string;
	export const XDG_SESSION_TYPE: string;
	export const XDG_SESSION_PATH: string;
	export const XDG_SESSION_DESKTOP: string;
	export const GTK_MODULES: string;
	export const XDG_SESSION_CLASS: string;
	export const PWD: string;
	export const DESKTOP_SESSION: string;
	export const LC_MONETARY: string;
	export const SHLVL: string;
	export const TERM_PROGRAM_VERSION: string;
	export const MASON: string;
	export const UBUNTU_MENUPROXY: string;
	export const USER: string;
	export const DEBUGINFOD_URLS: string;
	export const PATH: string;
	export const XDG_SEAT_PATH: string;
	export const LC_IDENTIFICATION: string;
	export const LaunchInstanceID: string;
	export const ANDROID_HOME: string;
	export const XDG_CURRENT_DESKTOP: string;
	export const GTK3_MODULES: string;
	export const ANDROID_SDK_ROOT: string;
	export const WINDOWID: string;
	export const LANG: string;
	export const XDG_RUNTIME_DIR: string;
	export const LC_NUMERIC: string;
	export const COLORTERM: string;
	export const LOGNAME: string;
	export const MOTD_SHOWN: string;
	export const TERM: string;
	export const LC_TIME: string;
	export const VIMRUNTIME: string;
	export const LC_NAME: string;
	export const LC_PAPER: string;
	export const DBUS_SESSION_BUS_ADDRESS: string;
	export const MYVIMRC: string;
	export const BROWSER: string;
	export const DISPLAY: string;
	export const XDG_SESSION_ID: string;
	export const LC_TELEPHONE: string;
	export const LC_ADDRESS: string;
	export const NODE_ENV: string;
	export const npm_command: string;
	export const npm_config_cache: string;
	export const npm_config_globalconfig: string;
	export const npm_config_global_prefix: string;
	export const npm_config_init_module: string;
	export const npm_config_local_prefix: string;
	export const npm_config_node_gyp: string;
	export const npm_config_noproxy: string;
	export const npm_config_npm_version: string;
	export const npm_config_prefix: string;
	export const npm_config_userconfig: string;
	export const npm_config_user_agent: string;
	export const npm_execpath: string;
	export const npm_lifecycle_event: string;
	export const npm_lifecycle_script: string;
	export const npm_node_execpath: string;
	export const npm_package_json: string;
	export const npm_package_name: string;
	export const npm_package_version: string;
	export const NUMBER_OF_PROCESSORS: string;
	export const OneDrive: string;
	export const ORIGINAL_XDG_CURRENT_DESKTOP: string;
	export const OS: string;
	export const Path: string;
	export const PATHEXT: string;
	export const PROCESSOR_ARCHITECTURE: string;
	export const PROCESSOR_IDENTIFIER: string;
	export const PROCESSOR_LEVEL: string;
	export const PROCESSOR_REVISION: string;
	export const ProgramData: string;
	export const ProgramFiles: string;
	export const ProgramW6432: string;
	export const PROMPT: string;
	export const PSModulePath: string;
	export const PUBLIC: string;
	export const SESSIONNAME: string;
	export const SystemDrive: string;
	export const SystemRoot: string;
	export const TEMP: string;
	export const TERM_PROGRAM: string;
	export const TERM_PROGRAM_VERSION: string;
	export const TMP: string;
	export const USERDOMAIN: string;
	export const USERDOMAIN_ROAMINGPROFILE: string;
	export const USERNAME: string;
	export const USERPROFILE: string;
	export const VSCODE_GIT_ASKPASS_EXTRA_ARGS: string;
	export const VSCODE_GIT_ASKPASS_MAIN: string;
	export const VSCODE_GIT_ASKPASS_NODE: string;
	export const VSCODE_GIT_IPC_HANDLE: string;
	export const VSCODE_INJECTION: string;
	export const windir: string;
	export const ZES_ENABLE_SYSMAN: string;
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
		TMUX_PANE: string;
		LC_MEASUREMENT: string;
		EDITOR: string;
		XAUTHORITY: string;
		SHELL: string;
		MAIL: string;
		VTE_VERSION: string;
		NVIM: string;
		HOME: string;
		XDG_VTNR: string;
		I3SOCK: string;
		XDG_SEAT: string;
		HG: string;
		TMUX: string;
		XDG_GREETER_DATA_DIR: string;
		NVIM_LOG_FILE: string;
		TERM_PROGRAM: string;
		GDMSESSION: string;
		XDG_SESSION_TYPE: string;
		XDG_SESSION_PATH: string;
		XDG_SESSION_DESKTOP: string;
		GTK_MODULES: string;
		XDG_SESSION_CLASS: string;
		PWD: string;
		DESKTOP_SESSION: string;
		LC_MONETARY: string;
		SHLVL: string;
		TERM_PROGRAM_VERSION: string;
		MASON: string;
		UBUNTU_MENUPROXY: string;
		USER: string;
		DEBUGINFOD_URLS: string;
		PATH: string;
		XDG_SEAT_PATH: string;
		LC_IDENTIFICATION: string;
		LaunchInstanceID: string;
		ANDROID_HOME: string;
		XDG_CURRENT_DESKTOP: string;
		GTK3_MODULES: string;
		ANDROID_SDK_ROOT: string;
		WINDOWID: string;
		LANG: string;
		XDG_RUNTIME_DIR: string;
		LC_NUMERIC: string;
		COLORTERM: string;
		LOGNAME: string;
		MOTD_SHOWN: string;
		TERM: string;
		LC_TIME: string;
		VIMRUNTIME: string;
		LC_NAME: string;
		LC_PAPER: string;
		DBUS_SESSION_BUS_ADDRESS: string;
		MYVIMRC: string;
		BROWSER: string;
		DISPLAY: string;
		XDG_SESSION_ID: string;
		LC_TELEPHONE: string;
		LC_ADDRESS: string;
		NODE_ENV: string;
		npm_command: string;
		npm_config_cache: string;
		npm_config_globalconfig: string;
		npm_config_global_prefix: string;
		npm_config_init_module: string;
		npm_config_local_prefix: string;
		npm_config_node_gyp: string;
		npm_config_noproxy: string;
		npm_config_npm_version: string;
		npm_config_prefix: string;
		npm_config_userconfig: string;
		npm_config_user_agent: string;
		npm_execpath: string;
		npm_lifecycle_event: string;
		npm_lifecycle_script: string;
		npm_node_execpath: string;
		npm_package_json: string;
		npm_package_name: string;
		npm_package_version: string;
		NUMBER_OF_PROCESSORS: string;
		OneDrive: string;
		ORIGINAL_XDG_CURRENT_DESKTOP: string;
		OS: string;
		Path: string;
		PATHEXT: string;
		PROCESSOR_ARCHITECTURE: string;
		PROCESSOR_IDENTIFIER: string;
		PROCESSOR_LEVEL: string;
		PROCESSOR_REVISION: string;
		ProgramData: string;
		ProgramFiles: string;
		ProgramW6432: string;
		PROMPT: string;
		PSModulePath: string;
		PUBLIC: string;
		SESSIONNAME: string;
		SystemDrive: string;
		SystemRoot: string;
		TEMP: string;
		TERM_PROGRAM: string;
		TERM_PROGRAM_VERSION: string;
		TMP: string;
		USERDOMAIN: string;
		USERDOMAIN_ROAMINGPROFILE: string;
		USERNAME: string;
		USERPROFILE: string;
		VSCODE_GIT_ASKPASS_EXTRA_ARGS: string;
		VSCODE_GIT_ASKPASS_MAIN: string;
		VSCODE_GIT_ASKPASS_NODE: string;
		VSCODE_GIT_IPC_HANDLE: string;
		VSCODE_INJECTION: string;
		windir: string;
		ZES_ENABLE_SYSMAN: string;
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
