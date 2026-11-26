# Baaru Solution website

Responsive static website for IoT applications, website development and website maintenance.

## Run locally
Open index.html or run `python -m http.server 8000`, then visit http://localhost:8000.

## Vercel deployment
Import this repository into Vercel. Choose **Other** as framework preset. Leave the build command empty and set output directory to `.` (repository root).

## Before publishing
- Replace the placeholder `hello@baarusolution.com` in index.html and script.js with the real business email.
- The contact form opens the visitor's email application; it does not store enquiries on a server. Connect a form service or API for online submissions.
- Google Fonts are loaded from Google Fonts.
