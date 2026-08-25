import type { MetadataRoute } from "next";
import { products } from "./product-catalogue";
import { projects } from "./project-catalogue";
import { localizedPath, supportedLocales } from "./localized-metadata";

const origin = "https://blutech.io";
const sections = ["/", "/products", "/software", "/technology", "/projects", "/solutions", "/company", "/resources", "/contact"];

export default function sitemap(): MetadataRoute.Sitemap {
  const paths = [
    ...sections,
    ...products.map((product) => `/products/${product.slug}`),
    ...projects.map((project) => `/projects/${project.slug}`),
  ];
  const locales = [undefined, ...supportedLocales] as const;
  return locales.flatMap((locale) => paths.map((path) => ({
    url: `${origin}${locale ? localizedPath(path, locale) : localizedPath(path)}`,
    changeFrequency: path === "/" ? "weekly" as const : "monthly" as const,
    priority: path === "/" ? 1 : path.split("/").filter(Boolean).length === 1 ? 0.8 : 0.65,
  })));
}
