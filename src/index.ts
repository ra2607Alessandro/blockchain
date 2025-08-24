import { BlockChain } from './blockchain'

// TODO: Create a new blockchain with difficulty
const blockchain = new BlockChain(4)

// TODO: Set how many blocks to create
const numberOfBlocks = 5 /* how many blocks? */
let chain =  blockchain.chain 

// TODO: Create a loop that makes multiple blocks

    for (let i = 1; i <= numberOfBlocks; i++) {
  // TODO: 1. Create a new block with some data
   const block = blockchain.createBlock(i)
  // TODO: 2. Mine the block  
  const mineblock = blockchain.mineBlock(block)
  // TODO: 3. Add the mined block to the chain
 
  const pushblock = blockchain.pushBlock(mineblock.minedBlock)
}

// TODO: Display the final blockchain
console.log('Final blockchain:', chain)
