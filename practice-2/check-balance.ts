import "dotenv/config";
import {
    Connection,
    LAMPORTS_PER_SOL,
    PublicKey,
    clusterApiUrl,
} from "@solana/web3.js";

const connection = new Connection(clusterApiUrl("devnet"));
console.log('connected to devnet')

const publicKey = new PublicKey('DMWvEfaUU9DXTiPMHisLq9zh2LExwffkDDBTHzqpRW8c');
const balanceInLamPorts = await connection.getBalance(publicKey);

const balanceInSol = balanceInLamPorts / LAMPORTS_PER_SOL;

console.log('there is ', balanceInSol, 'on wallet', publicKey);