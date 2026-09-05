import { cp, mkdir } from 'node:fs/promises'

const routes = ['about', 'contact', 'faq', 'privacy-policy', 'terms-of-service']

for (const route of routes) {
  await mkdir(`dist/${route}`, { recursive: true })
  await cp('dist/index.html', `dist/${route}/index.html`)
}
