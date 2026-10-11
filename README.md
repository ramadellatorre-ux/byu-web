# byu. — Landing

Landing de **byu.**, un estudio que automatiza clínicas y gimnasios con WhatsApp 24/7, turnos, recordatorios y cobros.
El diseño viene de Claude Design y está pasado a HTML/CSS/JS propio, sin dependencias. Solo usa Google Fonts.

## Archivos
- `index.html`: estructura y textos fijos. Los logos y las mascotas van como SVG inline para poder animarlos.
- `styles.css`: los estilos.
- `script.js`: el contenido por rubro (clínica y gimnasio) y las animaciones.
- `assets/favicon.svg`: el isotipo `b.`.

## Qué tiene
- Un selector de clínica o gimnasio que cambia los textos, el chat, las tarjetas, la calculadora y la sección de noche. La elección se recuerda.
- Animaciones de marca:
  - el logo arma sus letras y el punto cae rebotando;
  - el punto "vuela" al primer título;
  - los títulos aparecen palabra por palabra.
- El búho parpadea y sus ojos siguen el mouse. La Y festeja en la calculadora.
- Una demo de chat de WhatsApp, tarjetas que se dan vuelta ("Hoy" y "Con byu."), la calculadora de plata perdida y una sección de día a noche.
- Respeta la opción "reducir movimiento" del sistema.

## Pendientes antes de salir a vender
- `script.js` → `NUMERO`: el número de WhatsApp, con código de país y sin `+`. Mientras esté vacío, el formulario muestra el mensaje en **modo prueba**.
- `script.js` → `INSTAGRAM_URL`: cuando esté confirmado el usuario.
- Fotos del equipo en `index.html` (hoy hay iniciales).
- Precios a confirmar entre los socios.

## Vista en dispositivos
`dispositivos.html` muestra la landing en 7 pantallas a la vez, desde celulares hasta un monitor Full HD. Todas se pueden usar y el scroll se mueve sincronizado.
Versión publicada: https://ramadellatorre-ux.github.io/byu-web/dispositivos.html

## Correr localmente
```bash
python3 -m http.server 8080
```
Después abrí http://localhost:8080.
