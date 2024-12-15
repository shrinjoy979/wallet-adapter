import React, { FC, useMemo } from 'react';
import { ConnectionProvider, WalletProvider } from '@solana/wallet-adapter-react';
import { WalletAdapterNetwork } from '@solana/wallet-adapter-base';
import { UnsafeBurnerWalletAdapter } from '@solana/wallet-adapter-wallets';
import {
    WalletModalProvider,
    WalletDisconnectButton,
    WalletMultiButton
} from '@solana/wallet-adapter-react-ui';
import { clusterApiUrl } from '@solana/web3.js';
import { RequestAirdrop } from './RequestAirdrop';
import { ShowBalance } from './ShowBalance';
import { SendTokens } from './SendTokens';

// Default styles that can be overridden by your app
import '@solana/wallet-adapter-react-ui/styles.css';

function App() {

  return (
    // https://solana-devnet.g.alchemy.com/v2/IR7u23Ytxfa-vBJZhy2fXkTnvxKGUPUa | https://api.devnet.solana.com
    <ConnectionProvider endpoint={"https://solana-devnet.g.alchemy.com/v2/IR7u23Ytxfa-vBJZhy2fXkTnvxKGUPUa"}>
      <WalletProvider wallets={[]} autoConnect>
          <WalletModalProvider>
            <WalletMultiButton></WalletMultiButton>
            <WalletDisconnectButton></WalletDisconnectButton>
            <RequestAirdrop />
            <ShowBalance />
            <SendTokens />
          </WalletModalProvider>
      </WalletProvider>
    </ConnectionProvider>
  )
}

export default App
