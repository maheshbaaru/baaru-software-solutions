# Baru Software Solutions — Angular

A responsive Angular application for Baru Software Solutions, featuring IoT applications, website development, website maintenance and the TripBuddies in-house product.

## Stack
- Angular 22 standalone components
- TypeScript, Angular Router and Reactive Forms
- Responsive CSS
- Vercel deployment configuration

## Run locally
Requirements: Node.js 22.22.3+ (or 24.15.0+) and npm.

```bash
npm install
npm start
```

Open the local URL printed by Angular CLI (normally http://localhost:4200).

## Production build
```bash
npm run build
```

The browser build is generated at `dist/baaru-solution/browser`.

## Deploy to Vercel
Import this GitHub repository into Vercel and configure:
- Framework preset: Angular
- Build command: `npm run build`
- Output directory: `dist/baaru-solution/browser`
- Install command: `npm install`

The included `vercel.json` rewrites client-side routes to the Angular entry point.

## Before launch
- Replace `hello@baarusolution.com` in `src/app/pages/landing-page.component.ts` and the contact section in `src/app/pages/landing-page.component.html` with the real business email.
- The enquiry form validates fields and opens the visitor's email application. It does not store enquiries. Connect a backend/API or hosted form provider to collect enquiries online.
