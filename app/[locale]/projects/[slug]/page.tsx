import type { Metadata } from "next";
import ProjectPage, { generateStaticParams } from "../../../projects/[slug]/page";
import { projectBySlug } from "../../../project-catalogue";
import { localizeProject } from "../../../project-localization";
import { isUrlLocale, pageMetadata } from "../../../localized-metadata";

type Props = { params: Promise<{ locale: string; slug: string }> };

export { generateStaticParams };

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { locale, slug } = await params;
  if (!isUrlLocale(locale)) return {};
  const sourceProject = projectBySlug(slug);
  if (!sourceProject) return {};
  const project = localizeProject(sourceProject, locale);
  return pageMetadata({ locale, path: `/projects/${slug}`, title: `${project.name} — Blutech`, description: project.summary, image: project.image });
}

export default ProjectPage;
