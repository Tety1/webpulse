# PulseDesk DIST — sitio web

Sitio comercial de PulseDesk DIST listo para publicar con GitHub Pages.

## Publicación

1. Reemplazá el contenido del repositorio por los archivos de este paquete.
2. Subí los cambios a la rama `main`.
3. En **Settings → Pages → Source**, elegí **GitHub Actions**.

Cada nuevo cambio enviado a `main` compila y publica el sitio automáticamente.

## Uso local

Requiere Node.js 22 o superior.

```bash
npm install
npm run dev
```

Para verificar la versión de producción:

```bash
npm run build
npm run preview
```
