import type { NextConfig } from "next";
import path from "path";

const nextConfig: NextConfig = {
  sassOptions: {
    includePaths: [path.join(process.cwd(), 'src/app/styles')],
    // Using absolute paths ensures Sass can always find the files regardless of where the SCSS is imported from
    prependData: `
      @use "${path.join(process.cwd(), 'src/app/styles/_variables.scss')}" as *;
      @use "${path.join(process.cwd(), 'src/app/styles/_mixins.scss')}" as *;
    `,
    silenceDeprecations: ["legacy-js-api"],
  },
};

export default nextConfig;