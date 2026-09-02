"use client";

import { useRef, useState } from "react";
import { useSiteLanguage } from "./LanguageContext";

const copy = {
  en: {
    name: "Name",
    company: "Company",
    contact: "Email or phone",
    message: "How can we help?",
    send: "Send enquiry",
    sending: "Sending…",
    success: "Thank you. Your enquiry has been sent to the Blutech team.",
    error: "We could not send your enquiry. Please call 2180 7157 or email enquiry@blutech.io.",
    note: "We will use your contact details only to respond to this enquiry.",
    placeholder: "Tell us briefly what you need…",
  },
  tc: {
    name: "姓名",
    company: "公司",
    contact: "電郵或電話",
    message: "我們可以如何協助？",
    send: "提交查詢",
    sending: "傳送中……",
    success: "謝謝。你的查詢已傳送至 Blutech 團隊。",
    error: "暫時未能傳送查詢，請致電 2180 7157 或電郵 enquiry@blutech.io。",
    note: "你的聯絡資料只會用於回覆這次查詢。",
    placeholder: "請簡單告訴我們你的需要……",
  },
  sc: {
    name: "姓名",
    company: "公司",
    contact: "邮箱或电话",
    message: "我们可以如何协助？",
    send: "提交咨询",
    sending: "发送中……",
    success: "谢谢。你的咨询已发送至 Blutech 团队。",
    error: "暂时无法发送咨询，请致电 2180 7157 或发送邮件至 enquiry@blutech.io。",
    note: "你的联系方式只会用于回复本次咨询。",
    placeholder: "请简单告诉我们你的需求……",
  },
  ar: {
    name: "الاسم",
    company: "الشركة",
    contact: "البريد الإلكتروني أو الهاتف",
    message: "كيف يمكننا مساعدتك؟",
    send: "إرسال الاستفسار",
    sending: "جارٍ الإرسال…",
    success: "شكراً لك. تم إرسال استفسارك إلى فريق Blutech.",
    error: "تعذر إرسال الاستفسار. اتصل على 2180 7157 أو راسل enquiry@blutech.io.",
    note: "سنستخدم بيانات الاتصال فقط للرد على هذا الاستفسار.",
    placeholder: "أخبرنا باختصار بما تحتاج إليه…",
  },
  es: {
    name: "Nombre",
    company: "Empresa",
    contact: "Correo electrónico o teléfono",
    message: "¿Cómo podemos ayudarle?",
    send: "Enviar consulta",
    sending: "Enviando…",
    success: "Gracias. Su consulta se ha enviado al equipo de Blutech.",
    error: "No hemos podido enviar su consulta. Llame al 2180 7157 o escriba a enquiry@blutech.io.",
    note: "Utilizaremos sus datos de contacto únicamente para responder a esta consulta.",
    placeholder: "Cuéntenos brevemente qué necesita…",
  },
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

  return (
    <form ref={formRef} className="project-enquiry-form simple-contact-form" onSubmit={submit}>
      <label className="form-honeypot" aria-hidden="true">
        <span>Website</span>
        <input name="website" tabIndex={-1} autoComplete="off" />
      </label>
      <label>
        <span>{t.name}</span>
        <input name="name" autoComplete="name" required />
      </label>
      <label>
        <span>{t.company}</span>
        <input name="company" autoComplete="organization" required />
      </label>
      <label className="form-wide">
        <span>{t.contact}</span>
        <input name="contact" required />
      </label>
      <label className="form-wide">
        <span>{t.message}</span>
        <textarea name="message" rows={6} placeholder={t.placeholder} required />
      </label>
      <div className="form-wide form-submit">
        <button className="button" type="submit" disabled={status === "sending"}>
          {status === "sending" ? t.sending : t.send}<span aria-hidden="true">→</span>
        </button>
        <small>{t.note}</small>
        <p className={`form-status ${status}`} role="status" aria-live="polite">
          {status === "success" ? t.success : status === "error" ? t.error : ""}
        </p>
      </div>
    </form>
  );
}
