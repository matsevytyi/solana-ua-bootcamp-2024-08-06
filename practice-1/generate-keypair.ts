import { Keypair } from "@solana/web3.js";

const keypair = Keypair.generate();

console.log(keypair.secretKey);
console.log(keypair.publicKey.toBase58());
console.log('done')