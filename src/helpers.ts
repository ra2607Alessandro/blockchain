// src/helpers.ts
import { createHash } from 'crypto'

export function hash(data: string): string {
  // TODO: Use createHash with 'sha256' algorithm
  // Return the hex digest
  return createHash("sha256").update(data).digest("hex")
}

export function isHashProofed({ hash, difficulty= 4, prefix= "0"}: {
  hash: string
  difficulty?: number
  prefix?: string
}): boolean {

  // TODO: Check if hash starts with repeated prefix (difficulty times)
  // Default difficulty: 4, default prefix: '0'
  const check = prefix.repeat(difficulty) 
  return hash.startsWith(check)}