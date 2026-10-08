import { cp, mkdir } from 'node:fs/promises'

const routes = [
  'about',
  'contact',
  'faq',
  'privacy-policy',
  'terms-of-service',
  'guides',
  'guides/mobile-plan-guide',
  'guides/internet-plan-guide',
  'guides/switching-guide'
]

for (const route of routes) {
  await mkdir(`dist/${route}`, { recursive: true })
  await cp('dist/index.html', `dist/${route}/index.html`)
}

await cp('dist/index.html', 'dist/404.html')

await mkdir('dist/nexvoro', { recursive: true })
await cp('scripts/nexvoro-redirect.html', 'dist/nexvoro/index.html')
