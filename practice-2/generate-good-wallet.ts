import "dotenv/config";
import {
    Keypair,
} from "@solana/web3.js";

let count = 0;

async function generateKeypairWithPrefix(prefix) {
    while (true) {

        if (count % 10000 === 0) {
            console.log(`Перебрано ${count} ключів`);
        }

        const keypair = Keypair.generate();

        const publicKey = keypair.publicKey.toString();

        if (publicKey.startsWith(prefix)) {
            return { keypair, publicKey };
        }

        count++;

    }
}

(async () => {
    const prefix = "and";
    const { keypair, publicKey } = await generateKeypairWithPrefix(prefix);

    console.log(`Знайдено ключ з префіксом '${prefix}': ${publicKey}`);
    console.log(`Приватний ключ: ${keypair.secretKey}`);
})();
