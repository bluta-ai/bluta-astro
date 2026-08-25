"use client";

import { useSiteLanguage } from "./LanguageContext";

const copy = {
  en: { name:"Name", company:"Company", email:"Work email", role:"Role", type:"Property / project type", location:"Location", improve:"What do you want to improve?", timing:"Project timing", send:"Prepare project enquiry", note:"Submitting opens a pre-filled email to the Blutech project team. No information is stored on this website.", placeholder:"Safety, occupancy, indoor air quality, energy, facility workflow or another building outcome…" },
  tc: { name:"姓名", company:"公司", email:"工作電郵", role:"職位", type:"物業／項目類型", location:"地點", improve:"你希望改善甚麼？", timing:"項目時間", send:"準備項目查詢", note:"提交後會開啟預先填妥的電郵，寄給 Blutech 項目團隊；本網站不會儲存你的資料。", placeholder:"安全、佔用、室內空氣質素、能源、設施流程或其他樓宇成果……" },
  sc: { name:"姓名", company:"公司", email:"工作邮箱", role:"职位", type:"物业／项目类型", location:"地点", improve:"你希望改善什么？", timing:"项目时间", send:"准备项目咨询", note:"提交后会打开预先填好的邮件，发送给 Blutech 项目团队；本网站不会存储你的资料。", placeholder:"安全、占用、室内空气质量、能源、设施流程或其他楼宇成果……" },
  ar: { name:"الاسم", company:"الشركة", email:"بريد العمل", role:"الدور", type:"نوع العقار أو المشروع", location:"الموقع", improve:"ما الذي تريد تحسينه؟", timing:"توقيت المشروع", send:"إعداد استفسار المشروع", note:"يفتح الإرسال رسالة بريد معدة مسبقاً إلى فريق مشاريع Blutech. لا يخزن الموقع هذه المعلومات.", placeholder:"السلامة أو الإشغال أو جودة الهواء أو الطاقة أو سير عمل المرافق أو نتيجة أخرى…" },
};

export function ContactForm() {
  const { language } = useSiteLanguage();
  const t = copy[language];
  function submit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    const fields = [[t.name,"name"],[t.company,"company"],[t.email,"email"],[t.role,"role"],[t.type,"type"],[t.location,"location"],[t.improve,"improve"],[t.timing,"timing"]] as const;
    const body = fields.map(([label,key]) => `${label}: ${String(data.get(key) || "")}`).join("\n\n");
    window.dispatchEvent(new CustomEvent("blutech:contact-submit", { detail: { source: "website", language } }));
    window.location.href = `mailto:enquiry@blutech.io?subject=${encodeURIComponent("Blutech project enquiry")}&body=${encodeURIComponent(body)}`;
  }
  return <form className="project-enquiry-form" onSubmit={submit}>
    <label><span>{t.name}</span><input name="name" autoComplete="name" required /></label>
    <label><span>{t.company}</span><input name="company" autoComplete="organization" required /></label>
    <label><span>{t.email}</span><input name="email" type="email" autoComplete="email" required /></label>
    <label><span>{t.role}</span><input name="role" autoComplete="organization-title" /></label>
    <label><span>{t.type}</span><input name="type" required /></label>
    <label><span>{t.location}</span><input name="location" autoComplete="country-name" required /></label>
    <label className="form-wide"><span>{t.improve}</span><textarea name="improve" rows={5} placeholder={t.placeholder} required /></label>
    <label className="form-wide"><span>{t.timing}</span><input name="timing" /></label>
    <div className="form-wide form-submit"><button className="button" type="submit">{t.send}<span aria-hidden="true">→</span></button><small>{t.note}</small></div>
  </form>;
}
