import { writable } from "svelte/store";
import type{ NFT } from "../domain/nft";

const nfts = writable<NFT[]>();
const ethereumNFTs = writable<NFT[]>();
const solanaNFTs = writable<NFT[]>();
const imxNFTs = writable<NFT[]>();
const loopringNFTs = writable<NFT[]>();
const cantoNFTs = writable<NFT[]>();
const displayedNFTs = writable<NFT[]>();
export  {nfts, displayedNFTs, ethereumNFTs, solanaNFTs, imxNFTs, loopringNFTs, cantoNFTs};