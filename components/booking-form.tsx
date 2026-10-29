"use client";

import { useEffect, useRef, useState, type FormEvent } from "react";

const services = [
  { value: "La coupe courte", price: "28 €" },
  { value: "Le travail de barbe", price: "18 €" },
  { value: "Coupe + barbe", price: "42 €" },
  { value: "La coupe junior", price: "20 €" },
];

const serviceValues: Record<string, string> = {
  coupe: "La coupe courte",
  barbe: "Le travail de barbe",
  duo: "Coupe + barbe",
  junior: "La coupe junior",
};

export default function BookingForm() {
  const formRef = useRef<HTMLFormElement>(null);
  const [message, setMessage] = useState(
    "La demande s'ouvre dans ta messagerie. Rien n'est confirmé avant notre réponse.",
  );

  useEffect(() => {
    const form = formRef.current;
    const dateField = form?.querySelector<HTMLInputElement>("#booking-date");
    if (!form || !dateField) return;

    const today = new Date();
    dateField.min = new Date(
      today.getTime() - today.getTimezoneOffset() * 60000,
    )
      .toISOString()
      .slice(0, 10);

    const requestedService = new URLSearchParams(window.location.search).get(
      "service",
    );
    const requestedValue = requestedService
      ? serviceValues[requestedService]
      : undefined;
    if (requestedValue) {
      const option = form.querySelector<HTMLInputElement>(
        `input[name="service"][value="${requestedValue}"]`,
      );
      if (option) option.checked = true;
    }
  }, []);

  function validateDate(event: React.ChangeEvent<HTMLInputElement>) {
    const weekday = event.currentTarget.valueAsDate?.getUTCDay();
    event.currentTarget.setCustomValidity(
      weekday === 0 || weekday === 1
        ? "Le salon est fermé le dimanche et le lundi. Choisis un jour du mardi au samedi."
        : "",
    );
  }

  function submitRequest(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const form = event.currentTarget;
    if (!form.reportValidity()) return;

    const formData = new FormData(form);
    const subject = `Demande de rendez-vous — ${formData.get("service")}`;
    const body = [
      "Bonjour Yacine,",
      "",
      `Je souhaite réserver : ${formData.get("service")}.`,
      `Date : ${formData.get("date")} à ${formData.get("time")}.`,
      `Nom : ${formData.get("name")}.`,
      `E-mail : ${formData.get("email")}.`,
      "",
      "À bientôt,",
    ].join("\n");
    setMessage(
      "Ta demande est prête : envoie le message depuis ta messagerie pour confirmer le rendez-vous.",
    );
    window.location.href = `mailto:rdv@letroisiemetemps.fr?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
  }

  return (
    <form
      className="booking-form"
      id="booking-form"
      ref={formRef}
      onSubmit={submitRequest}
    >
      <fieldset className="booking-service">
        <legend>Prestation</legend>
        <div className="service-options">
          {services.map((service, index) => (
            <label key={service.value}>
              <input
                type="radio"
                name="service"
                value={service.value}
                required={index === 0}
              />
              <span className="radio-name">{service.value}</span>
              <span className="radio-price">{service.price}</span>
            </label>
          ))}
        </div>
      </fieldset>
      <div className="booking-fields">
        <label className="form-field">
          <span>Nom</span>
          <input name="name" autoComplete="name" required placeholder="Ton nom" />
        </label>
        <label className="form-field">
          <span>E-mail</span>
          <input
            name="email"
            type="email"
            autoComplete="email"
            required
            placeholder="Pour confirmer le rendez-vous"
          />
        </label>
        <label className="form-field">
          <span>Jour</span>
          <input
            name="date"
            id="booking-date"
            type="date"
            required
            onChange={validateDate}
          />
        </label>
        <label className="form-field">
          <span>Heure</span>
          <select name="time" required defaultValue="">
            <option value="">Choisir une heure</option>
            <option>10:00</option>
            <option>11:00</option>
            <option>12:00</option>
            <option>14:00</option>
            <option>15:00</option>
            <option>16:00</option>
            <option>17:00</option>
            <option>18:00</option>
            <option>19:00</option>
          </select>
        </label>
      </div>
      <div className="booking-submit">
        <p id="booking-message" aria-live="polite">
          {message}
        </p>
        <button className="button button-lime" type="submit">
          Envoyer la demande
        </button>
      </div>
    </form>
  );
}
