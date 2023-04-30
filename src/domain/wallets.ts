import { writable } from "svelte/store"

type Wallet = {
    walletName: string,
    address: string,
    privateKey: any,
    mnemonicPhrase: any,
    chain: string,
    isImported: boolean
}

const storedWallets = JSON.parse(localStorage.getItem("wallets"))
const wallets =  writable<Wallet[]>(storedWallets || [])
const importedWallets =  writable<Wallet[]>()
export {wallets, importedWallets}
export type {Wallet}