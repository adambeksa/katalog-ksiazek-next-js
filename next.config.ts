import type { NextConfig } from "next";
import path from "path";

const nextConfig: NextConfig = {
  sassOptions: {
    includePaths: [path.join(process.cwd(), 'src/styles')],
    // Using absolute paths ensures Sass can always find the files regardless of where the SCSS is imported from
    prependData: `
      @use "${path.join(process.cwd(), 'src/styles/_variables.scss')}" as *;
      @use "${path.join(process.cwd(), 'src/styles/_mixins.scss')}" as *;
    `,
    silenceDeprecations: ["legacy-js-api"],
  },
};

export default nextConfig;