import { LocalizedLink } from "./components/LanguageContext";
import { SiteFooter, SiteHeader } from "./components/SiteChrome";

export default function NotFound() {
  return <main className="internal-page not-found-page"><SiteHeader/><section className="not-found-section section-pad"><p className="eyebrow">404 · PAGE NOT FOUND</p><h1>This route is not part of the building.</h1><p>The page may have moved, or the address may be incomplete. Return to the project network or product catalogue.</p><div><LocalizedLink className="button" href="/projects">Explore projects</LocalizedLink><LocalizedLink className="text-link" href="/products">View products</LocalizedLink></div></section><SiteFooter/></main>;
}
