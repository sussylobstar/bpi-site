import { useState } from "react";
import type { FormEvent } from "react";

export type Field = {
  name: string;
  label: string;
  type?: "text" | "email" | "tel" | "textarea" | "select";
  required?: boolean;
  options?: string[];
  full?: boolean;
  placeholder?: string;
};

export default function DemoForm({
  fields,
  submitLabel,
  successTitle,
  successBody,
}: {
  fields: Field[];
  submitLabel: string;
  successTitle: string;
  successBody: string;
}) {
  const [values, setValues] = useState<Record<string, string>>({});
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [sent, setSent] = useState(false);

  const set = (name: string, v: string) => {
    setValues((s) => ({ ...s, [name]: v }));
    setErrors((e) => ({ ...e, [name]: "" }));
  };

  const onSubmit = (e: FormEvent) => {
    e.preventDefault();
    const next: Record<string, string> = {};
    for (const f of fields) {
      const v = (values[f.name] ?? "").trim();
      if (f.required && !v) next[f.name] = "This field is required.";
      else if (f.type === "email" && v && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(v))
        next[f.name] = "Enter a valid email address.";
    }
    setErrors(next);
    if (Object.keys(next).length === 0) {
      // Demo build — no network request is made.
      setSent(true);
    }
  };

  if (sent) {
    return (
      <div className="border border-white/12 bg-ink-2 p-[clamp(28px,4vw,48px)]">
        <div
          className="h-10 w-10 rounded-full bg-red flex items-center justify-center text-white text-[20px]"
          aria-hidden
        >
          ✓
        </div>
        <h3 className="mt-5 display text-[clamp(22px,2.4vw,32px)]">
          {successTitle}
        </h3>
        <p className="mt-3 text-[15px] leading-relaxed text-white/70 font-light max-w-[46ch]">
          {successBody}
        </p>
      </div>
    );
  }

  const inputCls =
    "w-full bg-ink border border-white/15 px-4 py-3 text-[15px] text-white font-light placeholder:text-white/35 focus:border-red focus:outline-none transition-colors";

  return (
    <form onSubmit={onSubmit} noValidate className="grid sm:grid-cols-2 gap-5">
      {fields.map((f) => (
        <div key={f.name} className={f.full ? "sm:col-span-2" : ""}>
          <label
            htmlFor={f.name}
            className="block text-[12px] tracking-[0.12em] uppercase text-white/55 mb-2"
          >
            {f.label}
            {f.required && <span className="text-red"> *</span>}
          </label>
          {f.type === "textarea" ? (
            <textarea
              id={f.name}
              rows={5}
              className={inputCls}
              placeholder={f.placeholder}
              value={values[f.name] ?? ""}
              onChange={(e) => set(f.name, e.target.value)}
              aria-invalid={!!errors[f.name]}
            />
          ) : f.type === "select" ? (
            <select
              id={f.name}
              className={inputCls}
              value={values[f.name] ?? ""}
              onChange={(e) => set(f.name, e.target.value)}
              aria-invalid={!!errors[f.name]}
            >
              <option value="">Select…</option>
              {f.options?.map((o) => (
                <option key={o} value={o}>
                  {o}
                </option>
              ))}
            </select>
          ) : (
            <input
              id={f.name}
              type={f.type ?? "text"}
              className={inputCls}
              placeholder={f.placeholder}
              value={values[f.name] ?? ""}
              onChange={(e) => set(f.name, e.target.value)}
              aria-invalid={!!errors[f.name]}
            />
          )}
          {errors[f.name] && (
            <p className="mt-1.5 text-[12.5px] text-red">{errors[f.name]}</p>
          )}
        </div>
      ))}
      <div className="sm:col-span-2 flex items-center gap-4 pt-1">
        <button
          type="submit"
          className="inline-flex items-center gap-2.5 bg-red px-8 py-[15px] text-[15px] font-normal text-white hover:bg-red-deep transition-colors"
        >
          {submitLabel} <span aria-hidden>→</span>
        </button>
        <p className="text-[12.5px] text-white/40 font-light">
          Concept demo — submissions aren't sent anywhere.
        </p>
      </div>
    </form>
  );
}
