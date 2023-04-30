enum NFTType {
    Ethereum,
    IMX, 
    Solana,
    Loopring,
    Cantos
}


type NFT = {
    imageURL: string;
    animationImage: string;
    name: string;
    description: string;
    collection:string;
    nftType: NFTType;
    index:number;
    creator:string;
    externalUrl:string;
    attributes: [{
        type: string,
        value: any
    }]
};

export type { NFT }
export { NFTType};