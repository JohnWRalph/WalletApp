import { NFTType, type NFT } from "../domain/nft";
import { Connection } from "@metaplex/js";
import { programs } from "@metaplex/js";

async function fetchSolanaNfts(solanaAddressInput: string): Promise<NFT[]> {
  const connection = new Connection("mainnet-beta");
  const ownerPublickey = solanaAddressInput;
  const domainNfts: NFT[] = [];

  const tokenMetadata = await programs.metadata.Metadata.findDataByOwner(
    connection,
    ownerPublickey
  );
  // console.log(tokenMetadata)
  let title;
  let external_url:string;
  let i=0;
  await Promise.all(
    tokenMetadata.map(async function (solNft, index) {
      const n = await fetch(solNft.data.uri);
      // console.log("sol",solNft)
      const metadata = await n.json();
      

      // console.log(metadata)
      if (metadata.collection) {
        title = metadata.collection.family
      } else {
        title = metadata.symbol
      }
      if (metadata.external_url) {
        external_url = metadata.external_url
      } else {
        external_url = ""
      }
      let animation_url;
      if (metadata.animation_url) {
        animation_url = metadata.animation_url
      } else {
        animation_url = ""
      }
      const nft: NFT = {
        name: metadata.name,
        description: metadata.description,

        collection: title,
        imageURL: metadata.image,
        nftType: NFTType.Solana,
        index: i,
        creator: "",
        externalUrl: external_url,
        attributes: metadata.attributes,
        animationImage: metadata.animation_url,
      };
      i=i+1;
     
      domainNfts.push(nft);
      
    })

        
      
  );

  
  return domainNfts;
}

export default fetchSolanaNfts;
