import type { NextConfig } from "next";
import createNextIntlPlugin from "next-intl/plugin";
import path from "path";

const withNextIntl = createNextIntlPlugin("./src/i18n.ts");

const nextConfig: NextConfig = {
  sassOptions: {
    includePaths: [path.join(process.cwd(), 'src/styles')],
    prependData: `
      @use "${path.join(process.cwd(), 'src/styles/_variables.scss')}" as *;
      @use "${path.join(process.cwd(), 'src/styles/_mixins.scss')}" as *;
    `,
    silenceDeprecations: ["legacy-js-api"],
  },
};

export default withNextIntl(nextConfig);