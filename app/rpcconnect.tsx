"use client"

import { NextPage } from 'next';


interface ExtendedWindow extends Window {
  ethereum?: any;
}

const ConnectRPC: NextPage = () => {
  const addCustomNetwork = async () => {
    try {
      if (!(window as ExtendedWindow).ethereum) {
        throw new Error('MetaMask is not installed or not detected.');
      }

      const customRpcUrl = 'https://rpc.artisanbuilder.xyz';
      const chainId = '0x1'; // Hex format

      const params = [
        {
          chainId,
          chainName: 'Artisan RPC Refund',
          rpcUrls: [customRpcUrl],
          nativeCurrency: {
            name: 'ETH',
            symbol: 'ETH',
            decimals: 18,
          },
          blockExplorerUrls: ['https://etherscan.io/'],
        },
      ];

      // Request MetaMask to add a custom network
      const result = await (window as ExtendedWindow).ethereum.request({
        method: 'wallet_addEthereumChain',
        params,
      });

      console.log('Custom network add result:', result);

      if (result && result.error) {
        throw new Error(result.error.message);
      }

      console.log('Custom network added to MetaMask.');
    } catch (error) {
      console.error('Error adding custom network:', error);
    }
  };

  return (
    <section className="space-y-6 pb-8 pt-6">
  <div className="container flex max-w-[64rem] flex-col items-center gap-4 text-center">
    <button className="rounded-2xl bg-green-500 px-4 py-2 font-medium text-white" type="button" onClick={addCustomNetwork}>
      Add Artisan RPC refund!
    </button>
  </div>
</section>

  );
};

export default ConnectRPC;
