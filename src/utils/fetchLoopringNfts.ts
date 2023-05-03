// console.log("BUFFFFER")

import {
    UserAPI,
    generateKeyPair,
    ConnectorNames,


} from "@loopring-web/loopring-sdk";
import axios from "axios";
import Web3 from "web3";
import parseImageURL from "./parseImageURL";
import { NFTType, type NFT } from "../domain/nft";

// import nacl from "tweetnacl";

async function fetchLoopringNfts(address: string): Promise<NFT[]> {
    //   console.log("Buffer:", Buffer)
    //   console.log("BUFFFFER")
    let domainNfts: NFT[] = [];

    // Generate a new keypair
    // const keyPair = nacl.sign.keyPair();

    // // Convert the public and private keys to base64-encoded strings
    // const publicKey = Buffer.from(keyPair.publicKey).toString('base64');
    // const privateKey = Buffer.from(keyPair.secretKey).toString('base64');

    // // Extract the x and y components of the public key
    // const publicKeyX = Buffer.from(keyPair.publicKey.subarray(0, 32)).toString('base64');
    // const publicKeyY = Buffer.from(keyPair.publicKey.subarray(32)).toString('base64');

    // // Format the public key components and private key as per the Loopring API
    // const formatedPx = `0x${publicKeyX.padStart(64, '0')}`;
    // const formatedPy = `0x${publicKeyY.padStart(64, '0')}`;
    // const sk = `0x${privateKey.padStart(64, '0')}`;

    // // Construct the keypair JSON object
    // const eddsaKey2 = {
    //     keyPair: {
    //         publicKeyX,
    //         publicKeyY,
    //         secretKey: privateKey,
    //     },
    //     formatedPx,
    //     formatedPy,
    //     sk,
    // };

    // console.log('EdDSA Key:', eddsaKey2);

    //   console.log("dfsddffd")
    // (window as any).ethereum.selectedAddress = address;
    const userAPI = new UserAPI({
        chainId: 1,
    });

    const accountInfo = await axios.get(
        `https://api3.loopring.io/api/v3/account?owner=${address}`
    );

    console.log("accountinfo:", accountInfo)
    // console.log("accountinfo:", accountInfo);
    // console.log("owner:", accountInfo.data.owner);
    const NFTowner = accountInfo.data.owner;
    const web3: Web3 = new Web3((window as any).ethereum);
    // console.log("web3",web3);
    // console.log("Window:",(window as any).ethereum.selectedAddress)
    // (window as any).ethereum
    console.log(web3)
    const eddsaKey = await generateKeyPair({
        isMobile: false,
        address: address,
        walletType: ConnectorNames.OtherExtension,
        chainId: 1,
        keySeed:
            "Sign this message to access Loopring Exchange: 0x0BABA1Ad5bE3a5C0a66E7ac838a129Bf948f1eA4 with key nonce: 0",
        web3: web3,
    });

    console.log("eddsaKey:", eddsaKey)
    const apiKey = await userAPI.getUserApiKey(
        {
            accountId: accountInfo.data.accountId,
        },
        eddsaKey.sk);


    const balances = await userAPI.getUserNFTBalances(
        {
            accountId: accountInfo.data.accountId,
            metadata: true,
        },
        apiKey.apiKey
    );


    let loopringCollectionName: string
    console.log("loopring", balances.userNFTBalances)




    balances.userNFTBalances.forEach(async function (nft, index) {
        if (nft.collectionInfo) {
            loopringCollectionName = nft.collectionInfo.name
        } else {
            loopringCollectionName = ""
        }



        const domainNft: NFT = {
            name: nft.metadata.base.name,
            imageURL: parseImageURL(nft.metadata.base.image),
            animationImage: nft.metadata.uri,
            collection: loopringCollectionName,
            description: nft.metadata.base.description,
            nftType: NFTType.Loopring,
            index: index,
            creator: "",
            externalUrl: "",
            attributes: [{
                type: "",
                value: ""
            }],
        };
        console.log("domainNft:", domainNft)
        domainNfts.push(domainNft);
    })





    return domainNfts;

}

export default fetchLoopringNfts;