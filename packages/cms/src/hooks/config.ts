import { createHmac } from "crypto"

const generateSecret: (secretName: string, namespace: string) => string = (secretName, namespace) => {
  return createHmac("sha3-256", namespace).update(secretName).digest("hex")
}

// @formatter:off
const cspDirectives = {
  "default-src": ["*", "'self'", "'unsafe-inline'", "'unsafe-eval'"],
  "script-src": ["*", "'unsafe-inline'", "'unsafe-eval'"],
  "style-src": ["*", "'unsafe-inline'"],
  "connect-src": ["*", "'unsafe-inline'"],
  "img-src": ["*", "data:", "blob:", "'unsafe-inline'"],
  "frame-src": ["*"],
}
// @formatter:on

export { cspDirectives, generateSecret }
