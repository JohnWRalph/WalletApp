import type { NFT } from "../domain/nft";
import fetchImxNfts from "./fectchImxNfts";
// import fetchCantos from "./fetchCantos";
import fetchEthereumNfts from "./fetchEthereumNfts";
// import fetchLoopringNfts from "./fetchLoopringNfts";

async function fetchNFTsByAddress(ethereumAddress: string): Promise<NFT[]> {
  const imxNfts: NFT[] = await fetchImxNfts(ethereumAddress);
  const ethereumNfts: NFT[] = await fetchEthereumNfts(ethereumAddress);
  
  // const loopringNfts: NFT[] = await fetchLoopringNfts(ethereumAddress)
  const nfts = imxNfts.concat(ethereumNfts);
  nfts.forEach(function (nft, index) {
    nft.index = index;
});
console.log("nfts:",ethereumNfts)
  return nfts;
}

export default fetchNFTsByAddress;
