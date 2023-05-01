import type { Wallet } from "../domain/wallets";
import { writable } from "svelte/store";
import {wallets} from "../domain/wallets";

const activeTabIndex = writable<number>(0);
const storedWallets = JSON.parse(localStorage.getItem("wallets"))
const currentSettingMenu = writable<string>("");
const currentNetwork = writable<string>("");

const currentWallet = writable<Wallet>(null);

const walletEthBalance = writable<string>("0");
const walletLRCBalance = writable<string>("0");
const walletUSDBalance = writable<string>("0");
const walletUSDTBalance = writable<string>("0");
const walletDAIBalance = writable<string>("0");
const walletWBTCBalance = writable<string>("0");
const walletIMXBalance = writable<string>("0");

const walletSolBalance = writable<string>("0");

export { currentSettingMenu, currentNetwork, currentWallet, walletEthBalance, walletLRCBalance, walletUSDBalance, walletUSDTBalance, walletDAIBalance, walletWBTCBalance, walletIMXBalance, walletSolBalance, activeTabIndex };