import { createHmac } from "crypto"

const generateSecret: (secretName: string, namespace: string) => string = (secretName, namespace) => {
  return createHmac("sha3-256", namespace).update(secretName).digest("hex")
}

const cspDirectives = {
  "default-src": ["*", "'self'", "'unsafe-inline'", "'unsafe-eval'"],
  "script-src": ["*", "'unsafe-inline'", "'unsafe-eval'"],
  "style-src": ["*", "'unsafe-inline'"],
  "connect-src": ["*", "'unsafe-inline'"],
  "img-src": ["*", "data:", "blob:", "'unsafe-inline'"],
  "font-src": ["*", "data:", "'self'", "'unsafe-inline'"],
  "frame-src": ["*"],
  "media-src": ["*", "'self'"],
}

const publicConfig = { defer: true }

const cspConfig = {
  contentSecurityPolicy: {
    useDefaults: false,
    directives: {
      upgradeInsecureRequests: null,
      ...cspDirectives,
    },
  },
}

export { cspConfig, cspDirectives, generateSecret, publicConfig }
