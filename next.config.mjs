import createNextIntlPlugin from "next-intl/plugin";
import path from "path";
import { fileURLToPath } from "url"; // 👈 추가

const __dirname = fileURLToPath(new URL(".", import.meta.url)); // 👈 추가
const __filename = fileURLToPath(import.meta.url); // 👈 추가

const withNextIntl = createNextIntlPlugin();

/** @type {import('next').NextConfig} */
const nextConfig = {
  sassOptions: {
    includePaths: [path.join(__dirname, "styles")],
  },
};

export default withNextIntl(nextConfig);
