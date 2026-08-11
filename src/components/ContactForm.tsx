import { useState } from "react";
import { CheckCircle2 } from "lucide-react";
import { products } from "@/data/products";

const enquiryTypes = [
  "Product Enquiry",
  "Business Enquiry",
  "Distributor Enquiry",
  "General Enquiry",
  "Other",
];

type Errors = {
  name?: string;
  email?: string;
  phone?: string;
  enquiryType?: string;
  message?: string;
};

export function ContactForm({ defaultProduct = "" }: { defaultProduct?: string }) {
  const [values, setValues] = useState({
    name: "",
    email: "",
    phone: "",
    company: "",
    enquiryType: "",
    product: defaultProduct,
    message: "",
  });
  const [errors, setErrors] = useState<Errors>({});
  const [sent, setSent] = useState(false);

  const set = (k: string, v: string) => setValues((p) => ({ ...p, [k]: v }));

  const validate = () => {
    const e: Errors = {};
    if (values.name.trim().length < 2) e['name'] = "Please enter your full name.";
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/.test(values.email.trim()))
      e['email'] = "Please enter a valid email address.";
    if (values.phone.trim().replace(/\D/g, "").length < 7)
      e['phone'] = "Please enter a valid phone number.";
    if (!values.enquiryType) e['enquiryType'] = "Please select an enquiry type.";
    if (values.message.trim().length < 10) e['message'] = "Please enter at least 10 characters.";
    setErrors(e);
    return Object.keys(e).length === 0;
  };

  const onSubmit = (ev: React.FormEvent) => {
    ev.preventDefault();
    if (!validate()) return;
    setSent(true);
  };

  if (sent) {
    return (
      <div className="rounded-3xl border border-border bg-card p-10 text-center shadow-soft">
        <CheckCircle2 className="mx-auto size-12 text-brand-teal" />
        <h3 className="mt-5 text-xl font-bold text-foreground">Thank you — enquiry received</h3>
        <p className="mx-auto mt-3 max-w-md text-sm leading-relaxed text-muted-foreground">
          Your enquiry has been captured. Our team will get in touch using the contact details you
          provided.
        </p>
        <button
          type="button"
          onClick={() => {
            setSent(false);
            setValues({
              name: "",
              email: "",
              phone: "",
              company: "",
              enquiryType: "",
              product: defaultProduct,
              message: "",
            });
          }}
          className="mt-7 inline-flex rounded-full border border-primary/25 px-5 py-3 text-sm font-semibold text-primary transition-colors hover:bg-secondary"
        >
          Submit another enquiry
        </button>
      </div>
    );
  }

  return (
    <form
      onSubmit={onSubmit}
      noValidate
      className="rounded-3xl border border-border bg-card p-6 shadow-soft md:p-8"
    >
      <div className="grid gap-5 sm:grid-cols-2">
        <Field label="Full Name" required {...(errors['name'] ? { error: errors['name'] } : {})}>
          <input
            className={inputCls}
            value={values.name}
            maxLength={100}
            onChange={(e) => set("name", e.target.value)}
            placeholder="Your name"
          />
        </Field>
        <Field label="Email Address" required {...(errors['email'] ? { error: errors['email'] } : {})}>
          <input
            className={inputCls}
            type="email"
            value={values.email}
            maxLength={255}
            onChange={(e) => set("email", e.target.value)}
            placeholder="you@example.com"
          />
        </Field>
        <Field label="Phone Number" required {...(errors['phone'] ? { error: errors['phone'] } : {})}>
          <input
            className={inputCls}
            type="tel"
            value={values.phone}
            maxLength={20}
            onChange={(e) => set("phone", e.target.value)}
            placeholder="+91 00000 00000"
          />
        </Field>
        <Field label="Company / Organization">
          <input
            className={inputCls}
            value={values.company}
            maxLength={120}
            onChange={(e) => set("company", e.target.value)}
            placeholder="Optional"
          />
        </Field>
        <Field label="Enquiry Type" required {...(errors['enquiryType'] ? { error: errors['enquiryType'] } : {})}>
          <select
            className={inputCls}
            value={values.enquiryType}
            onChange={(e) => set("enquiryType", e.target.value)}
          >
            <option value="">Select an option</option>
            {enquiryTypes.map((t) => (
              <option key={t} value={t}>
                {t}
              </option>
            ))}
          </select>
        </Field>
        <Field label="Product Name">
          <input
            className={inputCls}
            list="decagon-products"
            value={values.product}
            maxLength={120}
            onChange={(e) => set("product", e.target.value)}
            placeholder="Optional"
          />
          <datalist id="decagon-products">
            {products.map((p) => (
              <option key={p.slug} value={p.name} />
            ))}
          </datalist>
        </Field>
      </div>

      <div className="mt-5">
        <Field label="Message" required {...(errors['message'] ? { error: errors['message'] } : {})}>
          <textarea
            className={`${inputCls} min-h-32 resize-y`}
            value={values.message}
            maxLength={1500}
            onChange={(e) => set("message", e.target.value)}
            placeholder="How can we help?"
          />
        </Field>
      </div>

      <button
        type="submit"
        className="mt-7 w-full rounded-full bg-gradient-brand px-6 py-3.5 text-sm font-semibold text-primary-foreground shadow-soft transition-transform hover:-translate-y-0.5 sm:w-auto sm:px-8"
      >
        Submit Enquiry
      </button>
    </form>
  );
}

const inputCls =
  "w-full rounded-xl border border-input bg-background px-4 py-3 text-sm text-foreground outline-none transition-colors placeholder:text-muted-foreground/70 focus:border-primary focus:ring-2 focus:ring-ring/25";

function Field({
  label,
  required,
  error,
  children,
}: {
  label: string;
  required?: boolean;
  error?: string;
  children: React.ReactNode;
}) {
  return (
    <label className="block">
      <span className="mb-2 block text-xs font-semibold uppercase tracking-[0.12em] text-muted-foreground">
        {label}
        {required ? <span className="text-brand-orange"> *</span> : null}
      </span>
      {children}
      {error ? <span className="mt-1.5 block text-xs text-destructive">{error}</span> : null}
    </label>
  );
}
