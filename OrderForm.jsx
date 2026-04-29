import React, { useMemo, useState } from "react";
import {
  COMMUNES,
  DELIVERY_DATES,
  DELIVERY_WINDOWS,
  PRODUCTS,
  buildOrderMessage,
  waLink,
} from "../data/products";
import { WhatsAppIcon } from "./WhatsAppIcon";

const initialOrder = {
  productId: PRODUCTS[0].id,
  customerName: "",
  recipientName: "",
  dedication: "",
  deliveryType: "Entrega a domicilio",
  commune: "Concepción",
  deliveryDate: DELIVERY_DATES[0],
  deliveryWindow: "Por coordinar",
  address: "",
  notes: "",
};

export function OrderForm() {
  const [order, setOrder] = useState(initialOrder);
  const [submitted, setSubmitted] = useState(false);

  const product = useMemo(
    () => PRODUCTS.find((item) => item.id === order.productId) ?? PRODUCTS[0],
    [order.productId],
  );

  const payload = {
    ...order,
    productName: product.name,
    price: product.price,
  };

  const isValid = order.customerName.trim().length >= 2;
  const whatsappMessage = buildOrderMessage(payload);
  const href = waLink(whatsappMessage);

  function update(field, value) {
    setOrder((current) => ({ ...current, [field]: value }));
  }

  function handleSubmit(event) {
    event.preventDefault();
    setSubmitted(true);

    if (!isValid) return;

    window.open(href, "_blank", "noopener,noreferrer");
  }

  return (
    <section id="reservar" className="bg-[var(--cream)] py-16 sm:py-20 px-6 sm:px-12 lg:px-18">
      <div className="max-w-[720px] mx-auto">
        <div className="text-center mb-8">
          <span className="inline-block bg-[var(--blush-light)] text-[var(--terracotta-dark)] text-xs font-semibold tracking-widest uppercase px-4 py-1.5 rounded-full mb-3">
            Reserva rápida
          </span>
          <h3 className="font-display text-[clamp(34px,8vw,52px)] text-[var(--text-dark)] leading-tight">
            Agenda tu regalo
          </h3>
          <p className="mt-3 text-[var(--text-light)] text-[clamp(15px,3.8vw,18px)] leading-relaxed">
            Completa los datos y se abrirá WhatsApp con el mensaje listo para enviar.
          </p>
        </div>

        <form onSubmit={handleSubmit} className="bg-[var(--ivory)] rounded-[28px] shadow-lg p-5 sm:p-8 grid gap-5">
          <div>
            <label className="form-label" htmlFor="productId">Producto</label>
            <select
              id="productId"
              className="form-control"
              value={order.productId}
              onChange={(event) => update("productId", event.target.value)}
            >
              {PRODUCTS.map((item) => (
                <option key={item.id} value={item.id}>{item.name} — {item.price}</option>
              ))}
            </select>
          </div>

          <div className="grid sm:grid-cols-2 gap-4">
            <div>
              <label className="form-label" htmlFor="customerName">Tu nombre *</label>
              <input
                id="customerName"
                className="form-control"
                value={order.customerName}
                onChange={(event) => update("customerName", event.target.value)}
                placeholder="Ej: Andrea"
              />
              {submitted && !isValid && (
                <p className="mt-2 text-sm text-[var(--terracotta-dark)]">Escribe tu nombre para continuar.</p>
              )}
            </div>

            <div>
              <label className="form-label" htmlFor="recipientName">Nombre de mamá</label>
              <input
                id="recipientName"
                className="form-control"
                value={order.recipientName}
                onChange={(event) => update("recipientName", event.target.value)}
                placeholder="Ej: María"
              />
            </div>
          </div>

          <div>
            <label className="form-label" htmlFor="dedication">Dedicatoria</label>
            <textarea
              id="dedication"
              className="form-control min-h-[112px] resize-y"
              value={order.dedication}
              onChange={(event) => update("dedication", event.target.value)}
              placeholder="Ej: Gracias por tu amor infinito. Te amo, mamá."
              maxLength={220}
            />
            <p className="mt-2 text-xs text-[var(--text-light)] text-right">{order.dedication.length}/220</p>
          </div>

          <div className="grid sm:grid-cols-2 gap-4">
            <div>
              <label className="form-label" htmlFor="deliveryType">Modalidad</label>
              <select
                id="deliveryType"
                className="form-control"
                value={order.deliveryType}
                onChange={(event) => update("deliveryType", event.target.value)}
              >
                <option>Entrega a domicilio</option>
                <option>Retiro coordinado</option>
              </select>
            </div>

            <div>
              <label className="form-label" htmlFor="commune">Comuna</label>
              <select
                id="commune"
                className="form-control"
                value={order.commune}
                onChange={(event) => update("commune", event.target.value)}
              >
                {COMMUNES.map((commune) => (
                  <option key={commune}>{commune}</option>
                ))}
              </select>
            </div>
          </div>

          <div className="grid sm:grid-cols-2 gap-4">
            <div>
              <label className="form-label" htmlFor="deliveryDate">Fecha</label>
              <select
                id="deliveryDate"
                className="form-control"
                value={order.deliveryDate}
                onChange={(event) => update("deliveryDate", event.target.value)}
              >
                {DELIVERY_DATES.map((date) => (
                  <option key={date}>{date}</option>
                ))}
              </select>
            </div>

            <div>
              <label className="form-label" htmlFor="deliveryWindow">Horario</label>
              <select
                id="deliveryWindow"
                className="form-control"
                value={order.deliveryWindow}
                onChange={(event) => update("deliveryWindow", event.target.value)}
              >
                {DELIVERY_WINDOWS.map((window) => (
                  <option key={window}>{window}</option>
                ))}
              </select>
            </div>
          </div>

          <div>
            <label className="form-label" htmlFor="address">Dirección o referencia</label>
            <input
              id="address"
              className="form-control"
              value={order.address}
              onChange={(event) => update("address", event.target.value)}
              placeholder="Ej: Sector, calle o punto de referencia"
            />
          </div>

          <div>
            <label className="form-label" htmlFor="notes">Notas adicionales</label>
            <textarea
              id="notes"
              className="form-control min-h-[90px] resize-y"
              value={order.notes}
              onChange={(event) => update("notes", event.target.value)}
              placeholder="Ej: Confirmar valor de despacho antes de pagar."
            />
          </div>

          <div className="rounded-2xl bg-[var(--cream)] p-4 text-sm text-[var(--text-body)] leading-relaxed">
            <strong>Mensaje listo:</strong>
            <pre className="mt-2 whitespace-pre-wrap font-body text-xs text-[var(--text-light)]">{whatsappMessage}</pre>
          </div>

          <button
            type="submit"
            className="inline-flex items-center justify-center gap-2.5 bg-[var(--terracotta)] text-white font-semibold text-[17px] px-9 py-4 rounded-full w-full shadow-lg hover:-translate-y-0.5 hover:shadow-xl transition-all duration-300"
          >
            <WhatsAppIcon fill="#fff" />
            Enviar reserva por WhatsApp
          </button>
        </form>
      </div>
    </section>
  );
}
