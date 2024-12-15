import { useConnection, useWallet } from "@solana/wallet-adapter-react"
import { LAMPORTS_PER_SOL } from "@solana/web3.js";

export function RequestAirdrop() {
    const wallet = useWallet();
    const { connection } = useConnection();

    async function sendAirdropToUser() {
        const amount = document.getElementById("amount").value;
        await connection.requestAirdrop(wallet.publicKey, amount * LAMPORTS_PER_SOL);
        alert("airdropped sol");
    }

    return <div>
        {wallet.publicKey ?
            <>
                Public Address: {wallet.publicKey?.toBase58()}<br/><br/> {/* solana address is 58 bit */}
            </>
        : null }
        <input id="amount" type="text" placeholder="Amount"/>
        <button onClick={sendAirdropToUser}>Send Airdrop</button>
    </div>
}
