import { NFTType, type NFT } from "../domain/nft";
import { ImmutableX, Config } from '@imtbl/core-sdk';


let description: string;
let creator: string;
async function fetchImxNfts(address: string): Promise<NFT[]> {

    const config = Config.PRODUCTION; // Or Config.PRODUCTION

    const client = new ImmutableX(config);

    const assetsRequest = await (await client.assetApi.listAssets({ user: address })).data.result;

    const domainNfts: NFT[] = [];
    console.log("IMXnfts:", assetsRequest)
    assetsRequest.forEach(function (IMXnfts, index) {
        if (IMXnfts.description) {
            description = IMXnfts.description;
        } else {
            description = "";
        }
        let animation;
        animation = ""
        const nft: NFT = {
            name: IMXnfts.name,
            description: description,
            imageURL: IMXnfts.image_url,
            collection: IMXnfts.collection.name,
            nftType: NFTType.IMX,
            index: index,
            creator: "",
            externalUrl: "",
            attributes: [{
                type: "",
                value: ""
            }],
            animationImage: animation,
        }
        domainNfts.push(nft);

    })

    return domainNfts;
}

export default fetchImxNfts;