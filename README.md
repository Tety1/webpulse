# PulseDesk — Home V5

Sitio estático premium para GitHub Pages. No requiere Node, React ni backend.

## Probar en Windows

```bat
cd /d C:\pulsedesk-home-v5
python -m http.server 5500 --bind 127.0.0.1
```

Abrir: http://127.0.0.1:5500

## Arquitectura

- `index.html`: Home completa.
- `styles.css`: sistema visual y responsive.
- `app.js`: navegación, scroll, escenas, cursor técnico y animaciones GSAP.
- `assets/img`: fotografías reales optimizadas en WebP.
- Páginas SEO:
  - `/servicio-tecnico-pc-rosario/`
  - `/soporte-informatico-empresas-rosario/`
  - `/redes-camaras-seguridad-rosario/`
  - `/desarrollo-software-rosario/`
  - `/automatizaciones-ia-empresas/`
- `robots.txt` y `sitemap.xml`.
- Datos estructurados Schema.org.
- `.github/workflows/pages.yml`: publicación automática en GitHub Pages.

## Publicar en GitHub Pages

1. Crear un repositorio y subir estos archivos a la rama `main`.
2. En GitHub: **Settings → Pages → Source → GitHub Actions**.
3. Hacer push a `main`. El workflow construye `dist/` y publica el sitio.
4. El workflow detecta automáticamente la URL `https://USUARIO.github.io/REPOSITORIO`.
5. Si usás dominio propio, crear una variable de repositorio llamada `SITE_URL` con la URL completa, por ejemplo `https://pulsedesk.com.ar`.

## SEO después de publicar

- Conectar el dominio con Google Search Console.
- Enviar `/sitemap.xml`.
- Crear/completar el Perfil de Empresa de Google con datos reales, zona de atención, teléfono, horarios, servicios y fotografías propias.
- Conseguir reseñas reales de clientes y mantener NAP/datos comerciales consistentes.
- Ir reemplazando fotos de stock por trabajos propios de PulseDesk.
- Cuando exista domicilio comercial público, se puede evaluar agregar marcado `LocalBusiness` con la dirección real. En esta versión no se inventó una dirección.

## Build manual con URL final

```bat
python tools\build.py --site-url "https://usuario.github.io/pulsedesk"
```

El sitio listo queda en `dist/`.
