import type { Metadata } from "next";
import { languageAlternates } from "../localized-metadata";
import { Arrow, SiteFooter, SiteHeader } from "../components/SiteChrome";
import { Localized } from "../components/LanguageContext";
import { ContactForm } from "../components/ContactForm";

export const metadata: Metadata = {
  title: "Contact Blutech — Building AI and IoT",
  description: "Contact the Blutech team about building AI, IoT, sensing, software and integration.",
  alternates: { canonical: "/contact", languages: languageAlternates("/contact") },
};

export default function ContactPage() {
  return (
    <main className="internal-page">
      <SiteHeader />
      <section className="contact-page">
        <div className="contact-lead">
          <p className="eyebrow light">
            <Localized en="CONTACT BLUTECH" tc="聯絡 BLUTECH" sc="联系 BLUTECH" ar="تواصل مع BLUTECH" />
          </p>
          <h1>
            <Localized
              en="Tell us what you need."
              tc="告訴我們你的需要。"
              sc="告诉我们你的需求。"
              ar="أخبرنا بما تحتاج إليه."
            />
          </h1>
          <p>
            <Localized
              en="Whether you have a building problem, a product question or a potential project, our team is ready to help."
              tc="無論是樓宇營運問題、產品查詢或潛在項目，我們的團隊都樂意協助。"
              sc="无论是楼宇运营问题、产品咨询或潜在项目，我们的团队都乐意协助。"
              ar="سواء كان لديك تحدٍ في المبنى أو سؤال عن منتج أو مشروع محتمل، فإن فريقنا مستعد للمساعدة."
            />
          </p>
        </div>
        <div className="contact-card">
          <span>
            <Localized en="CONTACT" tc="聯絡方式" sc="联系方式" ar="بيانات الاتصال" />
          </span>
          <div className="contact-links">
            <a href="mailto:enquiry@blutech.io">enquiry@blutech.io <Arrow /></a>
            <a href="tel:+85221807157">2180 7157 <Arrow /></a>
          </div>
          <small>Hong Kong · Dongguan R&amp;D · Qatar</small>
        </div>
      </section>
      <section className="contact-form-section section-pad">
        <div className="catalogue-heading">
          <div>
            <p className="section-label">
              <Localized en="CONTACT US" tc="聯絡我們" sc="联系我们" ar="تواصل معنا" />
            </p>
            <h2>
              <Localized en="A simple enquiry." tc="簡單告訴我們。" sc="简单告诉我们。" ar="استفسار بسيط." />
            </h2>
          </div>
          <p>
            <Localized
              en="Leave your name, company, email or phone number, and a short message. Our team will get back to you."
              tc="留下姓名、公司、電郵或電話，以及簡短內容，我們的團隊會與你聯絡。"
              sc="留下姓名、公司、邮箱或电话，以及简短内容，我们的团队会与你联系。"
              ar="اترك اسمك وشركتك وبريدك الإلكتروني أو رقم هاتفك ورسالة قصيرة، وسيتواصل معك فريقنا."
            />
          </p>
        </div>
        <ContactForm />
      </section>
      <section className="contact-route">
        <p>
          <Localized
            en="For product specifications or consultant submissions, include the relevant product model in your message."
            tc="如需產品規格或顧問提交文件，請在內容中列明相關產品型號。"
            sc="如需产品规格或顾问提交文件，请在内容中注明相关产品型号。"
            ar="لطلب مواصفات منتج أو مستندات استشارية، اذكر طراز المنتج المعني في رسالتك."
          />
        </p>
      </section>
      <SiteFooter />
    </main>
  );
}
