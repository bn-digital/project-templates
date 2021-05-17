import { Request, Response } from 'express'
import { Algorithm, verify } from 'jsonwebtoken'

type User = { id: string }

const JWT_PASSPHRASE = process.env.JWT_PASSPHRASE as string
const JWT_ALGORITHM: Algorithm = (process.env.JWT_ALGORITHM as Algorithm) || 'HS256'

export const context = ({ req, res }: { req: Request; res: Response }) => {
  const authHeader = req.headers.authorization || ''
  if (authHeader !== '') {
    const bearerToken = authHeader.split(' ')
    if (bearerToken.length === 2 || bearerToken[0].toLowerCase() === 'bearer') {
      verify(bearerToken[1], JWT_PASSPHRASE, { algorithms: [JWT_ALGORITHM] }, (error, user: User | any) => {})
    }
  }
  return { res }
}
