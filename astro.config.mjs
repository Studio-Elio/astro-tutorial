// @ts-check
import { defineConfig } from "astro/config";
import preact from "@astrojs/preact";
import { storyblok } from "@storyblok/astro";
import { loadEnv } from "vite";
import basicSsl from "@vitejs/plugin-basic-ssl";

const env = loadEnv("", process.cwd(), "STORYBLOK");

// https://astro.build/config
export default defineConfig({
    site: "https://aquamarine-tapioca-0d0396.netlify.app",
    integrations: [
        preact(),
        storyblok({
            accessToken: env.STORYBLOK_TOKEN,
            components: {
                teamMember: "storyblok/TeamMember",
            },
            apiOptions: {
                region: "us", // optional,  or 'eu' (default)
            },
        }),
    ],
    vite: {
        plugins: [basicSsl()],
        server: {
            https: true,
        },
    },
});
