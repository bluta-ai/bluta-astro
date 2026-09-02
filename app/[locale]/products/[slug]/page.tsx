import type { Metadata } from "next";
import ProductPage, { generateStaticParams } from "../../../products/[slug]/page";
import { productBySlug } from "../../../product-catalogue";
import { localizeProduct } from "../../../product-localization";
import { isUrlLocale, pageMetadata } from "../../../localized-metadata";

type Props = { params: Promise<{ locale: string; slug: string }> };

export { generateStaticParams };

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { locale, slug } = await params;
  if (!isUrlLocale(locale)) return {};
  const sourceProduct = productBySlug(slug);
  if (!sourceProduct) return {};
  const product = localizeProduct(sourceProduct, locale);
  const title = `${product.model} ${product.name} — Blutech`;
  return pageMetadata({ locale, path: `/products/${slug}`, title, description: product.summary, image: product.image || "/og.png" });
}

export default ProductPage;
