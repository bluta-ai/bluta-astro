"use client";

import Link from "next/link";
import { useState } from "react";
import { LanguageSelector, Localized, localePath, useSiteLanguage } from "./LanguageContext";

export function Brand() {
  const { language } = useSiteLanguage();
  return (
    <Link className="brand" href={localePath("/", language)} aria-label="Blutech home">
      <img src="/products/blutech-logo-on-dark.svg" alt="Blutech" />
    </Link>
  );
}

export function Arrow() {
  return <svg aria-hidden="true" viewBox="0 0 20 20"><path d="M4 10h11M11 6l4 4-4 4" /></svg>;
}

export function SiteHeader({ active }: { active?: string }) {
  const [open, setOpen] = useState(false);
  const { language } = useSiteLanguage();
  const links = [
    ["Solutions", "方案", "方案", "الحلول", "/solutions"],
    ["Software", "軟件", "软件", "البرمجيات", "/software"],
    ["Products", "產品", "产品", "المنتجات", "/products"],
    ["Projects", "項目", "项目", "المشاريع", "/projects"],
    ["Technology", "技術", "技术", "التقنية", "/technology"],
    ["Company", "公司", "公司", "الشركة", "/company"],
  ];
  return (
    <header className="site-header internal-header">
      <Brand />
      <button className="menu-button" aria-label="Toggle navigation" aria-expanded={open} onClick={() => setOpen(!open)}><span /><span /></button>
      <nav className={open ? "nav-open" : ""} aria-label="Main navigation">
        {links.map(([en, tc, sc, ar, href]) => <a key={href} className={active === en.toLowerCase() ? "active" : ""} href={localePath(href, language)} onClick={() => setOpen(false)}><Localized en={en} tc={tc} sc={sc} ar={ar} /></a>)}
        <LanguageSelector compact />
      </nav>
      <div className="header-actions"><LanguageSelector /><a className="header-cta" href={localePath("/contact", language)}><Localized en="Plan a pilot" tc="規劃試點" sc="规划试点" ar="خطط لمشروع تجريبي" /></a></div>
    </header>
  );
}

export function SiteFooter() {
  const { language } = useSiteLanguage();
  return (
    <footer>
      <div><Brand /><p><Localized en="Building AI and IoT for safer, leaner and better-performing properties." tc="以建築 AI 與 IoT 建構更安全、精簡、高效的物業。" sc="以建筑 AI 与 IoT 建设更安全、精简、高效的物业。" ar="ذكاء اصطناعي وإنترنت أشياء للمباني الأكثر أماناً وكفاءة وأداءً." /></p></div>
      <div className="footer-links">
        <Link href={localePath("/solutions", language)}><Localized en="Solutions" tc="方案" sc="方案" ar="الحلول" /></Link><Link href={localePath("/software", language)}><Localized en="Software" tc="軟件" sc="软件" ar="البرمجيات" /></Link><Link href={localePath("/products", language)}><Localized en="Products" tc="產品" sc="产品" ar="المنتجات" /></Link><Link href={localePath("/projects", language)}><Localized en="Projects" tc="項目" sc="项目" ar="المشاريع" /></Link><Link href={localePath("/resources", language)}><Localized en="Resources" tc="資源" sc="资源" ar="الموارد" /></Link><Link href={localePath("/contact", language)}><Localized en="Contact" tc="聯絡" sc="联系" ar="تواصل معنا" /></Link>
      </div>
      <div className="footer-meta"><span>© {new Date().getFullYear()} Blutech IoT Limited</span><span>Hong Kong · Dongguan R&amp;D · Qatar</span><span className="image-credits">Photography: <a href="https://commons.wikimedia.org/wiki/File:Olympian_City_Phase_2.jpg" target="_blank" rel="noopener noreferrer">Exploringlife / CC BY-SA 4.0</a> · <a href="https://commons.wikimedia.org/wiki/File:Metroplaza_(Hong_Kong).jpg" target="_blank" rel="noopener noreferrer">Mk2010 / CC BY-SA 3.0</a> · <a href="https://commons.wikimedia.org/wiki/File:%E4%B8%9C%E8%8E%9E%E6%9D%BE%E5%B1%B1%E6%B9%96_(45804269842).jpg" target="_blank" rel="noopener noreferrer">drnan tu / CC BY-SA 2.0</a></span></div>
    </footer>
  );
}

export function PageCta() {
  const { language } = useSiteLanguage();
  return (
    <section className="contact section-pad page-cta">
      <p className="eyebrow"><Localized en="START WITH ONE MEANINGFUL OUTCOME" tc="由一個有意義的成果開始" sc="从一个有意义的成果开始" ar="ابدأ بنتيجة واحدة ذات معنى" /></p>
      <h2><Localized en="Make the next building perform as beautifully as it looks." tc="讓下一座建築的表現，與設計同樣出色。" sc="让下一座建筑的表现，与设计同样出色。" ar="اجعل أداء المبنى التالي بجمال تصميمه." /></h2>
      <div className="contact-bottom">
        <p><Localized en="Share your property type, systems and priorities. We will propose a practical pilot, integration path and measurement plan." tc="告訴我們物業類型、既有系統和優先目標，我們會提出實際的試點、整合路徑及成效量度方案。" sc="告诉我们物业类型、现有系统和优先目标，我们会提出实际的试点、集成路径及成效衡量方案。" ar="شاركنا نوع العقار والأنظمة والأولويات، وسنقترح تجربة عملية ومسار تكامل وخطة قياس." /></p>
        <a className="button contact-button" href={localePath("/contact", language)}><Localized en="Talk to our project team" tc="聯絡項目團隊" sc="联系项目团队" ar="تحدث مع فريق المشاريع" /> <Arrow /></a>
      </div>
    </section>
  );
}
