import PrimeVue from "primevue/config";
import Aura from "@primevue/themes/aura";

export default defineNuxtPlugin((nuxtApp) => {
  const vueApp = nuxtApp.vueApp;

  vueApp.use(PrimeVue, {
    theme: {
      preset: Aura,
    },
  });
});
