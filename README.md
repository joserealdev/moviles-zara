# Tienda de Teléfonos Móviles

Una aplicación moderna de comercio electrónico que muestra teléfonos móviles con transiciones de página suaves y seguridad robusta. Construida con Next.js y la nueva API View Transition de React.

## Características

- **Renderizado del Lado del Servidor (SSR)** para un rendimiento óptimo y SEO
- **Transiciones suaves entre páginas** utilizando la API experimental View Transition de React
- **Seguridad por defecto** con una Política de Seguridad de Contenido (CSP) completa
- **Diseño responsive** para todos los tamaños de dispositivos
- **Catálogo de productos** con información detallada de teléfonos

## Tecnologías Utilizadas

- [Next.js](https://nextjs.org/) - Framework de React para SSR y generación estática
- [React](https://react.dev/) - Biblioteca de UI
- [View Transitions API](https://developer.mozilla.org/en-US/docs/Web/API/View_Transitions_API) - Para transiciones suaves entre páginas
- Política de Seguridad de Contenido (CSP) - A través de middleware personalizado

## Comenzando

### Requisitos Previos

- Node.js (ver [`.nvmrc`](.nvmrc) para la versión)
- npm o yarn

### Instalación

1. Clonar el repositorio

```bash
git clone git@github.com:joserealdev/moviles-zara.git
cd moviles-zara
```

2. Instalar dependencias

```bash
npm install
# o
yarn
```

3. Iniciar el servidor de desarrollo

```bash
npm run dev
# o
yarn dev
```

4. Abrir [http://localhost:3000](http://localhost:3000) en tu navegador

## Detalles Clave de Implementación

### Obtención de Datos en el Servidor (Fetch)

La aplicación utiliza las capacidades incorporadas de Next.js para cargar datos de productos en el servidor:

### View Transitions para Navegación Suave

La aplicación aprovecha la API experimental View Transition de React para crear animaciones suaves entre páginas:

```tsx
// Desde src/components/ProductCard/index.tsx
import { unstable_ViewTransition as ViewTransition } from "react";

// ...

<ViewTransition name={`phone-${product.id}`}>
  <Image
    src={product.imageUrl}
    alt={product.name}
    className={styles.image}
    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 20vw"
    loading="lazy"
    fill
  />
</ViewTransition>;
```

Esto crea una transición fluida al navegar desde la lista de productos a una página de detalle del producto.

### Middleware para Política de Seguridad de Contenido

La aplicación implementa una fuerte Política de Seguridad de Contenido a través de un middleware personalizado:

```typescript
// src/middleware.ts
export function middleware() {
  const response = NextResponse.next();
  const { csp } = getCSPDirectives();

  // Cabeceras de seguridad
  response.headers.set("X-Frame-Options", "SAMEORIGIN");
  response.headers.set("X-Content-Type-Options", "nosniff");
  response.headers.set("X-XSS-Protection", "1; mode=block");
  response.headers.set("Referrer-Policy", "strict-origin-when-cross-origin");
  response.headers.set(
    "Permissions-Policy",
    "camera=(), microphone=(), interest-cohort=()"
  );
  response.headers.set("Content-Security-Policy", csp);

  return response;
}
```

## Estructura del Proyecto

```
├── .next/               # Salida de compilación de Next.js
├── public/              # Activos estáticos
├── src/
│   ├── api/             # Servicios de API
│   ├── components/      # Componentes de React
│   │   └── ProductCard/ # Componente de tarjeta de producto con View Transitions
│   ├── middleware.ts    # Implementación de CSP
└── ...
```

## Compilación para Producción

```bash
npm run build
npm start
# o
yarn build
yarn start
```
