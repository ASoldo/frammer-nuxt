import { defineNuxtModule, addPlugin, createResolver } from "@nuxt/kit";
import { setupDevToolsUI } from "./devtools";

// Module options TypeScript interface definition
export interface ModuleOptions {
  /**
   * Enable Nuxt Devtools integration
   *
   * @default true
   */
  devtools: boolean;
  iframeUrl: string;
}

export default defineNuxtModule<ModuleOptions>({
  meta: {
    name: "frammer-nuxt",
    configKey: "frammerNuxt",
  },
  // Default configuration options of the Nuxt module
  defaults: {
    devtools: true,
    iframeUrl: "",
  },
  setup(options, nuxt) {
    const resolver = createResolver(import.meta.url);

    // Do not add the extension since the `.ts` will be transpiled to `.mjs` after `npm run prepack`
    addPlugin(resolver.resolve("./runtime/plugin"));

    if (options.devtools) setupDevToolsUI(nuxt, resolver, options.iframeUrl);
  },
});
