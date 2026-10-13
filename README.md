# byu. — Landing

Landing de **byu.**: automatización con IA para negocios de servicios (WhatsApp 24/7, turnos, recordatorios y cobros). No nombra rubros a propósito, para no dejar afuera a ningún negocio.
El diseño viene de Claude Design y está pasado a HTML/CSS/JS propio, sin dependencias. Solo usa Google Fonts.

## Archivos
- `index.html`: estructura y textos fijos. Los logos y las mascotas van como SVG inline para poder animarlos.
- `styles.css`: los estilos.
- `script.js`: los chats de ejemplo y las animaciones. Los demás textos están en `index.html`.
- `assets/favicon.svg`: el isotipo `b.`.

## Qué tiene
- **La transformación:** 6 tarjetas que pasan de "Antes" a "Con byu." (WhatsApp, agenda, ausencias, cobros, clientes y decisiones). La primera vez que aparecen en pantalla se transforman solas. Un medidor muestra cuántas partes están en automático y La Y crece y festeja al llegar a 6 de 6.
- Animaciones de marca: el logo arma sus letras, el punto vuela al primer título y los títulos aparecen palabra por palabra.
- El búho parpadea y sus ojos siguen el mouse.
- Una demo de chat de WhatsApp y una sección de día a noche con la hora que se mueve.
- Respeta la opción "reducir movimiento" del sistema.

## SEO
- Título y descripción con palabras clave del nicho: automatización con IA, WhatsApp, turnos, recordatorios, cobros, negocios de servicios, Argentina.
- URL canónica, Open Graph y Twitter con imagen `assets/og-byu.png` (1200×630).
- Datos estructurados (JSON-LD): `ProfessionalService` con los 3 planes, `WebSite` y `FAQPage`.
- `sitemap.xml`, `robots.txt` (sirve cuando haya dominio propio), `site.webmanifest` e íconos PNG.
- Textos clave en el HTML (no se generan con JS), para que Google los lea directo.

## Pendientes antes de salir a vender
- ✅ `script.js` → `NUMERO`: cargado (11 2154-7064 → `5491121547064`).
- `script.js` → `INSTAGRAM_URL`: cuando esté confirmado el usuario.
- Fotos del equipo en `index.html` (hoy hay iniciales).
- Precios a confirmar entre los socios.

## Vista en dispositivos
`dispositivos.html` muestra la landing en 7 pantallas a la vez, desde celulares hasta un monitor Full HD. Todas se pueden usar y el scroll se mueve sincronizado.
Versión publicada: https://byusoftware.com/dispositivos.html

## Correr localmente
```bash
python3 -m http.server 8080
```
Después abrí http://localhost:8080.
