import { useConnection, useWallet } from "@solana/wallet-adapter-react"
import { useEffect } from "react";
import { LAMPORTS_PER_SOL } from "@solana/web3.js";

export function ShowBalance() {
    const wallet = useWallet();
    const { connection } = useConnection();

    async function getBalance() { 
        if (wallet.publicKey) {
            const balance = await connection.getBalance(wallet.publicKey);
            document.getElementById("balance").innerHTML = balance / LAMPORTS_PER_SOL;
        }
    }

    useEffect(() => {
        getBalance();
    }, [wallet])

    return <div>
        {wallet.publicKey ?
            <p>SOL Balance: <span id="balance"></span>SOL</p>
        : null }
    </div>
}
