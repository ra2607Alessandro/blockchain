import { match } from 'assert'
import { hash, isHashProofed } from './helpers'
export interface Block {
  header: {
    nonce: number        // Mining attempt counter
    blockHash: string    // Hash of the payload
  }
  payload: {
    sequence: number     // Block number in chain
    timestamp: number    // When block was created
    data: any           // Block content
    previousHash: string // Links to previous block
  }
}
export class BlockChain {
   chain: Block[] = []
  private powPrefix = '0'
  
  constructor(private readonly difficulty: number = 4) {
    // TODO: Push genesis block to chain
    this.chain.push(this.createGenesisBlock()) 
  }

  private createGenesisBlock() : Block{
    // TODO: Create the first block with:
    // - sequence: 0
    // - timestamp: current time
    // - data: 'Genesis Block'
    // - previousHash: '' (empty)
    // - nonce: 0
    // - blockHash: hash of the payload
    const payload = {
        sequence: 0,
        timestamp: Date.now(),
        data: "Genesis Block",
        previousHash: ""
        
    }
    return {
     header : {
        nonce: 0,
        blockHash: hash(JSON.stringify(payload))
    }, payload

  }
}

 private get lastBlock(): Block {
  // TODO: Return the last block in the chain
  return this.chain.at(-1) as Block
}
private getPreviousBlockHash(): string {
  // TODO: Return just the hash string
  return this.lastBlock.header.blockHash
}
createBlock(data: any) {
  const newBlock = {
    sequence: this.lastBlock.payload.sequence + 1/* TODO: last block sequence + 1 */,
    timestamp: Date.now() /* TODO: current timestamp */,
    data,
    previousHash: this.lastBlock.header.blockHash /* TODO: get hash of last block */
  }
  return newBlock
}
mineBlock(block: Block['payload']) {
  let nonce = 0
  const startTime = Date.now()
  
  while (true) {
    // TODO: 
    // 1. Hash the block payload
    const payhash = hash(JSON.stringify(block))
    // 2. Create proofing hash by hashing (blockHash + nonce)
    const proofing= hash(payhash + nonce)
    // 3. Check if proofing hash meets difficulty requirement
   if (isHashProofed(
    {hash: proofing, difficulty: this.difficulty, prefix: this.powPrefix} 
   ))
    // 4. If yes, return the mined block
   return {
          minedBlock: { payload: { ...block }, header: { nonce, blockHash: payhash } },
          minedHash: proofing,
          
    // 5. If no, increment nonce and try again
  }
  
    nonce++
  
 
}

}
verifyBlock(block: Block): boolean {
  // TODO: Check two things:
  // 1. Does previousHash match the actual previous block's hash?
  // Does previousHash match the actual previous block's hash?
if (block.payload.previousHash !== this.getPreviousBlockHash()) {
  // This block is lying about where it connects!
  return false
}
  // 2. Is the block properly mined (hash meets difficulty)?
if ( !isHashProofed({
      hash: hash(hash(JSON.stringify(block.payload)) + block.header.nonce),
      difficulty: this.difficulty,
      prefix: this.powPrefix}))
      return false

else {return true} 
}

pushBlock(block: Block) {
  // TODO: Verify block, then add to chain if valid
  if (this.verifyBlock(block)===true)
    return this.chain.push(block)
 else {
  // Block is invalid - what should happen?
   throw new Error ("Invalid Block")
  }}

}
