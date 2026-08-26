"use client";

import { useRef, useState } from "react";
import { useSiteLanguage } from "./LanguageContext";

const copy = {
  en: { name:"Name", company:"Company", email:"Work email", role:"Role", type:"Property / project type", location:"Location", improve:"What do you want to improve?", timing:"Project timing", send:"Send project enquiry", sending:"Sending…", success:"Thank you. Your enquiry has been sent to the Blutech project team.", error:"We could not send your enquiry. Please email enquiry@blutech.io.", note:"Your enquiry is sent securely to the Blutech project team.", placeholder:"Safety, occupancy, indoor air quality, energy, facility workflow or another building outcome…" },
  tc: { name:"姓名", company:"公司", email:"工作電郵", role:"職位", type:"物業／項目類型", location:"地點", improve:"你希望改善甚麼？", timing:"項目時間", send:"提交項目查詢", sending:"傳送中……", success:"謝謝。你的查詢已傳送至 Blutech 項目團隊。", error:"暫時未能傳送查詢，請電郵 enquiry@blutech.io。", note:"你的查詢會安全傳送至 Blutech 項目團隊。", placeholder:"安全、佔用、室內空氣質素、能源、設施流程或其他樓宇成果……" },
  sc: { name:"姓名", company:"公司", email:"工作邮箱", role:"职位", type:"物业／项目类型", location:"地点", improve:"你希望改善什么？", timing:"项目时间", send:"提交项目咨询", sending:"发送中……", success:"谢谢。你的咨询已发送至 Blutech 项目团队。", error:"暂时无法发送咨询，请邮件联系 enquiry@blutech.io。", note:"你的咨询会安全发送至 Blutech 项目团队。", placeholder:"安全、占用、室内空气质量、能源、设施流程或其他楼宇成果……" },
  ar: { name:"الاسم", company:"الشركة", email:"بريد العمل", role:"الدور", type:"نوع العقار أو المشروع", location:"الموقع", improve:"ما الذي تريد تحسينه؟", timing:"توقيت المشروع", send:"إرسال استفسار المشروع", sending:"جارٍ الإرسال…", success:"شكراً لك. تم إرسال استفسارك إلى فريق مشاريع Blutech.", error:"تعذر إرسال الاستفسار. يرجى مراسلة enquiry@blutech.io.", note:"يُرسل استفسارك بأمان إلى فريق مشاريع Blutech.", placeholder:"السلامة أو الإشغال أو جودة الهواء أو الطاقة أو سير عمل المرافق أو نتيجة أخرى…" },
};

export function ContactForm() {
  const { language } = useSiteLanguage();
  const t = copy[language];
  const formRef = useRef<HTMLFormElement>(null);
  const [status, setStatus] = useState<"idle" | "sending" | "success" | "error">("idle");

  async function submit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    if (status === "sending") return;
    setStatus("sending");
    const data = new FormData(event.currentTarget);
    const payload = Object.fromEntries(data.entries());
    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ ...payload, language, page: window.location.href }),
      });
      const result = await response.json() as { success?: boolean };
      if (!response.ok || !result.success) throw new Error("Submission failed");
      setStatus("success");
      formRef.current?.reset();
      window.dispatchEvent(new CustomEvent("blutech:contact-submit", { detail: { source: "website", language } }));
    } catch {
      setStatus("error");
    }
  }
  return <form ref={formRef} className="project-enquiry-form" onSubmit={submit}>
    <label className="form-honeypot" aria-hidden="true"><span>Website</span><input name="website" tabIndex={-1} autoComplete="off" /></label>
    <label><span>{t.name}</span><input name="name" autoComplete="name" required /></label>
    <label><span>{t.company}</span><input name="company" autoComplete="organization" required /></label>
    <label><span>{t.email}</span><input name="email" type="email" autoComplete="email" required /></label>
    <label><span>{t.role}</span><input name="role" autoComplete="organization-title" /></label>
    <label><span>{t.type}</span><input name="type" required /></label>
    <label><span>{t.location}</span><input name="location" autoComplete="country-name" required /></label>
    <label className="form-wide"><span>{t.improve}</span><textarea name="improve" rows={5} placeholder={t.placeholder} required /></label>
    <label className="form-wide"><span>{t.timing}</span><input name="timing" /></label>
    <div className="form-wide form-submit"><button className="button" type="submit" disabled={status === "sending"}>{status === "sending" ? t.sending : t.send}<span aria-hidden="true">→</span></button><small>{t.note}</small><p className={`form-status ${status}`} role="status" aria-live="polite">{status === "success" ? t.success : status === "error" ? t.error : ""}</p></div>
  </form>;
}
