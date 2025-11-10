This is a [Next.js](https://nextjs.org) project bootstrapped with [`create-next-app`](https://nextjs.org/docs/app/api-reference/cli/create-next-app).

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.tsx`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/app/building-your-application/optimizing/fonts) to automatically optimize and load [Geist](https://vercel.com/font), a new font family for Vercel.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/app/building-your-application/deploying) for more details.



## 🧱 PASO 1: Crear el proyecto base

Abre una terminal y ejecuta:

```bash
npx create-next-app@latest preparcial-next --typescript
```

Cuando te pregunte:

* ✔ ¿Quieres usar `eslint`? → **Yes**
* ✔ ¿Quieres usar `tailwind`? → **Yes** (te ayudará con el diseño rápido)
* ✔ ¿Quieres usar `src/` directory? → **Yes**
* ✔ ¿Quieres usar `App Router`? → **Yes**
* ✔ ¿Quieres usar `import alias`? → **Yes** (deja el alias como `@/*`)

Esto creará la base con carpetas como:

```
preparcial-next/
├── public/
├── src/
│   ├── app/
│   │   ├── globals.css
│   │   ├── layout.tsx
│   │   └── page.tsx
│   ├── components/
│   └── ...
└── package.json
```

---

## 🧩 PASO 2: Instalar dependencias adicionales

Desde dentro del proyecto:

```bash
cd preparcial-next
npm install axios zustand
```

Estas librerías te servirán para:

* **axios:** hacer peticiones HTTP a la API.
* **zustand:** manejar el estado global (por ejemplo, guardar el token del usuario).

---

## 🗂️ PASO 3: Crear la estructura de carpetas

Ahora, dentro de `src/app/`, vas a crear estas carpetas y archivos:

```
src/
├── app/
│   ├── login/
│   │   └── page.tsx
│   ├── feed/
│   │   └── page.tsx
│   ├── post/
│   │   └── [id]/
│   │       └── page.tsx
│   └── providers/
│       └── auth-provider.tsx
│
├── components/
│   ├── login-form.tsx
│   ├── post-form.tsx
│   ├── post-list.tsx
│   ├── comment-form.tsx
│   ├── comment-list.tsx
│   └── user-info.tsx
│
└── store/
    └── authStore.ts
```

Puedes crear estas carpetas fácilmente desde VSCode:

1. Click derecho en `src` → **New Folder** → `app`
2. Dentro de `app`, crea las carpetas: `login`, `feed`, `post`, `providers`
3. Dentro de `post`, crea la subcarpeta `[id]`
4. Luego crea la carpeta `components` y `store`

---

## 📦 PASO 4: Estructura final esperada

Cuando termines, debe verse así:

```
C:.
│   .gitignore
│   next.config.ts
│   package.json
│   postcss.config.mjs
│   README.md
│   tailwind.config.ts
│   tsconfig.json
│
├───public
│       next.svg
│       vercel.svg
│
└───src
    ├───app
    │   │   globals.css
    │   │   layout.tsx
    │   │   page.tsx
    │   │
    │   ├───login
    │   │       page.tsx
    │   │
    │   ├───feed
    │   │       page.tsx
    │   │
    │   ├───post
    │   │   └───[id]
    │   │           page.tsx
    │   │
    │   └───providers
    │           auth-provider.tsx
    │
    ├───components
    │       login-form.tsx
    │       post-form.tsx
    │       post-list.tsx
    │       comment-form.tsx
    │       comment-list.tsx
    │       user-info.tsx
    │
    └───store
            authStore.ts
```


