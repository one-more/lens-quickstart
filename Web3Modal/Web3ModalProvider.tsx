"use client";

import { createWeb3Modal } from "@web3modal/wagmi/react";
import { defaultWagmiConfig } from "@web3modal/wagmi/react/config";
import { WagmiProvider } from "wagmi";
import { arbitrum, mainnet } from "viem/chains";
import { PropsWithChildren } from "react";
import type { Chain } from "viem";

const projectId = process.env.NEXT_PUBLIC_WC_ID || "";

const metadata = {
  name: "Lens Provider QuickStart",
  description: "Lens Provider QuickStart",
  url: "https://docs.lens.xyz/docs/developer-quickstart",
  icons: ["https://avatars.githubusercontent.com/u/37784886"],
};

const chains = [mainnet, arbitrum] as [Chain, ...Chain[]];
const wagmiConfig = defaultWagmiConfig({ chains, projectId, metadata });

createWeb3Modal({ wagmiConfig, projectId, chains } as Parameters<
  typeof createWeb3Modal
>[0]);

export function Web3ModalProvider({ children }: PropsWithChildren) {
  return <WagmiProvider config={wagmiConfig}>{children}</WagmiProvider>;
}
