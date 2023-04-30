import { NFTType, type NFT } from "../domain/nft";
import { Network, Alchemy } from "alchemy-sdk";

async function fetchEthereumNfts(address: string): Promise<NFT[]> {
    const settings = {
        apiKey: "9kNXbHSC4XEBluKh72dg644UOMK74Y7C", // Replace with your Alchemy API Key.
        network: Network.ETH_MAINNET, // Replace with your network.
    };
    const alchemy = new Alchemy(settings);
    const nftsForOwner = await (await alchemy.nft.getNftsForOwner(address)).ownedNfts;
    const domainNfts: NFT[] = [];
    var i = 0;
    console.log("Eth",nftsForOwner);


    nftsForOwner.forEach(function (alchemyNft,index) {
        let external_url:string;
        let creator:string;
        const media = alchemyNft.media;
        const imageURL = media.length ? media[0].raw : "";
        if (alchemyNft.rawMetadata.external_url) {
            external_url = alchemyNft.rawMetadata.external_url
        } else {
            external_url = ""
        }if (alchemyNft.rawMetadata.created_by) {
            creator = alchemyNft.rawMetadata.created_by; 
        } else {
            creator = ""
        }
        // console.log("nfts:",nftsForOwner[i]);
        const nft: NFT = {
            name: alchemyNft.title,
            description: alchemyNft.description,
            imageURL: imageURL,
            collection: alchemyNft.contract.openSea.collectionName,
            nftType: NFTType.Ethereum,
            index:index,
            creator:creator,
            animationImage: "",
            externalUrl:external_url,
            // externalLink:alchemyNft.rawMetadata.attributes[3].value
            attributes: [{
                type:"",
                value:""
            }],
        };
            
        domainNfts.push(nft);
        // console.log(domainNfts);
        i = i+1;
    })
  
    return domainNfts;
}

export default fetchEthereumNfts;