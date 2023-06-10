import { defineNuxtPlugin } from "#app";
export default defineNuxtPlugin((nuxtApp: any) => {
  console.log("Plugin injected by my-module!");
});
