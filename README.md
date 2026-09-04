# PULSEDESK DIST — Landing para comercios

Landing estática, responsive y sin dependencias de build. Se puede probar abriendo `index.html` o usando un servidor local.

## Probar localmente

### Opción rápida
Abrí `index.html` con el navegador.

### Opción recomendada
Con Python instalado:

```bash
python -m http.server 5500
```

Luego abrir:

```text
http://localhost:5500
```

## WhatsApp

El sitio ya está configurado para contactar a **+54 341 901 8944**.

- El formulario de demo abre WhatsApp con los datos cargados por el visitante.
- El botón flotante inferior abre un chat directo con PULSEDESK.

## Publicar en GitHub Pages

1. Crear un repositorio nuevo en GitHub.
2. Subir `index.html`, `styles.css`, `script.js` y la carpeta `assets`.
3. Ir a **Settings → Pages**.
4. En **Build and deployment**, elegir **Deploy from a branch**.
5. Seleccionar `main` y carpeta `/ (root)`.
6. Guardar.

GitHub publicará el sitio en una URL similar a:

```text
https://TU-USUARIO.github.io/TU-REPOSITORIO/
```

## Estructura

```text
pulsedesk-comercio-web/
├─ index.html
├─ styles.css
├─ script.js
├─ README.md
└─ assets/
   ├─ favicon.svg
   └─ whatsapp.png
```

## Personalización rápida

- Textos y secciones: `index.html`
- Colores, espaciados y responsive: `styles.css`
- WhatsApp, animaciones y formulario: `script.js`
- Icono del sitio: `assets/favicon.svg`
- Logo del botón flotante de WhatsApp: `assets/whatsapp.png`

La landing no necesita Node, npm ni compilación para publicarse en GitHub Pages.
