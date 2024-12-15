import { ed25519 } from '@noble/curves/ed25519';
import { useWallet } from '@solana/wallet-adapter-react';
import bs58 from 'bs58';
import React, { useState } from 'react';

export function SignMessage() {
    const { publicKey, signMessage } = useWallet();
    const [signature, setSignature] = useState();

    async function onClick() {
        if (!publicKey) throw new Error('Wallet not connected!');
        if (!signMessage) throw new Error('Wallet does not support message signing!');
        
        const message = document.getElementById("message").value;
        const encodedMessage = new TextEncoder().encode(message);
        setSignature(await signMessage(encodedMessage));
        // const signature = await signMessage(encodedMessage);

        if (!ed25519.verify(signature, encodedMessage, publicKey.toBytes())) throw new Error('Message signature invalid!');
        alert(`Message signature: ${bs58.encode(signature)}`);
    };

    return (
        <div>
            <input id="message" type="text" placeholder="Message" />
            {signature ? <p>{`Message signature: ${bs58.encode(signature)}`}</p> : null}
            <button onClick={onClick}>
                Sign Message
            </button>
        </div>
    );
};
