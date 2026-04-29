# Catálogo Día de la Madre

Landing/catalogo digital en React + Tailwind para vender por WhatsApp.

## Qué incluye

- Hero visual con imagen principal.
- Producto destacado.
- Pasos de compra.
- Formulario de reserva.
- Mensaje dinámico para WhatsApp.
- Bloques de confianza.
- CTA final.
- Botón flotante de WhatsApp.

## Correr localmente

```bash
npm install
npm run dev
```

Luego abre la URL que entregue Vite.

## Build para producción

```bash
npm run build
npm run preview
```

## Dónde editar

### Producto, precio, número y textos

Edita:

```text
src/data/products.js
```

Ahí puedes cambiar:

- `WHATSAPP_NUMBER`
- nombre del producto
- precio
- descripción
- beneficios
- imagen
- fechas
- comunas
- textos principales

### Imagen principal

La imagen está en:

```text
public/images/corazon-rosas.png
```

Puedes reemplazarla manteniendo el mismo nombre o editar el campo `image` en `src/data/products.js`.

## Funcionamiento de WhatsApp

El formulario genera un mensaje con:

- producto
- precio
- nombre
- destinataria
- comuna
- fecha
- horario
- modalidad
- dirección
- dedicatoria
- notas

Al presionar el botón, abre WhatsApp con el mensaje prellenado.

## Siguiente mejora recomendada

Conectar el formulario con n8n usando un webhook antes de abrir WhatsApp para guardar cada lead en Notion o Google Sheets.
