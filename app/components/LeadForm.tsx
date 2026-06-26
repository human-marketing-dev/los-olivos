"use client";

import { useState } from "react";
import Image from "next/image";
import Icon from "./Icon";

export default function LeadForm() {
  const [sent, setSent] = useState(false);
  const [form, setForm] = useState({
    nombre: "",
    correo: "",
    telefono: "",
    interes: "",
    mensaje: "",
  });

  const set = (k: keyof typeof form) => (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => setForm((f) => ({ ...f, [k]: e.target.value }));

  const submit = (e: React.FormEvent) => {
    e.preventDefault();
    setSent(true);
  };

  return (
    <section
      id="contacto"
      className="lo-pad"
      style={{
        background: "var(--surface-page)",
        padding: "104px 32px 110px",
      }}
    >
      <div
        className="lo-form-grid"
        style={{
          maxWidth: "var(--container-xl)",
          margin: "0 auto",
          display: "grid",
          gridTemplateColumns: "0.92fr 1.08fr",
          background: "var(--surface-card)",
          borderRadius: "var(--radius-3xl)",
          overflow: "hidden",
          boxShadow: "var(--shadow-lg)",
          border: "1px solid var(--border-subtle)",
        }}
      >
        <div
          className="lo-form-media"
          style={{
            position: "relative",
            overflow: "hidden",
            minHeight: 560,
            color: "var(--text-on-dark)",
          }}
        >
          <Image
            src="/assets/img/amenities/firepit.webp"
            alt="Atardecer en Los Olivos"
            fill
            sizes="(max-width: 900px) 100vw, 46vw"
            style={{ objectFit: "cover" }}
          />
          <div
            aria-hidden="true"
            style={{
              position: "absolute",
              inset: 0,
              background:
                "linear-gradient(180deg, rgba(27,35,19,0.62) 0%, rgba(27,35,19,0.42) 40%, rgba(27,35,19,0.88) 100%)",
            }}
          />
          <div
            style={{
              position: "relative",
              height: "100%",
              display: "flex",
              flexDirection: "column",
              justifyContent: "space-between",
              padding: "52px 48px",
            }}
          >
            <div>
              <div
                className="lo-eyebrow"
                style={{ color: "var(--olive-200)" }}
              >
                Da el primer paso
              </div>
              <h2
                style={{
                  fontFamily: "var(--font-display)",
                  fontSize: "clamp(32px,3.4vw,42px)",
                  fontWeight: 500,
                  color: "var(--white)",
                  margin: "14px 0 14px",
                  lineHeight: 1.04,
                }}
              >
                Conoce Los Olivos
                <br />
                en persona
              </h2>
              <p
                style={{
                  fontFamily: "var(--font-sans)",
                  fontSize: 16,
                  lineHeight: 1.6,
                  color: "rgba(245,242,233,0.92)",
                  maxWidth: 360,
                  margin: 0,
                }}
              >
                Agenda un recorrido al atardecer y vive el campo que será tuyo.
              </p>
            </div>
            <div style={{ display: "flex", flexDirection: "column", gap: 15 }}>
              {(
                [
                  ["phone", "81 1234 5678"],
                  ["mail", "info@humanmarketing.mx"],
                  ["map-pin", "Allende, Nuevo León"],
                ] as [string, string][]
              ).map(([ic, tx]) => (
                <div
                  key={tx}
                  style={{
                    display: "flex",
                    alignItems: "center",
                    gap: 13,
                    fontFamily: "var(--font-sans)",
                    fontSize: 15,
                    color: "rgba(245,242,233,0.95)",
                  }}
                >
                  <span style={{ color: "var(--gold-300)" }}>
                    <Icon name={ic} size={18} />
                  </span>
                  {tx}
                </div>
              ))}
            </div>
          </div>
        </div>

        <div
          className="lo-form-body"
          style={{
            padding: "56px 52px",
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
          }}
        >
          {sent ? (
            <div style={{ textAlign: "center", padding: "20px 0" }}>
              <div
                style={{
                  width: 64,
                  height: 64,
                  borderRadius: "50%",
                  background: "var(--success-50)",
                  color: "var(--success-500)",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  margin: "0 auto 22px",
                }}
              >
                <Icon name="check" size={32} stroke={2.4} />
              </div>
              <h3
                style={{
                  fontFamily: "var(--font-display)",
                  fontSize: 28,
                  fontWeight: 600,
                  margin: "0 0 8px",
                }}
              >
                ¡Gracias, {form.nombre || "te contactaremos"}!
              </h3>
              <p
                style={{
                  fontFamily: "var(--font-sans)",
                  fontSize: 15,
                  color: "var(--text-secondary)",
                  margin: "0 0 24px",
                }}
              >
                Recibimos tu solicitud. Un asesor te escribirá muy pronto.
              </p>
              <button
                onClick={() => {
                  setSent(false);
                  setForm({
                    nombre: "",
                    correo: "",
                    telefono: "",
                    interes: "",
                    mensaje: "",
                  });
                }}
                style={{
                  fontFamily: "var(--font-sans)",
                  fontSize: 15,
                  fontWeight: 600,
                  padding: "12px 24px",
                  borderRadius: "var(--radius-pill)",
                  border: "1px solid var(--border-default)",
                  cursor: "pointer",
                  background: "transparent",
                  color: "var(--text-primary)",
                }}
              >
                Enviar otra solicitud
              </button>
            </div>
          ) : (
            <form
              onSubmit={submit}
              style={{ display: "flex", flexDirection: "column", gap: 18 }}
            >
              <div
                style={{
                  fontFamily: "var(--font-sans)",
                  fontSize: 13,
                  fontWeight: 600,
                  textTransform: "uppercase",
                  letterSpacing: "0.14em",
                  color: "var(--olive-600)",
                }}
              >
                Solicita información
              </div>
              <div
                className="lo-field-row"
                style={{
                  display: "grid",
                  gridTemplateColumns: "1fr 1fr",
                  gap: 16,
                }}
              >
                <FormInput
                  label="Nombre completo"
                  placeholder="María González"
                  required
                  value={form.nombre}
                  onChange={set("nombre")}
                />
                <FormInput
                  label="Teléfono / WhatsApp"
                  placeholder="81 0000 0000"
                  required
                  value={form.telefono}
                  onChange={set("telefono")}
                />
              </div>
              <FormInput
                label="Correo electrónico"
                type="email"
                placeholder="maria@correo.com"
                required
                value={form.correo}
                onChange={set("correo")}
              />
              <label style={{ display: "flex", flexDirection: "column", gap: 6 }}>
                <span
                  style={{
                    fontFamily: "var(--font-sans)",
                    fontSize: 13,
                    fontWeight: 500,
                    color: "var(--text-secondary)",
                  }}
                >
                  Me interesa
                </span>
                <select
                  value={form.interes}
                  onChange={set("interes")}
                  style={{
                    fontFamily: "var(--font-sans)",
                    fontSize: 15,
                    color: form.interes
                      ? "var(--text-primary)"
                      : "var(--text-muted)",
                    background: "var(--surface-card)",
                    border: "1px solid var(--border-default)",
                    borderRadius: "var(--radius-md)",
                    padding: "11px 14px",
                    appearance: "none",
                    cursor: "pointer",
                    outline: "none",
                  }}
                >
                  <option value="">Selecciona una opción</option>
                  <option>Invertir (plusvalía)</option>
                  <option>Construir mi casa de campo</option>
                  <option>Conocer el proyecto</option>
                  <option>Un lote específico</option>
                </select>
              </label>
              <label style={{ display: "flex", flexDirection: "column", gap: 6 }}>
                <span
                  style={{
                    fontFamily: "var(--font-sans)",
                    fontSize: 13,
                    fontWeight: 500,
                    color: "var(--text-secondary)",
                  }}
                >
                  Mensaje{" "}
                  <span style={{ color: "var(--text-muted)" }}>(opcional)</span>
                </span>
                <textarea
                  value={form.mensaje}
                  onChange={set("mensaje")}
                  rows={3}
                  placeholder="Cuéntanos qué buscas…"
                  style={{
                    fontFamily: "var(--font-sans)",
                    fontSize: 15,
                    color: "var(--text-primary)",
                    resize: "vertical",
                    background: "var(--surface-card)",
                    border: "1px solid var(--border-default)",
                    borderRadius: "var(--radius-md)",
                    padding: "12px 14px",
                    outline: "none",
                    lineHeight: 1.5,
                  }}
                />
              </label>
              <button
                type="submit"
                style={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  gap: 10,
                  fontFamily: "var(--font-sans)",
                  fontSize: 16,
                  fontWeight: 600,
                  padding: "15px 28px",
                  borderRadius: "var(--radius-pill)",
                  border: "none",
                  cursor: "pointer",
                  background: "var(--olive-600)",
                  color: "var(--white)",
                  width: "100%",
                  transition:
                    "background var(--dur-fast) var(--ease-standard)",
                }}
              >
                Quiero más información
                <Icon name="arrow-right" size={18} />
              </button>
              <p
                style={{
                  fontFamily: "var(--font-sans)",
                  fontSize: 12.5,
                  color: "var(--text-muted)",
                  margin: 0,
                  textAlign: "center",
                }}
              >
                Te contactamos en menos de 24 horas. Sin compromiso.
              </p>
            </form>
          )}
        </div>
      </div>
    </section>
  );
}

function FormInput({
  label,
  type = "text",
  placeholder,
  required,
  value,
  onChange,
}: {
  label: string;
  type?: string;
  placeholder?: string;
  required?: boolean;
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}) {
  return (
    <label style={{ display: "flex", flexDirection: "column", gap: 6 }}>
      <span
        style={{
          fontFamily: "var(--font-sans)",
          fontSize: 13,
          fontWeight: 500,
          color: "var(--text-secondary)",
        }}
      >
        {label}
      </span>
      <input
        type={type}
        placeholder={placeholder}
        required={required}
        value={value}
        onChange={onChange}
        style={{
          fontFamily: "var(--font-sans)",
          fontSize: 15,
          color: "var(--text-primary)",
          background: "var(--surface-card)",
          border: "1px solid var(--border-default)",
          borderRadius: "var(--radius-md)",
          padding: "11px 14px",
          outline: "none",
        }}
      />
    </label>
  );
}
