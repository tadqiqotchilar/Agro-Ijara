import { defineConfig, loadEnv } from 'vite'
import react from '@vitejs/plugin-react'

// Dev-only middleware so `npm run dev` can exercise /api/telegram.js
// the same way Vercel's serverless runtime does in production.
function telegramApiDevMiddleware() {
  return {
    name: 'telegram-api-dev-middleware',
    configureServer(server) {
      server.middlewares.use('/api/telegram', async (req, res) => {
        if (req.method !== 'POST') {
          res.statusCode = 405
          res.end()
          return
        }

        let raw = ''
        req.on('data', (chunk) => { raw += chunk })
        req.on('end', async () => {
          try {
            req.body = raw ? JSON.parse(raw) : {}
          } catch {
            req.body = {}
          }

          const shimRes = {
            status(code) {
              res.statusCode = code
              return this
            },
            json(payload) {
              res.setHeader('Content-Type', 'application/json')
              res.end(JSON.stringify(payload))
            },
          }

          const { default: handler } = await import('./api/telegram.js')
          await handler(req, shimRes)
        })
      })
    },
  }
}

// https://vite.dev/config/
export default defineConfig(({ mode }) => {
  Object.assign(process.env, loadEnv(mode, process.cwd(), ''))

  return {
    plugins: [react(), telegramApiDevMiddleware()],
  }
})
